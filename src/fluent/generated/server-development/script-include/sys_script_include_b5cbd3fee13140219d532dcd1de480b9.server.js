var ViewDataService = Class.create()
ViewDataService.prototype = {
    initialize: function () {},

    /**
     * Get a view config with its columns
     * @param {string} viewId - sys_id of the custom view
     * @returns {Object|null} View object with columns array
     */
    getView: function (viewId) {
        if (!viewId) {
            return null
        }

        var gr = new GlideRecord('x_gzi_ppm_custom_view')
        if (!gr.get(viewId)) {
            return null
        }

        var view = {
            sys_id: gr.getUniqueValue(),
            name: gr.getValue('name') || '',
            view_type: gr.getValue('view_type') || '',
            portfolio_id: gr.getValue('portfolio_id') || '',
            project_id: gr.getValue('project_id') || '',
            user_id: gr.getValue('user_id') || '',
            filter_query: gr.getValue('filter_query') || '',
            group_by: gr.getValue('group_by') || '',
            sort_config: gr.getValue('sort_config') || '',
            is_default: gr.getValue('is_default') === 'true',
            columns: [],
        }

        // Get columns
        var colGr = new GlideRecord('x_gzi_ppm_custom_view_column')
        colGr.addQuery('view_id', viewId)
        colGr.orderBy('order_index')
        colGr.query()

        while (colGr.next()) {
            view.columns.push({
                sys_id: colGr.getUniqueValue(),
                field_path: colGr.getValue('field_path') || '',
                is_visible: colGr.getValue('is_visible') !== 'false',
                order_index: parseInt(colGr.getValue('order_index') || '0', 10),
                width: colGr.getValue('width') || '',
            })
        }

        return view
    },

    /**
     * Update a view configuration
     * @param {string} viewId - sys_id of the view
     * @param {Object} data - Fields to update
     * @returns {Object|null} Updated view or null
     */
    updateView: function (viewId, data) {
        if (!viewId || !data) {
            return null
        }

        var gr = new GlideRecord('x_gzi_ppm_custom_view')
        if (!gr.get(viewId)) {
            return null
        }

        var fields = ['name', 'view_type', 'filter_query', 'group_by', 'sort_config', 'is_default']
        for (var i = 0; i < fields.length; i++) {
            if (data[fields[i]] !== undefined) {
                gr.setValue(fields[i], data[fields[i]])
            }
        }

        gr.update()

        // Update columns if provided
        if (data.columns && data.columns.length > 0) {
            for (var j = 0; j < data.columns.length; j++) {
                var col = data.columns[j]
                if (col.sys_id) {
                    var colGr = new GlideRecord('x_gzi_ppm_custom_view_column')
                    if (colGr.get(col.sys_id)) {
                        if (col.field_path !== undefined) colGr.setValue('field_path', col.field_path)
                        if (col.is_visible !== undefined) colGr.setValue('is_visible', col.is_visible)
                        if (col.order_index !== undefined) colGr.setValue('order_index', col.order_index)
                        if (col.width !== undefined) colGr.setValue('width', col.width)
                        colGr.update()
                    }
                } else {
                    // Create new column
                    var newCol = new GlideRecord('x_gzi_ppm_custom_view_column')
                    newCol.initialize()
                    newCol.setValue('view_id', viewId)
                    newCol.setValue('field_path', col.field_path || '')
                    newCol.setValue('is_visible', col.is_visible !== false)
                    newCol.setValue('order_index', col.order_index || 0)
                    if (col.width) newCol.setValue('width', col.width)
                    newCol.insert()
                }
            }
        }

        return this.getView(viewId)
    },

    /**
     * List custom field definitions for a workspace
     * @param {string} workspaceId - sys_id of the workspace
     * @returns {Object[]} Array of field definition objects
     */
    listCustomFields: function (workspaceId) {
        var fields = []
        if (!workspaceId) {
            return fields
        }

        var gr = new GlideRecord('x_gzi_ppm_custom_field_def')
        gr.addQuery('workspace_id', workspaceId)
        gr.orderBy('name')
        gr.query()

        while (gr.next()) {
            fields.push({
                sys_id: gr.getUniqueValue(),
                name: gr.getValue('name') || '',
                type: gr.getValue('type') || '',
                workspace_id: gr.getValue('workspace_id') || '',
                is_global_library: gr.getValue('is_global_library') === 'true',
            })
        }

        return fields
    },

    /**
     * Get custom field values for entities
     * @param {Object} params - { entity_type: 'project'|'task'|'portfolio', entity_ids: string[], field_def_ids?: string[] }
     * @returns {Object[]} Array of field value objects
     */
    listCustomFieldValues: function (params) {
        var values = []
        if (!params || !params.entity_type || !params.entity_ids || params.entity_ids.length === 0) {
            return values
        }

        var entityField = params.entity_type + '_id'
        var gr = new GlideRecord('x_gzi_ppm_custom_field_value')
        gr.addQuery(entityField, 'IN', params.entity_ids.join(','))

        if (params.field_def_ids && params.field_def_ids.length > 0) {
            gr.addQuery('field_def_id', 'IN', params.field_def_ids.join(','))
        }

        gr.query()

        while (gr.next()) {
            values.push({
                sys_id: gr.getUniqueValue(),
                field_def_id: gr.getValue('field_def_id') || '',
                project_id: gr.getValue('project_id') || '',
                task_id: gr.getValue('task_id') || '',
                portfolio_id: gr.getValue('portfolio_id') || '',
                value_string: gr.getValue('value_string') || '',
                value_number: gr.getValue('value_number') || '',
                value_date: gr.getValue('value_date') || '',
            })
        }

        return values
    },

    /**
     * Create or update custom field values
     * @param {Object[]} data - Array of { field_def_id, entity_type, entity_id, value_string?, value_number?, value_date? }
     * @returns {Object[]} Array of upserted value objects
     */
    upsertCustomFieldValues: function (data) {
        var results = []
        if (!data || data.length === 0) {
            return results
        }

        for (var i = 0; i < data.length; i++) {
            var item = data[i]
            if (!item.field_def_id || !item.entity_type || !item.entity_id) {
                continue
            }

            var entityField = item.entity_type + '_id'

            // Check for existing value
            var gr = new GlideRecord('x_gzi_ppm_custom_field_value')
            gr.addQuery('field_def_id', item.field_def_id)
            gr.addQuery(entityField, item.entity_id)
            gr.setLimit(1)
            gr.query()

            if (gr.next()) {
                // Update existing
                if (item.value_string !== undefined) gr.setValue('value_string', item.value_string)
                if (item.value_number !== undefined) gr.setValue('value_number', item.value_number)
                if (item.value_date !== undefined) gr.setValue('value_date', item.value_date)
                gr.update()
                results.push({ sys_id: gr.getUniqueValue(), updated: true })
            } else {
                // Create new
                var newGr = new GlideRecord('x_gzi_ppm_custom_field_value')
                newGr.initialize()
                newGr.setValue('field_def_id', item.field_def_id)
                newGr.setValue(entityField, item.entity_id)
                if (item.value_string !== undefined) newGr.setValue('value_string', item.value_string)
                if (item.value_number !== undefined) newGr.setValue('value_number', item.value_number)
                if (item.value_date !== undefined) newGr.setValue('value_date', item.value_date)
                var sysId = newGr.insert()
                results.push({ sys_id: sysId, created: true })
            }
        }

        return results
    },

    /**
     * Get views for a portfolio
     * @param {string} portfolioId - sys_id of the portfolio
     * @returns {Object[]} Array of view objects (without full column data)
     */
    getPortfolioViews: function (portfolioId) {
        var views = []
        if (!portfolioId) {
            return views
        }

        var gr = new GlideRecord('x_gzi_ppm_custom_view')
        gr.addQuery('portfolio_id', portfolioId)
        gr.orderBy('name')
        gr.query()

        while (gr.next()) {
            views.push({
                sys_id: gr.getUniqueValue(),
                name: gr.getValue('name') || '',
                view_type: gr.getValue('view_type') || '',
                is_default: gr.getValue('is_default') === 'true',
                group_by: gr.getValue('group_by') || '',
                filter_query: gr.getValue('filter_query') || '',
            })
        }

        return views
    },

    /**
     * Get pivoted data for a portfolio view (columns + entity values)
     * @param {string} viewId - sys_id of the view
     * @returns {Object|null} Pivoted view data with rows and columns
     */
    getPortfolioViewData: function (viewId) {
        if (!viewId) {
            return null
        }

        var view = this.getView(viewId)
        if (!view || !view.portfolio_id) {
            return null
        }

        // Get projects in portfolio
        var linkGr = new GlideRecord('x_gzi_ppm_portfolio_project')
        linkGr.addQuery('portfolio_id', view.portfolio_id)
        linkGr.orderBy('order_index')
        linkGr.query()

        var projectIds = []
        while (linkGr.next()) {
            projectIds.push(linkGr.getValue('project_id'))
        }

        if (projectIds.length === 0) {
            return { view: view, rows: [] }
        }

        // Get project data
        var projGr = new GlideRecord('x_gzi_ppm_project')
        projGr.addQuery('sys_id', 'IN', projectIds.join(','))
        projGr.query()

        var projects = {}
        while (projGr.next()) {
            projects[projGr.getUniqueValue()] = {
                sys_id: projGr.getUniqueValue(),
                name: projGr.getValue('name') || '',
                status: projGr.getValue('status') || '',
                priority: projGr.getValue('priority') || '',
                owner_id: projGr.getValue('owner_id') || '',
                start_date: projGr.getValue('start_date') || '',
                due_date: projGr.getValue('due_date') || '',
                percent_complete: projGr.getValue('percent_complete') || '0',
            }
        }

        // Get custom field values for these projects
        var customValues = this.listCustomFieldValues({
            entity_type: 'project',
            entity_ids: projectIds,
        })

        // Pivot values by project
        var valuesByProject = {}
        for (var i = 0; i < customValues.length; i++) {
            var cv = customValues[i]
            var pid = cv.project_id
            if (!valuesByProject[pid]) {
                valuesByProject[pid] = {}
            }
            valuesByProject[pid][cv.field_def_id] = {
                value_string: cv.value_string,
                value_number: cv.value_number,
                value_date: cv.value_date,
            }
        }

        // Build rows maintaining order
        var rows = []
        for (var j = 0; j < projectIds.length; j++) {
            var id = projectIds[j]
            if (projects[id]) {
                var row = projects[id]
                row.custom_fields = valuesByProject[id] || {}
                rows.push(row)
            }
        }

        return {
            view: view,
            rows: rows,
        }
    },

    type: 'ViewDataService',
}
