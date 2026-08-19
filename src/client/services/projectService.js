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
