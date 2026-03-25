# Change Log — 2026-03-25 (RTL + Notice Bars)

## Scope
Implemented both approved suggestions:
1) Arabic right-to-left rendering support.
2) Enable notice bars by default.

## Changes

### 1) Arabic RTL support
- Added runtime RTL language getter in `app.component.ts`:
  - `isRtlLanguage` returns `true` when selected language is `ar`.
- Applied RTL direction at page shell level in `app.component.html`:
  - `dir="rtl"` when Arabic is selected.
  - `is-rtl` class toggled for scoped styling.
- Added scoped RTL styles in `app.component.less`:
  - `.page-shell.is-rtl { direction: rtl; }`
  - Right-aligns major text blocks for Arabic readability:
    - about copy
    - faq lines
    - contact/resource/footer regions

### 2) Notice bars enabled by default
- Updated `NOTICE_BARS` in `app.settings.ts`:
  - `notice_welcome.visible: false -> true`
  - `notice_faq_help.visible: false -> true`
  - Added `faqTargetIndex: 0` to FAQ helper notice for immediate FAQ jump.

## Files changed
- `junjun-app/src/app/app.settings.ts`
- `junjun-app/src/app/app.component.html`
- `junjun-app/src/app/app.component.ts`
- `junjun-app/src/app/app.component.less`

## Validation
- Command: `npm run build` (inside `junjun-app`)
- Result: Success
- Output included:
  - `Prerendered 1 static route.`
  - `Application bundle generation complete.`
- No errors/warnings in final build output.
