# Deploy & scope cutover

Source on **`main`** targets scope **`x_gzi_ppm`** (`ca99d331333687509937d1382e5c7be5`).

- REST API: `/api/x_gzi_ppm/v1`
- Workspace UI: `x_gzi_ppm_workspace.do`

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

# Deploy to live x_gzi_ppm app (preferred after cutover)
npm run deploy:ppm

# Legacy rollback to x_gzi_zflow (code on main is ppm-prefixed; only use if you temporarily restore zflow source)
npm run deploy:zflow
```

Full loop: `npm run ship` (build → deploy → smoke).

## Pre-cutover checklist

1. Compare instance parity: `git diff instance-sync main --stat` (tables, REST, UI page).
2. Confirm `now.config.json` scopeId matches live app on the instance: `ca99d331333687509937d1382e5c7be5`.
3. `npm run build` must pass locally.
4. Deploy: `npm run deploy:ppm`
5. Verify: `npm run smoke` (REST + `x_gzi_ppm_workspace.do`).

## Branch roles

| Branch | Role |
|--------|------|
| **main** | Source of truth — **x_gzi_ppm** |
| **instance-sync** | Transform mirror from instance; audit/compare only |

See also **[BUILD_AGENT.md](./BUILD_AGENT.md)** and **[SMOKE.md](./SMOKE.md)**.
