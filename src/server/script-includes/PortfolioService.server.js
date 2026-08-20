var PortfolioService = Class.create();
PortfolioService.prototype = {
    initialize: function () {
        this.access = new x_gzi_zflow.AccessService();
        this.viewData = new x_gzi_zflow.ViewDataService();
        this.userService = new x_gzi_zflow.UserService();
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
        var gr = new GlideRecord('x_gzi_zflow_portfolio');
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
        var gr = new GlideRecord('x_gzi_zflow_portfolio');
        if (!gr.get(portfolioId)) {
            return null;
        }
        var portfolio = this._serializePortfolio(gr);
        if (portfolio.owner_id) {
            var ownerMap = this.userService.getUsersByIds([portfolio.owner_id]);
            portfolio.owner = ownerMap[portfolio.owner_id] || null;
        }
        return portfolio;
    },

    _resolveWorkspaceId: function (workspaceId) {
        if (workspaceId) {
            return workspaceId;
        }
        var gr = new GlideRecord('x_gzi_zflow_workspace');
        gr.orderBy('sys_created_on');
        gr.setLimit(1);
        gr.query();
        if (gr.next()) {
            return gr.getUniqueValue();
        }
        var created = new GlideRecord('x_gzi_zflow_workspace');
        created.initialize();
        created.setValue('name', 'Default Workspace');
        return created.insert() || '';
    },

    createPortfolio: function (data) {
        var name = String(data.name || '').trim();
        var workspaceId = this._resolveWorkspaceId(String(data.workspace_id || ''));
        if (!name || !workspaceId) {
            return null;
        }

        var gr = new GlideRecord('x_gzi_zflow_portfolio');
        gr.initialize();
        gr.setValue('name', name);
        gr.setValue('workspace_id', workspaceId);

        var optionalFields = ['owner_id', 'due_date', 'description', 'color'];
        for (var i = 0; i < optionalFields.length; i++) {
            var field = optionalFields[i];
            if (data[field] !== undefined && data[field] !== null && String(data[field]) !== '') {
                gr.setValue(field, String(data[field]));
            }
        }

        var sysId = gr.insert();
        if (!sysId) {
            return null;
        }
        return this.getPortfolio(sysId);
    },

    updatePortfolio: function (portfolioId, data) {
        var gr = new GlideRecord('x_gzi_zflow_portfolio');
        if (!gr.get(portfolioId)) {
            return null;
        }

        var fields = ['name', 'owner_id', 'due_date', 'description', 'color'];
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            if (data[field] !== undefined) {
                gr.setValue(field, String(data[field] || ''));
            }
        }
        gr.update();
        return this.getPortfolio(portfolioId);
    },

    getTimeline: function (portfolioId) {
        var data = this.viewData.getPortfolioViewData(portfolioId, this._defaultViewId(portfolioId));
        if (!data) {
            return { items: [], start_date: null, end_date: null };
        }
        var items = data.rows.map(function (row) {
            return {
                sys_id: row.sys_id,
                name: row.name,
                project_key: row.project_key,
                start_date: row.start_date,
                due_date: row.due_date,
                end_date: row.due_date,
                priority: row.priority,
                status: row.status,
            };
        });
        var startDate = null;
        var endDate = null;
        for (var i = 0; i < items.length; i++) {
            var itemStart = items[i].start_date;
            var itemEnd = items[i].due_date || items[i].end_date;
            if (itemStart && (!startDate || itemStart < startDate)) {
                startDate = itemStart;
            }
            if (itemEnd && (!endDate || itemEnd > endDate)) {
                endDate = itemEnd;
            }
        }
        return {
            items: items,
            start_date: startDate,
            end_date: endDate,
        };
    },

    _getPortfolioRows: function (portfolioId) {
        var data = this.viewData.getPortfolioViewData(portfolioId, this._defaultViewId(portfolioId));
        return (data && data.rows) ? data.rows : [];
    },

    _getProjectRagMap: function (projectIds) {
        var ragMap = {};
        if (!projectIds || !projectIds.length) {
            return ragMap;
        }
        var gr = new GlideRecord('x_gzi_zflow_status_update');
        gr.addQuery('entity_type', 'project');
        gr.addQuery('entity_id', 'IN', projectIds.join(','));
        gr.orderByDesc('sys_created_on');
        gr.query();
        while (gr.next()) {
            var entityId = gr.getValue('entity_id');
            if (!ragMap[entityId]) {
                ragMap[entityId] = gr.getValue('status') || 'no_recent_updates';
            }
        }
        return ragMap;
    },

    _countRag: function (rows, ragMap) {
        var counts = { on_track: 0, at_risk: 0, off_track: 0, no_updates: 0 };
        for (var i = 0; i < rows.length; i++) {
            var rag = ragMap[rows[i].sys_id] || 'no_recent_updates';
            if (rag === 'on_track') {
                counts.on_track++;
            } else if (rag === 'at_risk') {
                counts.at_risk++;
            } else if (rag === 'off_track') {
                counts.off_track++;
            } else {
                counts.no_updates++;
            }
        }
        return counts;
    },

    _formatDayLabel: function (dateStr) {
        if (!dateStr) {
            return null;
        }
        var parts = String(dateStr).split('-');
        if (parts.length < 3) {
            return String(dateStr);
        }
        var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var monthIndex = parseInt(parts[1], 10) - 1;
        if (monthIndex < 0 || monthIndex > 11) {
            return String(dateStr);
        }
        return monthNames[monthIndex] + ' ' + parseInt(parts[2], 10);
    },

    getDashboard: function (portfolioId) {
        var rows = this._getPortfolioRows(portfolioId);
        var projectIds = rows.map(function (row) {
            return row.sys_id;
        });
        var ragMap = this._getProjectRagMap(projectIds);
        var ragCounts = this._countRag(rows, ragMap);

        var priorityLabels = {
            high: 'High',
            strategic: 'Strategic',
            medium: 'Medium',
            low: 'Low',
        };
        var priorityCounts = {};
        for (var i = 0; i < rows.length; i++) {
            var priority = rows[i].priority || 'none';
            priorityCounts[priority] = (priorityCounts[priority] || 0) + 1;
        }
        var priorityBreakdown = [];
        for (var key in priorityCounts) {
            if (priorityCounts.hasOwnProperty(key)) {
                priorityBreakdown.push({
                    name: priorityLabels[key] || key,
                    value: priorityCounts[key],
                });
            }
        }
        priorityBreakdown.sort(function (a, b) {
            return String(a.name).localeCompare(String(b.name));
        });

        return {
            total_projects: rows.length,
            on_track: ragCounts.on_track,
            at_risk: ragCounts.at_risk,
            off_track: ragCounts.off_track,
            status_breakdown: [
                { name: 'On track', value: ragCounts.on_track },
                { name: 'At risk', value: ragCounts.at_risk },
                { name: 'Off track', value: ragCounts.off_track },
                { name: 'No updates', value: ragCounts.no_updates },
            ],
            priority_breakdown: priorityBreakdown,
        };
    },

    getProgress: function (portfolioId) {
        var portfolio = this.getPortfolio(portfolioId);
        if (!portfolio) {
            return null;
        }

        var rows = this._getPortfolioRows(portfolioId);
        var projectIds = rows.map(function (row) {
            return row.sys_id;
        });
        var ragMap = this._getProjectRagMap(projectIds);
        var ragCounts = this._countRag(rows, ragMap);

        var updates = [];
        var authorIds = [];
        var gr = new GlideRecord('x_gzi_zflow_status_update');
        gr.addQuery('entity_type', 'portfolio');
        gr.addQuery('entity_id', portfolioId);
        gr.orderByDesc('sys_created_on');
        gr.setLimit(20);
        gr.query();
        while (gr.next()) {
            var authorId = gr.getValue('author_id');
            if (authorId) {
                authorIds.push(authorId);
            }
            updates.push({
                sys_id: gr.getUniqueValue(),
                body: gr.getValue('text'),
                summary: gr.getValue('text'),
                rag: gr.getValue('status'),
                author_id: authorId,
                created_at: gr.getValue('sys_created_on'),
            });
        }

        var users = this.userService.getUsersByIds(authorIds);
        for (var i = 0; i < updates.length; i++) {
            updates[i].author = users[updates[i].author_id] || null;
        }

        if (portfolio.owner_id) {
            var ownerMap = this.userService.getUsersByIds([portfolio.owner_id]);
            portfolio.owner = ownerMap[portfolio.owner_id] || null;
        }

        return {
            portfolio: portfolio,
            status_updates: updates,
            on_track: ragCounts.on_track,
            at_risk: ragCounts.at_risk,
            total: rows.length,
        };
    },

    getWorkload: function (portfolioId) {
        var matrix = {};
        var daySet = {};
        var pp = new GlideRecord('x_gzi_zflow_portfolio_project');
        pp.addQuery('portfolio_id', portfolioId);
        pp.query();
        while (pp.next()) {
            var pt = new GlideRecord('x_gzi_zflow_project_task');
            pt.addQuery('project_id', pp.getValue('project_id'));
            pt.query();
            while (pt.next()) {
                var task = pt.task_id.getRefRecord();
                if (!task.isValidRecord()) {
                    continue;
                }
                var assignee = task.getValue('assignee_id');
                var dueDate = task.getValue('due_date');
                if (!assignee || !dueDate) {
                    continue;
                }
                var dayLabel = this._formatDayLabel(dueDate);
                if (!dayLabel) {
                    continue;
                }
                daySet[dayLabel] = dueDate;
                if (!matrix[assignee]) {
                    matrix[assignee] = {};
                }
                matrix[assignee][dayLabel] = (matrix[assignee][dayLabel] || 0) + 1;
            }
        }

        var days = Object.keys(daySet).sort(function (a, b) {
            return String(daySet[a]).localeCompare(String(daySet[b]));
        });

        var userIds = Object.keys(matrix);
        var users = this.userService.getUsersByIds(userIds);
        var people = [];
        for (var userId in matrix) {
            if (matrix.hasOwnProperty(userId)) {
                people.push({
                    sys_id: userId,
                    name: (users[userId] && users[userId].name) || userId,
                    tasks: matrix[userId],
                });
            }
        }
        people.sort(function (a, b) {
            return String(a.name).localeCompare(String(b.name));
        });

        return { people: people, days: days };
    },

    linkProject: function (portfolioId, projectId) {
        var gr = new GlideRecord('x_gzi_zflow_portfolio_project');
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
        var gr = new GlideRecord('x_gzi_zflow_portfolio_project');
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
        var gr = new GlideRecord('x_gzi_zflow_portfolio_project');
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
        var gr = new GlideRecord('x_gzi_zflow_custom_view');
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
