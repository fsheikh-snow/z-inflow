#!/usr/bin/env node
/**
 * Replace application scope prefix across repo after Studio app creation.
 *
 * Usage:
 *   node scripts/set-scope.mjs x_gzi_inflow
 *   npm run set-scope -- x_gzi_inflow
 *
 * Updates Fluent tables, server scripts, client API base, config templates,
 * and renames types file. Run npm run build afterward.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const oldScope = process.env.OLD_SCOPE || 'x_gzi_zscaler_ppm'
const newScope = process.argv[2]

if (!newScope || !/^x_[a-z0-9_]+$/.test(newScope)) {
    console.error('Usage: node scripts/set-scope.mjs <new_scope>')
    console.error('Example: node scripts/set-scope.mjs x_gzi_inflow')
    process.exit(1)
}

if (newScope === oldScope) {
    console.log(`Scope already ${newScope}`)
    process.exit(0)
}

const skipDirs = new Set(['node_modules', '.git', 'target', '.now', 'dist'])
const exts = new Set(['.ts', '.js', '.jsx', '.mjs', '.json', '.md', '.d.ts'])

function walk(dir, files = []) {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
        if (skipDirs.has(ent.name)) continue
        const p = path.join(dir, ent.name)
        if (ent.isDirectory()) walk(p, files)
        else if (exts.has(path.extname(ent.name))) files.push(p)
    }
    return files
}

let count = 0
for (const file of walk(root)) {
    const text = fs.readFileSync(file, 'utf8')
    if (!text.includes(oldScope)) continue
    fs.writeFileSync(file, text.split(oldScope).join(newScope))
    count++
}

const oldTypes = path.join(root, `src/server/types/${oldScope}.d.ts`)
const newTypes = path.join(root, `src/server/types/${newScope}.d.ts`)
if (fs.existsSync(oldTypes)) {
    fs.renameSync(oldTypes, newTypes)
    count++
}

console.log(`set-scope: ${oldScope} → ${newScope} in ${count} file(s)`)
console.log('Next: update now.config.json scopeId, then npm run build')
