# Change Log – 2026-03-15 – Pricing room count fix

## Issue

The pricing section displayed only 4 rooms on the site even though `PRICING.rooms` contains 5 entries, including `VIP Room`.

## Root cause

The pricing table renders from translated data in `STRINGS.<language>.pricing.rooms`, not directly from `PRICING.rooms`.
Several translation arrays currently contain only 4 room entries, so the fifth base room was dropped from the UI.

## Fix applied

Updated `junjun-app/src/app/app.component.ts`:

- `translatedPricingRooms` now uses the base runtime room list (`this.roomPricing`) as the authoritative source.
- Each translated row is merged onto the matching base row by index.
- If a translation entry is missing, the base room still renders.

## Result

- All 5 rooms now render in the pricing table.
- Missing translation rows no longer remove rooms from the site.

## Validation

- `get_errors` on `app.component.ts`: no errors
- `npm run build`: success
- Existing unrelated warning remains: `.form-floating>~label -> Did not expect successive traversals.`

## Recommendation

Translation arrays under `STRINGS.*.pricing.rooms` should be updated to also contain 5 room entries in every language so translated labels match the full dataset consistently.
