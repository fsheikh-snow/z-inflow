var CapacityService = Class.create();
CapacityService.prototype = {
    initialize: function () {},

    _serializePlan: function (gr) {
        return {
            sys_id: gr.getUniqueValue(),
            workspace_id: gr.getValue('workspace_id'),
            name: gr.getValue('name'),
            owner_id: gr.getValue('owner_id'),
            portfolio_id: gr.getValue('portfolio_id'),
            group_id: gr.getValue('group_id'),
            time_granularity: gr.getValue('time_granularity'),
            filter_config: gr.getValue('filter_config'),
        };
    },

    listPlans: function (workspaceId) {
        var results = [];
        var gr = new GlideRecord('x_gzi_z_ppm_capacity_plan');
        if (workspaceId) {
            gr.addQuery('workspace_id', workspaceId);
        }
        gr.orderBy('name');
        gr.query();
        while (gr.next()) {
            results.push(this._serializePlan(gr));
        }
        return results;
    },

    getPlanGrid: function (planId) {
        var planGr = new GlideRecord('x_gzi_z_ppm_capacity_plan');
        if (!planGr.get(planId)) {
            return null;
        }

        var buckets = {};
        var alloc = new GlideRecord('x_gzi_z_ppm_proj_res_alloc');
        if (planGr.getValue('portfolio_id')) {
            var pp = new GlideRecord('x_gzi_z_ppm_portfolio_project');
            pp.addQuery('portfolio_id', planGr.getValue('portfolio_id'));
            pp.query();
            var projectIds = [];
            while (pp.next()) {
                projectIds.push(pp.getValue('project_id'));
            }
            if (projectIds.length) {
                alloc.addQuery('project_id', 'IN', projectIds.join(','));
            }
        }
        alloc.query();
        while (alloc.next()) {
            var userId = alloc.getValue('user_id');
            var bucket = alloc.getValue('start_date') || 'unbucketed';
            if (!buckets[userId]) {
                buckets[userId] = {};
            }
            buckets[userId][bucket] = (buckets[userId][bucket] || 0) + parseFloat(alloc.getValue('allocation_percentage') || 0);
        }

        return {
            plan: this._serializePlan(planGr),
            grid: buckets,
        };
    },

    getPlanAllocations: function (planId) {
        var planGr = new GlideRecord('x_gzi_z_ppm_capacity_plan');
        if (!planGr.get(planId)) {
            return null;
        }
        var allocations = [];
        var alloc = new GlideRecord('x_gzi_z_ppm_proj_res_alloc');
        if (planGr.getValue('portfolio_id')) {
            var pp = new GlideRecord('x_gzi_z_ppm_portfolio_project');
            pp.addQuery('portfolio_id', planGr.getValue('portfolio_id'));
            pp.query();
            var projectIds = [];
            while (pp.next()) {
                projectIds.push(pp.getValue('project_id'));
            }
            if (projectIds.length) {
                alloc.addQuery('project_id', 'IN', projectIds.join(','));
            }
        }
        alloc.query();
        while (alloc.next()) {
            allocations.push({
                sys_id: alloc.getUniqueValue(),
                project_id: alloc.getValue('project_id'),
                user_id: alloc.getValue('user_id'),
                role_id: alloc.getValue('role_id'),
                allocation_percentage: alloc.getValue('allocation_percentage'),
                start_date: alloc.getValue('start_date'),
                end_date: alloc.getValue('end_date'),
            });
        }
        return allocations;
    },

    type: 'CapacityService',
};
