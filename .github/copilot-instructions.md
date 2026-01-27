This repository contains an Angular 17 application with server-side rendering (SSR) served via an Express wrapper.

**Purpose & Big Picture:**
- **App Type:** The UI app lives in `junjun-app/` and is an Angular 17 app generated with Angular CLI.
- **SSR setup:** Server-side rendering is performed using `@angular/ssr` and a small Express server at [junjun-app/server.ts](../junjun-app/server.ts). The server bootstraps `src/main.server` and renders using `CommonEngine`.
- **Build output layout:** After a production build the server expects browser artifacts in `dist/junjun-app/browser` and the server bundle in `dist/junjun-app/server` (see `server.ts` for paths).

**Key commands / developer workflows:**
- Local dev (Angular dev server): `npm start` from repository root or `npm run start` inside [junjun-app](../junjun-app/package.json).
- Build for production (client+server): `npm run build` inside `junjun-app` (this runs `ng build` — adjust for SSR builds if you add extra build steps).
- Run SSR server (built output): `npm run serve:ssr:junjun-app` (runs the Node server at `dist/junjun-app/server/server.mjs`). The in-code default port is `4000` (see [junjun-app/server.ts](../junjun-app/server.ts)).
- Watch client rebuilds: `npm run watch` in `junjun-app`.
- Tests: `npm test` in `junjun-app` runs the Karma unit tests.

**Project-specific conventions & patterns**
- Minimal routing: `routes` are defined in [junjun-app/src/app/app.routes.ts](../junjun-app/src/app/app.routes.ts) (currently an empty array). New routes follow Angular 17 Router conventions.
- Application configs: Client `ApplicationConfig` is in [junjun-app/src/app/app.config.ts](../junjun-app/src/app/app.config.ts); server-specific providers are added in [junjun-app/src/app/app.config.server.ts](../junjun-app/src/app/app.config.server.ts). When changing DI providers, modify the server config merge there.
- Server rendering: `CommonEngine` is used in `server.ts` with `documentFilePath` pointing at `index.server.html` (see server rendering call site to understand provider injection and URL construction).
- Static assets: Express serves static files from the browser dist folder; cache headers are set to `maxAge: '1y'` for fingerprinted assets.

**Integration points & external dependencies**
- Node/Express: `express` is used as the server wrapper; types live in `@types/express` in `devDependencies`.
- Angular SSR: `@angular/ssr`, `@angular/platform-server`, `@angular/platform-browser`.
- Scripts reference the built server entry: `dist/junjun-app/server/server.mjs` — CI or deploy steps must produce this artifact.

**Where to make changes for common tasks**
- Add frontend routes or components under `junjun-app/src/app/` and update `routes` in [junjun-app/src/app/app.routes.ts](../junjun-app/src/app/app.routes.ts).
- Add server-only providers (e.g., tokens for rendering) in [junjun-app/src/app/app.config.server.ts](../junjun-app/src/app/app.config.server.ts).
- To change server behavior (caching, endpoints), edit [junjun-app/server.ts](../junjun-app/server.ts).

**Notes for AI coding agents**
- Prefer editing files inside `junjun-app/src/app/` for UI changes; follow Angular CLI structure.
- When suggesting build or run commands, reference `junjun-app/package.json` scripts. Example: to run SSR locally after build, the canonical command is `npm run serve:ssr:junjun-app`.
- Avoid assuming extra build steps: the repo currently uses standard `ng` scripts; do not propose missing CI steps unless the user asks.
- Use existing code patterns: server merges `ApplicationConfig` (see `app.config.server.ts`) rather than creating separate bootstrap flows.

If any section is unclear or you want additional detail (CI, Docker, or deployment steps), tell me which area to expand and I'll update this file.
