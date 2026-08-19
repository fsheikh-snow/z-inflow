/// <reference path="../types/x_gzi_z_ppm.d.ts" />
import { gs } from '@servicenow/glide'

export function parseBody(request: { body: { dataString: string } }): Record<string, unknown> {
    if (!request.body || !request.body.dataString) {
        return {}
    }
    try {
        return JSON.parse(request.body.dataString) as Record<string, unknown>
    } catch (_error) {
        return {}
    }
}

export function sendJson(response: { setBody: (body: unknown) => void; setStatus: (code: number) => void }, body: unknown, status?: number) {
    if (status) {
        response.setStatus(status)
    }
    response.setBody({ result: body })
}

export function sendError(response: { setBody: (body: unknown) => void; setStatus: (code: number) => void }, message: string, status: number) {
    response.setStatus(status)
    response.setBody({ error: { message } })
}

export function getPathParam(request: { pathParams: Record<string, string> }, name: string): string {
    return request.pathParams[name] || ''
}

export function getQueryParam(request: { queryParams: Record<string, { firstOrNull?: () => string }> }, name: string): string {
    const param = request.queryParams[name]
    return param && param.firstOrNull ? param.firstOrNull() || '' : ''
}

export function requireAuth(): string {
    const userId = gs.getUserID()
    if (!userId) {
        throw new Error('Authentication required')
    }
    return userId
}

export function portfolioService() {
    return new x_gzi_z_ppm.PortfolioService()
}

export function viewDataService() {
    return new x_gzi_z_ppm.ViewDataService()
}

export function projectTaskService() {
    return new x_gzi_z_ppm.ProjectTaskService()
}

export function capacityService() {
    return new x_gzi_z_ppm.CapacityService()
}

export function userService() {
    return new x_gzi_z_ppm.UserService()
}
