import { apiRequest } from './api'

export const userService = {
    search(query) {
        const search = new URLSearchParams({ q: String(query || '').trim() }).toString()
        return apiRequest(`/users/search?${search}`).then((data) => (Array.isArray(data) ? data : []))
    },

    searchGroups(query) {
        const search = new URLSearchParams({ q: String(query || '').trim() }).toString()
        return apiRequest(`/groups/search?${search}`).then((data) => (Array.isArray(data) ? data : []))
    },

    getTeamMembers(teamId) {
        return apiRequest(`/teams/${teamId}/members`)
    },
}

export const configService = {
    listAutomations(projectId) {
        const suffix = projectId ? `?project_id=${projectId}` : ''
        return apiRequest(`/automations${suffix}`)
    },

    listIntakeForms() {
        return apiRequest('/intake-forms')
    },
}
