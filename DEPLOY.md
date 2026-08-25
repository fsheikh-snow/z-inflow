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
com.glide.app_store.InternalZipInstaller.installExpandedZipWithRollback(...)
com.sn_appclient_bootstrap.ScopedAppUploadProcessor.installZip(...)
```

Fails immediately. Often **no** `sys_upgrade_history` row for `x_gzi_ppm` — the failure is wrapped before content-level errors surface. Deleting `sys_rollback_context` rows and retrying does **not** fix it: each attempt creates a **new** context that goes `invalid` again.

### What `now-sdk install` actually does

`npm run deploy:ppm` → `now-sdk install` → upload zip to `sn_appclient_upload_processor.do` → always `InternalZipInstaller.installExpandedZipWithRollback` (no flag avoids rollback).

| Flag | Behavior |
|------|----------|
| (default) | Update/install zip for `now.config.json` scopeId |
| `-r, --reinstall` | **Uninstall** app first (`clean: true`), then install zip. Instance-only metadata not in the zip is lost. |
| `-d, --debug` | Client stack trace |
| `-i, --info` | Opens Upgrade History link (does not print deeper server errors) |
| `--demoData` / `--skip-flow-activation` | Demo data / skip flow publish |

There is **no** force/partial-install flag. SDK hardcodes `registerScope: false` when uploading.

### Root cause (re-validated 2026-08-24 after `--reinstall`)

**Verdict: instance poison after uninstall + wrong install mode for a missing app — not a bad deploy script, not a globally broken rollback subsystem, not primary zip content conflicts.**

Live checks on zscalerai (`sdk-ai-admin`):

| Check | Result |
|-------|--------|
| `sys_app` `ca99d331…` / `scope=x_gzi_ppm` | **MISSING** (uninstall succeeded) |
| `sys_scope` for same | **MISSING** |
| `sys_db_object` `nameSTARTSWITHx_gzi_ppm` | **empty** |
| `sys_metadata_delete` for scope `ca99d331…` | **many tombstones remain** (uninstall leftovers) |
| `sys_rollback_context` state=`invalid` | e.g. `d7aa6ad72b728b10d80afdabf291bfb4` (created by `sdk-ai`, error = same RollbackContext message) |
| Other scoped app installs (e.g. `x_gzi_ztrip`) | **Succeed** via the same installer → not instance-wide rollback death |
| `x_gzi_zflow` | Still present (`4bfbf57d…`) |

So Hypothesis A (new failure recreates invalid rollback) is true as a **symptom**, but the driver after `--reinstall` is: install tries to **create** the app again for a scopeId that no longer has `sys_app`/`sys_scope` while delete-tombstones and an invalid rollback still exist. Deleting rollback rows only clears the symptom of the last attempt.

Earlier (pre-reinstall) failure mode was also **sys_id mismatch** vs Build Agent metadata. Commit `3976199` aligned local REST/UI to instance ids (`496dbb37…`, `efce0001…` / `x_gzi_ppm_app.do`). That alignment is necessary for updates against a **live** app; it cannot resurrect a fully uninstalled scope by itself.

### Package inspection (current `target/z_inflow_0_0_1.zip`)

- ~883 KB, **638** files; build/pack OK.
- One REST def: `sys_ws_definition_496dbb37…` (instance-aligned).
- UI: `update/` INSERT `efce0001…` → `x_gzi_ppm_app.do`; `author_elective_update/` DELETE `7c96e286…` → old `x_gzi_ppm_workspace.do` (intentional; `keys.ts` marks that page `deleted: true`).
- ~185 elective DELETEs (ACLs, modules, UX assets, etc.) — normal for SDK update packages; not duplicate REST/workspace inserts.

Do **not** treat dual UI filenames as a package bug.

### Exact next action (do **not** “delete rollback again”)

1. **State-transition** the remaining invalid row (prefer not delete):
   - Open `sys_rollback_context.do?sys_id=d7aa6ad72b728b10d80afdabf291bfb4`
   - Set **State** → `rolled_back` (choice value) and save.
   - Confirm no rows in `state=invalid|in_progress|reverting|pending_revert|staged` for app installs you care about.

2. **Prove the package** with a **new** empty scoped app (recommended):
   - In Studio: create a new custom app (new scope, e.g. `x_gzi_ppm2`, new sys_id).
   - Point `now.config.json` / `now.config.ppm.json` at that `scope` + `scopeId`.
   - `npm run build && npm run pack && npx now-sdk install --auth sdk-ai-admin -d`
   - If this **succeeds** → zip/Fluent are fine; original `ca99d331…` is poisoned (tombstones / missing scope). Keep the new scope or open **HI** to purge `sys_metadata_delete` for `ca99d331…` and safely recreate `x_gzi_ppm` with that sys_id.
   - If this **also** fails with RollbackContext → open **HI** (instance rollback/app install subsystem).

3. **Do not** run `--reinstall` again on a missing app. Prefer Studio create empty app → then normal `now-sdk install` (update path).

4. Optional recovery of original scope (only with admin/HI help): recreate empty `sys_app`/`sys_scope` for `x_gzi_ppm` with sys_id `ca99d331333687509937d1382e5c7be5`, clear tombstones, then install **without** `-r`.

### Historical notes (pre-`--reinstall`)

Before uninstall, zip-vs-instance sys_id conflicts (tables/REST/UI) caused mid-install failures that left invalid rollback. Aligning keys (`3976199`) addresses that for a **present** app. Studio “Import from Source Control” on a live app remains a valid alternative to zip upload when the app exists.

### Status (2026-08-24 evening)

| Check | Result |
|-------|--------|
| `npm run build` / pack | Passes; zip ~883 KB / 638 files |
| Deploy method (`deploy:ppm`) | Correct; always uses InternalZipInstaller+rollback |
| App on instance | **Gone** after `--reinstall` |
| Delete-only rollback cleanup | **Insufficient** — new attempts recreate `invalid` |
| Next step | New empty scope install as proof, or HI for tombstone/`ca99d331` recovery — **not** another delete loop |
