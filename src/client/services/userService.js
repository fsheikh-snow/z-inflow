import { apiRequest } from './api'

export const userService = {
    search(query) {
        const search = new URLSearchParams({ q: query }).toString()
        return apiRequest(`/users/search?${search}`)
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
