var PortfolioService = Class.create()
PortfolioService.prototype = {
    initialize: function () {},

    /**
     * List portfolios in a workspace
     * @param {string} workspaceId - sys_id of the workspace
     * @returns {Object[]} Array of portfolio objects
     */
    listPortfolios: function (workspaceId) {
        var portfolios = []
        if (!workspaceId) {
            return portfolios
        }

        var gr = new GlideRecord('x_gzi_ppm_portfolio')
        gr.addQuery('workspace_id', workspaceId)
        gr.orderBy('name')
        gr.query()

        while (gr.next()) {
            portfolios.push(this._portfolioToObj(gr))
        }

        return portfolios
    },

    /**
     * Create a new portfolio
     * @param {Object} data - Portfolio data
     * @returns {Object|null} Created portfolio or null
     */
    createPortfolio: function (data) {
        if (!data || !data.name || !data.workspace_id) {
            return null
        }

        var gr = new GlideRecord('x_gzi_ppm_portfolio')
        gr.initialize()
        gr.setValue('name', data.name)
        gr.setValue('workspace_id', data.workspace_id)

        if (data.description) gr.setValue('description', data.description)
        if (data.owner_id) gr.setValue('owner_id', data.owner_id)
        if (data.color) gr.setValue('color', data.color)
        if (data.due_date) gr.setValue('due_date', data.due_date)

        var sysId = gr.insert()
        if (!sysId) {
            return null
        }

        gr.get(sysId)
        return this._portfolioToObj(gr)
    },

    /**
     * Get portfolio details by ID
     * @param {string} portfolioId - sys_id of the portfolio
     * @returns {Object|null} Portfolio object or null
     */
    getPortfolio: function (portfolioId) {
        if (!portfolioId) {
            return null
        }

        var gr = new GlideRecord('x_gzi_ppm_portfolio')
        if (!gr.get(portfolioId)) {
            return null
        }

        var portfolio = this._portfolioToObj(gr)

        // Enrich with project count
        var countGr = new GlideRecord('x_gzi_ppm_portfolio_project')
        countGr.addQuery('portfolio_id', portfolioId)
        countGr.addAggregate('COUNT')
        countGr.query()
        portfolio.project_count = 0
        if (countGr.next()) {
            portfolio.project_count = parseInt(countGr.getAggregate('COUNT') || '0', 10)
        }

        return portfolio
    },

    /**
     * Update portfolio fields
     * @param {string} portfolioId - sys_id of the portfolio
     * @param {Object} data - Fields to update
     * @returns {Object|null} Updated portfolio or null
     */
    updatePortfolio: function (portfolioId, data) {
        if (!portfolioId || !data) {
            return null
        }

        var gr = new GlideRecord('x_gzi_ppm_portfolio')
        if (!gr.get(portfolioId)) {
            return null
        }

        var fields = ['name', 'description', 'owner_id', 'color', 'due_date']
        for (var i = 0; i < fields.length; i++) {
            if (data[fields[i]] !== undefined) {
                gr.setValue(fields[i], data[fields[i]])
            }
        }

        gr.update()
        return this._portfolioToObj(gr)
    },

    /**
     * Get projects timeline data for a portfolio
     * @param {string} portfolioId - sys_id of the portfolio
     * @returns {Object[]} Array of project timeline entries
     */
    getPortfolioTimeline: function (portfolioId) {
        var timeline = []
        if (!portfolioId) {
            return timeline
        }

        // Get linked projects
        var linkGr = new GlideRecord('x_gzi_ppm_portfolio_project')
        linkGr.addQuery('portfolio_id', portfolioId)
        linkGr.orderBy('order_index')
        linkGr.query()

        var projectIds = []
        while (linkGr.next()) {
            projectIds.push(linkGr.getValue('project_id'))
        }

        if (projectIds.length === 0) {
            return timeline
        }

        var projGr = new GlideRecord('x_gzi_ppm_project')
        projGr.addQuery('sys_id', 'IN', projectIds.join(','))
        projGr.query()

        while (projGr.next()) {
            timeline.push({
                sys_id: projGr.getUniqueValue(),
                name: projGr.getValue('name') || '',
                status: projGr.getValue('status') || '',
                priority: projGr.getValue('priority') || '',
                start_date: projGr.getValue('start_date') || '',
                due_date: projGr.getValue('due_date') || '',
                percent_complete: projGr.getValue('percent_complete') || '0',
                owner_id: projGr.getValue('owner_id') || '',
            })
        }

        return timeline
    },

    /**
     * Get member workload data for a portfolio
     * @param {string} portfolioId - sys_id of the portfolio
     * @returns {Object[]} Array of workload entries per member
     */
    getPortfolioWorkload: function (portfolioId) {
        var workload = []
        if (!portfolioId) {
            return workload
        }

        // Get portfolio members
        var memberGr = new GlideRecord('x_gzi_ppm_portfolio_member')
        memberGr.addQuery('portfolio_id', portfolioId)
        memberGr.query()

        var userIds = []
        while (memberGr.next()) {
            userIds.push(memberGr.getValue('user_id'))
        }

        if (userIds.length === 0) {
            return workload
        }

        // Get user details
        var userSvc = new UserService()
        var userMap = userSvc.getUsersById(userIds)

        // Get linked project IDs
        var linkGr = new GlideRecord('x_gzi_ppm_portfolio_project')
        linkGr.addQuery('portfolio_id', portfolioId)
        linkGr.query()

        var projectIds = []
        while (linkGr.next()) {
            projectIds.push(linkGr.getValue('project_id'))
        }

        // For each member, count tasks assigned across portfolio projects
        for (var i = 0; i < userIds.length; i++) {
            var userId = userIds[i]
            var taskCount = 0

            if (projectIds.length > 0) {
                // Find tasks assigned to this user in these projects
                var ptGr = new GlideRecord('x_gzi_ppm_project_task')
                ptGr.addQuery('project_id', 'IN', projectIds.join(','))
                ptGr.query()

                var taskIds = []
                while (ptGr.next()) {
                    taskIds.push(ptGr.getValue('task_id'))
                }

                if (taskIds.length > 0) {
                    var taskGr = new GlideRecord('x_gzi_ppm_task')
                    taskGr.addQuery('sys_id', 'IN', taskIds.join(','))
                    taskGr.addQuery('assignee_id', userId)
                    taskGr.addAggregate('COUNT')
                    taskGr.query()
                    if (taskGr.next()) {
                        taskCount = parseInt(taskGr.getAggregate('COUNT') || '0', 10)
                    }
                }
            }

            workload.push({
                user_id: userId,
                user: userMap[userId] || null,
                task_count: taskCount,
            })
        }

        return workload
    },

    /**
     * Link a project to a portfolio
     * @param {string} portfolioId - sys_id of the portfolio
     * @param {string} projectId - sys_id of the project
     * @returns {Object|null} Created link or null
     */
    linkProject: function (portfolioId, projectId) {
        if (!portfolioId || !projectId) {
            return null
        }

        // Check if already linked
        var existing = new GlideRecord('x_gzi_ppm_portfolio_project')
        existing.addQuery('portfolio_id', portfolioId)
        existing.addQuery('project_id', projectId)
        existing.setLimit(1)
        existing.query()
        if (existing.next()) {
            return {
                sys_id: existing.getUniqueValue(),
                portfolio_id: portfolioId,
                project_id: projectId,
                already_exists: true,
            }
        }

        // Get max order_index
        var maxOrder = 0
        var orderGr = new GlideRecord('x_gzi_ppm_portfolio_project')
        orderGr.addQuery('portfolio_id', portfolioId)
        orderGr.orderByDesc('order_index')
        orderGr.setLimit(1)
        orderGr.query()
        if (orderGr.next()) {
            maxOrder = parseInt(orderGr.getValue('order_index') || '0', 10) + 1
        }

        var gr = new GlideRecord('x_gzi_ppm_portfolio_project')
        gr.initialize()
        gr.setValue('portfolio_id', portfolioId)
        gr.setValue('project_id', projectId)
        gr.setValue('order_index', maxOrder)
        gr.setValue('added_by', gs.getUserID())
        gr.setValue('added_at', new GlideDateTime().getValue())
        var sysId = gr.insert()

        if (!sysId) {
            return null
        }

        return {
            sys_id: sysId,
            portfolio_id: portfolioId,
            project_id: projectId,
            order_index: maxOrder,
        }
    },

    /**
     * Unlink a project from a portfolio
     * @param {string} portfolioId - sys_id of the portfolio
     * @param {string} projectId - sys_id of the project
     * @returns {boolean} true if removed
     */
    unlinkProject: function (portfolioId, projectId) {
        if (!portfolioId || !projectId) {
            return false
        }

        var gr = new GlideRecord('x_gzi_ppm_portfolio_project')
        gr.addQuery('portfolio_id', portfolioId)
        gr.addQuery('project_id', projectId)
        gr.setLimit(1)
        gr.query()

        if (!gr.next()) {
            return false
        }

        gr.deleteRecord()
        return true
    },

    /**
     * Get portfolios containing a specific project
     * @param {string} projectId - sys_id of the project
     * @returns {Object[]} Array of portfolio objects
     */
    getProjectPortfolios: function (projectId) {
        var portfolios = []
        if (!projectId) {
            return portfolios
        }

        var gr = new GlideRecord('x_gzi_ppm_portfolio_project')
        gr.addQuery('project_id', projectId)
        gr.query()

        var portfolioIds = []
        while (gr.next()) {
            portfolioIds.push(gr.getValue('portfolio_id'))
        }

        if (portfolioIds.length === 0) {
            return portfolios
        }

        var portGr = new GlideRecord('x_gzi_ppm_portfolio')
        portGr.addQuery('sys_id', 'IN', portfolioIds.join(','))
        portGr.query()

        while (portGr.next()) {
            portfolios.push(this._portfolioToObj(portGr))
        }

        return portfolios
    },

    /**
     * Convert a GlideRecord portfolio to a plain object
     * @private
     */
    _portfolioToObj: function (gr) {
        return {
            sys_id: gr.getUniqueValue(),
            name: gr.getValue('name') || '',
            description: gr.getValue('description') || '',
            workspace_id: gr.getValue('workspace_id') || '',
            owner_id: gr.getValue('owner_id') || '',
            color: gr.getValue('color') || '',
            due_date: gr.getValue('due_date') || '',
            sys_created_on: gr.getValue('sys_created_on') || '',
            sys_updated_on: gr.getValue('sys_updated_on') || '',
        }
    },

    type: 'PortfolioService',
}
