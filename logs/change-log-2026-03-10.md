# Change Log - 2026-03-10

## Scope Implemented
Completed the requested feature set across notice bars, about/gallery/FAQ behavior, nav language UI, and pricing row contrast.

## Changes

### 1) Multi Notice Bars + per-item visibility/content
- Replaced single notice config with array-based config:
  - `NOTICE_BARS` in `app.settings.ts`
  - each notice has `id`, `message`, `level`, `visible`, `beginDate`, `expireDate`, `faqTargetIndex`
- App now renders multiple bars via `@for` in `app.component.html`.

### 2) Notice begin/expire dates with defaults
- Added `NOTICE_BAR_CONFIG`:
  - `defaultBeginDate: 'today'`
  - `defaultExpireDate: '9999-12-31'`
- `AppComponent.activeNoticeBars` resolves omitted dates to those defaults and only shows currently active notices.

### 3) Notice text default milk white
- Added `defaultTextColor` in `NOTICE_BAR_CONFIG` and bound it to notice component input.
- Notice text now defaults to milk-white style (`#f8f6ef`).

### 4) About images naturally inline with wrapped text
- Moved about images inside paragraph flow in template.
- Added `about-inline-image` classes so text wraps around images naturally.
- Images no longer force their own line except on constrained screens.

### 5) Gallery hover effect for large viewports
- Gallery zoom + label reveal kept for large desktop hover contexts (`min-width: breakpoint-l` and `hover: hover`).
- Removed always-on click/focus behavior so interaction matches desktop hover intent.

### 6) FAQ index format as `#1`, `#2`, `#3` line
- Added configurable FAQ index options in `FAQ_CONFIG`:
  - `indexPrefix`, `useHashIndexStyle`, `indexHighlightTextColor`
- Added `getFaqIndexLabel()` and rendered a dedicated first line per FAQ item when index is enabled.

### 7) Configurable per-FAQ highlight effect
- Added `highlightColor` per FAQ entry in `FAQS`.
- FAQ cards now use configurable highlight accent via CSS variable.

### 8) Notice bars anchored below nav and always visible while scrolling
- Added sticky notice wrapper section with config gate:
  - `notice-bars-wrapper` + `notice-bars-sticky`
  - sticky behavior controlled by `NOTICE_BAR_CONFIG.stickyBelowNav`.

### 9) Notice dismiss button `[x]`
- Added top-right close button (`×`) in `NoticeBarComponent`.
- Clicking close hides that notice component instance.

### 10) Optional notice link to any FAQ entry
- Added optional `faqTargetIndex` in notice config (default `null`).
- Clickable notice emits `navigateToFaq`, app scrolls to corresponding FAQ item.

### 11) Nav bar language dropdown (English only)
- Added `NAV_LANGUAGE_CONFIG` in settings.
- Added top-right language selector UI in nav with default `English`.

### 12) Configurable pricing row contrast (grid-like readability)
- Added `PRICING_DISPLAY_CONFIG` with:
  - `enableRowContrast`
  - `oddRowBackground`
  - `evenRowBackground`
- Bound config into pricing table class/CSS variables and applied alternating row backgrounds.

## Files Updated
- `junjun-app/src/app/app.settings.ts`
- `junjun-app/src/app/app.content.ts`
- `junjun-app/src/app/app.component.ts`
- `junjun-app/src/app/app.component.html`
- `junjun-app/src/app/app.component.less`
- `junjun-app/src/app/components/notice-bar/notice-bar.component.ts`
- `junjun-app/angular.json`

## Validation
- Build command: `npm run build` in `junjun-app`
- Result: Success (no compile errors)
- Diagnostics (`get_errors`) for modified files: no errors

## Non-blocking warnings observed
- Initial bundle budget warning (over 500kb)
- `app.component.less` warning above `anyComponentStyle` warning threshold
- Existing selector warning: `.form-floating>~label`

## Suggestion
To reduce style-budget warnings without further increasing budgets:
- split `app.component.less` into section-level component styles (notice/gallery/faq/pricing), or
- extract repeated utility rules into shared style partials.
