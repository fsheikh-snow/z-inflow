import { apiRequest } from './api'

export const portfolioService = {
    list() {
        return apiRequest('/portfolios')
    },

    get(id) {
        return apiRequest(`/portfolios/${id}`)
    },

    getViews(portfolioId) {
        return apiRequest(`/portfolios/${portfolioId}/views`)
    },

    getViewData(portfolioId, viewId, params = {}) {
        const search = new URLSearchParams(params).toString()
        const suffix = search ? `?${search}` : ''
        return apiRequest(`/portfolios/${portfolioId}/views/${viewId}/data${suffix}`)
    },

    getTimeline(portfolioId) {
        return apiRequest(`/portfolios/${portfolioId}/timeline`)
    },

    getDashboard(portfolioId) {
        return apiRequest(`/portfolios/${portfolioId}/dashboard`)
    },

    getProgress(portfolioId) {
        return apiRequest(`/portfolios/${portfolioId}/progress`)
    },

    getWorkload(portfolioId) {
        return apiRequest(`/portfolios/${portfolioId}/workload`)
    },

    addProject(portfolioId, projectId) {
        return apiRequest(`/portfolios/${portfolioId}/projects`, {
            method: 'POST',
            body: JSON.stringify({ project_id: projectId }),
        })
    },

    removeProject(portfolioId, projectId) {
        return apiRequest(`/portfolios/${portfolioId}/projects/${projectId}`, {
            method: 'DELETE',
        })
    },
}
