# Change Log - 2026-03-28 Gallery/About Popup, Pricing, Responsive Banner, Contact Line

## Scope

Implemented the requested UI, pricing, responsiveness, popup behavior, and translation-sync updates.

## Files Updated

- junjun-app/src/app/app.settings.ts
- junjun-app/src/app/app.component.ts
- junjun-app/src/app/app.component.html
- junjun-app/src/app/app.component.less
- junjun-app/src/app/components/contact/contact-section.component.ts

## Completed Changes

1. Gallery section background normalization

- Removed the gallery-only grid background styling.
- Gallery panel now uses the same background treatment as the other sections.

1. Pricing update

- Updated Basement Two Person Bed Room price from CAD $120 to CAD $105 per night in centralized pricing config.

1. Mid-width banner wrap fix (targeted)

- Added medium-range responsive adjustments only to address the observed wrap case.
- Reduced spacing/padding in the medium breakpoint where wrapping could occur.
- Kept existing behavior for other breakpoints that were already fine.

1. Acceptance Hour spacing and one-line display

- Increased spacing between hours label and value.
- Forced single-line rendering for the hours row only, without impacting other contact rows.

1. About image click to popup (same behavior as gallery)

- About inline images now open the same lightbox-style popup used by gallery images.
- Enabled only on medium and large viewports, as requested.
- Supports keyboard enter/space activation and existing close/left/right behavior.

1. Payment-methods banner width

- Updated payment banner to full-width rendering.
- Added targeted medium-breakpoint no-wrap and padding adjustments for the problematic case.

1. Translation catch-up and popup labels

- Verified that popup labels remain translated for all languages:
  - Gallery popup labels continue using per-language gallery labels.
  - About popup labels now use per-language translated about image alt labels.
- Confirmed no structural translation regressions from the implementation.

## Validation

- VS Code Problems check: no issues found.
- Build check: npm run build succeeded.
- Dist output generated successfully.

## Notes

- Build shows a non-blocking warning: app.component.less is 246 bytes over style budget.

## Suggestions

1. Consider increasing the style budget threshold slightly or extracting a small style block into component-level styles to remove the warning cleanly.
2. For production deployment reliability, use an LTS Node version (22.x or 24.x) instead of odd-numbered 25.x.
