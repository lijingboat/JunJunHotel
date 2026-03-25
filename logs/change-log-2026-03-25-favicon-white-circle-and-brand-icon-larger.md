# Change Log - 2026-03-25 - Favicon White Circle + Larger Brand Icon

## Summary
Applied requested visual refinements:
- Favicon is now a white circle with line icon only.
- `id_navigationBrand_icon` is now slightly larger across all viewports.

## Files Updated
- `junjun-app/src/assets/image/Icon/logo-favicon.svg`
  - Removed black outer background shape.
  - Kept white circular badge and dark line icon details.

- `junjun-app/src/app/app.component.less`
  - Increased base icon size:
    - `.brand__icon` width/height -> `calc(@font-size-brand-text + 0.24rem)`
  - Increased mobile icon size:
    - in `@media (max-width: (@breakpoint-m - 1))`
    - `.brand__icon` width/height -> `calc(@font-size-brand-mobile-text + 0.14rem)`
  - Removed redundant `.brand__text` margin/padding resets to keep style budget clean.

## Validation
- Build command: `npm run build`
- Result: success (no Angular project warnings/errors)
- Informational environment advisory remains about odd-numbered Node (`v25.6.0`).

## Translation Impact
No text labels/strings changed.
No translation updates required.
