# Post-deploy smoke tests

Agents **cannot see the user’s Chrome session**. Do not ask the user to paste console logs for API/server failures — run smoke instead.

## Quick start

```bash
# After auth is set up (once): now-sdk auth --list  → expect sdk-ai-admin / sdk-ai
npm run smoke

# Build → install to instance → smoke (primary Cursor loop)
npm run ship
```

Override alias if needed:

```bash
npm run smoke -- --alias sdk-ai-admin
# or
SN_SDK_AUTH_ALIAS=sdk-ai-admin npm run smoke
```

## What Cursor can automate

| Step | Command | Covers |
|------|---------|--------|
| Build | `npm run build` | Fluent + React client bundle |
| Deploy | `npm run deploy` (`now-sdk install`) | Push app to instance using stored alias |
| Smoke | `npm run smoke` | Critical REST + workspace HTML |
| Full loop | `npm run ship` | build → deploy → smoke |

Smoke hits (auth = same now-sdk keychain as deploy):

- `GET /api/x_gzi_zflow/v1/portfolios`
- `GET /api/x_gzi_zflow/v1/projects`
- `GET /api/x_gzi_zflow/v1/users/search?q=a`
- `GET /x_gzi_zflow_workspace.do` — fails on HTTP 5xx or body text `PM Workspace failed`

Any **5xx** (or auth/hard failure) → exit code **1** and a PASS/FAIL table with status + body snippet.

## Ideal loop (no console paste)

1. Cursor: fix code  
2. Cursor: `npm run ship`  
3. If smoke **FAIL** → read table output, fix server/REST, re-ship  
4. If smoke **PASS** but UI still wrong → human browser check (below)

## What still needs a human / browser

- Visual layout, drag-and-drop, UXF/chrome chrome quirks, React client-only bugs that never hit REST
- Login SSO / MFA flows outside the SDK basic-auth alias
- Instance ACLs that differ for the end-user vs `sdk-ai` deploy user

A full Playwright session was **not** added: session cookies from now-sdk basic auth are enough for the HTML check above. Add Playwright later only if you need click-path coverage beyond “page loads / no fatal banner.”

## Auth notes

- Credentials live in the OS keychain via `now-sdk auth` (not in `.now/` or the repo).
- Default alias on this project: **`sdk-ai-admin`** → `https://zscalerai.service-now.com`.
- CI can use env session auth (`SN_SDK_INSTANCE_URL` + `SN_SDK_SESSION_TOKEN` / cookie) the same way now-sdk install does.
