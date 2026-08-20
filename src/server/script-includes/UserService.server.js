var UserService = Class.create();
UserService.prototype = {
    initialize: function () {},

    _mapUser: function (gr) {
        return {
            sys_id: gr.getUniqueValue(),
            name: gr.getValue('name'),
            email: gr.getValue('email'),
            title: gr.getValue('title'),
            avatar: gr.getValue('avatar'),
        };
    },

    searchUsers: function (query, limit) {
        limit = parseInt(limit, 10) || 20;
        var results = [];
        var gr = new GlideRecord('sys_user');
        gr.addActiveQuery();
        if (query) {
            gr.addEncodedQuery('nameLIKE' + query + '^ORemailLIKE' + query);
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
        var gr = new GlideRecord('sys_user_group');
        if (query) {
            gr.addEncodedQuery('nameLIKE' + query);
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
