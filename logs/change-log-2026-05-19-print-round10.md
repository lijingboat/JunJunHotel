# Print Brochure — Round 10 Changes
**Date:** 2026-05-19

## Tasks Completed

### 1. Gallery images updated (6 new selections)
- Changed print gallery from figures 0–5 to figures 0, 1, 2, 11, 12, 13
- New 6 images shown in print: Hotel_Room_22 (rank1), Hotel_Room_23 (rank2), Hotel_Room_02 (rank3), Hotel_Room_26 (rank12), Hotel_Room_35 (rank13), Hotel_Room_37 (rank14)
- Added Hotel_Room_26, Hotel_Room_35, Hotel_Room_37 to `GALLERY.images` in app.settings.ts with ranks 12, 13, 14
- Updated `galleryLabels` arrays for all 12 languages (fr, es, de, ja, ko, ar, hi, ru, vi, zhHant, zh)

### 2. Jun Jun Hotel font-size reduced
- `brand__text` font-size: `2rem` → `1.65rem` in `@media print`

### 3. Title/phone baseline alignment
- `site-header__navRow align-items`: `center` → `baseline` in `@media print`
- Text baselines of hotel name and phone number now align

### 4. Address value alignment fix
- `contact-item--hours` changed from `display: flex; grid-column: 1/-1` to `display: contents`
- Added `grid-column: 2 / -1` to `.contact-item--hours p`
- "Address:" label goes into grid col 1; value spans cols 2–4, aligning with Phone/Hours values above

### 5. Page space usage improved
- Section padding: `0.09in` → `0.12in` (all 4 sections)
- Map height: `1.7in` → `2.0in`
- Better use of letter-page vertical space

## Files Modified
- `junjun-app/src/app/app.settings.ts`
- `junjun-app/src/app/app.component.less`
