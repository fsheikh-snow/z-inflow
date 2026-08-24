var MemberService = Class.create()
MemberService.prototype = {
    initialize: function () {},

    /**
     * List all members of a project with user details
     * @param {string} projectId - sys_id of the project
     * @returns {Object[]} Array of member objects with user info
     */
    listProjectMembers: function (projectId) {
        var members = []
        if (!projectId) {
            return members
        }

        var gr = new GlideRecord('x_gzi_ppm_project_member')
        gr.addQuery('project_id', projectId)
        gr.query()

        var userIds = []
        var memberData = []
        while (gr.next()) {
            var userId = gr.getValue('user_id')
            userIds.push(userId)
            memberData.push({
                sys_id: gr.getUniqueValue(),
                project_id: gr.getValue('project_id'),
                user_id: userId,
                role: gr.getValue('role') || 'viewer',
            })
        }

        // Batch fetch user details
        var userSvc = new UserService()
        var userMap = userSvc.getUsersById(userIds)

        for (var i = 0; i < memberData.length; i++) {
            var m = memberData[i]
            m.user = userMap[m.user_id] || null
            members.push(m)
        }

        return members
    },

    /**
     * Add a member to a project
     * @param {string} projectId - sys_id of the project
     * @param {string} userId - sys_id of the user
     * @param {string} role - role to assign (owner, editor, commenter, viewer)
     * @returns {Object|null} Created member record or null on failure
     */
    addProjectMember: function (projectId, userId, role) {
        if (!projectId || !userId) {
            return null
        }
        role = role || 'viewer'

        // Check if already a member
        var existing = new GlideRecord('x_gzi_ppm_project_member')
        existing.addQuery('project_id', projectId)
        existing.addQuery('user_id', userId)
        existing.setLimit(1)
        existing.query()
        if (existing.next()) {
            return {
                sys_id: existing.getUniqueValue(),
                project_id: projectId,
                user_id: userId,
                role: existing.getValue('role'),
                already_exists: true,
            }
        }

        var gr = new GlideRecord('x_gzi_ppm_project_member')
        gr.initialize()
        gr.setValue('project_id', projectId)
        gr.setValue('user_id', userId)
        gr.setValue('role', role)
        var sysId = gr.insert()

        if (!sysId) {
            return null
        }

        // Sync owner_id if role is owner
        if (role === 'owner') {
            this._syncProjectOwner(projectId, userId)
        }

        return {
            sys_id: sysId,
            project_id: projectId,
            user_id: userId,
            role: role,
        }
    },

    /**
     * Update a project member's role
     * @param {string} memberId - sys_id of the member record
     * @param {string} role - new role
     * @returns {Object|null} Updated member or null
     */
    updateProjectMember: function (memberId, role) {
        if (!memberId || !role) {
            return null
        }

        var gr = new GlideRecord('x_gzi_ppm_project_member')
        if (!gr.get(memberId)) {
            return null
        }

        gr.setValue('role', role)
        gr.update()

        // Sync owner if role changed to owner
        if (role === 'owner') {
            this._syncProjectOwner(gr.getValue('project_id'), gr.getValue('user_id'))
        }

        return {
            sys_id: gr.getUniqueValue(),
            project_id: gr.getValue('project_id'),
            user_id: gr.getValue('user_id'),
            role: role,
        }
    },

    /**
     * Remove a project member
     * @param {string} memberId - sys_id of the member record
     * @returns {boolean} true if deleted
     */
    removeProjectMember: function (memberId) {
        if (!memberId) {
            return false
        }

        var gr = new GlideRecord('x_gzi_ppm_project_member')
        if (!gr.get(memberId)) {
            return false
        }

        gr.deleteRecord()
        return true
    },

    /**
     * List all members of a portfolio with user details
     * @param {string} portfolioId - sys_id of the portfolio
     * @returns {Object[]} Array of member objects with user info
     */
    listPortfolioMembers: function (portfolioId) {
        var members = []
        if (!portfolioId) {
            return members
        }

        var gr = new GlideRecord('x_gzi_ppm_portfolio_member')
        gr.addQuery('portfolio_id', portfolioId)
        gr.query()

        var userIds = []
        var memberData = []
        while (gr.next()) {
            var userId = gr.getValue('user_id')
            userIds.push(userId)
            memberData.push({
                sys_id: gr.getUniqueValue(),
                portfolio_id: gr.getValue('portfolio_id'),
                user_id: userId,
                role: gr.getValue('role') || 'viewer',
            })
        }

        // Batch fetch user details
        var userSvc = new UserService()
        var userMap = userSvc.getUsersById(userIds)

        for (var i = 0; i < memberData.length; i++) {
            var m = memberData[i]
            m.user = userMap[m.user_id] || null
            members.push(m)
        }

        return members
    },

    /**
     * Add a member to a portfolio
     * @param {string} portfolioId - sys_id of the portfolio
     * @param {string} userId - sys_id of the user
     * @param {string} role - role to assign
     * @returns {Object|null} Created member or null
     */
    addPortfolioMember: function (portfolioId, userId, role) {
        if (!portfolioId || !userId) {
            return null
        }
        role = role || 'viewer'

        // Check if already a member
        var existing = new GlideRecord('x_gzi_ppm_portfolio_member')
        existing.addQuery('portfolio_id', portfolioId)
        existing.addQuery('user_id', userId)
        existing.setLimit(1)
        existing.query()
        if (existing.next()) {
            return {
                sys_id: existing.getUniqueValue(),
                portfolio_id: portfolioId,
                user_id: userId,
                role: existing.getValue('role'),
                already_exists: true,
            }
        }

        var gr = new GlideRecord('x_gzi_ppm_portfolio_member')
        gr.initialize()
        gr.setValue('portfolio_id', portfolioId)
        gr.setValue('user_id', userId)
        gr.setValue('role', role)
        var sysId = gr.insert()

        if (!sysId) {
            return null
        }

        if (role === 'owner') {
            this._syncPortfolioOwner(portfolioId, userId)
        }

        return {
            sys_id: sysId,
            portfolio_id: portfolioId,
            user_id: userId,
            role: role,
        }
    },

    /**
     * Update a portfolio member's role
     * @param {string} memberId - sys_id of the member record
     * @param {string} role - new role
     * @returns {Object|null} Updated member or null
     */
    updatePortfolioMember: function (memberId, role) {
        if (!memberId || !role) {
            return null
        }

        var gr = new GlideRecord('x_gzi_ppm_portfolio_member')
        if (!gr.get(memberId)) {
            return null
        }

        gr.setValue('role', role)
        gr.update()

        if (role === 'owner') {
            this._syncPortfolioOwner(gr.getValue('portfolio_id'), gr.getValue('user_id'))
        }

        return {
            sys_id: gr.getUniqueValue(),
            portfolio_id: gr.getValue('portfolio_id'),
            user_id: gr.getValue('user_id'),
            role: role,
        }
    },

    /**
     * Remove a portfolio member
     * @param {string} memberId - sys_id of the member record
     * @returns {boolean} true if deleted
     */
    removePortfolioMember: function (memberId) {
        if (!memberId) {
            return false
        }

        var gr = new GlideRecord('x_gzi_ppm_portfolio_member')
        if (!gr.get(memberId)) {
            return false
        }

        gr.deleteRecord()
        return true
    },

    /**
     * Sync owner_id on the project record when owner role is assigned
     * @private
     */
    _syncProjectOwner: function (projectId, userId) {
        var gr = new GlideRecord('x_gzi_ppm_project')
        if (gr.get(projectId)) {
            gr.setValue('owner_id', userId)
            gr.update()
        }
    },

    /**
     * Sync owner_id on the portfolio record when owner role is assigned
     * @private
     */
    _syncPortfolioOwner: function (portfolioId, userId) {
        var gr = new GlideRecord('x_gzi_ppm_portfolio')
        if (gr.get(portfolioId)) {
            gr.setValue('owner_id', userId)
            gr.update()
        }
    },

    type: 'MemberService',
}
