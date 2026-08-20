import { apiRequest } from './api'

export const projectService = {
    list(params = {}) {
        const search = new URLSearchParams(params).toString()
        const suffix = search ? `?${search}` : ''
        return apiRequest(`/projects${suffix}`)
    },

    get(id) {
        return apiRequest(`/projects/${id}`)
    },

    create(data) {
        return apiRequest('/projects', {
            method: 'POST',
            body: JSON.stringify(data),
        })
    },

    update(id, data) {
        return apiRequest(`/projects/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        })
    },

    createTask(projectId, data) {
        return apiRequest(`/projects/${projectId}/tasks`, {
            method: 'POST',
            body: JSON.stringify(data),
        })
    },

    getSections(projectId) {
        return apiRequest(`/projects/${projectId}/sections`)
    },

    getBoard(projectId) {
        return apiRequest(`/projects/${projectId}/board`)
    },

    getTasks(projectId, params = {}) {
        const search = new URLSearchParams(params).toString()
        const suffix = search ? `?${search}` : ''
        return apiRequest(`/projects/${projectId}/tasks${suffix}`)
    },

    getPortfolios(projectId) {
        return apiRequest(`/projects/${projectId}/portfolios`)
    },

    listMembers(projectId) {
        return apiRequest(`/projects/${projectId}/members`)
    },

    addMember(projectId, data) {
        return apiRequest(`/projects/${projectId}/members`, {
            method: 'POST',
            body: JSON.stringify(data),
        })
    },

    updateMember(projectId, memberId, data) {
        return apiRequest(`/projects/${projectId}/members/${memberId}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        })
    },

    removeMember(projectId, memberId) {
        return apiRequest(`/projects/${projectId}/members/${memberId}`, {
            method: 'DELETE',
        })
    },

    updateTask(taskId, data) {
        return apiRequest(`/tasks/${taskId}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        })
    },

    reorderBoard(projectId, columnId, taskIds) {
        return apiRequest(`/projects/${projectId}/board`, {
            method: 'PATCH',
            body: JSON.stringify({ column_id: columnId, task_ids: taskIds }),
        })
    },
}
