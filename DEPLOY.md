# Deploy & scope cutover

Source on **`main`** targets scope **`x_gzi_ppm`** (`ca99d331333687509937d1382e5c7be5`).

- REST API: `/api/x_gzi_ppm/v1`
- Workspace UI: `x_gzi_ppm_app.do`

## Config files

| File | Scope | Use |
|------|-------|-----|
| `now.config.json` | **x_gzi_ppm** (default) | `npm run build`, normal deploy |
| `now.config.ppm.json` | x_gzi_ppm | Same as default; copied by `deploy:ppm` |
| `now.config.zflow.json` | x_gzi_zflow (legacy) | Rollback deploy only |

`npm run build` reads whichever file is currently named `now.config.json`. After clone/pull, that file is **ppm**.

## Deploy commands

```bash
# Build (uses now.config.json → x_gzi_ppm)
npm run build

# Inspect install package (optional; created by build + pack)
npm run pack
ls -lah target/z_inflow_0_0_1.zip   # ~800 KB, ~487 files for current app

# Deploy to live x_gzi_ppm app (preferred after cutover)
npm run deploy:ppm

# Legacy rollback to x_gzi_zflow (code on main is ppm-prefixed; only use if you temporarily restore zflow source)
npm run deploy:zflow
```

Full loop: `npm run ship` (build → deploy → smoke).

### `now-sdk install` flags

```bash
now-sdk install --help
```

| Flag | Use |
|------|-----|
| `-a, --auth sdk-ai-admin` | Credential alias for zscalerai |
| `-d, --debug` | Full client stack trace |
| `-i, --info` | Link to Upgrade History on instance |
| `-r, --reinstall` | **Destructive**: uninstall app then reinstall from zip. Instance-only metadata not in the local package is lost. Only after rollback cleanup and with explicit approval. |
| `--skip-flow-activation` | Skip flow publish step |

There is no “partial install” flag. Smaller deploys require aligning local source to instance sys_ids first (see recovery below).

## Pre-cutover checklist

