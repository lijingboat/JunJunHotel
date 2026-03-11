# Change Log - 2026-03-11

## Scope Implemented
Completed requested nav/header layout updates for responsive behavior and corrected Chinese naming from `军军` to `君君`.

## Changes

### 1) Wider language select padding
- Updated `#id_appComponent_navLanguageSelect` horizontal padding to be wider.
- File: `junjun-app/src/app/app.component.less`

### 2) Move notice bar to bottom of nav section
- Moved `id_appComponent_noticeBars` into `id_appComponent_siteHeader` so it is anchored with the nav header.
- File: `junjun-app/src/app/app.component.html`

### 3) Shrink nav bottom padding
- Reduced header bottom padding for desktop and mobile breakpoints.
- File: `junjun-app/src/app/app.component.less`

### 4) Keep nav behind mobile menu on `s` and `xs`
- Raised mobile menu/overlay stacking order above sticky nav header:
  - `.nav-cluster` z-index above header
  - `.nav-overlay` z-index above header
  - `.menu-toggle` topmost
- File: `junjun-app/src/app/app.component.less`

### 5) Align language to right for `s` and `xs`
- Set mobile `.nav-language` to align right in slide-out menu.
- File: `junjun-app/src/app/app.component.less`

### 6) Include ROOM reservation inside `id_appComponent_primaryNavigation` on `s` and `xs`
- In compact viewports, reservation CTA now renders inside `id_appComponent_primaryNavigation`.
- In larger viewports, CTA remains outside nav (existing behavior).
- Removes large gap between Contact and Room Reservation in mobile menu.
- File: `junjun-app/src/app/app.component.html`

### 7) Chinese Jun Jun corrected to `君君`
- Updated zh translations from `军军酒店` to `君君酒店` where applicable:
  - site title/brand
  - about title/body occurrences
  - footer copyright
- File: `junjun-app/src/app/app.settings.ts`

## Files Updated
- `junjun-app/src/app/app.component.html`
- `junjun-app/src/app/app.component.less`
- `junjun-app/src/app/app.settings.ts`

## Validation
- Diagnostics (`get_errors`) on modified files: no errors
- Build: `npm run build` in `junjun-app` succeeded

## Non-blocking warnings observed
- Initial bundle budget exceeded by `38.07 kB` (total `538.07 kB`)
- `app.component.less` exceeded style budget by `3.31 kB` (total `13.31 kB`)
- Existing selector warning remains: `.form-floating>~label`

## Suggestion
- To reduce warnings without changing features, split header/menu styles from `app.component.less` into smaller component-level style files (or partials) so `anyComponentStyle` budget is easier to keep under limit.
