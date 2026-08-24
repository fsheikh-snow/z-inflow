const API_BASE = '/api/x_gzi_ppm/v1'

function getAuthHeaders() {
    const headers = {
        Accept: 'application/json',
    }
    if (typeof window !== 'undefined' && window.g_ck) {
        headers['X-UserToken'] = window.g_ck
    }
    return headers
}

function coerceErrorMessage(value, fallback) {
    if (value == null) {
        return fallback
    }
    if (typeof value === 'string') {
        return value
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
        return String(value)
    }
    if (typeof value === 'object') {
        if (typeof value.message === 'string') {
            return value.message
        }
        try {
            return JSON.stringify(value)
        } catch {
            return fallback
        }
    }
    return fallback
}

export async function apiRequest(path, options = {}) {
    const url = path.startsWith('http') ? path : `${API_BASE}${path}`
    const response = await fetch(url, {
        ...options,
        headers: {
            ...getAuthHeaders(),
            ...(options.body ? { 'Content-Type': 'application/json' } : {}),
            ...options.headers,
        },
    })

    if (!response.ok) {
        let message = `HTTP error ${response.status}`
        try {
            const errorData = await response.json()
            message = coerceErrorMessage(
                errorData?.error?.message ?? errorData?.error ?? errorData?.message,
                message
            )
        } catch {
            // ignore parse errors
        }
        throw new Error(message)
    }

    if (response.status === 204) {
        return null
    }

    const contentType = response.headers.get('content-type') || ''
    if (contentType.includes('application/json')) {
        const json = await response.json()
        return unwrapSnResult(json)
    }

    return response.text()
}

/**
 * ServiceNow Scripted REST wraps setBody once as `{ result: … }`.
 * Older sendJson also wrapped as `{ result: body }`, producing
 * `{ result: { result: … } }`. Unwrap sole-key `result` wrappers so
 * list/search callers always see the real payload (array or object).
 */
function unwrapSnResult(payload) {
    let data = payload
    while (
        data &&
        typeof data === 'object' &&
        !Array.isArray(data) &&
        Object.prototype.hasOwnProperty.call(data, 'result') &&
        Object.keys(data).length === 1
    ) {
        data = data.result
    }
    return data
}

export { API_BASE }
