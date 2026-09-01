# Deploy — Cursor-only workflow (new scoped app)

**Abandon** the poisoned `x_gzi_ppm` app (`ca99d331333687509937d1382e5c7be5`). All deploys target a **brand-new empty scoped app** created in Studio.

- **Instance:** https://zscalerai.service-now.com
- **Auth alias:** `sdk-ai-admin`
- **Prepared scope in source:** `x_gzi_zscaler_ppm` (alternatives below)
- **REST API (after install):** `/api/x_gzi_zscaler_ppm/v1`
- **Workspace UI:** `x_gzi_zscaler_ppm_app.do`

---

## Step 1 — Create empty scoped app in Studio

`now-sdk init` can bootstrap a **new** Fluent project in an empty directory (`--scopeName`, `--appName`), but it does **not** attach an existing repo to a new instance app. For this repo, create the shell app in Studio:

1. Open **System Applications → Studio** (or **System Definition → Applications** → Create Application).
2. Choose **Custom Application** → **Scoped**.
3. Suggested names:
   - **Name:** `Inflow` or `Z-Inflow`
   - **Scope:** `x_gzi_zscaler_ppm` (must match source in this repo)
   - Alternative scope: `x_gzi_inflow` — then run `npm run set-scope -- x_gzi_inflow` before build
4. Leave the app **empty** (no tables, no transform). Fluent source in Git defines all metadata.
5. After save, open the app record and copy:
   - **Scope** (e.g. `x_gzi_zscaler_ppm`)
   - **Sys ID** of the application (`sys_app.sys_id`, 32-char hex)

### Paste back to Cursor

```
scope=x_gzi_zscaler_ppm scopeId=YOUR_32_CHAR_SYS_ID
```

Cursor (or you) will update `now.config.json` and deploy.

---

## Step 2 — Configure `now.config.json`

```bash
cp now.config.template.json now.config.json
# Edit scope + scopeId from Studio
```

Example after paste (replace placeholder `000000…0001`):

```json
{
    "scope": "x_gzi_zscaler_ppm",
    "scopeId": "abc123def456...",
    "name": "x_gzi_zscaler_ppm",
    "packageSourceCodeOnInstance": true
}
```

Committed configs use dummy id `00000000000000000000000000000001` so `npm run build` passes locally. **`deploy:cursor` rejects placeholders** — paste your real Studio sys_id before install.

---

## Step 3 — Build and deploy (Cursor / laptop)

```bash
# Regenerate keys.ts (strips transform tombstones) and build package
npm run prep:install

# Install to empty app — NO --reinstall
npm run deploy:cursor

# Verify REST + UI page
npm run smoke
```

One-command loop after config is set:

```bash
npm run ship
```

### `now-sdk install` flags

| Flag | Use |
|------|-----|
| `-a, --auth sdk-ai-admin` | Credential alias for zscalerai |
| `-d, --debug` | Full client stack trace |
| `-i, --info` | Link to Upgrade History on instance |
| `-r, --reinstall` | **Never use** on a missing or fresh app. Destructive uninstall + reinstall. |
| `--skip-flow-activation` | Skip flow publish step |

There is no partial-install flag. First install to an empty app is a normal `now-sdk install` (update path).

### Auth setup

```bash
now-sdk auth --add https://zscalerai.service-now.com --type basic --alias sdk-ai-admin
```

---

## Config files

| File | Purpose |
|------|---------|
| `now.config.template.json` | Committed template — copy to `now.config.json` |
| `now.config.json` | Local target app (gitignored scopeId ok; template uses placeholder) |
| `now.config.zscaler-ppm.json` | Same as template; copied by legacy deploy scripts |
| `now.config.zflow.json` | Legacy `x_gzi_zflow` rollback only |

`npm run build` reads `now.config.json` for scope name (UI bundle paths, table prefixes).

---

## Scope cutover

Source is prepped for **`x_gzi_zscaler_ppm`**. If Studio app uses a different scope (e.g. `x_gzi_inflow`):

```bash
npm run set-scope -- x_gzi_inflow
# Update now.config.json scope + scopeId
npm run prep:install && npm run deploy:cursor
```

---

## Fresh install checklist

- [ ] New empty scoped app in Studio (not the old `ca99d331…` app)
- [ ] `now.config.json` has correct `scope` + `scopeId`
- [ ] Transform form sections removed from `src/fluent/generated/` (only `keys.ts` remains)
- [ ] UI page uses semantic id `pm-workspace-page` (not instance sys_id)
- [ ] `npm run prep:install` passes
- [ ] Deploy **without** `--reinstall`
- [ ] `npm run smoke` passes

---

## Branch roles

| Branch | Role |
|--------|------|
| **main** | Source of truth — Cursor + now-sdk deploy |
| **instance-sync** | Transform mirror; audit/compare only — **never deploy** |

See **[SMOKE.md](./SMOKE.md)** for smoke test details.

---

## Deprecated: Build Agent

**[BUILD_AGENT.md](./BUILD_AGENT.md)** and **[BUILD_AGENT_PLAN.md](./BUILD_AGENT_PLAN.md)** describe the old ServiceNow Build Agent workflow against the abandoned `x_gzi_ppm` scope. **Do not use Build Agent for deploys.**

---

## Troubleshooting

### `application was null` / RollbackContext

1. Confirm `scopeId` matches the **new** Studio app, not `ca99d331…`.
2. Do **not** use `--reinstall` on a missing app.
3. Run `npm run deploy:cursor --` with debug: `npx now-sdk install --auth sdk-ai-admin -d`
4. If install still fails, create another fresh scoped app and retry (proves zip vs instance poison).

### Smoke failures

```bash
npm run smoke -- --alias sdk-ai-admin
```

Common causes: first install incomplete, REST ACLs, or auth alias not configured.
