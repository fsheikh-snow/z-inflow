var ProjectTaskService = Class.create();
ProjectTaskService.prototype = {
    // Lazy deps so listProjects works even if UserService/ViewDataService fail to construct.
    initialize: function () {
        this._bindClassMethods();
    },

    _bindClassMethods: function () {
        var proto = ProjectTaskService.prototype;
        for (var name in proto) {
            if (!proto.hasOwnProperty(name)) {
                continue;
            }
            if (name === 'initialize' || name === '_bindClassMethods' || name === 'type' || name === 'constructor') {
                continue;
            }
            if (typeof proto[name] === 'function' && typeof this[name] !== 'function') {
                this[name] = proto[name];
            }
        }
    },

    _access: function () {
        if (!this.__access) {
            this.__access = new x_gzi_zscaler_ppm.AccessService();
        }
        return this.__access;
    },

    _userService: function () {
        if (!this.__userService) {
            this.__userService = new x_gzi_zscaler_ppm.UserService();
        }
        return this.__userService;
    },

    _viewData: function () {
        if (!this.__viewData) {
            this.__viewData = new x_gzi_zscaler_ppm.ViewDataService();
        }
        return this.__viewData;
    },

    _members: function () {
        if (!this.__members) {
            this.__members = new x_gzi_zscaler_ppm.MemberService();
        }
        return this.__members;
    },

    _serializeProject: function (gr) {
        return {
            sys_id: gr.getUniqueValue(),
            workspace_id: gr.getValue('workspace_id') || '',
            assignment_group: gr.getValue('assignment_group') || '',
            name: gr.getValue('name') || '',
            status: gr.getValue('status') || '',
            notes: gr.getValue('notes') || '',
            owner_id: gr.getValue('owner_id') || '',
            start_date: gr.getValue('start_date') || '',
            due_date: gr.getValue('due_date') || '',
            priority: gr.getValue('priority') || '',
            description: gr.getValue('description') || '',
            project_key: gr.getValue('project_key') || '',
            percent_complete: gr.getValue('percent_complete') || '0',
            sync_with_jira: gr.getValue('sync_with_jira') === 'true',
        };
    },

    _serializeTask: function (gr, linkGr) {
        return {
            sys_id: gr.getUniqueValue(),
            workspace_id: gr.getValue('workspace_id'),
            assignee_id: gr.getValue('assignee_id'),
            watch_list: gr.getValue('watch_list'),
            name: gr.getValue('name'),
            description: gr.getValue('description'),
            notes: gr.getValue('notes'),
            parent_task_id: gr.getValue('parent_task_id'),
            start_date: gr.getValue('start_date'),
            due_date: gr.getValue('due_date'),
            completed: gr.getValue('completed') === 'true',
            status: gr.getValue('status'),
            priority: gr.getValue('priority'),
            task_type: gr.getValue('task_type'),
            approval_state: gr.getValue('approval_state'),
            section_id: linkGr ? linkGr.getValue('section_id') : '',
            order_index: linkGr ? linkGr.getValue('order_index') : '',
        };
    },

    listProjects: function (workspaceId) {
        var results = [];
        try {
            var gr = new GlideRecord('x_gzi_zscaler_ppm_project');
            if (!gr.isValid()) {
                gs.warn('ProjectTaskService.listProjects: table x_gzi_zscaler_ppm_project is invalid');
                return results;
            }
            if (workspaceId) {
                gr.addQuery('workspace_id', workspaceId);
            }
            gr.orderBy('name');
            gr.query();
            while (gr.next()) {
                results.push(this._serializeProject(gr));
            }
        } catch (e) {
            gs.error('ProjectTaskService.listProjects failed: ' + (e && e.message ? e.message : e));
            return [];
        }
        return results;
    },

    getProject: function (projectId) {
        var gr = new GlideRecord('x_gzi_zscaler_ppm_project');
        if (!gr.isValid() || !gr.get(projectId)) {
            return null;
        }
        var project = this._serializeProject(gr);
        if (project.owner_id) {
            var ownerMap = this._userService().getUsersByIds([project.owner_id]);
            project.owner = ownerMap[project.owner_id] || null;
        }
        if (project.assignment_group) {
            var groupMap = this._userService().getGroupsByIds([project.assignment_group]);
            project.team = groupMap[project.assignment_group] || null;
            project.assignment_group_name = project.team ? project.team.name : '';
        }
        project.members = this._members().listMembers('project', projectId);
        return project;
    },

    _resolveWorkspaceId: function (workspaceId) {
        if (workspaceId) {
            return workspaceId;
        }
        var gr = new GlideRecord('x_gzi_zscaler_ppm_workspace');
        gr.orderBy('sys_created_on');
        gr.setLimit(1);
        gr.query();
        if (gr.next()) {
            return gr.getUniqueValue();
        }
        var created = new GlideRecord('x_gzi_zscaler_ppm_workspace');
        created.initialize();
        created.setValue('name', 'Default Workspace');
        return created.insert() || '';
    },

    _getDefaultTeam: function (workspaceId) {
        if (!workspaceId) {
            return '';
        }
        try {
            var wt = new GlideRecord('x_gzi_zscaler_ppm_workspace_team');
            if (!wt.isValid()) {
                gs.warn('ProjectTaskService._getDefaultTeam: table x_gzi_zscaler_ppm_workspace_team is invalid');
                return '';
            }
            wt.addQuery('workspace_id', workspaceId);
            wt.setLimit(1);
            wt.query();
            if (wt.next()) {
                return wt.getValue('group_id');
            }
        } catch (e) {
            gs.warn(
                'ProjectTaskService._getDefaultTeam failed: ' + (e && e.message ? e.message : e)
            );
        }
        return '';
    },

    _getAnyTeam: function () {
        try {
            var gr = new GlideRecord('sys_user_group');
            if (!gr.isValid()) {
                return '';
            }
            gr.setLimit(1);
            gr.orderBy('name');
            gr.query();
            if (gr.next()) {
                return gr.getUniqueValue();
            }
        } catch (e) {
            gs.warn('ProjectTaskService._getAnyTeam failed: ' + (e && e.message ? e.message : e));
        }
        return '';
    },

    _ensureAssignmentGroup: function (workspaceId, requested) {
        if (requested) {
            return requested;
        }
        var existing = this._getDefaultTeam(workspaceId) || this._getAnyTeam();
        if (existing) {
            return existing;
        }
        try {
            var gr = new GlideRecord('sys_user_group');
            if (!gr.isValid()) {
                return '';
            }
            gr.initialize();
            gr.setValue('name', 'Inflow');
            gr.setValue('active', 'true');
            return gr.insert() || '';
        } catch (e) {
            gs.warn(
                'ProjectTaskService._ensureAssignmentGroup failed: ' + (e && e.message ? e.message : e)
            );
            return '';
        }
    },

    /**
     * Auto-generate a short project key from the name (e.g. "Launch Portal" → "LAU").
     * Falls back to PIT-### sequence when slug would be empty/collision.
     */
    _generateProjectKey: function (name) {
        var slug = String(name || '')
            .replace(/[^A-Za-z0-9]+/g, ' ')
            .trim()
            .toUpperCase();
        var words = slug ? slug.split(/\s+/) : [];
        var base = '';
        if (words.length >= 2) {
            base = words
                .slice(0, 3)
                .map(function (w) {
                    return w.charAt(0);
                })
                .join('');
        } else if (words.length === 1) {
            base = words[0].substring(0, 3);
        }
        if (!base || base.length < 2) {
            base = 'PIT';
        }

        var candidate = base;
        var n = 1;
        while (n < 1000) {
            var check = new GlideRecord('x_gzi_zscaler_ppm_project');
            check.addQuery('project_key', candidate);
            check.setLimit(1);
            check.query();
            if (!check.hasNext()) {
                return candidate;
            }
            n++;
            candidate = base + '-' + n;
        }
        return base + '-' + new GlideDateTime().getNumericValue();
    },

    createProject: function (data) {
        var name = String(data.name || '').trim();
        var workspaceId = this._resolveWorkspaceId(String(data.workspace_id || ''));
        if (!name || !workspaceId) {
            return null;
        }

        // Portfolio is optional — projects can be standalone
        var assignmentGroup = this._ensureAssignmentGroup(workspaceId, String(data.assignment_group || ''));
        if (!assignmentGroup) {
            gs.warn('ProjectTaskService.createProject: no assignment_group available');
            return null;
        }

        var gr = new GlideRecord('x_gzi_zscaler_ppm_project');
        gr.initialize();
        gr.setValue('name', name);
        gr.setValue('workspace_id', workspaceId);
        gr.setValue('assignment_group', assignmentGroup);

        var projectKey = String(data.project_key || '').trim();
        if (!projectKey) {
            projectKey = this._generateProjectKey(name);
        }
        gr.setValue('project_key', projectKey);

        var optionalFields = ['owner_id', 'status', 'priority', 'start_date', 'due_date', 'notes', 'description'];
        for (var i = 0; i < optionalFields.length; i++) {
            var field = optionalFields[i];
            if (data[field] !== undefined && data[field] !== null && String(data[field]) !== '') {
                gr.setValue(field, String(data[field]));
            }
        }

        var sysId = gr.insert();
        if (!sysId) {
            return null;
        }

        var portfolioId = String(data.portfolio_id || '');
        if (portfolioId) {
            var portfolioService = new x_gzi_zscaler_ppm.PortfolioService();
            portfolioService.linkProject(portfolioId, sysId);
        }

        this._members().seedMembers('project', sysId, data);
        return this.getProject(sysId);
    },

    updateProject: function (projectId, data) {
        var gr = new GlideRecord('x_gzi_zscaler_ppm_project');
        if (!gr.get(projectId)) {
            return null;
        }

        var fields = [
            'name',
            'project_key',
            'owner_id',
            'assignment_group',
            'status',
            'priority',
            'start_date',
            'due_date',
            'notes',
            'description',
        ];
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            if (data[field] !== undefined) {
                gr.setValue(field, String(data[field] || ''));
            }
        }
        gr.update();

        if (data.members !== undefined) {
            this._members().setMembers('project', projectId, data.members);
        }

        return this.getProject(projectId);
    },

    createTask: function (projectId, data) {
        var name = String(data.name || '').trim();
        if (!name) {
            return null;
        }

        var project = this.getProject(projectId);
        if (!project) {
            return null;
        }

        var gr = new GlideRecord('x_gzi_zscaler_ppm_task');
        gr.initialize();
        gr.setValue('name', name);
        gr.setValue('workspace_id', project.workspace_id);

        var taskFields = [
            'assignee_id',
            'status',
            'priority',
            'start_date',
            'due_date',
            'description',
            'notes',
            'task_type',
        ];
        for (var i = 0; i < taskFields.length; i++) {
            var field = taskFields[i];
            if (data[field] !== undefined && data[field] !== null && String(data[field]) !== '') {
                gr.setValue(field, String(data[field]));
            }
        }

        var taskId = gr.insert();
        if (!taskId) {
            return null;
        }

        var pt = new GlideRecord('x_gzi_zscaler_ppm_project_task');
        pt.initialize();
        pt.setValue('project_id', projectId);
        pt.setValue('task_id', taskId);
        var sectionId = String(data.section_id || '');
        if (sectionId && sectionId !== 'unsectioned') {
            pt.setValue('section_id', sectionId);
        }
        pt.setValue('order_index', String(this._nextTaskOrderIndex(projectId, sectionId)));
        pt.insert();

        return this._getTaskForProject(taskId, projectId);
    },

    _nextTaskOrderIndex: function (projectId, sectionId) {
        var pt = new GlideRecord('x_gzi_zscaler_ppm_project_task');
        pt.addQuery('project_id', projectId);
        if (sectionId && sectionId !== 'unsectioned') {
            pt.addQuery('section_id', sectionId);
        } else {
            pt.addNullQuery('section_id');
        }
        pt.orderByDesc('order_index');
        pt.setLimit(1);
        pt.query();
        if (pt.next()) {
            return (parseInt(pt.getValue('order_index'), 10) || 0) + 1;
        }
        return 0;
    },

    _getTaskForProject: function (taskId, projectId) {
        var gr = new GlideRecord('x_gzi_zscaler_ppm_task');
        if (!gr.get(taskId)) {
            return null;
        }
        var linkGr = null;
        var pt = new GlideRecord('x_gzi_zscaler_ppm_project_task');
        pt.addQuery('project_id', projectId);
        pt.addQuery('task_id', taskId);
        pt.query();
        if (pt.next()) {
            linkGr = pt;
        }
        var task = this._serializeTask(gr, linkGr);
        if (task.assignee_id) {
            var assigneeMap = this._userService().getUsersByIds([task.assignee_id]);
            task.assignee = assigneeMap[task.assignee_id] || null;
        }
        task.projects = this.getTaskProjects(taskId);
        task.subtasks = this._getSubtasks(taskId);
        return task;
    },

    getProjectSections: function (projectId) {
        var sections = [];
        var gr = new GlideRecord('x_gzi_zscaler_ppm_section');
        gr.addQuery('project_id', projectId);
        gr.orderBy('order_index');
        gr.query();
        while (gr.next()) {
            sections.push({
                sys_id: gr.getUniqueValue(),
                name: gr.getValue('name'),
                order_index: parseInt(gr.getValue('order_index'), 10) || 0,
            });
        }
        return sections;
    },

    createSection: function (projectId, data) {
        var name = String(data.name || '').trim();
        if (!name) {
            return null;
        }
        var project = this.getProject(projectId);
        if (!project) {
            return null;
        }

        var maxOrder = -1;
        var existing = new GlideRecord('x_gzi_zscaler_ppm_section');
        existing.addQuery('project_id', projectId);
        existing.orderByDesc('order_index');
        existing.setLimit(1);
        existing.query();
        if (existing.next()) {
            maxOrder = parseInt(existing.getValue('order_index'), 10) || 0;
        }

        var gr = new GlideRecord('x_gzi_zscaler_ppm_section');
        gr.initialize();
        gr.setValue('project_id', projectId);
        gr.setValue('name', name);
        gr.setValue('order_index', String(maxOrder + 1));
        var sysId = gr.insert();
        if (!sysId) {
            return null;
        }
        return {
            sys_id: sysId,
            name: name,
            order_index: maxOrder + 1,
        };
    },

    updateSection: function (projectId, sectionId, data) {
        var gr = new GlideRecord('x_gzi_zscaler_ppm_section');
        if (!gr.get(sectionId) || gr.getValue('project_id') !== projectId) {
            return null;
        }
        if (data.name !== undefined) {
            gr.setValue('name', String(data.name || '').trim());
        }
        if (data.order_index !== undefined) {
            gr.setValue('order_index', String(data.order_index));
        }
        gr.update();
        return {
            sys_id: gr.getUniqueValue(),
            name: gr.getValue('name'),
            order_index: parseInt(gr.getValue('order_index'), 10) || 0,
        };
    },

    reorderSections: function (projectId, sectionIds) {
        for (var i = 0; i < sectionIds.length; i++) {
            var gr = new GlideRecord('x_gzi_zscaler_ppm_section');
            gr.addQuery('project_id', projectId);
            gr.addQuery('sys_id', String(sectionIds[i]));
            gr.query();
            if (gr.next()) {
                gr.setValue('order_index', String(i));
                gr.update();
            }
        }
        return this.getProjectSections(projectId);
    },

    getProjectBoard: function (projectId) {
        var columns = [];
        var columnById = {};
        var sections = this.getProjectSections(projectId);
        for (var i = 0; i < sections.length; i++) {
            var column = {
                sys_id: sections[i].sys_id,
                id: sections[i].sys_id,
                name: sections[i].name,
                label: sections[i].name,
                order_index: sections[i].order_index,
                tasks: [],
            };
            columns.push(column);
            columnById[sections[i].sys_id] = column;
        }
        var unsectioned = {
            sys_id: 'unsectioned',
            id: 'unsectioned',
            name: 'Tasks',
            label: 'Tasks',
            tasks: [],
        };
        columns.push(unsectioned);
        columnById.unsectioned = unsectioned;

        var pt = new GlideRecord('x_gzi_zscaler_ppm_project_task');
        pt.addQuery('project_id', projectId);
        pt.orderBy('order_index');
        pt.query();
        while (pt.next()) {
            var task = pt.task_id.getRefRecord();
            if (!task.isValidRecord()) {
                continue;
            }
            var sectionId = pt.getValue('section_id') || 'unsectioned';
            var target = columnById[sectionId] || unsectioned;
            target.tasks.push(this._serializeTask(task, pt));
        }

        var assigneeIds = [];
        for (var c = 0; c < columns.length; c++) {
            var colTasks = columns[c].tasks || [];
            for (var t = 0; t < colTasks.length; t++) {
                if (colTasks[t].assignee_id) {
                    assigneeIds.push(colTasks[t].assignee_id);
                }
            }
        }
        if (assigneeIds.length) {
            var assigneeMap = this._userService().getUsersByIds(assigneeIds);
            for (var c2 = 0; c2 < columns.length; c2++) {
                var colTasks2 = columns[c2].tasks || [];
                for (var t2 = 0; t2 < colTasks2.length; t2++) {
                    var aid = colTasks2[t2].assignee_id;
                    if (aid) {
                        colTasks2[t2].assignee = assigneeMap[aid] || null;
                    }
                }
            }
        }

        return {
            columns: columns,
            members: this._members().listMembers('project', projectId),
        };
    },

    getProjectTasks: function (projectId) {
        var tasks = [];
        var pt = new GlideRecord('x_gzi_zscaler_ppm_project_task');
        pt.addQuery('project_id', projectId);
        pt.orderBy('order_index');
        pt.query();
        while (pt.next()) {
            var task = pt.task_id.getRefRecord();
            if (task.isValidRecord()) {
                tasks.push(this._serializeTask(task, pt));
            }
        }
        return tasks;
    },

    _getSubtasks: function (taskId) {
        var subtasks = [];
        var st = new GlideRecord('x_gzi_zscaler_ppm_task');
        st.addQuery('parent_task_id', taskId);
        st.orderBy('name');
        st.query();
        while (st.next()) {
            subtasks.push(this._serializeTask(st, null));
        }
        return subtasks;
    },

    getTask: function (taskId, projectId) {
        if (projectId) {
            return this._getTaskForProject(taskId, projectId);
        }

        var gr = new GlideRecord('x_gzi_zscaler_ppm_task');
        if (!gr.get(taskId)) {
            return null;
        }
        var task = this._serializeTask(gr, null);
        if (task.assignee_id) {
            var assigneeMap = this._userService().getUsersByIds([task.assignee_id]);
            task.assignee = assigneeMap[task.assignee_id] || null;
        }
        task.projects = this.getTaskProjects(taskId);
        task.subtasks = this._getSubtasks(taskId);

        var pt = new GlideRecord('x_gzi_zscaler_ppm_project_task');
        pt.addQuery('task_id', taskId);
        pt.setLimit(1);
        pt.query();
        if (pt.next()) {
            task.section_id = pt.getValue('section_id') || '';
            task.order_index = pt.getValue('order_index') || '';
        }

        return task;
    },

    getTaskProjects: function (taskId) {
        var projects = [];
        var pt = new GlideRecord('x_gzi_zscaler_ppm_project_task');
        pt.addQuery('task_id', taskId);
        pt.query();
        while (pt.next()) {
            var project = pt.project_id.getRefRecord();
            if (project.isValidRecord()) {
                projects.push(this._serializeProject(project));
            }
        }
        return projects;
    },

    updateTask: function (taskId, data) {
        var gr = new GlideRecord('x_gzi_zscaler_ppm_task');
        if (!gr.get(taskId)) {
            return null;
        }
        var taskFields = ['name', 'assignee_id', 'status', 'priority', 'due_date', 'start_date', 'description', 'notes', 'task_type', 'approval_state'];
        for (var i = 0; i < taskFields.length; i++) {
            var field = taskFields[i];
            if (data[field] !== undefined) {
                gr.setValue(field, String(data[field]));
            }
        }
        if (data.completed !== undefined) {
            gr.setValue('completed', data.completed ? 'true' : 'false');
            if (data.completed) {
                gr.setValue('status', 'done');
            }
        }
        gr.update();

        var projectId = data.project_id ? String(data.project_id) : '';
        if (data.section_id !== undefined || data.order_index !== undefined || projectId) {
            var pt = new GlideRecord('x_gzi_zscaler_ppm_project_task');
            pt.addQuery('task_id', taskId);
            if (projectId) {
                pt.addQuery('project_id', projectId);
            }
            pt.query();
            if (pt.next()) {
                if (data.section_id !== undefined) {
                    var sectionId = data.section_id === 'unsectioned' ? '' : String(data.section_id);
                    pt.setValue('section_id', sectionId);
                }
                if (data.order_index !== undefined) {
                    pt.setValue('order_index', String(data.order_index));
                }
                pt.update();
                if (!projectId) {
                    projectId = pt.getValue('project_id') || '';
                }
            }
        }

        if (projectId) {
            return this._getTaskForProject(taskId, projectId);
        }
        return this.getTask(taskId);
    },

    deleteSection: function (projectId, sectionId) {
        var gr = new GlideRecord('x_gzi_zscaler_ppm_section');
        if (!gr.get(sectionId) || gr.getValue('project_id') !== projectId) {
            return false;
        }

        var pt = new GlideRecord('x_gzi_zscaler_ppm_project_task');
        pt.addQuery('project_id', projectId);
        pt.addQuery('section_id', sectionId);
        pt.query();
        while (pt.next()) {
            pt.setValue('section_id', '');
            pt.update();
        }

        gr.deleteRecord();
        return true;
    },

    reorderBoard: function (projectId, columnId, taskIds) {
        var sectionId = columnId === 'unsectioned' ? '' : String(columnId);
        for (var i = 0; i < taskIds.length; i++) {
            var pt = new GlideRecord('x_gzi_zscaler_ppm_project_task');
            pt.addQuery('project_id', projectId);
            pt.addQuery('task_id', String(taskIds[i]));
            pt.query();
            if (pt.next()) {
                pt.setValue('section_id', sectionId);
                pt.setValue('order_index', String(i));
                pt.update();
            }
        }
        return this.getProjectBoard(projectId);
    },

    reorderTaskList: function (projectId, payload) {
        var sectionId = payload.section_id === 'unsectioned' ? '' : String(payload.section_id || '');
        var taskIds = payload.task_ids || [];
        for (var i = 0; i < taskIds.length; i++) {
            var pt = new GlideRecord('x_gzi_zscaler_ppm_project_task');
            pt.addQuery('project_id', projectId);
            pt.addQuery('task_id', String(taskIds[i]));
            pt.query();
            if (pt.next()) {
                pt.setValue('section_id', sectionId);
                pt.setValue('order_index', String(i));
                pt.update();
            }
        }
        return this.getProjectBoard(projectId);
    },

    constructor: ProjectTaskService,
    type: 'ProjectTaskService',
};
