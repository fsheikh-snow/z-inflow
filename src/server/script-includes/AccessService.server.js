var AccessService = Class.create();
AccessService.prototype = {
    initialize: function () {},

    _hasProjectRole: function (projectId, userId, roles) {
        if (!projectId || !userId) {
            return false;
        }
        var gr = new GlideRecord('x_gzi_zflow_project_member');
        gr.addQuery('project_id', projectId);
        gr.addQuery('user_id', userId);
        gr.addQuery('role', 'IN', roles.join(','));
        gr.setLimit(1);
        gr.query();
        return gr.hasNext();
    },

    _hasPortfolioRole: function (portfolioId, userId, roles) {
        if (!portfolioId || !userId) {
            return false;
        }
        var gr = new GlideRecord('x_gzi_zflow_portfolio_member');
        if (!gr.isValid()) {
            return false;
        }
        gr.addQuery('portfolio_id', portfolioId);
        gr.addQuery('user_id', userId);
        gr.addQuery('role', 'IN', roles.join(','));
        gr.setLimit(1);
        gr.query();
        return gr.hasNext();
    },

    canReadProject: function (projectId, userId) {
        userId = userId || gs.getUserID();
        return this._hasProjectRole(projectId, userId, ['owner', 'editor', 'commenter', 'viewer']);
    },

    canWriteProject: function (projectId, userId) {
        userId = userId || gs.getUserID();
        return this._hasProjectRole(projectId, userId, ['owner', 'editor']);
    },

    canManageProject: function (projectId, userId) {
        userId = userId || gs.getUserID();
        return this._hasProjectRole(projectId, userId, ['owner']);
    },

    canReadPortfolio: function (portfolioId, userId) {
        userId = userId || gs.getUserID();
        if (!portfolioId) {
            return false;
        }
        if (this._hasPortfolioRole(portfolioId, userId, ['owner', 'editor', 'commenter', 'viewer'])) {
            return true;
        }
        // Fallback: membership on any linked project still grants portfolio read
        var pp = new GlideRecord('x_gzi_zflow_portfolio_project');
        pp.addQuery('portfolio_id', portfolioId);
        pp.query();
        while (pp.next()) {
            if (this.canReadProject(pp.getValue('project_id'), userId)) {
                return true;
            }
        }
        return false;
    },

    canWritePortfolio: function (portfolioId, userId) {
        userId = userId || gs.getUserID();
        return this._hasPortfolioRole(portfolioId, userId, ['owner', 'editor']);
    },

    canManagePortfolio: function (portfolioId, userId) {
        userId = userId || gs.getUserID();
        return this._hasPortfolioRole(portfolioId, userId, ['owner']);
    },

    type: 'AccessService',
};
