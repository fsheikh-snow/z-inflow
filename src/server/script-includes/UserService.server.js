var UserService = Class.create();
UserService.prototype = {
    initialize: function () {},

    _mapUser: function (gr) {
        return {
            sys_id: gr.getUniqueValue(),
            name: gr.getValue('name'),
            email: gr.getValue('email'),
            user_name: gr.getValue('user_name'),
            title: gr.getValue('title'),
            avatar: gr.getValue('avatar') || gr.getValue('photo'),
        };
    },

    searchUsers: function (query, limit) {
        limit = parseInt(limit, 10) || 20;
        var results = [];
        var q = String(query == null ? '' : query).trim();
        var gr = new GlideRecord('sys_user');
        gr.addActiveQuery();
        if (q) {
            // Search display name, email, and login — CONTAINS avoids encoded-query edge cases
            var qc = gr.addQuery('name', 'CONTAINS', q);
            qc.addOrCondition('email', 'CONTAINS', q);
            qc.addOrCondition('user_name', 'CONTAINS', q);
        }
        gr.setLimit(limit);
        gr.orderBy('name');
        gr.query();
        while (gr.next()) {
            results.push(this._mapUser(gr));
        }
        return results;
    },

    getTeamMembers: function (groupId) {
        var results = [];
        if (!groupId) {
            return results;
        }
        var gr = new GlideRecord('sys_user_grmember');
        gr.addQuery('group', groupId);
        gr.query();
        while (gr.next()) {
            var user = gr.user.getRefRecord();
            if (user.isValidRecord()) {
                results.push(this._mapUser(user));
            }
        }
        return results;
    },

    getUsersByIds: function (userIds) {
        var map = {};
        if (!userIds || !userIds.length) {
            return map;
        }
        var gr = new GlideRecord('sys_user');
        gr.addQuery('sys_id', 'IN', userIds.join(','));
        gr.query();
        while (gr.next()) {
            map[gr.getUniqueValue()] = this._mapUser(gr);
        }
        return map;
    },

    _mapGroup: function (gr) {
        return {
            sys_id: gr.getUniqueValue(),
            name: gr.getValue('name'),
        };
    },

    searchGroups: function (query, limit) {
        limit = parseInt(limit, 10) || 20;
        var results = [];
        var q = String(query == null ? '' : query).trim();
        var gr = new GlideRecord('sys_user_group');
        if (q) {
            gr.addQuery('name', 'CONTAINS', q);
        }
        gr.setLimit(limit);
        gr.orderBy('name');
        gr.query();
        while (gr.next()) {
            results.push(this._mapGroup(gr));
        }
        return results;
    },

    getGroupsByIds: function (groupIds) {
        var map = {};
        if (!groupIds || !groupIds.length) {
            return map;
        }
        var gr = new GlideRecord('sys_user_group');
        gr.addQuery('sys_id', 'IN', groupIds.join(','));
        gr.query();
        while (gr.next()) {
            map[gr.getUniqueValue()] = this._mapGroup(gr);
        }
        return map;
    },

    type: 'UserService',
};
