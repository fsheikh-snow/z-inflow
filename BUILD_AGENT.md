# Build Agent — keep the React UI Page

The workspace UI (`x_gzi_zflow_workspace.do`) is a **BYOUI React page** built by `@servicenow/isomorphic-rollup` in `now.prebuild.mjs`.

**Do not strip** these from `package.json` / the install:

- `@servicenow/isomorphic-rollup` (devDependency; required for `npm run build`)
- `react`, `react-dom`, `react-router-dom`, `@tanstack/react-query`, and other `dependencies` used by `src/client`

If those are removed, the UI Page HTML stays on “PM Workspace loading...” because the client bundle never builds.

Rebuild with `npm run build` (runs prebuild + Now SDK). Scope is `x_gzi_zflow`.
