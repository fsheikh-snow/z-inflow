#!/usr/bin/env node
/**
 * Post-deploy API/UI smoke checks for x_gzi_zscaler_ppm on ServiceNow.
 *
 * Auth: reuses now-sdk stored credentials (same keychain as `now-sdk auth` /
 * `npm run deploy`). Override alias with SN_SDK_AUTH_ALIAS or --alias.
 *
 * Exit 1 on any 5xx or hard failure so CI / Cursor ship loops can gate on it.
 *
 * Agents cannot see the user's Chrome session — this replaces console-paste
 * debugging for API/server issues.
 */

import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const require = createRequire(import.meta.url)

/** @typedef {{ name: string, method?: string, path: string, kind: 'api' | 'html', body?: () => Record<string, unknown>, failOn?: (ctx: CheckContext) => string | null }} Check */
/** @typedef {{ status: number, body: string, ok: boolean, contentType: string }} CheckContext */

const DEFAULT_ALIAS = process.env.SN_SDK_AUTH_ALIAS || undefined
const BODY_SNIPPET = Number(process.env.SMOKE_BODY_CHARS || 180)
const TIMEOUT_MS = Number(process.env.SMOKE_TIMEOUT_MS || 30000)

const CHECKS = /** @type {Check[]} */ ([
    {
        name: 'GET portfolios',
        path: '/api/x_gzi_zscaler_ppm/v1/portfolios',
        kind: 'api',
    },
    {
        name: 'GET projects',
        path: '/api/x_gzi_zscaler_ppm/v1/projects',
        kind: 'api',
    },
    {
        name: 'POST portfolio',
        method: 'POST',
        path: '/api/x_gzi_zscaler_ppm/v1/portfolios',
        kind: 'api',
        body: () => ({ name: `Smoke Portfolio ${Date.now()}` }),
        failOn: ({ status, body }) => {
            if (status >= 500) return `HTTP ${status}`
            if (status === 201 || status === 200) return null
            return `HTTP ${status}: ${snippet(body, 120)}`
        },
    },
    {
        name: 'POST project',
        method: 'POST',
        path: '/api/x_gzi_zscaler_ppm/v1/projects',
        kind: 'api',
        body: () => ({ name: `Smoke Project ${Date.now()}` }),
        failOn: ({ status, body }) => {
            if (status >= 500) return `HTTP ${status}`
            if (status === 201 || status === 200) return null
            return `HTTP ${status}: ${snippet(body, 120)}`
        },
    },
    {
        name: 'GET users/search',
        path: '/api/x_gzi_zscaler_ppm/v1/users/search?q=a',
        kind: 'api',
    },
    {
        name: 'GET app.do',
        path: '/x_gzi_zscaler_ppm_app.do',
        kind: 'html',
        failOn: ({ status, body }) => {
            if (status >= 500) return `HTTP ${status}`
            if (/PM Workspace failed/i.test(body)) {
                return 'page contains "PM Workspace failed"'
            }
            if (/Something went wrong|Error processing/i.test(body) && !/PM Workspace/i.test(body)) {
                return 'page looks like a ServiceNow error shell'
            }
            return null
        },
    },
])

function parseArgs(argv) {
    const out = { alias: DEFAULT_ALIAS, help: false }
    for (let i = 0; i < argv.length; i++) {
        const a = argv[i]
        if (a === '--help' || a === '-h') out.help = true
        else if (a === '--alias' || a === '-a') out.alias = argv[++i]
        else if (a.startsWith('--alias=')) out.alias = a.slice('--alias='.length)
    }
    return out
}

function printHelp() {
    console.log(`Usage: node scripts/smoke-test.mjs [--alias <now-sdk-alias>]

Env:
  SN_SDK_AUTH_ALIAS   Credential alias (default: now-sdk default, e.g. sdk-ai-admin)
  SMOKE_BODY_CHARS    Body snippet length in table (default 180)
  SMOKE_TIMEOUT_MS    Per-request timeout ms (default 30000)

Examples:
  npm run smoke
  npm run smoke -- --alias sdk-ai-admin
  npm run ship
`)
}

function snippet(text, max = BODY_SNIPPET) {
    const oneLine = String(text ?? '')
        .replace(/\s+/g, ' ')
        .trim()
    if (oneLine.length <= max) return oneLine
    return `${oneLine.slice(0, max - 1)}…`
}

