var AccessService = Class.create()
AccessService.prototype = {
    initialize: function () {},

    /**
     * Check if user has a required role on an entity (project or portfolio)
     * @param {string} entityType - 'project' or 'portfolio'
     * @param {string} entityId - sys_id of the entity
     * @param {string} userId - sys_id of the user
     * @param {string} requiredRole - role to check (e.g. 'owner', 'editor', 'viewer')
     * @returns {boolean} true if user has the required role or higher
     */
    canAccess: function (entityType, entityId, userId, requiredRole) {
        if (!entityType || !entityId || !userId) {
            return false
        }

        var role = null
        if (entityType === 'project') {
            role = this.getProjectRole(entityId, userId)
        } else if (entityType === 'portfolio') {
            role = this.getPortfolioRole(entityId, userId)
        }

        if (!role) {
            return false
        }

        return this._hasAccess(role, requiredRole)
    },

    /**
     * Get user's role on a project
     * @param {string} projectId - sys_id of the project
     * @param {string} userId - sys_id of the user (defaults to current user)
     * @returns {string|null} Role string or null if not a member
     */
    getProjectRole: function (projectId, userId) {
        if (!projectId) {
            return null
        }
        userId = userId || gs.getUserID()

        // Check if user is the project owner
        var projGr = new GlideRecord('x_gzi_ppm_project')
        if (projGr.get(projectId)) {
            if (projGr.getValue('owner_id') === userId) {
                return 'owner'
            }
        }

        // Check project membership
        var gr = new GlideRecord('x_gzi_ppm_project_member')
        gr.addQuery('project_id', projectId)
        gr.addQuery('user_id', userId)
        gr.setLimit(1)
        gr.query()

        if (gr.next()) {
            return gr.getValue('role') || 'viewer'
        }

        return null
    },

    /**
     * Get user's role on a portfolio
     * @param {string} portfolioId - sys_id of the portfolio
     * @param {string} userId - sys_id of the user (defaults to current user)
     * @returns {string|null} Role string or null if not a member
     */
    getPortfolioRole: function (portfolioId, userId) {
        if (!portfolioId) {
            return null
        }
        userId = userId || gs.getUserID()

        // Check if user is the portfolio owner
        var portGr = new GlideRecord('x_gzi_ppm_portfolio')
        if (portGr.get(portfolioId)) {
            if (portGr.getValue('owner_id') === userId) {
                return 'owner'
            }
        }

        // Check portfolio membership
        var gr = new GlideRecord('x_gzi_ppm_portfolio_member')
        gr.addQuery('portfolio_id', portfolioId)
        gr.addQuery('user_id', userId)
        gr.setLimit(1)
        gr.query()

        if (gr.next()) {
            return gr.getValue('role') || 'viewer'
        }

        return null
    },

    /**
     * Check if user is a project member (any role)
     * @param {string} projectId - sys_id of the project
     * @param {string} userId - sys_id of the user (defaults to current user)
     * @returns {boolean}
     */
    isProjectMember: function (projectId, userId) {
        return this.getProjectRole(projectId, userId) !== null
    },

    /**
     * Check if user is a portfolio member (any role)
     * @param {string} portfolioId - sys_id of the portfolio
     * @param {string} userId - sys_id of the user (defaults to current user)
     * @returns {boolean}
     */
    isPortfolioMember: function (portfolioId, userId) {
        return this.getPortfolioRole(portfolioId, userId) !== null
    },

    /**
     * Role hierarchy check - determines if actual role meets or exceeds required role
     * @private
     */
    _hasAccess: function (actualRole, requiredRole) {
        var hierarchy = { owner: 4, editor: 3, commenter: 2, viewer: 1 }
        var actualLevel = hierarchy[actualRole] || 0
        var requiredLevel = hierarchy[requiredRole] || 0
        return actualLevel >= requiredLevel
    },

    type: 'AccessService',
}
