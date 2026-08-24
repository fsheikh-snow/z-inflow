var ProjectTaskService = Class.create()
ProjectTaskService.prototype = {
    initialize: function () {},

    /**
     * List projects in a workspace
     * @param {string} workspaceId - sys_id of the workspace
     * @returns {Object[]} Array of project objects
     */
    listProjects: function (workspaceId) {
        var projects = []
        if (!workspaceId) {
            return projects
        }

        var gr = new GlideRecord('x_gzi_ppm_project')
        gr.addQuery('workspace_id', workspaceId)
        gr.orderBy('name')
        gr.query()

        while (gr.next()) {
            projects.push(this._projectToObj(gr))
        }

        return projects
    },

    /**
     * Create a new project with defaults
     * @param {Object} data - Project data (name, workspace_id, etc.)
     * @returns {Object|null} Created project or null
     */
    createProject: function (data) {
        if (!data || !data.name || !data.workspace_id) {
            return null
        }

        var gr = new GlideRecord('x_gzi_ppm_project')
        gr.initialize()
        gr.setValue('name', data.name)
        gr.setValue('workspace_id', data.workspace_id)

        if (data.description) gr.setValue('description', data.description)
        if (data.owner_id) gr.setValue('owner_id', data.owner_id)
        if (data.status) gr.setValue('status', data.status)
        if (data.priority) gr.setValue('priority', data.priority)
        if (data.start_date) gr.setValue('start_date', data.start_date)
        if (data.due_date) gr.setValue('due_date', data.due_date)
        if (data.project_key) gr.setValue('project_key', data.project_key)

        var sysId = gr.insert()
        if (!sysId) {
            return null
        }

        gr.get(sysId)
        return this._projectToObj(gr)
    },

    /**
     * Get project details by ID
     * @param {string} projectId - sys_id of the project
     * @returns {Object|null} Project object or null
     */
    getProject: function (projectId) {
        if (!projectId) {
            return null
        }

        var gr = new GlideRecord('x_gzi_ppm_project')
        if (!gr.get(projectId)) {
            return null
        }

        return this._projectToObj(gr)
    },

    /**
     * Update project fields
     * @param {string} projectId - sys_id of the project
     * @param {Object} data - Fields to update
     * @returns {Object|null} Updated project or null
     */
    updateProject: function (projectId, data) {
        if (!projectId || !data) {
            return null
        }

        var gr = new GlideRecord('x_gzi_ppm_project')
        if (!gr.get(projectId)) {
            return null
        }

        var fields = ['name', 'description', 'owner_id', 'status', 'priority', 'start_date', 'due_date', 'percent_complete', 'notes']
        for (var i = 0; i < fields.length; i++) {
            if (data[fields[i]] !== undefined) {
                gr.setValue(fields[i], data[fields[i]])
            }
        }

        gr.update()
        return this._projectToObj(gr)
    },

    /**
     * Get tasks linked to a project via the project_task junction table
     * @param {string} projectId - sys_id of the project
     * @returns {Object[]} Array of task objects with section info
     */
    getProjectTasks: function (projectId) {
        var tasks = []
        if (!projectId) {
            return tasks
        }

        var gr = new GlideRecord('x_gzi_ppm_project_task')
        gr.addQuery('project_id', projectId)
        gr.orderBy('order_index')
        gr.query()

        var taskIds = []
        var linkMap = {}
        while (gr.next()) {
            var taskId = gr.getValue('task_id')
            taskIds.push(taskId)
            linkMap[taskId] = {
                link_id: gr.getUniqueValue(),
                section_id: gr.getValue('section_id') || '',
                order_index: parseInt(gr.getValue('order_index') || '0', 10),
            }
        }

        if (taskIds.length === 0) {
            return tasks
        }

        // Fetch full task records
        var taskGr = new GlideRecord('x_gzi_ppm_task')
        taskGr.addQuery('sys_id', 'IN', taskIds.join(','))
        taskGr.query()

        while (taskGr.next()) {
            var tid = taskGr.getUniqueValue()
            var task = this._taskToObj(taskGr)
            task.link_id = linkMap[tid].link_id
            task.section_id = linkMap[tid].section_id
            task.order_index = linkMap[tid].order_index
            tasks.push(task)
        }

        // Sort by order_index
        tasks.sort(function (a, b) {
            return a.order_index - b.order_index
        })

        return tasks
    },

    /**
     * Create a task and link it to a project
     * @param {string} projectId - sys_id of the project
     * @param {Object} data - Task data
     * @returns {Object|null} Created task with link info or null
     */
    createTask: function (projectId, data) {
        if (!projectId || !data || !data.name) {
            return null
        }

        // Get workspace_id from project
        var projGr = new GlideRecord('x_gzi_ppm_project')
        if (!projGr.get(projectId)) {
            return null
        }
        var workspaceId = projGr.getValue('workspace_id')

        // Create the task
        var taskGr = new GlideRecord('x_gzi_ppm_task')
        taskGr.initialize()
        taskGr.setValue('name', data.name)
        taskGr.setValue('workspace_id', workspaceId)

        if (data.description) taskGr.setValue('description', data.description)
        if (data.assignee_id) taskGr.setValue('assignee_id', data.assignee_id)
        if (data.status) taskGr.setValue('status', data.status)
        if (data.priority) taskGr.setValue('priority', data.priority)
        if (data.due_date) taskGr.setValue('due_date', data.due_date)
        if (data.start_date) taskGr.setValue('start_date', data.start_date)
        if (data.task_type) taskGr.setValue('task_type', data.task_type)

        var taskId = taskGr.insert()
        if (!taskId) {
            return null
        }

        // Create the project_task link
        var linkGr = new GlideRecord('x_gzi_ppm_project_task')
        linkGr.initialize()
        linkGr.setValue('project_id', projectId)
        linkGr.setValue('task_id', taskId)
        if (data.section_id) linkGr.setValue('section_id', data.section_id)
        linkGr.setValue('order_index', data.order_index || 0)
        var linkId = linkGr.insert()

        taskGr.get(taskId)
        var result = this._taskToObj(taskGr)
        result.link_id = linkId
        result.section_id = data.section_id || ''
        result.order_index = data.order_index || 0
        return result
    },

    /**
     * Update a task
     * @param {string} taskId - sys_id of the task
     * @param {Object} data - Fields to update
     * @returns {Object|null} Updated task or null
     */
    updateTask: function (taskId, data) {
        if (!taskId || !data) {
            return null
        }

        var gr = new GlideRecord('x_gzi_ppm_task')
        if (!gr.get(taskId)) {
            return null
        }

        var fields = ['name', 'description', 'assignee_id', 'status', 'priority', 'due_date', 'start_date', 'completed', 'task_type', 'notes']
        for (var i = 0; i < fields.length; i++) {
            if (data[fields[i]] !== undefined) {
                gr.setValue(fields[i], data[fields[i]])
            }
        }

        gr.update()
        return this._taskToObj(gr)
    },

    /**
     * Get sections for a project
     * @param {string} projectId - sys_id of the project
     * @returns {Object[]} Array of section objects
     */
    getProjectSections: function (projectId) {
        var sections = []
        if (!projectId) {
            return sections
        }

        var gr = new GlideRecord('x_gzi_ppm_section')
        gr.addQuery('project_id', projectId)
        gr.orderBy('order_index')
        gr.query()

        while (gr.next()) {
            sections.push({
                sys_id: gr.getUniqueValue(),
                name: gr.getValue('name') || '',
                project_id: gr.getValue('project_id'),
                order_index: parseInt(gr.getValue('order_index') || '0', 10),
            })
        }

        return sections
    },

    /**
     * Get board view (sections with their tasks)
     * @param {string} projectId - sys_id of the project
     * @returns {Object} Board object with sections and tasks
     */
    getProjectBoard: function (projectId) {
        if (!projectId) {
            return { sections: [] }
        }

        var sections = this.getProjectSections(projectId)
        var allTasks = this.getProjectTasks(projectId)

        // Group tasks by section
        var tasksBySection = {}
        for (var i = 0; i < allTasks.length; i++) {
            var sectionId = allTasks[i].section_id || 'unsectioned'
            if (!tasksBySection[sectionId]) {
                tasksBySection[sectionId] = []
            }
            tasksBySection[sectionId].push(allTasks[i])
        }

        // Attach tasks to sections
        for (var j = 0; j < sections.length; j++) {
            sections[j].tasks = tasksBySection[sections[j].sys_id] || []
        }

        // Add unsectioned tasks
        var unsectioned = tasksBySection['unsectioned'] || []

        return {
            sections: sections,
            unsectioned: unsectioned,
        }
    },

    /**
     * Reorder sections and tasks on the board
     * @param {string} projectId - sys_id of the project
     * @param {Object} data - Reorder data { sections: [{sys_id, order_index}], tasks: [{link_id, section_id, order_index}] }
     * @returns {boolean} true if successful
     */
    reorderBoard: function (projectId, data) {
        if (!projectId || !data) {
            return false
        }

        // Reorder sections
        if (data.sections && data.sections.length > 0) {
            for (var i = 0; i < data.sections.length; i++) {
                var secGr = new GlideRecord('x_gzi_ppm_section')
                if (secGr.get(data.sections[i].sys_id)) {
                    secGr.setValue('order_index', data.sections[i].order_index)
                    secGr.update()
                }
            }
        }

        // Reorder tasks (update project_task links)
        if (data.tasks && data.tasks.length > 0) {
            for (var j = 0; j < data.tasks.length; j++) {
                var linkGr = new GlideRecord('x_gzi_ppm_project_task')
                if (linkGr.get(data.tasks[j].link_id)) {
                    if (data.tasks[j].section_id !== undefined) {
                        linkGr.setValue('section_id', data.tasks[j].section_id)
                    }
                    linkGr.setValue('order_index', data.tasks[j].order_index)
                    linkGr.update()
                }
            }
        }

        return true
    },

    /**
     * Get which projects a task belongs to (multi-home)
     * @param {string} taskId - sys_id of the task
     * @returns {Object[]} Array of project objects
     */
    getTaskProjects: function (taskId) {
        var projects = []
        if (!taskId) {
            return projects
        }

        var gr = new GlideRecord('x_gzi_ppm_project_task')
        gr.addQuery('task_id', taskId)
        gr.query()

        var projectIds = []
        while (gr.next()) {
            projectIds.push(gr.getValue('project_id'))
        }

        if (projectIds.length === 0) {
            return projects
        }

        var projGr = new GlideRecord('x_gzi_ppm_project')
        projGr.addQuery('sys_id', 'IN', projectIds.join(','))
        projGr.query()

        while (projGr.next()) {
            projects.push(this._projectToObj(projGr))
        }

        return projects
    },

    /**
     * Convert a GlideRecord project to a plain object
     * @private
     */
    _projectToObj: function (gr) {
        return {
            sys_id: gr.getUniqueValue(),
            name: gr.getValue('name') || '',
            description: gr.getValue('description') || '',
            workspace_id: gr.getValue('workspace_id') || '',
            owner_id: gr.getValue('owner_id') || '',
            status: gr.getValue('status') || '',
            priority: gr.getValue('priority') || '',
            start_date: gr.getValue('start_date') || '',
            due_date: gr.getValue('due_date') || '',
            percent_complete: gr.getValue('percent_complete') || '0',
            project_key: gr.getValue('project_key') || '',
            sys_created_on: gr.getValue('sys_created_on') || '',
            sys_updated_on: gr.getValue('sys_updated_on') || '',
        }
    },

    /**
     * Convert a GlideRecord task to a plain object
     * @private
     */
    _taskToObj: function (gr) {
        return {
            sys_id: gr.getUniqueValue(),
            name: gr.getValue('name') || '',
            description: gr.getValue('description') || '',
            assignee_id: gr.getValue('assignee_id') || '',
            status: gr.getValue('status') || '',
            priority: gr.getValue('priority') || '',
            due_date: gr.getValue('due_date') || '',
            start_date: gr.getValue('start_date') || '',
            completed: gr.getValue('completed') || '',
            task_type: gr.getValue('task_type') || '',
            workspace_id: gr.getValue('workspace_id') || '',
            sys_created_on: gr.getValue('sys_created_on') || '',
            sys_updated_on: gr.getValue('sys_updated_on') || '',
        }
    },

    type: 'ProjectTaskService',
}
