import { apiRequest } from './api'

export const capacityService = {
    listPlans() {
        return apiRequest('/capacity/plans')
    },

    getPlan(planId) {
        return apiRequest(`/capacity/plans/${planId}`)
    },

    getGrid(planId, params = {}) {
        const search = new URLSearchParams(params).toString()
        const suffix = search ? `?${search}` : ''
        return apiRequest(`/capacity/plans/${planId}/grid${suffix}`)
    },

    getAllocations(planId) {
        return apiRequest(`/capacity/plans/${planId}/allocations`)
    },

    updateAllocation(planId, allocationId, data) {
        return apiRequest(`/capacity/plans/${planId}/allocations/${allocationId}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        })
    },
}
