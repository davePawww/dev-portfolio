# dev-portfolio — Agent Instructions

## Structure

Two independent pnpm packages — no root-level workspace manager.

- **`frontend/`** — React 19 + Vite 8 + TanStack Router (file-based) + TanStack Query + Tailwind CSS v4 + shadcn/ui (Nova)
- **`cms/`** — Sanity Studio v5 (project: `bvuuhol9`, dataset: `production`)

## Commands (run from package directory)

| Command | Package | Notes |
|---|---|---|
| `pnpm run dev` | both | Vite dev server (frontend) / Sanity dev (cms) |
| `pnpm run build` | both | — |
| `pnpm run preview` | frontend | `vite preview` |
| `pnpm run typecheck` | frontend | `tsc -b` — runs before push |
| `pnpm run lint` | frontend | ESLint type-aware (`projectService: true`) |
| `pnpm run lint:fix` | frontend | ESLint auto-fix |
| `pnpm run format` | frontend | Prettier + `prettier-plugin-tailwindcss` |
| `pnpm run format:check` | frontend | Prettier check-only |
| `pnpm run test` | frontend | Vitest — unit (jsdom) + Storybook (Playwright Chromium headless) |
| `pnpm run test:watch` | frontend | Vitest watch mode |
| `pnpm run storybook` | frontend | Storybook on port 6006 |
| `pnpm run build-storybook` | frontend | Storybook static build |
| `pnpm run codegen` | frontend | Regenerate TanStack Router route tree |
| `pnpm run deploy` | cms | Deploy Studio to Sanity managed hosting |
| `pnpm run deploy-graphql` | cms | Deploy GraphQL API from schema |
| `pnpm run start` | cms | Serve built Studio in production mode |

## CI/CD (GitHub Actions)

Two workflows in `.github/workflows/` — triggered on push/PR to `main` when their paths change:

| Workflow | CI (push + PR) | Deploy (push to `main` only) |
|---|---|---|
| `frontend.yml` | Lint → Typecheck → Test (Vitest + Playwright Chromium) → Build | Deploy to Vercel via `amondnet/vercel-action@v20` |
| `cms.yml` | Build Studio | Deploy to Sanity Studio via `npx sanity deploy` |

- Frontend uses `SANITY_AUTH_TOKEN` / `VERCEL_TOKEN` / `VERCEL_ORG_ID` / `VERCEL_PROJECT_ID` from GitHub secrets.
- CMS deploy uses `SANITY_AUTH_TOKEN` and `SANITY_STUDIO_HOST`.

## Pre-push gate (Husky — frontend only)

`pnpm typecheck && pnpm test` must pass before any push. Only runs for `frontend/`.

Pre-commit runs `lint-staged`: ESLint fix + Prettier on staged `*.{ts,tsx,js,jsx}`, Prettier only on `*.{json,md,css,html}`.

## Frontend conventions

- **Path alias**: `@/` → `frontend/src/` (set in `tsconfig.json` and `vite.config.ts`).
- **TypeScript 6.0**: `strict: true`, `verbatimModuleSyntax: true` (use `import type`), `erasableSyntaxOnly: true` (no enums/namespaces). Three-file setup: `tsconfig.json` (root refs), `tsconfig.app.json` (app), `tsconfig.node.json` (Vite).
- **Router**: TanStack Router with file-based routes in `src/routes/`. Route tree is auto-generated to `src/routeTree.gen.ts` — do not edit manually.
- **ESLint (flat config)**: `typescript-eslint` type-checked, `eslint-plugin-react`, `react-hooks`, `react-refresh`, `jsx-a11y`, `@tanstack/eslint-plugin-query`, `eslint-plugin-storybook`, `eslint-plugin-unused-imports`. Key rules: no `any`, no unused imports (warn for unused vars with `_` prefix), self-closing comps, no useless fragments.
- **Prettier**: Print width 100, single quotes, trailing commas, `prettier-plugin-tailwindcss` sorts classes in `clsx()` / `tw()` calls.
- **shadcn/ui v4 Nova**: Style `radix-nova`, base color `mist`, CSS variables, icon library `lucide`.
- **Icons**: `lucide-react` (primary), `react-icons` with `fa` (GitHub, LinkedIn), `fa6` (X/Twitter), `si` (Gmail) packs.
- **Font**: `@fontsource-variable/roboto` — set as `--font-sans` in `index.css`.
- **Components**: shadcn/ui style in `src/components/ui/` with `cn()` utility (`clsx` + `tailwind-merge`) in `src/lib/utils.ts`. Radix UI primitives (`radix-ui` meta-package) for NavigationMenu, Separator, Slot.
- **Animations**: `motion` library.
- **Theme**: dark/light/system via `ThemeProvider` in `src/components/theme-provider.tsx`. Storybook uses `withThemeByClassName` decorator.
- **Devtools**: `@tanstack/react-query-devtools` and `@tanstack/react-router-devtools` included in root layout (`__root.tsx`), opened by default but collapsed.
- **Vite plugins**: `@tanstack/router-plugin` (`autoCodeSplitting: true`), `@vitejs/plugin-react` (Oxc), `@tailwindcss/vite`.
- **Application structure**: `Container` wrapper (max-w-7xl, h-dvh), `Header` (nav + social links + theme toggle), `Footer` (email, phone, copyright). Routes: `/` (HomePage with hero image), `/experience`, `/projects`, `/technologies` (placeholders).
- **Vite config**: Uses `vitest/config` (Vitest >=4). Multi-project Vitest: jsdom unit tests + Playwright Chromium Storybook tests.
- **Vercel**: `vercel.json` with SPA rewrite (all paths → `/index.html`).

## Testing quirks

- Unit tests run in `jsdom` with setup in `src/test/setup.ts` (`@testing-library/jest-dom/vitest`).
- Storybook tests run in a **separate Vitest project** using Playwright Chromium (headless). They require Storybook addon dependencies and a `.storybook/` config.
- Frontend CI runs lint, typecheck, test (Vitest + Playwright), and build on push/PR.

## CMS notes

- Schema types are defined in `cms/schemaTypes/index.ts` — currently an **empty array** (needs schema work).
- Plugins: `structureTool()` (default content manager) and `visionTool()` (GROQ query playground). No custom desk structure.
- `deployment.autoUpdates: true` in `sanity.cli.ts` — Sanity auto-updates deployed Studio.
- No local `.env` files; env is via Sanity CLI auth. CI uses `SANITY_AUTH_TOKEN` secret.
- Prettier config is inline in `package.json` (no format script — differs from frontend).
- No local Husky hooks, lint, typecheck, or test scripts — quality is enforced only in CI.
- Use `pnpm run dev` from `cms/` to start the Studio locally.