1. Compare instance parity: `git diff instance-sync main --stat` (tables, REST, UI page).
2. Confirm `now.config.json` scopeId matches live app on the instance: `ca99d331333687509937d1382e5c7be5`.
3. **Compare sys_ids**, not just table names — see [Troubleshooting](#troubleshooting-rollbackcontext-is-in-invalid-state).
4. `npm run build` must pass locally.
5. Deploy: `npm run deploy:ppm`
6. Verify: `npm run smoke` (REST + `x_gzi_ppm_app.do`).

## Branch roles

| Branch | Role |
|--------|------|
| **main** | Source of truth — **x_gzi_ppm** |
| **instance-sync** | Transform mirror from instance; audit/compare only |

See also **[BUILD_AGENT.md](./BUILD_AGENT.md)** and **[SMOKE.md](./SMOKE.md)**.

---

## Troubleshooting: `RollbackContext is in invalid state`

### Symptom

```
[now-sdk] ERROR: Exception occurred while installing application
java.lang.IllegalStateException: RollbackContext is in invalid state, Application install failed
(Connected to: app145020.aus101.service-now.com:zscalerai002)
com.glide.app_store.InternalZipInstaller.installExpandedZipWithRollback(...)
com.sn_appclient_bootstrap.ScopedAppUploadProcessor.installZip(...)
```

Install fails immediately on retry (even before record-level errors appear in Upgrade History).

### Root cause (validated 2026-08-24)

Two stacked problems:

1. **Stuck rollback context** — A prior install of `target/z_inflow_0_0_1.zip` failed mid-zip. ServiceNow left `sys_rollback_context` in an active/invalid state. **Every subsequent `now-sdk install` is rejected until that context is cleared.**

2. **sys_id mismatch (main vs instance)** — Commit `18fa734` renamed scope prefixes (`x_gzi_zflow` → `x_gzi_ppm`) but **kept zflow-era sys_ids** in `src/fluent/generated/keys.ts`. Build Agent on the instance created **different sys_ids** for the same logical metadata. Local zip vs live instance:

   | Metadata | Local zip (`main`) | Instance (`instance-sync` / Build Agent) |
   |----------|-------------------|---------------------------------------------|
   | `scopeId` | `ca99d331…` ✓ | `ca99d331…` ✓ |
   | REST API | `141ef836…` — `/api/x_gzi_ppm/v1` | `496dbb37…` — `/api/x_gzi_ppm/v1` |
   | UI page | `7c96e286…` — `x_gzi_ppm_workspace.do` | `efce0001…` — `x_gzi_ppm_app.do` |
   | Tables (24) | zflow-ported sys_ids | All 24 sys_ids differ |

   The zip is valid (~804 KB, 487 inventory rows, no `x_gzi_zflow` references). The conflict is **duplicate logical names with different sys_ids**, not a bad `scopeId`.

### Recovery (ordered)

Do these steps in order. Do not retry `npm run deploy:ppm` until step 1 is done.

#### Step 1 — Clear stuck rollback context (required)

**Option A — Studio UI**

1. Log in to `https://zscalerai.service-now.com` as admin.
2. Navigate to **`sys_rollback_context.list`** (filter: *Application* or *Scope* contains `x_gzi_ppm`, or *State* = `active` / `in progress` / `reverting`).
3. Open each stuck row for app **`x_gzi_ppm`** (`ca99d331333687509937d1382e5c7be5`).
4. Use **Rollback** or **Cancel** if the UI offers it. If the record is hung, set **State** to `rolled back` (or the terminal state your instance exposes) and save.
5. Confirm no active rollback rows remain for this app.
6. Check **`sys_upgrade_history.list`** — filter `type=rollback` or recent failures for the same app; note the failed batch for audit.

**Option B — Background script** (admin only; document before running)

```javascript
// Find stuck rollback contexts for x_gzi_ppm
var gr = new GlideRecord('sys_rollback_context');
gr.addQuery('sys_scope', 'ca99d331333687509937d1382e5c7be5');
gr.addQuery('state', 'IN', 'active,in progress,reverting,invalid');
gr.query();
while (gr.next()) {
    gs.info('Clearing rollback context: ' + gr.getUniqueValue() + ' state=' + gr.state);
    gr.state = 'rolled_back'; // or 'cancelled' per your instance choice values
    gr.update();
}
```

**Do not** delete rollback rows unless ServiceNow support directs it — prefer state transition.

#### Step 2 — Align sys_ids before redeploy (recommended)

The port from zflow reused old sys_ids. Build Agent metadata on the instance must win.

```bash
# Pull instance metadata (updates keys.ts, tables, generated REST/UI mirrors)
now-sdk transform --auth sdk-ai-admin

# Review diff — expect instance sys_ids for tables, REST (496dbb37…), UI (efce0001… / x_gzi_ppm_app.do)
git diff --stat

# Merge BYOUI + modular REST source from main onto transformed keys:
#   - Keep src/fluent/scripted-rest-api/z-inflow-api.now.ts handlers
#   - Update Now.ID / $id references to instance sys_ids from transform
#   - Reconcile UI endpoint: instance uses x_gzi_ppm_app.do unless you rename in Studio

npm run build && npm run pack
npm run deploy:ppm -- --auth sdk-ai-admin
npm run smoke -- --alias sdk-ai-admin
```

Commit aligned keys + endpoint naming in a follow-up PR — do not deploy again from pre-transform `main` without sys_id alignment.

**Alternative — Studio upgrade**

1. **System Applications → Studio** → open **x_gzi_ppm**.
2. **Source Control → Import from Source** / **Upgrade** (wording varies by IDE version).
3. Point at the same repo/branch after sys_ids are aligned, or upload `target/z_inflow_0_0_1.zip` via **Install** only after rollback cleanup.
4. Resolve conflicts in Studio’s merge UI rather than forcing zip over mismatched ids.

#### Step 3 — Last resort: reinstall (destructive)

Only if rollback is cleared **and** you accept losing instance-only metadata not present locally:

```bash
npm run build
now-sdk install --auth sdk-ai-admin --reinstall
```

**Warning:** Removes tables, REST operations, UI pages, and other app metadata created on-instance (Build Agent work) that are not in the zip. Back up or export first.

### Verify before/after

```bash
npm run build          # must pass
npm run pack           # target/z_inflow_0_0_1.zip
now-sdk install --auth sdk-ai-admin --info
npm run deploy:ppm -- --auth sdk-ai-admin -d   # debug on failure
```

Compare sys_ids:

```bash
# Table sys_id parity (should be 0 mismatches before deploy)
python3 - <<'PY'
import subprocess, re
def ids(ref):
    t = subprocess.check_output(['git','show',f'{ref}:src/fluent/generated/keys.ts'], text=True)
    return {n:i for i,n in re.findall(r"id: '([a-f0-9]{32})'.*?name: '([^']+)'", t, re.S)}
main, sync = ids('main'), ids('instance-sync')
print('mismatched tables:', sum(1 for n in set(main)|set(sync) if main.get(n)!=sync.get(n)))
PY
```

As of 2026-08-24, **24/24 table sys_ids mismatch** between `main` and `instance-sync` — deploy will fail again after rollback cleanup until aligned.

### Status (2026-08-24)

| Check | Result |
|-------|--------|
| `npm run build` | Passes |
| `scopeId` in zip | `ca99d331333687509937d1382e5c7be5` ✓ |
| Zip size / records | ~804 KB, 487 files, 24 tables |
| `npm run deploy:ppm` | **Fails** — stuck rollback + sys_id mismatch |
| Retry after user clears rollback only | **Will fail again** until sys_ids aligned |

**After sys_id alignment commit:** Clear rollback in Studio (Step 1 above), then run `npm run deploy:ppm`.
