# Build Agent — keep the React UI Page

The workspace UI (`x_gzi_zflow_workspace.do`) is a **BYOUI React page** built by `@servicenow/isomorphic-rollup` in `now.prebuild.mjs`.

**Do not strip** these from `package.json` / the install:

- `@servicenow/isomorphic-rollup` (devDependency; required for `npm run build`)
- `react`, `react-dom`, `react-router-dom`, `@tanstack/react-query`, and other `dependencies` used by `src/client`

If those are removed, the UI Page HTML stays on “PM Workspace loading...” because the client bundle never builds.

Rebuild with `npm run build` (runs prebuild + Now SDK). Scope is **`x_gzi_zflow`** (not `x_gzi_z_ppm`).

## Branch workflow (source of truth)

| Branch | Role |
|--------|------|
| **`main`** | Source of truth. Build Agent must pull **`main` only**. |
| **`instance-sync`** | Mirror of `now-sdk transform` from the instance. Audit/compare only — never treat as deploy source. |

Prefer **GitHub → Build Agent rebuild** over laptop `npm run deploy` / `now-sdk install`. Local install can fail with `Unable to install application as application was null` when `now.config.json` `scopeId` does not match the Build Agent–created app sys_id on the instance.

If transform or Studio reveals the real app `sys_id`, update `now.config.json` `scopeId` on `main` so future installs align. Until then, keep scope **name** `x_gzi_zflow` and rebuild via Build Agent against the existing instance app.

## Architecture constraints

- **Never use `@servicenow/react-components`** — it pulls in a second React instance and triggers React error #321 (invalid hook call) in the BYOUI page.
- **Instance Table API hotfix is bootstrap-only** — direct `/api/now/table/...` calls were a temporary workaround; do not add new features against raw Table API.
- **Shaped REST at `/api/x_gzi_zflow/v1` is the target architecture** — all new client/server work should go through the scoped scripted REST API in `src/fluent/scripted-rest-api/z-inflow-api.now.ts` and its route handlers in `src/server/rest/`.
- **Typed forms** (UserPicker, ChoiceSelect, DateField, GroupPicker) live in `src/client/components/fields/` — do not regress to string-only forms from instance transform.
