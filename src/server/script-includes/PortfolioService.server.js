var PortfolioService = Class.create();
PortfolioService.prototype = {
    initialize: function () {
        this.access = new x_gzi_z_ppm.AccessService();
        this.viewData = new x_gzi_z_ppm.ViewDataService();
        this.userService = new x_gzi_z_ppm.UserService();
    },

    _serializePortfolio: function (gr) {
        return {
            sys_id: gr.getUniqueValue(),
            workspace_id: gr.getValue('workspace_id'),
            name: gr.getValue('name'),
            owner_id: gr.getValue('owner_id'),
            due_date: gr.getValue('due_date'),
            description: gr.getValue('description'),
            color: gr.getValue('color'),
        };
    },

    listPortfolios: function (workspaceId) {
        var results = [];
        var gr = new GlideRecord('x_gzi_z_ppm_portfolio');
        if (workspaceId) {
            gr.addQuery('workspace_id', workspaceId);
        }
        gr.orderBy('name');
        gr.query();
        while (gr.next()) {
            results.push(this._serializePortfolio(gr));
        }
        return results;
    },

    getPortfolio: function (portfolioId) {
        var gr = new GlideRecord('x_gzi_z_ppm_portfolio');
        if (!gr.get(portfolioId)) {
            return null;
        }
        return this._serializePortfolio(gr);
    },

    getTimeline: function (portfolioId) {
        var data = this.viewData.getPortfolioViewData(portfolioId, this._defaultViewId(portfolioId));
        if (!data) {
            return { bars: [] };
        }
        return {
            bars: data.rows.map(function (row) {
                return {
                    sys_id: row.sys_id,
                    name: row.name,
                    project_key: row.project_key,
                    start_date: row.start_date,
                    due_date: row.due_date,
                    priority: row.priority,
                    status: row.status,
                };
            }),
        };
    },

    getDashboard: function (portfolioId) {
        var rows = this.viewData.getPortfolioViewData(portfolioId, this._defaultViewId(portfolioId));
        var summary = { total: 0, on_track: 0, at_risk: 0, off_track: 0 };
        if (!rows) {
            return summary;
        }
        summary.total = rows.rows.length;
        return summary;
    },

    getProgress: function (portfolioId) {
        var portfolio = this.getPortfolio(portfolioId);
        if (!portfolio) {
            return null;
        }
        var updates = [];
        var gr = new GlideRecord('x_gzi_z_ppm_status_update');
        gr.addQuery('entity_type', 'portfolio');
        gr.addQuery('entity_id', portfolioId);
        gr.orderByDesc('sys_created_on');
        gr.setLimit(20);
        gr.query();
        while (gr.next()) {
            updates.push({
                sys_id: gr.getUniqueValue(),
                text: gr.getValue('text'),
                status: gr.getValue('status'),
                author_id: gr.getValue('author_id'),
                sys_created_on: gr.getValue('sys_created_on'),
            });
        }
        return {
            portfolio: portfolio,
            status_updates: updates,
        };
    },

    getWorkload: function (portfolioId) {
        var matrix = {};
        var pp = new GlideRecord('x_gzi_z_ppm_portfolio_project');
        pp.addQuery('portfolio_id', portfolioId);
        pp.query();
        while (pp.next()) {
            var pt = new GlideRecord('x_gzi_z_ppm_project_task');
            pt.addQuery('project_id', pp.getValue('project_id'));
            pt.query();
            while (pt.next()) {
                var task = pt.task_id.getRefRecord();
                if (!task.isValidRecord()) {
                    continue;
                }
                var assignee = task.getValue('assignee_id');
                var dueDate = task.getValue('due_date') || 'unscheduled';
                if (!assignee) {
                    continue;
                }
                if (!matrix[assignee]) {
                    matrix[assignee] = {};
                }
                matrix[assignee][dueDate] = (matrix[assignee][dueDate] || 0) + 1;
            }
        }
        return { matrix: matrix };
    },

    linkProject: function (portfolioId, projectId) {
        var gr = new GlideRecord('x_gzi_z_ppm_portfolio_project');
        gr.addQuery('portfolio_id', portfolioId);
        gr.addQuery('project_id', projectId);
        gr.query();
        if (gr.hasNext()) {
            return gr.next() ? gr.getUniqueValue() : null;
        }
        gr.initialize();
        gr.setValue('portfolio_id', portfolioId);
        gr.setValue('project_id', projectId);
        gr.setValue('added_by', gs.getUserID());
        gr.setValue('added_at', new GlideDateTime());
        return gr.insert();
    },

    unlinkProject: function (portfolioId, projectId) {
        var gr = new GlideRecord('x_gzi_z_ppm_portfolio_project');
        gr.addQuery('portfolio_id', portfolioId);
        gr.addQuery('project_id', projectId);
        gr.query();
        if (gr.next()) {
            return gr.deleteRecord();
        }
        return false;
    },

    getProjectPortfolios: function (projectId) {
        var results = [];
        var gr = new GlideRecord('x_gzi_z_ppm_portfolio_project');
        gr.addQuery('project_id', projectId);
        gr.query();
        while (gr.next()) {
            var portfolio = gr.portfolio_id.getRefRecord();
            if (portfolio.isValidRecord()) {
                results.push(this._serializePortfolio(portfolio));
            }
        }
        return results;
    },

    _defaultViewId: function (portfolioId) {
        var gr = new GlideRecord('x_gzi_z_ppm_custom_view');
        gr.addQuery('portfolio_id', portfolioId);
        gr.addQuery('is_default', true);
        gr.setLimit(1);
        gr.query();
        if (gr.next()) {
            return gr.getUniqueValue();
        }
        gr.initialize();
        gr.setValue('portfolio_id', portfolioId);
        gr.setValue('name', 'Default List');
        gr.setValue('view_type', 'list');
        gr.setValue('is_default', true);
        return gr.insert();
    },

    type: 'PortfolioService',
};
