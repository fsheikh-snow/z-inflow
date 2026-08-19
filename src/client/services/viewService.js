import { apiRequest } from './api'

export const viewService = {
    get(viewId) {
        return apiRequest(`/views/${viewId}`)
    },

    update(viewId, data) {
        return apiRequest(`/views/${viewId}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        })
    },

    getCustomFields() {
        return apiRequest('/custom-fields')
    },

    getCustomFieldValues(params = {}) {
        const search = new URLSearchParams(params).toString()
        const suffix = search ? `?${search}` : ''
        return apiRequest(`/custom-fields/values${suffix}`)
    },
}