function pad(s, n) {
    const str = String(s)
    return str.length >= n ? str.slice(0, n) : str + ' '.repeat(n - str.length)
}

async function loadCredentialProvider() {
    // Prefer package dist; fall back to nested path used by @servicenow/sdk.
    const candidates = [
        '@servicenow/sdk-cli/dist/auth/index.js',
        path.join(process.cwd(), 'node_modules/@servicenow/sdk-cli/dist/auth/index.js'),
    ]
    let lastErr
    for (const id of candidates) {
        try {
            const mod = await import(id.startsWith('.') || id.startsWith('/') ? pathToFileURL(id).href : id)
            if (mod.credentialProvider) return mod.credentialProvider
        } catch (e) {
            lastErr = e
            try {
                const mod = require(id)
                if (mod.credentialProvider) return mod.credentialProvider
            } catch (e2) {
                lastErr = e2
            }
        }
    }
    throw new Error(
        `Cannot load now-sdk credentialProvider. Is @servicenow/sdk installed?\n${lastErr?.message || lastErr}`
    )
}

/**
 * @param {import('@servicenow/sdk-api').LazyCredential} cred
 * @param {Check} check
 */
async function runCheck(cred, check) {
    const base = cred.getUrl().origin.replace(/\/$/, '')
    const url = `${base}${check.path}`

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
    try {
        let authHeaders
        try {
            authHeaders = await cred.getHeaders()
        } catch (e) {
            const cause = e?.cause?.message || e?.message || String(e)
            return {
                name: check.name,
                path: check.path,
                status: 0,
                pass: false,
                reason: `auth/session: ${cause}`,
                snippet: '',
            }
        }

        const res = await fetch(url, {
            method: check.method || 'GET',
            headers: {
                Accept: check.kind === 'html' ? 'text/html,application/xhtml+xml' : 'application/json',
                ...(check.body ? { 'Content-Type': 'application/json' } : {}),
                ...authHeaders,
            },
            body: check.body ? JSON.stringify(check.body()) : undefined,
            redirect: 'follow',
            signal: controller.signal,
        })
        const contentType = res.headers.get('content-type') || ''
        const body = await res.text()
        /** @type {CheckContext} */
        const ctx = {
            status: res.status,
            body,
            ok: res.ok,
            contentType,
        }

        let reason = null
        if (check.failOn) {
            reason = check.failOn(ctx)
        } else if (ctx.status >= 400) {
            reason = `HTTP ${ctx.status}`
        }

        // Always fail hard on 5xx even if custom failOn returned null
        if (ctx.status >= 500) {
            reason = reason || `HTTP ${ctx.status}`
        }

        const pass = !reason

        return {
            name: check.name,
            path: check.path,
            status: ctx.status,
            pass,
            reason: reason || (pass ? '' : `HTTP ${ctx.status}`),
            snippet: snippet(body),
        }
    } catch (e) {
        const cause = e?.cause?.code || e?.cause?.message
        const msg =
            e?.name === 'AbortError'
                ? `timeout after ${TIMEOUT_MS}ms`
                : cause
                  ? `${e.message} (${cause})`
                  : e?.message || String(e)
        return {
            name: check.name,
            path: check.path,
            status: 0,
            pass: false,
            reason: msg,
            snippet: '',
        }
    } finally {
        clearTimeout(timer)
    }
}

function printTable(rows) {
    const cols = [
        { key: 'result', w: 6, label: 'RESULT' },
        { key: 'status', w: 6, label: 'STATUS' },
        { key: 'name', w: 22, label: 'CHECK' },
        { key: 'path', w: 42, label: 'PATH' },
        { key: 'detail', w: 60, label: 'DETAIL' },
    ]
    const header = cols.map((c) => pad(c.label, c.w)).join('  ')
    console.log(header)
    console.log(cols.map((c) => '-'.repeat(c.w)).join('  '))
    for (const row of rows) {
        const detail = row.pass ? row.snippet : row.reason + (row.snippet ? ` | ${row.snippet}` : '')
        const line = {
            result: row.pass ? 'PASS' : 'FAIL',
            status: row.status || 'ERR',
            name: row.name,
            path: row.path,
            detail: snippet(detail, 60),
        }
        console.log(cols.map((c) => pad(line[c.key], c.w)).join('  '))
    }
}

