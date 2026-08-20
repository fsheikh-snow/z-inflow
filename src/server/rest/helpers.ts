/// <reference path="../types/x_gzi_zflow.d.ts" />
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

export function getQueryParam(
    request: { queryParams?: Record<string, unknown>; getQueryParameter?: (name: string) => string },
    name: string
): string {
    if (typeof request.getQueryParameter === 'function') {
        const viaGetter = request.getQueryParameter(name)
        if (viaGetter != null && String(viaGetter) !== '') {
            return String(viaGetter)
        }
    }

    const param = request.queryParams?.[name]
    if (param == null) {
        return ''
    }
    if (typeof param === 'string' || typeof param === 'number' || typeof param === 'boolean') {
        return String(param)
    }
    if (typeof param === 'object') {
        const withFirst = param as { firstOrNull?: () => string; get?: (i: number) => string; 0?: string }
        if (typeof withFirst.firstOrNull === 'function') {
            return withFirst.firstOrNull() || ''
        }
        if (typeof withFirst.get === 'function') {
            return String(withFirst.get(0) || '')
        }
        if (withFirst[0] != null) {
            return String(withFirst[0])
        }
    }
    return String(param)
}

export function requireAuth(): string {
    const userId = gs.getUserID()
    if (!userId) {
        throw new Error('Authentication required')
    }
    return userId
}

export function portfolioService() {
    return new x_gzi_zflow.PortfolioService()
}

export function viewDataService() {
    return new x_gzi_zflow.ViewDataService()
}

export function projectTaskService() {
    return new x_gzi_zflow.ProjectTaskService()
}

export function capacityService() {
    return new x_gzi_zflow.CapacityService()
}

export function userService() {
    return new x_gzi_zflow.UserService()
}
