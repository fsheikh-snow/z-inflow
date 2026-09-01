var MemberService = Class.create();
MemberService.prototype = {
    initialize: function () {},

    _userService: function () {
        if (!this.__userService) {
            this.__userService = new x_gzi_zscaler_ppm.UserService();
        }
        return this.__userService;
    },

    _normalizeRole: function (role) {
        var r = String(role || 'viewer').toLowerCase();
        if (r === 'owner' || r === 'editor' || r === 'commenter' || r === 'viewer') {
            return r;
        }
        return 'viewer';
    },

    _config: function (entityType) {
        if (entityType === 'portfolio') {
            return {
                table: 'x_gzi_zscaler_ppm_portfolio_member',
                parentField: 'portfolio_id',
                parentTable: 'x_gzi_zscaler_ppm_portfolio',
            };
        }
        return {
            table: 'x_gzi_zscaler_ppm_project_member',
            parentField: 'project_id',
            parentTable: 'x_gzi_zscaler_ppm_project',
        };
    },

    _serialize: function (gr, cfg, userMap) {
        var userId = gr.getValue('user_id') || '';
        var row = {
            sys_id: gr.getUniqueValue(),
            user_id: userId,
            role: gr.getValue('role') || 'viewer',
            user: (userMap && userMap[userId]) || null,
        };
        row[cfg.parentField] = gr.getValue(cfg.parentField) || '';
        return row;
    },

    listMembers: function (entityType, entityId) {
        var results = [];
        var cfg = this._config(entityType);
        if (!entityId) {
            return results;
        }
        var gr = new GlideRecord(cfg.table);
        if (!gr.isValid()) {
            return results;
        }
        gr.addQuery(cfg.parentField, entityId);
        gr.orderBy('role');
        gr.query();
        var userIds = [];
        var rows = [];
        while (gr.next()) {
            var userId = gr.getValue('user_id');
            if (userId) {
                userIds.push(userId);
            }
            rows.push({
                sys_id: gr.getUniqueValue(),
                user_id: userId || '',
                role: gr.getValue('role') || 'viewer',
                parent_id: gr.getValue(cfg.parentField) || '',
            });
        }
        var userMap = this._userService().getUsersByIds(userIds);
        for (var i = 0; i < rows.length; i++) {
            var item = {
                sys_id: rows[i].sys_id,
                user_id: rows[i].user_id,
                role: rows[i].role,
                user: userMap[rows[i].user_id] || null,
            };
            item[cfg.parentField] = rows[i].parent_id;
            results.push(item);
        }
        return results;
    },

    getMember: function (entityType, memberId) {
        var cfg = this._config(entityType);
        var gr = new GlideRecord(cfg.table);
        if (!gr.isValid() || !gr.get(memberId)) {
            return null;
        }
        var userId = gr.getValue('user_id');
        var userMap = this._userService().getUsersByIds(userId ? [userId] : []);
        return this._serialize(gr, cfg, userMap);
    },

    _syncOwnerId: function (cfg, entityId, members) {
        var ownerId = '';
        if (members && members.length) {
            for (var i = 0; i < members.length; i++) {
                if (String(members[i].role || '').toLowerCase() === 'owner' && members[i].user_id) {
                    ownerId = String(members[i].user_id);
                    break;
                }
            }
        }
        var parent = new GlideRecord(cfg.parentTable);
        if (parent.get(entityId)) {
            parent.setValue('owner_id', ownerId);
            parent.update();
        }
        return ownerId;
    },

    addMember: function (entityType, entityId, data) {
        var cfg = this._config(entityType);
        var userId = String((data && data.user_id) || '').trim();
        if (!entityId || !userId) {
            return null;
        }
        var role = this._normalizeRole(data && data.role);

        var existing = new GlideRecord(cfg.table);
        existing.addQuery(cfg.parentField, entityId);
        existing.addQuery('user_id', userId);
        existing.setLimit(1);
        existing.query();
        if (existing.next()) {
            existing.setValue('role', role);
            existing.update();
            this._syncOwnerId(cfg, entityId, this.listMembers(entityType, entityId));
            return this.getMember(entityType, existing.getUniqueValue());
        }

        var gr = new GlideRecord(cfg.table);
        gr.initialize();
        gr.setValue(cfg.parentField, entityId);
        gr.setValue('user_id', userId);
        gr.setValue('role', role);
        var sysId = gr.insert();
        if (!sysId) {
            return null;
        }
        this._syncOwnerId(cfg, entityId, this.listMembers(entityType, entityId));
        return this.getMember(entityType, sysId);
    },

    updateMember: function (entityType, memberId, data) {
        var cfg = this._config(entityType);
        var gr = new GlideRecord(cfg.table);
        if (!gr.get(memberId)) {
            return null;
        }
        if (data && data.role !== undefined) {
            gr.setValue('role', this._normalizeRole(data.role));
        }
        gr.update();
        var entityId = gr.getValue(cfg.parentField);
        this._syncOwnerId(cfg, entityId, this.listMembers(entityType, entityId));
        return this.getMember(entityType, memberId);
    },

    removeMember: function (entityType, memberId) {
        var cfg = this._config(entityType);
        var gr = new GlideRecord(cfg.table);
        if (!gr.get(memberId)) {
            return false;
        }
        var entityId = gr.getValue(cfg.parentField);
        gr.deleteRecord();
        this._syncOwnerId(cfg, entityId, this.listMembers(entityType, entityId));
        return true;
    },

    /**
     * Replace all members for an entity. Members are source of truth for access;
     * owner_id on the parent mirrors the first Owner for list/display views.
     */
    setMembers: function (entityType, entityId, members) {
        var cfg = this._config(entityType);
        if (!entityId) {
            return [];
        }
        var list = Array.isArray(members) ? members : [];
        var desired = {};
        var ordered = [];
        for (var i = 0; i < list.length; i++) {
            var userId = String(list[i].user_id || '').trim();
            if (!userId || desired[userId]) {
                continue;
            }
            var entry = { user_id: userId, role: this._normalizeRole(list[i].role) };
            desired[userId] = entry;
            ordered.push(entry);
        }

        var existing = new GlideRecord(cfg.table);
        existing.addQuery(cfg.parentField, entityId);
        existing.query();
        while (existing.next()) {
            var existingUser = existing.getValue('user_id');
            if (!desired[existingUser]) {
                existing.deleteRecord();
            } else {
                existing.setValue('role', desired[existingUser].role);
                existing.update();
                desired[existingUser]._updated = true;
            }
        }

        for (var j = 0; j < ordered.length; j++) {
            if (desired[ordered[j].user_id]._updated) {
                continue;
            }
            var gr = new GlideRecord(cfg.table);
            gr.initialize();
            gr.setValue(cfg.parentField, entityId);
            gr.setValue('user_id', ordered[j].user_id);
            gr.setValue('role', ordered[j].role);
            gr.insert();
        }

        var result = this.listMembers(entityType, entityId);
        this._syncOwnerId(cfg, entityId, result);
        return result;
    },

    /**
     * Seed members on create: prefer explicit members[]; else owner_id as sole Owner.
     */
    seedMembers: function (entityType, entityId, data) {
        if (!entityId || !data) {
            return [];
        }
        if (data.members !== undefined && Array.isArray(data.members)) {
            return this.setMembers(entityType, entityId, data.members);
        }
        var ownerId = String(data.owner_id || '').trim();
        if (ownerId) {
            return this.setMembers(entityType, entityId, [{ user_id: ownerId, role: 'owner' }]);
        }
        return [];
    },

    type: 'MemberService',
};