async function runTaskCreateCheck(cred) {
    const base = cred.getUrl().origin.replace(/\/$/, '')
    const name = `Smoke Task ${Date.now()}`

    try {
        const authHeaders = await cred.getHeaders()
        const jsonHeaders = { Accept: 'application/json', 'Content-Type': 'application/json', ...authHeaders }

        const projectRes = await fetch(`${base}/api/x_gzi_zscaler_ppm/v1/projects`, {
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify({ name: `Smoke Task Project ${Date.now()}` }),
        })
        const projectBody = await projectRes.text()
        if (projectRes.status >= 500) {
            return failRow('POST project task', '/projects/{id}/tasks', projectRes.status, `project create HTTP ${projectRes.status}`, projectBody)
        }
        let projectId = ''
        try {
            const parsed = JSON.parse(projectBody)
            const data = parsed?.result ?? parsed
            projectId = data?.sys_id || ''
        } catch {
            return failRow('POST project task', '/projects/{id}/tasks', projectRes.status, 'project create returned non-JSON', projectBody)
        }
        if (!projectId) {
            return failRow('POST project task', '/projects/{id}/tasks', projectRes.status, 'project create missing sys_id', projectBody)
        }

        const sectionPath = `/api/x_gzi_zscaler_ppm/v1/projects/${projectId}/section`
        const sectionRes = await fetch(`${base}${sectionPath}`, {
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify({ name: 'Smoke Section' }),
        })
        const sectionBody = await sectionRes.text()
        if (sectionRes.status >= 500) {
            return failRow('POST project task', sectionPath, sectionRes.status, `section create HTTP ${sectionRes.status}`, sectionBody)
        }
        if (sectionRes.status !== 201 && sectionRes.status !== 200) {
            return failRow('POST project task', sectionPath, sectionRes.status, `section create HTTP ${sectionRes.status}`, sectionBody)
        }

        const taskPath = `/api/x_gzi_zscaler_ppm/v1/projects/${projectId}/tasks`
        const taskRes = await fetch(`${base}${taskPath}`, {
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify({ name }),
        })
        const taskBody = await taskRes.text()
        if (taskRes.status >= 500) {
            return failRow('POST project task', taskPath, taskRes.status, `task create HTTP ${taskRes.status}`, taskBody)
        }
        if (taskRes.status !== 201 && taskRes.status !== 200) {
            return failRow('POST project task', taskPath, taskRes.status, `HTTP ${taskRes.status}`, taskBody)
        }

        let taskId = ''
        try {
            const parsed = JSON.parse(taskBody)
            taskId = (parsed?.result ?? parsed)?.sys_id || ''
        } catch {
            return failRow('POST project task', taskPath, taskRes.status, 'task create returned non-JSON', taskBody)
        }

        if (taskId) {
            const patchRes = await fetch(`${base}/api/x_gzi_zscaler_ppm/v1/tasks/${taskId}`, {
                method: 'PATCH',
                headers: jsonHeaders,
                body: JSON.stringify({ completed: true, project_id: projectId }),
            })
            if (patchRes.status >= 500) {
                return failRow('POST project task', `/tasks/${taskId}`, patchRes.status, `task patch HTTP ${patchRes.status}`, await patchRes.text())
            }
        }

        const boardRes = await fetch(`${base}/api/x_gzi_zscaler_ppm/v1/projects/${projectId}/board`, { headers: authHeaders })
        if (boardRes.status >= 500) {
            return failRow('POST project task', `/projects/${projectId}/board`, boardRes.status, `board HTTP ${boardRes.status}`, await boardRes.text())
        }

        return { name: 'POST project task', path: taskPath, status: taskRes.status, pass: true, reason: '', snippet: snippet(taskBody) }
    } catch (e) {
        return failRow('POST project task', '/projects/{id}/tasks', 0, e?.message || String(e), '')
    }
}

function failRow(name, path, status, reason, body) {
    return { name, path, status, pass: false, reason, snippet: snippet(body) }
}

