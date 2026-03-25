# Change Log - 2026-03-25 - Bed Circle Monochrome SVG Revision

## Summary
Refined both SVG logos to match the newly provided bed-circle reference style and enforced a monochrome palette only.

## Requested Visual Rules Applied
- Favicon: dark background + white line/icon details.
- Navigation brand icon (`id_navigationBrand_icon`): white background + dark line/icon details.
- Color restriction: only white, black, or dark gray values used.

## Files Updated
- `junjun-app/src/assets/image/Icon/logo-favicon.svg`
  - Replaced previous house-bed motif with a circular bed icon composition.
  - Uses only `#111111` and `#ffffff`.

- `junjun-app/src/assets/image/Icon/logo-brand.svg`
  - Replaced previous motif with matching circular bed icon composition.
  - White background with dark gray lines/fills (`#1f1f1f`).

## Existing Wiring Confirmed (No New Path Changes Needed)
- `junjun-app/src/index.html`
  - Favicon remains linked to `assets/image/Icon/logo-favicon.svg`.
- `junjun-app/src/app/app.settings.ts`
  - `ASSETS.brandIcon` remains `assets/image/Icon/logo-brand.svg`.
- `junjun-app/src/app/components/navigation/navigation-brand.component.ts`
  - `id_navigationBrand_icon` remains mapped to configurable `brandIcon`.
- `junjun-app/src/app/app.component.less`
  - `.brand__icon` remains sized to `@font-size-brand-text` to match "Jun Jun Hotel" text height.

## Validation
- Problems check on modified files: no errors.
- Build: `npm run build` succeeded.
- Note: existing Node warning remains informational (`v25.6.0` is non-LTS odd version).

## Translation Impact
No English strings or labels were modified in this revision.
No translation updates required.
