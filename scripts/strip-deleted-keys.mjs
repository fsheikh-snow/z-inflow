#!/usr/bin/env node
/**
 * Remove composite keys marked deleted: true from src/fluent/generated/keys.ts.
 * Safe for fresh install to an empty scoped app — avoids elective DELETE rows
 * for records that never existed on the instance.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const keysPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/fluent/generated/keys.ts')

if (!fs.existsSync(keysPath)) {
    console.log('keys.ts not found — run npm run build first')
    process.exit(0)
}

const lines = fs.readFileSync(keysPath, 'utf8').split('\n')
const out = []
let i = 0
let removed = 0

while (i < lines.length) {
    const line = lines[i]
    if (/^\s+\{\s*$/.test(line)) {
        const start = i
        let depth = 0
        let block = []
        let j = i
        for (; j < lines.length; j++) {
            const l = lines[j]
            block.push(l)
            depth += (l.match(/\{/g) || []).length
            depth -= (l.match(/\}/g) || []).length
            if (depth === 0 && /\},?\s*$/.test(l)) {
                break
            }
        }
        const text = block.join('\n')
        if (text.includes('deleted: true')) {
            removed++
            i = j + 1
            continue
        }
        out.push(...block)
        i = j + 1
        continue
    }
    out.push(line)
    i++
}

fs.writeFileSync(keysPath, out.join('\n'))
console.log(`strip-deleted-keys: removed ${removed} composite block(s) from keys.ts`)
