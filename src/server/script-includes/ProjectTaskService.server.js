var ProjectTaskService = Class.create();
ProjectTaskService.prototype = {
    // Lazy deps so listProjects works even if UserService/ViewDataService fail to construct.
    initialize: function () {},

    _access: function () {
        if (!this.__access) {
            this.__access = new x_gzi_zflow.AccessService();
        }
        return this.__access;
    },

    _userService: function () {
        if (!this.__userService) {
            this.__userService = new x_gzi_zflow.UserService();
        }
        return this.__userService;
    },

    _viewData: function () {
        if (!this.__viewData) {
            this.__viewData = new x_gzi_zflow.ViewDataService();
        }
        return this.__viewData;
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
            var gr = new GlideRecord('x_gzi_zflow_project');
            if (!gr.isValid()) {
                gs.warn('ProjectTaskService.listProjects: table x_gzi_zflow_project is invalid');
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
        var gr = new GlideRecord('x_gzi_zflow_project');
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
        return project;
    },

    _resolveWorkspaceId: function (workspaceId) {
        if (workspaceId) {
            return workspaceId;
        }
        var gr = new GlideRecord('x_gzi_zflow_workspace');
        gr.orderBy('sys_created_on');
        gr.setLimit(1);
        gr.query();
        if (gr.next()) {
            return gr.getUniqueValue();
        }
        var created = new GlideRecord('x_gzi_zflow_workspace');
        created.initialize();
        created.setValue('name', 'Default Workspace');
        return created.insert() || '';
    },

    _getDefaultTeam: function (workspaceId) {
        if (!workspaceId) {
            return '';
        }
        var wt = new GlideRecord('x_gzi_zflow_workspace_team');
        wt.addQuery('workspace_id', workspaceId);
        wt.setLimit(1);
        wt.query();
        if (wt.next()) {
            return wt.getValue('group_id');
        }
        return '';
    },

    _getAnyTeam: function () {
        var gr = new GlideRecord('sys_user_group');
        gr.setLimit(1);
        gr.orderBy('name');
        gr.query();
        if (gr.next()) {
            return gr.getUniqueValue();
        }
        return '';
    },

    createProject: function (data) {
        var name = String(data.name || '').trim();
        var workspaceId = this._resolveWorkspaceId(String(data.workspace_id || ''));
        if (!name || !workspaceId) {
            return null;
        }

        // Portfolio is optional — projects can be standalone
        var assignmentGroup =
            String(data.assignment_group || '') ||
            this._getDefaultTeam(workspaceId) ||
            this._getAnyTeam();
        if (!assignmentGroup) {
            return null;
        }

        var gr = new GlideRecord('x_gzi_zflow_project');
        gr.initialize();
        gr.setValue('name', name);
        gr.setValue('workspace_id', workspaceId);
        gr.setValue('assignment_group', assignmentGroup);

        var optionalFields = ['owner_id', 'status', 'priority', 'start_date', 'due_date', 'notes', 'description', 'project_key'];
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
            var portfolioService = new x_gzi_zflow.PortfolioService();
            portfolioService.linkProject(portfolioId, sysId);
        }

        return this.getProject(sysId);
    },

    updateProject: function (projectId, data) {
        var gr = new GlideRecord('x_gzi_zflow_project');
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

        var gr = new GlideRecord('x_gzi_zflow_task');
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

        var pt = new GlideRecord('x_gzi_zflow_project_task');
        pt.initialize();
        pt.setValue('project_id', projectId);
        pt.setValue('task_id', taskId);
        pt.setValue('order_index', '0');
        pt.insert();

        return this.getTask(taskId);
    },

    getProjectSections: function (projectId) {
        var sections = [];
        var gr = new GlideRecord('x_gzi_zflow_section');
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
            name: 'Unsectioned',
            label: 'Unsectioned',
            tasks: [],
        };
        columns.push(unsectioned);
        columnById.unsectioned = unsectioned;

        var pt = new GlideRecord('x_gzi_zflow_project_task');
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
        return { columns: columns, members: [] };
    },

    getProjectTasks: function (projectId) {
        var tasks = [];
        var pt = new GlideRecord('x_gzi_zflow_project_task');
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

    getTask: function (taskId) {
        var gr = new GlideRecord('x_gzi_zflow_task');
        if (!gr.get(taskId)) {
            return null;
        }
        var task = this._serializeTask(gr, null);
        if (task.assignee_id) {
            var assigneeMap = this._userService().getUsersByIds([task.assignee_id]);
            task.assignee = assigneeMap[task.assignee_id] || null;
        }
        return task;
    },

    getTaskProjects: function (taskId) {
        var projects = [];
        var pt = new GlideRecord('x_gzi_zflow_project_task');
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
        var gr = new GlideRecord('x_gzi_zflow_task');
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
        }
        gr.update();

        var linkGr = null;
        if (data.section_id !== undefined || data.order_index !== undefined || data.project_id) {
            var pt = new GlideRecord('x_gzi_zflow_project_task');
            pt.addQuery('task_id', taskId);
            if (data.project_id) {
                pt.addQuery('project_id', String(data.project_id));
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
                linkGr = pt;
            }
        }
        return this.getTask(taskId);
    },

    reorderBoard: function (projectId, columnId, taskIds) {
        var sectionId = columnId === 'unsectioned' ? '' : String(columnId);
        for (var i = 0; i < taskIds.length; i++) {
            var pt = new GlideRecord('x_gzi_zflow_project_task');
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

    type: 'ProjectTaskService',
};
