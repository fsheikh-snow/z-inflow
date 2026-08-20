/// <reference path="../types/x_gzi_zflow.d.ts" />
import { gs } from '@servicenow/glide'
import {
    CapacityService,
    MemberService,
    PortfolioService,
    ProjectTaskService,
    UserService,
    ViewDataService,
} from '@servicenow/glide/x_gzi_zflow'

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
    // Do not wrap as { result: body } — Scripted REST already wraps setBody once.
    // Double-wrapping made clients see { result: { result: […] } } and treat lists as [].
    response.setBody(body)
}

export function sendError(response: { setBody: (body: unknown) => void; setStatus: (code: number) => void }, message: string, status: number) {
    response.setStatus(status)
    response.setBody({ error: { message: String(message || 'Request failed') } })
}

export function getPathParam(request: { pathParams: Record<string, string> }, name: string): string {
    return request.pathParams[name] || ''
}

function coerceQueryValue(param: unknown): string {
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

export function getQueryParam(
    request: { queryParams?: Record<string, unknown>; getQueryParameter?: (name: string) => string },
    name: string
): string {
    try {
        if (typeof request.getQueryParameter === 'function') {
            const viaGetter = request.getQueryParameter(name)
            if (viaGetter != null && String(viaGetter) !== '') {
                return String(viaGetter)
            }
        }

        const params = request.queryParams
        if (!params) {
            return ''
        }
        return coerceQueryValue(params[name])
    } catch (_error) {
        return ''
    }
}

export function requireAuth(): string {
    const userId = gs.getUserID()
    if (!userId) {
        throw new Error('Authentication required')
    }
    return userId
}

function safeService<T>(name: string, factory: () => T): T {
    try {
        return factory()
    } catch (error: any) {
        const message = error && error.message ? error.message : String(error)
        gs.error(name + ' construction failed: ' + message)
        throw new Error(name + ' unavailable: ' + message)
    }
}

export function portfolioService() {
    return safeService('PortfolioService', function () {
        return new PortfolioService()
    })
}

export function viewDataService() {
    return safeService('ViewDataService', function () {
        return new ViewDataService()
    })
}

export function projectTaskService() {
    return safeService('ProjectTaskService', function () {
        return new ProjectTaskService()
    })
}

export function capacityService() {
    return safeService('CapacityService', function () {
        return new CapacityService()
    })
}

export function userService() {
    return safeService('UserService', function () {
        return new UserService()
    })
}

export function memberService() {
    return safeService('MemberService', function () {
        return new MemberService()
    })
}

/** List endpoints: never bubble uncaught exceptions as opaque 500s. */
export function safeList(
    response: { setBody: (body: unknown) => void; setStatus: (code: number) => void },
    label: string,
    fn: () => unknown
) {
    try {
        const data = fn()
        sendJson(response, Array.isArray(data) ? data : [])
    } catch (error: any) {
        const message = error && error.message ? String(error.message) : String(error || label + ' failed')
        gs.error(label + ': ' + message)
        // Prefer empty list over hard-failing the SPA shell.
        sendJson(response, [])
    }
}
