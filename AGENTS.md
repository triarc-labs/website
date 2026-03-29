# AGENTS.md

## Cursor Cloud specific instructions

This is the **triarc laboratories corporate website** — a SvelteKit frontend with an optional NestJS API backend.

### Services

| Service | Path | Port | Command |
|---------|------|------|---------|
| SvelteKit Frontend | `/workspace` | 5173 | `npm run dev` |
| NestJS API | `/workspace/api` | 3000 | `npm run start` (requires env vars for Slack, Azure, Google Cloud) |

The frontend runs fully standalone; it fetches blog content from an external Ghost CMS and calls the production API at `https://chatbot.triarc-labs.com`. The API backend is only needed for local testing of live-chat, contact-form, or job-application features.

### Node version

CI uses **Node 18**. Use `nvm use 18` before running commands. The environment has Node 18 installed via nvm.

### Key commands (frontend)

See `package.json` scripts. Quick reference:
- **Dev server:** `npm run dev` (Vite on port 5173; add `-- --host 0.0.0.0` for network access)
- **Lint:** `npm run lint` (Prettier + ESLint)
- **Build:** `npm run build`
- **Type check:** `npm run check` (has pre-existing errors — CI does not run this)

### Key commands (API)

See `api/package.json` scripts:
- **Build:** `cd api && npm run build`
- **Start (watch):** `cd api && npm run start`

### Gotchas

- `npm run check` (svelte-check) exits with errors due to pre-existing implicit-any types in `MediaQuery.svelte`, `LiveChat.svelte`, `lab/+page.svelte`, and `mlink/+page.svelte`. CI only runs `lint` and `build`, so these are known and expected.
- The `@egjs/svelte-grid` and `@egjs/svelte-infinitegrid` packages emit Vite warnings about missing exports conditions — these are harmless.
- The API requires several environment variables (Slack, Azure AD, Google Cloud Storage) which are not committed. Without them, the API will fail at runtime. The frontend does not need any env vars.
