# Change Log - 2026-03-25 - SVG Logo for Favicon and Navigation Brand

## Summary
Created a new SVG logo based on the house+bed icon and integrated two visual variants:
- Favicon: dark background with white line art.
- Navigation brand icon: white background with dark line art.

Also updated the navigation brand icon rendering so `id_navigationBrand_icon` uses the configured asset path and matches the text height of "Jun Jun Hotel".

## Files Added
- `junjun-app/src/assets/image/Icon/logo-favicon.svg`
- `junjun-app/src/assets/image/Icon/logo-brand.svg`

## Files Updated
- `junjun-app/src/app/app.settings.ts`
  - Updated `ASSETS.brandIcon` to `assets/image/Icon/logo-brand.svg`
  - Updated `ASSETS.favicon` to `assets/image/Icon/logo-favicon.svg`

- `junjun-app/src/index.html`
  - Updated favicon link to SVG:
    - `type="image/svg+xml"`
    - `href="assets/image/Icon/logo-favicon.svg"`

- `junjun-app/src/app/components/navigation/navigation-brand.component.ts`
  - Replaced inline SVG with `<img>` using the `brandIcon` input.
  - Kept `id="id_navigationBrand_icon"` unchanged for selector stability.

- `junjun-app/src/app/app.component.less`
  - Updated `.brand__icon` width/height to `@font-size-brand-text` so icon height tracks the "Jun Jun Hotel" text size.
  - Kept rounded corners and removed image shadow for cleaner SVG rendering.

## Validation
- Type/script checks: no errors reported in modified files.
- Build command:
  - `npm run build`
  - Result: success.
  - Note: existing Node warning about odd-numbered Node version (`v25.6.0`) remains informational.

## Translation Impact
No English labels/strings/content were changed in this update.
No translation catch-up required for this task.
