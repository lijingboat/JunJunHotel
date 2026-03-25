# Change Log - 2026-03-24

## Scope
Implemented gallery filtering/reordering from annotated image, pricing updates with highlighted new after-tax values, responsive pricing-table alignment fixes for xs/s, translation consistency updates, and expanded language menu/order.

## Changes

1. Gallery section updates
- Updated gallery data to keep only the 10 images marked with green bar + number.
- Ignored unnumbered green mark per user confirmation.
- Reordered kept images to numbered order:
  1) Hotel_Room_22
  2) Hotel_Room_02
  3) Hotel_Room_09
  4) Hotel_Room_01
  5) Hotel_Room_10
  6) Hotel_Room_11
  7) Hotel_Room_18
  8) Hotel_Room_17
  9) Hotel_Room_16
  10) Hotel_Room_15

2. Price section updates
- Updated pricing values based on provided reference.
- Added dual-line price rendering format `old|new` in settings.
- Display behavior:
  - Primary price remains first line.
  - New price renders second line in red.
- Updated after-tax values:
  - CAD $130 -> $120
  - CAD $150 -> $135
  - CAD $180 -> $165
  - CAD $100 -> $105
  - CAD $100 -> $120
  - CAD $80 unchanged

3. Responsive table layout (xs/s)
- Widened Room column.
- Reduced Duration width.
- Kept table aligned and readable at xs/s.
- Price column remains centered and bold.

4. Translation updates and synchronization
- Rebuilt translation source to ensure structure consistency and compile safety.
- Synchronized pricing rows across all language entries with English room lineup and updated after-tax values.
- Ensured pricing column labels are aligned language-by-language.

5. Language list expansion and order
- Updated dropdown options and order to:
  English -> French -> Spanish -> German -> Japanese -> Korean -> Hindi -> Russian -> Vietnamese -> Traditional Chinese -> Simplified Chinese
- Added/retained language keys:
  en, fr, es, de, ja, ko, hi, ru, vi, zhHant, zh

## Files changed
- junjun-app/src/app/app.settings.ts
- junjun-app/src/app/app.component.ts
- junjun-app/src/app/app.component.html
- junjun-app/src/app/app.component.less

## Validation
- Type/script/template/style diagnostics: no errors on changed files.
- Build command run: `npm run build` in `junjun-app`.
- Result: success.
- Remaining warning:
  - `app.component.less` still exceeds the 15 kB warning budget by ~1.00 kB (non-blocking warning).
  - Also one existing selector warning: `.form-floating>~label` skipped due to selector parser issue.

## Notes
- During implementation, `app.settings.ts` patch collision was corrected by reconstructing the file in a clean, compile-safe form while preserving required exports and applying requested updates.