async function runPortfolioDashboardCheck(cred) {
    const base = cred.getUrl().origin.replace(/\/$/, '')
    try {
        const authHeaders = await cred.getHeaders()
        const listRes = await fetch(`${base}/api/x_gzi_zscaler_ppm/v1/portfolios`, { headers: authHeaders })
        const listBody = await listRes.text()
        if (listRes.status >= 500) {
            return failRow('GET portfolio dashboard', '/portfolios/{id}/dashboard', listRes.status, `portfolios HTTP ${listRes.status}`, listBody)
        }
        let portfolioId = ''
        try {
            const parsed = JSON.parse(listBody)
            const rows = parsed?.result ?? parsed
            portfolioId = Array.isArray(rows) && rows[0]?.sys_id ? rows[0].sys_id : ''
        } catch {
            return failRow('GET portfolio dashboard', '/portfolios/{id}/dashboard', listRes.status, 'portfolios non-JSON', listBody)
        }
        if (!portfolioId) {
            return { name: 'GET portfolio dashboard', path: '/portfolios/{id}/dashboard', status: listRes.status, pass: true, reason: '', snippet: 'no portfolios to test' }
        }
        const dashPath = `/api/x_gzi_zscaler_ppm/v1/portfolios/${portfolioId}/dashboard`
        const dashRes = await fetch(`${base}${dashPath}`, { headers: authHeaders })
        const dashBody = await dashRes.text()
        if (dashRes.status >= 500) {
            return failRow('GET portfolio dashboard', dashPath, dashRes.status, `HTTP ${dashRes.status}`, dashBody)
        }
        if (dashRes.status >= 400) {
            return failRow('GET portfolio dashboard', dashPath, dashRes.status, `HTTP ${dashRes.status}`, dashBody)
        }
        return { name: 'GET portfolio dashboard', path: dashPath, status: dashRes.status, pass: true, reason: '', snippet: snippet(dashBody) }
    } catch (e) {
        return failRow('GET portfolio dashboard', '/portfolios/{id}/dashboard', 0, e?.message || String(e), '')
    }
}

async function main() {
    const args = parseArgs(process.argv.slice(2))
    if (args.help) {
        printHelp()
        process.exit(0)
    }

    // Match now-sdk install behavior on some corp TLS setups
    if (process.env.NODE_TLS_REJECT_UNAUTHORIZED === undefined) {
        // leave default; user/env may already set 0 via shell profile used by now-sdk
    }

    console.log('PPM smoke test')
    console.log(`Alias: ${args.alias || '(now-sdk default)'}`)

    const credentialProvider = await loadCredentialProvider()
    let cred
    try {
        cred = await credentialProvider(args.alias)
    } catch (e) {
        console.error(`\nFAIL  auth  could not resolve credentials: ${e.message}`)
        console.error('Run: now-sdk auth --list')
        console.error('Or:  now-sdk auth --add https://zscalerai.service-now.com --type basic --alias sdk-ai-admin')
        process.exit(1)
    }

    const host = cred.getUrl().origin
    console.log(`Host:  ${host}`)
    console.log('')

    const results = []
    for (const check of CHECKS) {
        process.stdout.write(`… ${check.name} `)
        const row = await runCheck(cred, check)
        results.push(row)
        console.log(row.pass ? 'PASS' : 'FAIL')
    }

    process.stdout.write('… POST project task ')
    const taskRow = await runTaskCreateCheck(cred)
    results.push(taskRow)
    console.log(taskRow.pass ? 'PASS' : 'FAIL')

    process.stdout.write('… GET portfolio dashboard ')
    const dashRow = await runPortfolioDashboardCheck(cred)
    results.push(dashRow)
    console.log(dashRow.pass ? 'PASS' : 'FAIL')

    console.log('')
    printTable(results)

    const failed = results.filter((r) => !r.pass)
    const fiveXx = results.filter((r) => r.status >= 500)
    console.log('')
    if (failed.length === 0) {
        console.log(`PASS  ${results.length}/${results.length} checks`)
        process.exit(0)
    }

    console.log(`FAIL  ${failed.length}/${results.length} checks failed` + (fiveXx.length ? ` (${fiveXx.length}× 5xx)` : ''))
    for (const f of failed) {
        console.log(`  - ${f.name}: ${f.reason || f.status}`)
        if (f.snippet) console.log(`    ${f.snippet}`)
    }
    process.exit(1)
}

main().catch((e) => {
    console.error('Smoke test crashed:', e)
    process.exit(1)
})
