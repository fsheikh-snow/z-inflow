var ViewDataService = Class.create();
ViewDataService.prototype = {
    initialize: function () {},

    _access: function () {
        if (!this.__access) {
            this.__access = new x_gzi_ppm.AccessService();
        }
        return this.__access;
    },

    _userService: function () {
        if (!this.__userService) {
            this.__userService = new x_gzi_ppm.UserService();
        }
        return this.__userService;
    },

    _getView: function (viewId) {
        var gr = new GlideRecord('x_gzi_ppm_custom_view');
        if (!gr.get(viewId)) {
            return null;
        }
        return gr;
    },

    getView: function (viewId) {
        var gr = this._getView(viewId);
        if (!gr) {
            return null;
        }
        return this._serializeView(gr);
    },

    _serializeView: function (gr) {
        return {
            sys_id: gr.getUniqueValue(),
            name: gr.getValue('name'),
            view_type: gr.getValue('view_type'),
            project_id: gr.getValue('project_id'),
            portfolio_id: gr.getValue('portfolio_id'),
            filter_query: gr.getValue('filter_query'),
            sort_config: gr.getValue('sort_config'),
            group_by: gr.getValue('group_by'),
            is_default: gr.getValue('is_default') === 'true',
            columns: this.getViewColumns(gr.getUniqueValue()),
        };
    },

    getViewColumns: function (viewId) {
        var columns = [];
        var gr = new GlideRecord('x_gzi_ppm_custom_view_column');
        gr.addQuery('view_id', viewId);
        gr.orderBy('order_index');
        gr.query();
        while (gr.next()) {
            columns.push({
                sys_id: gr.getUniqueValue(),
                field_path: gr.getValue('field_path'),
                width: parseInt(gr.getValue('width'), 10) || 0,
                is_visible: gr.getValue('is_visible') === 'true',
                order_index: parseInt(gr.getValue('order_index'), 10) || 0,
            });
        }
        return columns;
    },

    getPortfolioViews: function (portfolioId) {
        var views = [];
        var gr = new GlideRecord('x_gzi_ppm_custom_view');
        gr.addQuery('portfolio_id', portfolioId);
        gr.orderBy('name');
        gr.query();
        while (gr.next()) {
            views.push(this._serializeView(gr));
        }
        return views;
    },

    _getEavValues: function (entityField, entityId, fieldDefIds) {
        var values = {};
        if (!entityId) {
            return values;
        }
        var gr = new GlideRecord('x_gzi_ppm_custom_field_value');
        gr.addQuery(entityField, entityId);
        if (fieldDefIds && fieldDefIds.length) {
            gr.addQuery('field_def_id', 'IN', fieldDefIds.join(','));
        }
        gr.query();
        while (gr.next()) {
            values[gr.getValue('field_def_id')] = {
                value_string: gr.getValue('value_string'),
                value_number: gr.getValue('value_number'),
                value_date: gr.getValue('value_date'),
            };
        }
        return values;
    },

    _statusLabels: {
        on_track: 'On Track',
        at_risk: 'At Risk',
        off_track: 'Off Track',
        complete: 'Complete',
        on_hold: 'On Hold',
    },

    _priorityLabels: {
        high: 'High',
        strategic: 'Strategic',
        medium: 'Medium',
        low: 'Low',
    },

    _laneOrder: function (groupBy) {
        if (groupBy === 'priority') {
            return ['strategic', 'high', 'medium', 'low', 'none'];
        }
        return ['on_track', 'at_risk', 'off_track', 'on_hold', 'complete', 'none'];
    },

    _buildPortfolioLanes: function (rows, groupBy) {
        var field = groupBy === 'priority' ? 'priority' : 'status';
        var labels = field === 'priority' ? this._priorityLabels : this._statusLabels;
        var laneMap = {};
        var order = this._laneOrder(field);

        for (var i = 0; i < order.length; i++) {
            var key = order[i];
            laneMap[key] = {
                id: key,
                status: key,
                label: labels[key] || (key === 'none' ? 'Unassigned' : key),
                projects: [],
            };
        }

        for (var j = 0; j < rows.length; j++) {
            var row = rows[j];
            var value = row[field] || 'none';
            if (!laneMap[value]) {
                laneMap[value] = {
                    id: value,
                    status: value,
                    label: labels[value] || value,
                    projects: [],
                };
            }
            laneMap[value].projects.push(row);
        }

        var lanes = [];
        var seen = {};
        for (var k = 0; k < order.length; k++) {
            if (laneMap[order[k]]) {
                lanes.push(laneMap[order[k]]);
                seen[order[k]] = true;
            }
        }
        for (var laneKey in laneMap) {
            if (laneMap.hasOwnProperty(laneKey) && !seen[laneKey]) {
                lanes.push(laneMap[laneKey]);
            }
        }
        return lanes;
    },

    updateView: function (viewId, data) {
        var gr = this._getView(viewId);
        if (!gr) {
            return null;
        }
        var fields = ['name', 'filter_query', 'sort_config', 'group_by', 'view_type'];
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            if (data[field] !== undefined) {
                gr.setValue(field, String(data[field]));
            }
        }
        if (data.is_default !== undefined) {
            gr.setValue('is_default', data.is_default ? 'true' : 'false');
        }
        gr.update();
        return this._serializeView(gr);
    },

    getPortfolioViewData: function (portfolioId, viewId) {
        var view = this.getView(viewId);
        if (!view || view.portfolio_id !== portfolioId) {
            return null;
        }

        var rows = [];
        var userIds = [];
        var pp = new GlideRecord('x_gzi_ppm_portfolio_project');
        pp.addQuery('portfolio_id', portfolioId);
        pp.orderBy('order_index');
        pp.query();
        while (pp.next()) {
            var project = pp.project_id.getRefRecord();
            if (!project.isValidRecord()) {
                continue;
            }
            var ownerId = project.getValue('owner_id');
            if (ownerId) {
                userIds.push(ownerId);
            }
            rows.push({
                sys_id: project.getUniqueValue(),
                project_key: project.getValue('project_key'),
                name: project.getValue('name'),
                status: project.getValue('status'),
                priority: project.getValue('priority'),
                owner_id: ownerId,
                start_date: project.getValue('start_date'),
                due_date: project.getValue('due_date'),
                percent_complete: project.getValue('percent_complete'),
                order_index: pp.getValue('order_index'),
                custom_fields: this._getEavValues('project_id', project.getUniqueValue()),
            });
        }

        var users = this._userService().getUsersByIds(userIds);
        for (var i = 0; i < rows.length; i++) {
            rows[i].owner = users[rows[i].owner_id] || null;
        }

        var result = {
            view: view,
            rows: rows,
        };

        if (view.view_type === 'kanban' || view.view_type === 'board' || view.view_type === 'list') {
            result.lanes = this._buildPortfolioLanes(rows, view.group_by || 'status');
        }

        return result;
    },

    type: 'ViewDataService',
};
