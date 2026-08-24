var UserService = Class.create()
UserService.prototype = {
    initialize: function () {},

    /**
     * Batch fetch users by sys_id array
     * @param {string[]} sysIds - Array of user sys_ids
     * @returns {Object} Map of sys_id -> user object
     */
    getUsersById: function (sysIds) {
        var result = {}
        if (!sysIds || sysIds.length === 0) {
            return result
        }

        var gr = new GlideRecord('sys_user')
        gr.addQuery('sys_id', 'IN', sysIds.join(','))
        gr.query()

        while (gr.next()) {
            result[gr.getUniqueValue()] = {
                sys_id: gr.getUniqueValue(),
                name: gr.getValue('name') || '',
                email: gr.getValue('email') || '',
                user_name: gr.getValue('user_name') || '',
                title: gr.getValue('title') || '',
                photo: gr.getValue('photo') || '',
                active: gr.getValue('active') === 'true',
            }
        }

        return result
    },

    /**
     * Get members of a group
     * @param {string} groupId - sys_id of the group
     * @returns {Object[]} Array of user objects
     */
    getGroupMembers: function (groupId) {
        var members = []
        if (!groupId) {
            return members
        }

        var gr = new GlideRecord('sys_user_grmember')
        gr.addQuery('group', groupId)
        gr.query()

        var userIds = []
        while (gr.next()) {
            userIds.push(gr.getValue('user'))
        }

        if (userIds.length === 0) {
            return members
        }

        var userMap = this.getUsersById(userIds)
        for (var i = 0; i < userIds.length; i++) {
            if (userMap[userIds[i]]) {
                members.push(userMap[userIds[i]])
            }
        }

        return members
    },

    /**
     * Search users by name or email
     * @param {string} query - Search query string
     * @returns {Object[]} Array of matching user objects
     */
    searchUsers: function (query) {
        var results = []
        if (!query) {
            return results
        }

        var gr = new GlideRecord('sys_user')
        gr.addQuery('active', true)
        var qc = gr.addQuery('name', 'CONTAINS', query)
        qc.addOrCondition('email', 'CONTAINS', query)
        qc.addOrCondition('user_name', 'CONTAINS', query)
        gr.setLimit(25)
        gr.query()

        while (gr.next()) {
            results.push({
                sys_id: gr.getUniqueValue(),
                name: gr.getValue('name') || '',
                email: gr.getValue('email') || '',
                user_name: gr.getValue('user_name') || '',
                title: gr.getValue('title') || '',
                photo: gr.getValue('photo') || '',
            })
        }

        return results
    },

    /**
     * Search groups by name
     * @param {string} query - Search query string
     * @returns {Object[]} Array of matching group objects
     */
    searchGroups: function (query) {
        var results = []
        if (!query) {
            return results
        }

        var gr = new GlideRecord('sys_user_group')
        gr.addQuery('active', true)
        gr.addQuery('name', 'CONTAINS', query)
        gr.setLimit(25)
        gr.query()

        while (gr.next()) {
            results.push({
                sys_id: gr.getUniqueValue(),
                name: gr.getValue('name') || '',
                description: gr.getValue('description') || '',
                manager: gr.getValue('manager') || '',
            })
        }

        return results
    },

    type: 'UserService',
}
