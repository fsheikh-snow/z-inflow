var CapacityService = Class.create()
CapacityService.prototype = {
    initialize: function () {},

    /**
     * List capacity plans in a workspace
     * @param {string} workspaceId - sys_id of the workspace
     * @returns {Object[]} Array of capacity plan objects
     */
    listCapacityPlans: function (workspaceId) {
        var plans = []
        if (!workspaceId) {
            return plans
        }

        var gr = new GlideRecord('x_gzi_ppm_capacity_plan')
        gr.addQuery('workspace_id', workspaceId)
        gr.orderBy('name')
        gr.query()

        while (gr.next()) {
            plans.push(this._planToObj(gr))
        }

        return plans
    },

    /**
     * Get capacity plan grid data (users x time periods with allocations)
     * @param {string} planId - sys_id of the capacity plan
     * @returns {Object|null} Grid data with members, periods, and allocations
     */
    getCapacityPlanGrid: function (planId) {
        if (!planId) {
            return null
        }

        var planGr = new GlideRecord('x_gzi_ppm_capacity_plan')
        if (!planGr.get(planId)) {
            return null
        }

        var plan = this._planToObj(planGr)
        var groupId = plan.group_id

        // Get team members
        var members = []
        if (groupId) {
            var userSvc = new UserService()
            members = userSvc.getGroupMembers(groupId)
        }

        // Get allocations for this plan
        var allocations = this.getPlanAllocations(planId)

        // Group allocations by user
        var allocationsByUser = {}
        for (var i = 0; i < allocations.length; i++) {
            var alloc = allocations[i]
            var userId = alloc.user_id
            if (!allocationsByUser[userId]) {
                allocationsByUser[userId] = []
            }
            allocationsByUser[userId].push(alloc)
        }

        // Build grid rows
        var rows = []
        for (var j = 0; j < members.length; j++) {
            var member = members[j]
            rows.push({
                user: member,
                allocations: allocationsByUser[member.sys_id] || [],
            })
        }

        return {
            plan: plan,
            rows: rows,
            total_members: members.length,
            total_allocations: allocations.length,
        }
    },

    /**
     * Get all allocations for a capacity plan
     * @param {string} planId - sys_id of the capacity plan
     * @returns {Object[]} Array of allocation objects
     */
    getPlanAllocations: function (planId) {
        var allocations = []
        if (!planId) {
            return allocations
        }

        // Get projects linked to this plan's portfolio
        var planGr = new GlideRecord('x_gzi_ppm_capacity_plan')
        if (!planGr.get(planId)) {
            return allocations
        }

        var portfolioId = planGr.getValue('portfolio_id')
        var projectIds = []

        if (portfolioId) {
            var linkGr = new GlideRecord('x_gzi_ppm_portfolio_project')
            linkGr.addQuery('portfolio_id', portfolioId)
            linkGr.query()
            while (linkGr.next()) {
                projectIds.push(linkGr.getValue('project_id'))
            }
        }

        // Get allocations - filter by projects in the portfolio if available
        var gr = new GlideRecord('x_gzi_ppm_proj_res_alloc')
        if (projectIds.length > 0) {
            gr.addQuery('project_id', 'IN', projectIds.join(','))
        }

        // Also filter by group members if group_id is set
        var groupId = planGr.getValue('group_id')
        if (groupId) {
            var memberGr = new GlideRecord('sys_user_grmember')
            memberGr.addQuery('group', groupId)
            memberGr.query()
            var memberIds = []
            while (memberGr.next()) {
                memberIds.push(memberGr.getValue('user'))
            }
            if (memberIds.length > 0) {
                gr.addQuery('user_id', 'IN', memberIds.join(','))
            } else {
                return allocations
            }
        }

        gr.query()

        while (gr.next()) {
            allocations.push({
                sys_id: gr.getUniqueValue(),
                project_id: gr.getValue('project_id') || '',
                user_id: gr.getValue('user_id') || '',
                role_id: gr.getValue('role_id') || '',
                allocation_percentage: gr.getValue('allocation_percentage') || '0',
                start_date: gr.getValue('start_date') || '',
                end_date: gr.getValue('end_date') || '',
            })
        }

        return allocations
    },

    /**
     * Update an allocation record
     * @param {string} allocationId - sys_id of the allocation
     * @param {Object} data - Fields to update
     * @returns {Object|null} Updated allocation or null
     */
    updateAllocation: function (allocationId, data) {
        if (!allocationId || !data) {
            return null
        }

        var gr = new GlideRecord('x_gzi_ppm_proj_res_alloc')
        if (!gr.get(allocationId)) {
            return null
        }

        var fields = ['allocation_percentage', 'start_date', 'end_date', 'project_id', 'user_id', 'role_id']
        for (var i = 0; i < fields.length; i++) {
            if (data[fields[i]] !== undefined) {
                gr.setValue(fields[i], data[fields[i]])
            }
        }

        gr.update()

        return {
            sys_id: gr.getUniqueValue(),
            project_id: gr.getValue('project_id') || '',
            user_id: gr.getValue('user_id') || '',
            role_id: gr.getValue('role_id') || '',
            allocation_percentage: gr.getValue('allocation_percentage') || '0',
            start_date: gr.getValue('start_date') || '',
            end_date: gr.getValue('end_date') || '',
        }
    },

    /**
     * Get team members with their allocation summaries
     * @param {string} groupId - sys_id of the group
     * @returns {Object[]} Array of team members with allocation info
     */
    getTeamMembers: function (groupId) {
        var results = []
        if (!groupId) {
            return results
        }

        var userSvc = new UserService()
        var members = userSvc.getGroupMembers(groupId)

        if (members.length === 0) {
            return results
        }

        // Get allocations for all members
        var memberIds = []
        for (var i = 0; i < members.length; i++) {
            memberIds.push(members[i].sys_id)
        }

        var gr = new GlideRecord('x_gzi_ppm_proj_res_alloc')
        gr.addQuery('user_id', 'IN', memberIds.join(','))
        gr.query()

        var allocationsByUser = {}
        while (gr.next()) {
            var userId = gr.getValue('user_id')
            if (!allocationsByUser[userId]) {
                allocationsByUser[userId] = []
            }
            allocationsByUser[userId].push({
                sys_id: gr.getUniqueValue(),
                project_id: gr.getValue('project_id') || '',
                allocation_percentage: gr.getValue('allocation_percentage') || '0',
                start_date: gr.getValue('start_date') || '',
                end_date: gr.getValue('end_date') || '',
            })
        }

        for (var j = 0; j < members.length; j++) {
            var member = members[j]
            var userAllocations = allocationsByUser[member.sys_id] || []

            // Calculate total allocation percentage
            var totalAllocation = 0
            for (var k = 0; k < userAllocations.length; k++) {
                totalAllocation += parseInt(userAllocations[k].allocation_percentage || '0', 10)
            }

            results.push({
                user: member,
                allocations: userAllocations,
                total_allocation: totalAllocation,
                allocation_count: userAllocations.length,
            })
        }

        return results
    },

    /**
     * Convert a GlideRecord capacity plan to a plain object
     * @private
     */
    _planToObj: function (gr) {
        return {
            sys_id: gr.getUniqueValue(),
            name: gr.getValue('name') || '',
            workspace_id: gr.getValue('workspace_id') || '',
            owner_id: gr.getValue('owner_id') || '',
            portfolio_id: gr.getValue('portfolio_id') || '',
            group_id: gr.getValue('group_id') || '',
            time_granularity: gr.getValue('time_granularity') || '',
            filter_config: gr.getValue('filter_config') || '',
            sys_created_on: gr.getValue('sys_created_on') || '',
            sys_updated_on: gr.getValue('sys_updated_on') || '',
        }
    },

    type: 'CapacityService',
}
