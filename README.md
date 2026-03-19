# Next Base Starter

Russian version: [README.ru.md](./README.ru.md)

Production-ready Next.js starter template with Tailwind, SCSS, React Query, OpenAPI code generation via Kubb, and scalable layered architecture.

## Why This Template

This template is designed to bootstrap new web projects with practical defaults:

- Next.js 16 App Router foundation
- FSD-like layering: `app`, `processes`, `widgets`, `shared`
- Tailwind + SCSS setup for fast UI iteration
- React Query provider out of the box
- Kubb-based typed API clients/hooks from OpenAPI
- Example routes and reusable app shell

## Tech Stack

Core:

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)

UI and styles:

- [Tailwind CSS v4](https://tailwindcss.com/)
- [Sass / SCSS](https://sass-lang.com/)

Data and API:

- [TanStack Query](https://tanstack.com/query/latest)
- [Kubb](https://kubb.dev/) (`@kubb/core`, `@kubb/plugin-*`)

Quality:

- ESLint (flat config, Next.js rules)

## Installation

```bash
npm install
```

## Environment Variables

Copy `.env.example` to `.env` and adjust values.

```bash
cp .env.example .env
```

Variables:

- `NEXT_PUBLIC_API_URL`: runtime API base URL
- `API_DOCS_URL`: remote OpenAPI endpoint (used when `OPENAPI_PATH=remote`)
- `OPENAPI_PATH`: OpenAPI source for `kubb generate`

`OPENAPI_PATH` options:

- `./openapi.json` (default local schema)
- `remote` (load schema from `API_DOCS_URL`)

## Scripts

- `npm run dev`: start local development server (`http://localhost:3000`)
- `npm run build`: production build
- `npm run start`: run production server
- `npm run lint`: run ESLint
- `npm run generate`: generate API clients/hooks from OpenAPI via Kubb

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Configure env:

```bash
cp .env.example .env
```

3. Generate API layer:

```bash
npm run generate
```

4. Start app:

```bash
npm run dev
```

5. Open `http://localhost:3000`

## Architecture

Main layers:

- `src/app`: route groups, layouts, top-level providers
- `src/processes`: app-level providers and process orchestration
- `src/widgets`: composed UI blocks and page views
- `src/shared`: shared infrastructure (api/config/ui)

Current routes:

- `/` -> Home page
- `/about` -> About page
- `/docs` -> Docs page

## API Layer and Code Generation

Manual HTTP client:

- `src/shared/api/client.ts`

Generated artifacts:

- `src/shared/api/.generated`

Kubb config:

- `kubb.config.ts`

Generation flow:

1. Resolve OpenAPI source (`OPENAPI_PATH` / `API_DOCS_URL`)
2. Generate TypeScript models
3. Generate typed fetch clients
4. Generate React Query hooks

## Styling Model

- Tailwind utilities are enabled globally through `src/styles/globals.css`
- Shared global styles and variables live in `src/styles/globals.scss`
- Use Tailwind for component layout and SCSS for cross-cutting theming/variables

## Recommended Workflow for New Features

1. Update OpenAPI schema (`openapi.json` or remote docs)
2. Run `npm run generate`
3. Implement UI in `widgets`
4. Move app-level orchestration to `processes` when needed
5. Keep reusable abstractions in `shared`
6. Validate with `npm run lint && npm run build`

## Troubleshooting

`Cannot find module '@/shared/api'`:

- Run `npm run generate`
- Verify generated files exist in `src/shared/api/.generated`

Kubb import path issues:

- Check `pluginClient.importPath` and `pluginReactQuery.client.importPath`
- They should point to `@/shared/api/client`

OpenAPI source errors:

- Use `OPENAPI_PATH=./openapi.json` for offline/local generation
- For remote mode set `OPENAPI_PATH=remote` and verify `API_DOCS_URL`

Tailwind styles not applied:

- Ensure `@import "tailwindcss";` remains in `src/styles/globals.css`

## Production Notes

Before production:

- replace sample OpenAPI schema with real backend contract
- add test stack (unit + e2e)
- add CI checks (`lint`, `build`, tests)
- add error monitoring (for example Sentry)

## License

Define your project license (for example MIT).
