var CapacityService = Class.create();
CapacityService.prototype = {
    initialize: function () {},

    _userService: function () {
        if (!this.__userService) {
            this.__userService = new x_gzi_ppm.UserService();
        }
        return this.__userService;
    },

    _monthKey: function (dateStr) {
        if (!dateStr) {
            return 'Unbucketed';
        }
        var parts = String(dateStr).split('-');
        if (parts.length < 2) {
            return String(dateStr);
        }
        var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var monthIndex = parseInt(parts[1], 10) - 1;
        if (monthIndex < 0 || monthIndex > 11) {
            return String(dateStr);
        }
        return monthNames[monthIndex] + ' ' + parts[0];
    },

    _collectPlanAllocations: function (planGr) {
        var allocations = [];
        var alloc = new GlideRecord('x_gzi_ppm_proj_res_alloc');
        if (planGr.getValue('portfolio_id')) {
            var pp = new GlideRecord('x_gzi_ppm_portfolio_project');
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
                allocation_percentage: parseFloat(alloc.getValue('allocation_percentage') || 0),
                start_date: alloc.getValue('start_date'),
                end_date: alloc.getValue('end_date'),
            });
        }
        return allocations;
    },

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
        var gr = new GlideRecord('x_gzi_ppm_capacity_plan');
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

    getPlan: function (planId) {
        var gr = new GlideRecord('x_gzi_ppm_capacity_plan');
        if (!gr.get(planId)) {
            return null;
        }
        return this._serializePlan(gr);
    },

    getPlanGrid: function (planId) {
        var planGr = new GlideRecord('x_gzi_ppm_capacity_plan');
        if (!planGr.get(planId)) {
            return null;
        }

        var allocations = this._collectPlanAllocations(planGr);
        var monthSet = {};
        var peopleMap = {};
        var projectsMap = {};
        var userIds = [];
        var projectIds = [];

        for (var i = 0; i < allocations.length; i++) {
            var row = allocations[i];
            var month = this._monthKey(row.start_date);
            monthSet[month] = true;

            if (row.user_id) {
                if (!peopleMap[row.user_id]) {
                    peopleMap[row.user_id] = { sys_id: row.user_id, name: '', allocations: {} };
                    userIds.push(row.user_id);
                }
                peopleMap[row.user_id].allocations[month] =
                    (peopleMap[row.user_id].allocations[month] || 0) + row.allocation_percentage;
            }

            if (row.project_id) {
                if (!projectsMap[row.project_id]) {
                    projectsMap[row.project_id] = { sys_id: row.project_id, name: '', allocations: {} };
                    projectIds.push(row.project_id);
                }
                projectsMap[row.project_id].allocations[month] =
                    (projectsMap[row.project_id].allocations[month] || 0) + row.allocation_percentage;
            }
        }

        var users = this._userService().getUsersByIds(userIds);
        var people = [];
        for (var userId in peopleMap) {
            if (peopleMap.hasOwnProperty(userId)) {
                peopleMap[userId].name = (users[userId] && users[userId].name) || userId;
                people.push(peopleMap[userId]);
            }
        }
        people.sort(function (a, b) {
            return String(a.name).localeCompare(String(b.name));
        });

        var projects = [];
        if (projectIds.length) {
            var projectGr = new GlideRecord('x_gzi_ppm_project');
            projectGr.addQuery('sys_id', 'IN', projectIds.join(','));
            projectGr.query();
            while (projectGr.next()) {
                if (projectsMap[projectGr.getUniqueValue()]) {
                    projectsMap[projectGr.getUniqueValue()].name = projectGr.getValue('name');
                }
            }
        }
        for (var projectId in projectsMap) {
            if (projectsMap.hasOwnProperty(projectId)) {
                if (!projectsMap[projectId].name) {
                    projectsMap[projectId].name = projectId;
                }
                projects.push(projectsMap[projectId]);
            }
        }
        projects.sort(function (a, b) {
            return String(a.name).localeCompare(String(b.name));
        });

        var months = Object.keys(monthSet).sort(function (a, b) {
            if (a === 'Unbucketed') return 1;
            if (b === 'Unbucketed') return -1;
            return String(a).localeCompare(String(b));
        });

        return {
            months: months,
            people: people,
            projects: projects,
        };
    },

    getPlanAllocations: function (planId) {
        var planGr = new GlideRecord('x_gzi_ppm_capacity_plan');
        if (!planGr.get(planId)) {
            return null;
        }
        var raw = this._collectPlanAllocations(planGr);
        var allocations = [];
        for (var i = 0; i < raw.length; i++) {
            allocations.push({
                sys_id: raw[i].sys_id,
                project_id: raw[i].project_id,
                user_id: raw[i].user_id,
                role_id: raw[i].role_id,
                allocation_percentage: String(raw[i].allocation_percentage),
                start_date: raw[i].start_date,
                end_date: raw[i].end_date,
            });
        }
        return allocations;
    },

    updateAllocation: function (planId, allocationId, data) {
        var planGr = new GlideRecord('x_gzi_ppm_capacity_plan');
        if (!planGr.get(planId)) {
            return null;
        }
        var alloc = new GlideRecord('x_gzi_ppm_proj_res_alloc');
        if (!alloc.get(allocationId)) {
            return null;
        }
        if (data.allocation_percentage !== undefined) {
            alloc.setValue('allocation_percentage', String(data.allocation_percentage));
        }
        if (data.start_date !== undefined) {
            alloc.setValue('start_date', String(data.start_date));
        }
        if (data.end_date !== undefined) {
            alloc.setValue('end_date', String(data.end_date));
        }
        if (data.user_id !== undefined) {
            alloc.setValue('user_id', String(data.user_id));
        }
        if (data.role_id !== undefined) {
            alloc.setValue('role_id', String(data.role_id));
        }
        alloc.update();
        return {
            sys_id: alloc.getUniqueValue(),
            project_id: alloc.getValue('project_id'),
            user_id: alloc.getValue('user_id'),
            role_id: alloc.getValue('role_id'),
            allocation_percentage: alloc.getValue('allocation_percentage'),
            start_date: alloc.getValue('start_date'),
            end_date: alloc.getValue('end_date'),
        };
    },

    type: 'CapacityService',
};
