# Deploy & Build Agent

## Primary deploy path (laptop SDK)

Deploy from your laptop. This avoids Build Agent per-file **Allow** prompts.

```bash
npm run build && npm run deploy
# same as: now-sdk build && now-sdk install
```

Requirements:

- `now.config.json` **`scopeId`** must match the live app sys_id on the instance (`4bfbf57d333a07509937d1382e5c7bfa` for `x_gzi_zflow` on zscalerai).
- Authenticated Now SDK alias (e.g. `sdk-ai-admin`) against `zscalerai.service-now.com`.
- If install previously failed with `application was null`, fix `scopeId` first — do not fall back to Build Agent rebuild for that.

Scope is **`x_gzi_zflow`** (not `x_gzi_z_ppm`). Workspace UI: `x_gzi_zflow_workspace.do`.

## Build Agent (optional)

Build Agent is for coding help on the instance, **not** required for install. Prefer laptop `npm run deploy`.

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
