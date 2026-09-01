#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const PLACEHOLDER_IDS = new Set([
    '00000000000000000000000000000001',
    '00000000000000000000000000000000',
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
])

const configPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../now.config.json')
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))

if (!config.scope || !config.scopeId || !/^[0-9a-f]{32}$/.test(config.scopeId)) {
    console.error('now.config.json needs scope and a 32-char hex scopeId from Studio.')
    process.exit(1)
}

if (PLACEHOLDER_IDS.has(config.scopeId)) {
    console.error('now.config.json still has placeholder scopeId.')
    console.error('Copy now.config.template.json, then paste your Studio app sys_id.')
    process.exit(1)
}

console.log(`now.config OK: scope=${config.scope} scopeId=${config.scopeId}`)
