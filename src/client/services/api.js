const API_BASE = '/api/x_gzi_z_ppm/v1'

function getAuthHeaders() {
    const headers = {
        Accept: 'application/json',
    }
    if (typeof window !== 'undefined' && window.g_ck) {
        headers['X-UserToken'] = window.g_ck
    }
    return headers
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
            message = errorData.error?.message || errorData.message || message
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
        return json.result !== undefined ? json.result : json
    }

    return response.text()
}

export { API_BASE }
