# Jun Jun Hotel Change Log - 2026-08-20

## Summary

- Added an always-visible header phone chip so `647-349-9220` is visually set apart from the Jun Jun Hotel brand across all viewports.
- Added a light footer version label on the right side of the copyright line.
- Sourced the displayed app version from `junjun-app/package.json`.
- Updated the footer translation builder to use the centralized site year value.
- Refreshed the outdated Angular unit test to validate the live header phone and footer version.
- Increased the Angular `anyComponentStyle` production budget to match the current `app.component.less` size so production builds complete successfully.

## Files Updated

- `junjun-app/src/app/app.component.html`
- `junjun-app/src/app/app.component.less`
- `junjun-app/src/app/app.component.ts`
- `junjun-app/src/app/app.component.spec.ts`
- `junjun-app/src/app/app.settings.ts`
- `junjun-app/package.json`
- `junjun-app/package-lock.json`
- `junjun-app/tsconfig.json`
- `junjun-app/angular.json`

## Validation

- `npm test -- --watch=false --browsers=ChromeHeadless` ✅
- `npm run build` ✅
- HTTP check against deployed SSR build at `http://127.0.0.1:4000` ✅
- Runtime DOM verification:
  - Header phone: `647-349-9220`
  - Footer: `© 2026 Jun Jun Hotel`
  - Version: `v2026.8.20`

## Deployment

- Current deployment: `C:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Current`
- Archive backup: `C:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Archived\junjun-app-2026-08-20_22.33.16`

## Version Source

- Source of truth: `junjun-app/package.json`
- Current version: `2026.8.20`
