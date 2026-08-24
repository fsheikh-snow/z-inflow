/// <reference path="../types/x_gzi_ppm.d.ts" />
import { gs } from '@servicenow/glide'
import {
    CapacityService,
    MemberService,
    PortfolioService,
    ProjectTaskService,
    UserService,
    ViewDataService,
} from '@servicenow/glide/x_gzi_ppm'

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

function hasFn(obj: unknown, name: string): boolean {
    return Boolean(obj && typeof (obj as Record<string, unknown>)[name] === 'function')
}

function copyPrototypeFns(target: Record<string, unknown>, proto: Record<string, unknown> | null | undefined) {
    if (!target || !proto) {
        return target
    }
    for (const key in proto) {
        if (!Object.prototype.hasOwnProperty.call(proto, key)) {
            continue
        }
        if (typeof proto[key] === 'function' && typeof target[key] !== 'function') {
            target[key] = proto[key]
        }
    }
    return target
}

/**
 * ES module `new ScriptInclude()` can yield a blank host object `[object Object]`
 * whose prototype chain does not include Class.create methods. Probe, then
 * reconstruct from `.prototype` or use the import if it already has methods.
 */
function instantiateScriptInclude<T>(Imported: unknown, className: string, probeMethod: string): T {
    const nested =
        Imported &&
        typeof Imported === 'object' &&
        !hasFn(Imported, probeMethod) &&
        typeof (Imported as Record<string, unknown>)[className] === 'function'
            ? (Imported as Record<string, unknown>)[className]
            : Imported

    let instance: unknown = null
    if (typeof nested === 'function') {
        try {
            instance = new (nested as new () => unknown)()
        } catch (_error) {
            instance = null
        }
        if (hasFn(instance, probeMethod)) {
            return instance as T
        }
        const proto = (nested as { prototype?: Record<string, unknown> }).prototype
        if (instance && proto) {
            copyPrototypeFns(instance as Record<string, unknown>, proto)
            if (hasFn(instance, probeMethod)) {
                return instance as T
            }
        }
        if (proto) {
            const created = Object.create(proto) as Record<string, unknown>
            if (typeof created.initialize === 'function') {
                try {
                    created.initialize()
                } catch (_error) {
                    // prototype bag may not need initialize
                }
            }
            copyPrototypeFns(created, proto)
            if (hasFn(created, probeMethod)) {
                return created as T
            }
        }
        if (hasFn(nested, probeMethod)) {
            return nested as T
        }
    }

    if (hasFn(nested, probeMethod)) {
        return nested as T
    }

    const proto = nested && (nested as { prototype?: Record<string, unknown> }).prototype
    if (proto && hasFn(proto, probeMethod)) {
        const created = Object.create(proto) as Record<string, unknown>
        if (typeof created.initialize === 'function') {
            try {
                created.initialize()
            } catch (_error) {
                // ignore
            }
        }
        copyPrototypeFns(created, proto)
        if (hasFn(created, probeMethod)) {
            return created as T
        }
    }

    throw new Error(
        className +
            ' has no ' +
            probeMethod +
            ' (typeof=' +
            typeof nested +
            '). Redeploy Script Include ' +
            className +
            '.'
    )
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
        return instantiateScriptInclude<InstanceType<typeof PortfolioService>>(
            PortfolioService,
            'PortfolioService',
            'createPortfolio'
        )
    })
}

export function viewDataService() {
    return safeService('ViewDataService', function () {
        return instantiateScriptInclude<InstanceType<typeof ViewDataService>>(
            ViewDataService,
            'ViewDataService',
            'getPortfolioViews'
        )
    })
}

export function projectTaskService() {
    return safeService('ProjectTaskService', function () {
        return instantiateScriptInclude<InstanceType<typeof ProjectTaskService>>(
            ProjectTaskService,
            'ProjectTaskService',
            'createProject'
        )
    })
}

export function capacityService() {
    return safeService('CapacityService', function () {
        return instantiateScriptInclude<InstanceType<typeof CapacityService>>(
            CapacityService,
            'CapacityService',
            'listPlans'
        )
    })
}

export function userService() {
    return safeService('UserService', function () {
        return instantiateScriptInclude<InstanceType<typeof UserService>>(UserService, 'UserService', 'searchUsers')
    })
}

export function memberService() {
    return safeService('MemberService', function () {
        return instantiateScriptInclude<InstanceType<typeof MemberService>>(MemberService, 'MemberService', 'seedMembers')
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
