# dev-portfolio — Agent Instructions

## Structure

Two independent pnpm packages — no root-level workspace manager.

- **`frontend/`** — React 19 + Vite 8 + TanStack Router (file-based) + TanStack Query + Tailwind CSS v4 + shadcn/ui
- **`cms/`** — Sanity Studio v5 (project: `bvuuhol9`, dataset: `production`)

## Commands (run from package directory)

| Command | Package | Notes |
|---|---|---|
| `pnpm run dev` | both | Vite dev server (frontend) / Sanity dev (cms) |
| `pnpm run build` | both | — |
| `pnpm run typecheck` | frontend | `tsc -b` — runs before push |
| `pnpm run lint` | frontend | ESLint type-aware (`projectService: true`) |
| `pnpm run format` | frontend | Prettier + `prettier-plugin-tailwindcss` |
| `pnpm run test` | frontend | Vitest — unit (jsdom) + Storybook (Playwright Chromium headless) |
| `pnpm run test:watch` | frontend | Vitest watch mode |
| `pnpm run storybook` | frontend | Storybook on port 6006 |

## Pre-push gate (Husky)

`pnpm typecheck && pnpm test` must pass before any push.

Pre-commit runs `lint-staged`: ESLint fix + Prettier on staged `*.{ts,tsx,js,jsx}`, Prettier only on `*.{json,md,css,html}`.

## Frontend conventions

- **Path alias**: `@/` → `frontend/src/` (set in `tsconfig.json` and `vite.config.ts`)
- **Router**: TanStack Router with file-based routes in `src/routes/`. Route tree is auto-generated to `src/routeTree.gen.ts` — do not edit manually.
- **Components**: shadcn/ui style in `src/components/ui/` with `cn()` utility (`clsx` + `tailwind-merge`) in `src/lib/utils.ts`
- **Icons**: `lucide-react`
- **Animations**: `motion` library
- **Theme**: dark/light/system via `ThemeProvider` in `src/components/theme-provider.tsx`

## Testing quirks

- Unit tests run in `jsdom` with setup in `src/test/setup.ts`
- Storybook tests run in a **separate Vitest project** using Playwright Chromium (headless). They require Storybook addon dependencies and a `.storybook/` config.
- No CI/CD exists — all quality gates are local (Husky hooks).

## CMS notes

- Schema types are defined in `cms/schemaTypes/index.ts` (currently empty — needs schema work)
- No local `.env` files exist; env is via Sanity CLI auth
- Use `pnpm run dev` from `cms/` to start the Studio locally
