# Jun Jun Hotel Change Log - 2026-08-21 Workflow Problems Fix

## Summary

- Fixed the recurring Karma warning where ChromeHeadless was not being killed cleanly after test completion.
- Fixed the recurring deployment file-lock race by adding a deployment helper that stops the active SSR server before replacing `deployment\Current`.
- Added an explicit LTS Node requirement to the app configuration so the supported runtime is declared up front.

## Files Updated

- `junjun-app/karma.conf.cjs`
- `junjun-app/angular.json`
- `junjun-app/package.json`
- `junjun-app/.nvmrc`
- `deployment/deploy-current.ps1`
- `deployment/README.md`

## Validation

- `npm run test:ci` ✅
- `npm run build` ✅
- `npm run deploy:current` ✅
- SSR health check after helper deploy: `http://127.0.0.1:4000` returned `200` ✅

## Problem Status

1. **ChromeHeadless shutdown warning**
   - Fixed with `processKillTimeout: 10000` in `junjun-app/karma.conf.cjs`.

2. **Deployment file-lock race**
   - Fixed with `deployment/deploy-current.ps1`, which stops the live SSR process by port and `server.mjs` command line before copying files and optionally restarts the server.

3. **Odd-numbered Node warning**
   - The repository now declares the intended LTS version range (`>=20 <25`) and includes `.nvmrc` set to `22`.
   - The warning still appears on this machine because only Node `v25.6.0` is installed globally.

## Deployment

- Current deployment: `C:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Current`
- Archive backup: `C:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Archived\junjun-app-2026-08-21_01.16.46`
