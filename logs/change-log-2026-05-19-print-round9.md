# Print Layout Round 9 — Header sizing, square corners, swapped contact rows, even spacing

## Changes

### 1. QR code smaller
`.print-header-qr` width/height: `0.72in` → `0.5in`

### 2. Jun Jun Hotel title larger
`.brand__text` font-size: `1.5rem` → `2rem`

### 3. Phone number larger
`.print-header-phone` font-size: `1.05rem` → `1.5rem` (matches hotel name weight)

### 4. Brand icon larger
`.brand__icon` width/height: `1.6rem` → `2rem`

### 5. Map top & bottom margin
`.print-static-map-wrapper` changed from `margin-top: 0.06in` → `margin: 0.07in 0`
Also increased map height: `1.4in` → `1.7in` to use page space better.

### 6. Swap address and hours positions
Changed DOM order in `contact-section.component.ts`:
- Before: phone → website → address → email → hours (full-width)
- After:  phone → website → hours → email → address (full-width)

Implementation: moved `contact-item--hours` class from hours div to address div.
Grid row 2 now shows: [Hours | Email]; address spans full width at bottom.

### 7. Use page space at bottom
- Map height increased to `1.7in`
- Map wrapper margin `0.07in 0`
- Section padding kept at uniform `0.09in 0`

### 8. Pricing table square corners (root cause fixed)
Previously only `.pricing-table-wrapper { border-radius: 0 }` was overridden.
Root: `.pricing-table` in base CSS has `border-radius: @radius-md` (1.25rem) which
was not overridden. Fix: added `border-radius: 0 !important; overflow: hidden !important`
to `.pricing-table` in `@media print`.
Also added explicit `border-radius: 0 !important` to first/last thead th corners.

### 9. Even section margins
Removed `padding-top: 0.04in` override on `#id_appComponent_aboutSection` so all
four sections (about, pricing, gallery, contact) share the same `padding: 0.09in 0`.

## Files Modified
- `junjun-app/src/app/app.component.less` — print CSS block
- `junjun-app/src/app/components/contact/contact-section.component.ts` — DOM order swap

## Build & Deploy
```batch
cd /d c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\junjun-app
node node_modules\@angular\cli\bin\ng.js build
cd /d c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel
xcopy "junjun-app\dist\junjun-app" "deployment\Current\junjun-app" /E /I /Y
xcopy "junjun-app\dist\junjun-app" "deployment\Archived\junjun-app-2026-05-19_Round9" /E /I /Y
```
Current deployment path: `deployment\Current\junjun-app`
