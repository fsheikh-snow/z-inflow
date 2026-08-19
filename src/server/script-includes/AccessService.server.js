var AccessService = Class.create();
AccessService.prototype = {
    initialize: function () {},

    _hasRole: function (projectId, userId, roles) {
        if (!projectId || !userId) {
            return false;
        }
        var gr = new GlideRecord('x_gzi_z_ppm_project_member');
        gr.addQuery('project_id', projectId);
        gr.addQuery('user_id', userId);
        gr.addQuery('role', 'IN', roles.join(','));
        gr.setLimit(1);
        gr.query();
        return gr.hasNext();
    },

    canReadProject: function (projectId, userId) {
        userId = userId || gs.getUserID();
        return this._hasRole(projectId, userId, ['owner', 'editor', 'commenter', 'viewer']);
    },

    canWriteProject: function (projectId, userId) {
        userId = userId || gs.getUserID();
        return this._hasRole(projectId, userId, ['owner', 'editor']);
    },

    canManageProject: function (projectId, userId) {
        userId = userId || gs.getUserID();
        return this._hasRole(projectId, userId, ['owner']);
    },

    canReadPortfolio: function (portfolioId, userId) {
        userId = userId || gs.getUserID();
        if (!portfolioId) {
            return false;
        }
        var pp = new GlideRecord('x_gzi_z_ppm_portfolio_project');
        pp.addQuery('portfolio_id', portfolioId);
        pp.query();
        while (pp.next()) {
            if (this.canReadProject(pp.getValue('project_id'), userId)) {
                return true;
            }
        }
        return false;
    },

    type: 'AccessService',
};
