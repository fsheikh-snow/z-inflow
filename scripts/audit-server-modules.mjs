#!/usr/bin/env node
/**
 * Fail closed on ServiceNow Fluent module patterns that cause runtime
 * ModuleResolutionException / "x_gzi_ppm is not defined" on the instance.
 *
 * Runtime sys_module paths are registered WITH file extensions
 * (e.g. …/src/server/rest/helpers.ts). Extensionless relative imports like
 * `./helpers` resolve to `…/helpers` and throw ModuleResolutionException.
 *
 * ES modules must import Script Includes via `@servicenow/glide/<scope>`.
 * `new x_gzi_ppm.Foo()` only works inside Class.create Script Include files.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const serverRoot = path.join(root, 'src', 'server')

/** @type {string[]} */
const errors = []

/**
 * @param {string} dir
 * @returns {string[]}
 */
function walk(dir) {
    /** @type {string[]} */
    const out = []
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name)
        if (entry.isDirectory()) {
            out.push(...walk(full))
        } else if (/\.(ts|js)$/.test(entry.name) && !entry.name.endsWith('.d.ts')) {
            out.push(full)
        }
    }
    return out
}

const relativeImport = /(?:from|import)\s+['"](\.[^'"]+)['"]/g
const requireRelative = /require\(\s*['"](\.[^'"]+)['"]\s*\)/g
const scopedGlobalNew = /\bnew\s+x_gzi_ppm\./g

for (const file of walk(serverRoot)) {
    const rel = path.relative(root, file)
    const text = fs.readFileSync(file, 'utf8')
    const isScriptIncludeClass = /\.server\.js$/.test(file)

    for (const re of [relativeImport, requireRelative]) {
        re.lastIndex = 0
        let match
        while ((match = re.exec(text))) {
            const spec = match[1]
            // Allow package-style or absolute; only flag relative specs missing a known extension.
            if (!/\.(ts|js|mjs|cjs|json)$/.test(spec)) {
                errors.push(`${rel}: relative import "${spec}" must include .ts/.js (instance registers sys_module with extension)`)
            }
        }
    }

    if (!isScriptIncludeClass && scopedGlobalNew.test(text)) {
        errors.push(
            `${rel}: use import { X } from '@servicenow/glide/x_gzi_ppm' — new x_gzi_ppm.X() is undefined in ES modules`
        )
    }
}

if (errors.length) {
    console.error('Server module audit FAILED:\n')
    for (const e of errors) {
        console.error('  -', e)
    }
    console.error('\nSee BUILD_AGENT.md § "Fluent module resolution".')
    process.exit(1)
}

console.log('Server module audit OK (relative imports use extensions; ES modules avoid x_gzi_ppm.* globals).')
