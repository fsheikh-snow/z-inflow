import { capacityService, getPathParam, getQueryParam, parseBody, sendError, sendJson, userService } from './helpers'

export function listCapacityPlans(request: any, response: any) {
    const svc = capacityService()
    const workspaceId = getQueryParam(request, 'workspace_id')
    sendJson(response, svc.listPlans(workspaceId))
}

export function getCapacityPlan(request: any, response: any) {
    const planId = getPathParam(request, 'id')
    const svc = capacityService()
    const plan = svc.getPlan(planId)
    if (!plan) {
        sendError(response, 'Capacity plan not found', 404)
        return
    }
    sendJson(response, plan)
}

export function getCapacityPlanGrid(request: any, response: any) {
    const planId = getPathParam(request, 'id')
    const svc = capacityService()
    const grid = svc.getPlanGrid(planId)
    if (!grid) {
        sendError(response, 'Capacity plan not found', 404)
        return
    }
    sendJson(response, grid)
}

export function getCapacityPlanAllocations(request: any, response: any) {
    const planId = getPathParam(request, 'id')
    const svc = capacityService()
    const allocations = svc.getPlanAllocations(planId)
    if (allocations === null) {
        sendError(response, 'Capacity plan not found', 404)
        return
    }
    sendJson(response, allocations)
}

export function updateCapacityPlanAllocation(request: any, response: any) {
    const planId = getPathParam(request, 'id')
    const allocationId = getPathParam(request, 'allocationId')
    const body = parseBody(request)
    const svc = capacityService()
    const allocation = svc.updateAllocation(planId, allocationId, body)
    if (!allocation) {
        sendError(response, 'Allocation not found', 404)
        return
    }
    sendJson(response, allocation)
}

export function searchUsers(request: any, response: any) {
    const svc = userService()
    const query = getQueryParam(request, 'q')
    const limit = getQueryParam(request, 'limit')
    sendJson(response, svc.searchUsers(query, limit))
}

export function searchGroups(request: any, response: any) {
    const svc = userService()
    const query = getQueryParam(request, 'q')
    const limit = getQueryParam(request, 'limit')
    sendJson(response, svc.searchGroups(query, limit))
}

export function getTeamMembers(request: any, response: any) {
    const groupId = getPathParam(request, 'id')
    const svc = userService()
    sendJson(response, svc.getTeamMembers(groupId))
}
