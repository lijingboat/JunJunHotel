# Change Log - 2026-03-25 - Responsive Brand Icon + Favicon Circle Update

## Summary
Implemented the requested responsive icon behavior and favicon redesign:
- On `s/sm` viewports, navigation brand icon now matches `id_navigationBrand_text` height.
- On `m/l` viewports, navigation brand icon is slightly larger.
- Favicon updated to black background + white circle + black line icon style.

## Files Updated
- `junjun-app/src/app/app.component.less`
  - Updated `.brand__icon` base size to `calc(@font-size-brand-text + 0.16rem)` for larger appearance on `m/l`.
  - Updated `@media (max-width: (@breakpoint-m - 1))` `.brand__icon` to:
    - `width: @font-size-brand-mobile-text`
    - `height: @font-size-brand-mobile-text`
  - This aligns mobile icon height with `id_navigationBrand_text`.

- `junjun-app/src/assets/image/Icon/logo-favicon.svg`
  - Switched favicon design to:
    - Black background container
    - White circle core
    - Black line icon details
  - Maintains monochrome palette.

## Validation
- Build command executed: `npm run build`
- Result: success
- Angular style budget warning: cleared.
- Remaining informational output: Node version advisory (`v25.6.0` odd-numbered, non-LTS).

## Translation Impact
No language strings or labels were modified.
No translation updates required.
