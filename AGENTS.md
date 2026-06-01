# AGENTS.md — Triarc website development

Guidance for humans and coding agents working in this repository.

## Project overview

Marketing site for **Triarc Laboratories** ([triarc-labs.com](https://triarc-labs.com), dev: [dev.triarc-labs.com](https://dev.triarc-labs.com/)).

| Part           | Role                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------- |
| **Root (`/`)** | SvelteKit 2 + Svelte 4 frontend, deployed with `@sveltejs/adapter-vercel`                      |
| **`api/`**     | Separate NestJS service (chat, email, file storage) — not started by `npm run dev` in the root |

Most pages are **static TypeScript content** composed with shared UI. **Projects**, **stories**, and some listing pages load data from **Ghost** (`blog.triarc-labs.com`). Forms and live chat call **`chatbot.triarc-labs.com`**.

## Repository layout

```
src/
  routes/           # SvelteKit file-based routes (+page.svelte, +page.ts, +server.ts)
  lib/
    components/     # Reusable UI; Block.svelte + BlockContentBlocks/*
    content/        # Page copy, sections, metadata (TypeScript modules)
    index/          # Landing / home-specific sections
    assets/         # Images, SVGs (often imported with vite-imagetools / enhanced-img)
    util/           # ghost-helpers.ts, shared loaders
    stores/         # Svelte stores (e.g. layoutStore)
static/             # Public assets (favicon, robots, video, icons)
api/                # NestJS backend (Docker scripts under api/scripts/)
```

Path alias: **`$lib`** → `src/lib` (see `svelte.config.js` / Kit defaults).

## Commands

From repository root:

| Command           | Purpose                          |
| ----------------- | -------------------------------- |
| `npm install`     | Install frontend dependencies    |
| `npm run dev`     | Vite dev server (SvelteKit)      |
| `npm run build`   | Production build                 |
| `npm run preview` | Preview production build locally |
| `npm run check`   | `svelte-check` + sync (types)    |
| `npm run lint`    | Prettier check + ESLint          |
| `npm run format`  | Prettier write                   |

For **`api/`**: `npm install` and `npm run start` (Nest watch) inside `api/` when changing backend behavior.

Before opening a merge request, run **`npm run check`** and **`npm run lint`** when you touched frontend code.

## Architecture patterns

### Routes

- **`+page.svelte`**: UI; import content from `$lib/content/*` or use `export let data` from load functions.
- **`+page.ts`**: Client/server `load` — fetch Ghost, map with `$lib/util/ghost-helpers`, return typed data.
- **`+layout.svelte`**: Global nav, mobile menu, `ContactButton`, alternating section styles (`.alternating`).
- **`+layout.ts`**: Exposes `pathname` for nav highlighting.

New marketing pages usually need: route folder, optional content module under `src/lib/content/`, `MetaHead` + metadata from `$lib/content/triarc-page-metadata` (or local metadata object), and nav entry in `src/routes/+layout.svelte` if the page should appear in the menu.

### Block-based pages

Many service pages build an array of **`BlockContent`** (`TypeDefinitions.ts`) and render with **`Block.svelte`**, which delegates to blocks under `BlockContentBlocks/` (steps, cards, quotes, video, etc.).

Prefer extending **`BlockContent`** and an existing block component over one-off page markup when the layout matches an existing pattern.

### Ghost CMS

- Content API base: `https://blog.triarc-labs.com/ghost/api/content/`
- Helpers: **`src/lib/util/ghost-helpers.ts`** (`mapPage`, `mapPosts`, `loadGhostPagesByTag`, image srcset helpers).
- Project pages: Ghost **pages** with tags `#strategy`, `#operations`, `#innovation`; URL slug maps to `/projects/[slug]`. Editor workflow: **`src/lib/content/README.md`** (German).

When adding Ghost-driven listings, reuse existing fetch/mapping patterns in routes like `consulting/+page.ts` or `stories/+page.ts`. Do not duplicate Ghost URL construction in many places unless refactoring to a shared helper is in scope.

### Images

- Prefer imports with **vite-imagetools** / **`@sveltejs/enhanced-img`** query params (see `custom-software/+page.svelte`, `landing-page.ts`).
- Ghost images: use **`getSourceSet`** / **`getSource`** from `ghost-helpers.ts`.
- Large media lives under **`static/`** (e.g. WebM posters); README documents ffmpeg recipes for video assets.

### Backend (`api/`)

NestJS modules: chat (`ChatController` / `ChatService`), email applications (`EmailController`), Google Cloud storage, Slack/Microsoft Graph integrations. Config via **`@nestjs/config`** and environment variables in deployment — not committed here.

Frontend hardcodes production API host **`https://chatbot.triarc-labs.com`** for chat and job applications (`ApplicationForm.svelte`, `ContactForm.svelte`, `LiveChat.svelte`). Changing endpoints requires coordinated frontend + API deploy.

## Styling and brand

- **Tailwind CSS 3** with PostCSS in Svelte (`<style lang="postcss">` and `@apply` are common).
- Brand colors in **`tailwind.config.cjs`**: `red-triarc`, `green-triarc`, `blue-triarc`, blended variants, etc.
- Font: **Lexend** (loaded in `app.postcss`).
- Global layout token: `pt-navbar` / `spacing.navbar` (64px).
- Plyr video theming uses Triarc red in `app.postcss`.

Match existing spacing, `Container.svelte`, and alternating section classes rather than introducing new global CSS.

## TypeScript and Svelte conventions

- **Svelte 4** syntax (`export let`, `$:` reactive statements) — not Svelte 5 runes unless the project is migrated.
- Shared types live in **`src/lib/components/TypeDefinitions.ts`**.
- ESLint: `@typescript-eslint` + `eslint-plugin-svelte`; Prettier with **`prettier-plugin-svelte`** (`.prettierrc`).
- `__BUILD_TIME__` is injected in **`vite.config.ts`** for build-time constants.

## Language and content

- Primary site copy is **German** (Swiss business context). Keep tone and terminology consistent with neighboring pages.
- SEO: use **`MetaHead`** with structured page metadata where other pages do.

## Git workflow

- Use **conventional commits** (`feat`, `fix`, `chore`, `docs`, `refactor`, `test`).
- Reference issue trackers in commits/MR descriptions when applicable (`#123`).
- Prefer **small, focused** changes; do not commit secrets (`.env`, API keys). Ghost content API keys appear in load functions today — treat as public read keys; do not expose write credentials or rotate keys without ops approval.

Remote is **GitHub** (`triarc/website`); team may track work in GitLab issues — link both when relevant.

## Agent-specific guidelines

1. **Minimize scope** — Match surrounding files; avoid drive-by refactors, dependency upgrades, or new abstractions unless requested.
2. **Reuse** — `Block.svelte`, `Hero.svelte`, `Footer.svelte`, `Container.svelte`, content modules under `$lib/content/`.
3. **Verify** — Run `npm run check` and `npm run lint` for non-trivial frontend edits.
4. **Do not** — Change nav structure, Ghost tag names, or API URLs without explicit product/ops request; do not add tests or docs files unless asked.
5. **Static vs CMS** — Default new copy to TypeScript content modules; use Ghost only for blog-like or editor-managed project/story content.

## Common tasks (quick reference)

| Task                    | Where to look                                                                   |
| ----------------------- | ------------------------------------------------------------------------------- |
| New static service page | `custom-software/+page.svelte`, `$lib/content/*-section.ts`                     |
| Ghost project detail    | `projects/[slug]/+page.ts`, `ghost-helpers.ts`                                  |
| Stories / blog listing  | `stories/+page.ts`, `stories/[slug]/+page.ts`                                   |
| Jobs                    | `jobs/[slug]/`, `ApplicationForm.svelte`, `$lib/content/application-process.ts` |
| Sitemap                 | `routes/sitemap.xml/+server.ts`                                                 |
| Chat / contact submit   | `api/src/chat.*`, frontend `*Form.svelte` / `LiveChat.svelte`                   |

## Optional: Cursor rules

For file-specific agent rules, add `.mdc` files under **`.cursor/rules/`** (see Cursor “create rule” docs). This `AGENTS.md` is the repo-wide baseline; keep it updated when stack or deploy targets change.
