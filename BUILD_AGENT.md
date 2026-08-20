# Deploy & Build Agent

## Primary deploy path (laptop SDK)

**Laptop install is the primary deploy path.** After pulling or pushing to `main`, run deploy from your machine — do not wait on Build Agent.

```bash
npm run build && npm run deploy
# same as: now-sdk build && now-sdk install

# Prefer the ship loop (build + deploy + API/HTML smoke):
npm run ship
```

After deploy, Cursor should run **`npm run smoke`** (or `npm run ship`) instead of asking the user to paste Chrome console logs. Agents cannot see the user's browser session; smoke covers REST 5xx and workspace fatal banners. See **[SMOKE.md](./SMOKE.md)**.

Requirements:

- `now.config.json` **`scopeId`** must match the live app sys_id on the instance (`4bfbf57d333a07509937d1382e5c7bfa` for `x_gzi_zflow` on zscalerai).
- Authenticated Now SDK alias (e.g. `sdk-ai-admin`) against `zscalerai.service-now.com`.
- If install previously failed with `application was null`, fix `scopeId` first — do not fall back to Build Agent rebuild for that.

Scope is **`x_gzi_zflow`** (not `x_gzi_z_ppm`). Workspace UI: `x_gzi_zflow_workspace.do`.

## Build Agent (optional fallback)

Build Agent is for coding help on the instance only. Prefer laptop `npm run deploy` for every install.

GitHub → Build Agent pull/rebuild is a **fallback only** (e.g. when laptop install is blocked). Expect per-file **Allow** prompts; there is no reliable batch-trust setting we control.

| Branch | Role |
|--------|------|
| **`main`** | Source of truth. If Build Agent pulls at all, use **`main` only**. |
| **`instance-sync`** | Mirror of `now-sdk transform` from the instance. Audit/compare only — never treat as deploy source. |

## Keep the React UI Page

The workspace UI is a **BYOUI React page** built by `@servicenow/isomorphic-rollup` in `now.prebuild.mjs`.

**Do not strip** these from `package.json` / the install:

- `@servicenow/isomorphic-rollup` (devDependency; required for `npm run build`)
- `react`, `react-dom`, `react-router-dom`, `@tanstack/react-query`, and other `dependencies` used by `src/client`

If those are removed, the UI Page HTML stays on “PM Workspace loading...” because the client bundle never builds.

## Architecture constraints

- **Never use `@servicenow/react-components`** — it pulls in a second React instance and triggers React error #321 (invalid hook call) in the BYOUI page.
- **Instance Table API hotfix is bootstrap-only** — direct `/api/now/table/...` calls were a temporary workaround; do not add new features against raw Table API.
- **Shaped REST at `/api/x_gzi_zflow/v1` is the target architecture** — all new client/server work should go through the scoped scripted REST API in `src/fluent/scripted-rest-api/z-inflow-api.now.ts` and its route handlers in `src/server/rest/`.
- **Typed forms** (UserPicker, ChoiceSelect, DateField, GroupPicker) live in `src/client/components/fields/` — do not regress to string-only forms from instance transform.

## Fluent module resolution (vs Build Agent / instance-sync)

`npm run audit:modules` (also runs before smoke/ship) guards these rules.

### What Fluent / now-sdk expects

| Layer | Pattern | Notes |
|-------|---------|--------|
| Fluent `.now.ts` → handler | `import { listPortfolios } from '../../server/rest/portfolio-routes'` then `script: listPortfolios` | **Build-time only.** SDK emits glue with the full package path. |
| Generated `sys_ws_operation` glue | `require('x_gzi_zflow/z-inflow/0.0.1/src/server/rest/portfolio-routes.ts')` | Path always includes **`.ts` / `.js`**. |
| Module ↔ module (runtime) | `import { … } from './helpers.ts'` | Relative specs **must include the extension**. Instance `sys_module.path` is registered as `…/helpers.ts`; `./helpers` resolves to `…/helpers` → **ModuleResolutionException**. |
| ES module → Script Include | `import { UserService } from '@servicenow/glide/x_gzi_zflow'` then `new UserService()` | Scoped globals like `x_gzi_zflow` are **not** defined in ES modules. |
| Script Include class file (`*.server.js`) | `new x_gzi_zflow.AccessService()` inside `Class.create` | Correct here — SI execution context has the scope global. |

Registered runtime modules (after `npm run build`) look like:

`x_gzi_zflow/z-inflow/0.0.1/src/server/rest/helpers.ts`

### What Build Agent / `instance-sync` leaves behind

`instance-sync` is a **transform mirror**, not a deploy source. After Build Agent / transform you typically see:

1. **`src/fluent/generated/integrations-inbound/scripted-rest-api/`** — `RestApi` with `script: Now.include('./sys_ws_operation_….js')` plus one glue `.js` per route that still `require(…/src/server/rest/*.ts)`. Same modular handlers; different Fluent packaging.
2. **Stale route sources** on that branch may still use extensionless `./helpers` — that is the ModuleResolutionException landmine if someone ships from the mirror.
3. **Do not** copy generated `Now.include` wrappers back onto `main`. Keep `z-inflow-api.now.ts` as function-typed `script:` handlers; laptop `now-sdk build` regenerates glue.

### Known ModuleResolution landmines (audit)

| Module path | Local (main) | Instance / Build Agent | Status |
|-------------|--------------|------------------------|--------|
| `src/server/rest/helpers.ts` | Imported as `./helpers.ts`; SI via `@servicenow/glide/x_gzi_zflow` | Was `./helpers` (no ext) → MRE; SI via `new x_gzi_zflow.*` → undefined | **fixed** |
| `src/server/rest/*-routes.ts` | Only cross-import is `./helpers.ts` | Glue `require(…/*-routes.ts)` | **ok** |
| `src/server/business-rules/*.ts` | No relative cross-imports; `@servicenow/glide` only | Glue `require(…/*.ts)` | **ok** |
| `src/server/script-includes/*.server.js` | `new x_gzi_zflow.*` (Class.create) | Same SI + sys_module `.server.js` path | **ok** (SI context) |
| Fluent `.now.ts` → routes | Extensionless import (build-time) | N/A at runtime | **ok** |
| BA `Now.include(sys_ws_operation_*.js)` | Absent on `main` | Present on `instance-sync` only | **ok** if unused; **risk** if deployed from mirror |
