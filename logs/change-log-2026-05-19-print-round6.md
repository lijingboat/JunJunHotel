# Print Layout – Round 6 Fixes
Date: 2026-05-19

## Issue Analysis (from user-provided screenshot)

6 issues identified and fixed:

1. **Header border** — `.site-header` still showing a left/side border from screen styles.
   Fix: `border: none !important` (changed from `border-bottom: none` to full `border: none`)

2. **Phone baseline misaligned** — phone number not properly baseline-aligned with brand title.
   Fix: `.site-header__navRow { align-items: baseline }` (was `align-items: center`)

3. **QR margin** — QR code too close to right page edge.
   Fix: `.print-header-qr-wrap { margin-right: 0.06in }` added

4. **Pricing header too dark brown** — table header row color `#c1895f` (brown) was too dark.
   Fix: Changed to `#e0c998` (light sand/wheat) with `color: #3d2a0e` (dark brown text)

5. **Contact single-column instead of 2-pair columns** — contact list showed as one column.
   Fix (two-part):
   a. `contact-section.component.ts`: Reordered DOM items to: phone → website → address → email → hours
      (was: phone → address → email → hours → website)
   b. `app.component.less` @media print: Changed contact-list to 4-column grid
      `grid-template-columns: max-content 1fr max-content 1fr`
      Result: Row 1 = Phone | Website, Row 2 = Address | Email, Row 3 = Hours (full width)
   c. `.contact-item--hours`: `display: flex; grid-column: 1 / -1` (overrides display:contents to span all 4 cols)

6. **Map broken (OSM URL failing)** — External static map URL not rendering in print.
   Fix: `app.component.html` static map `src` changed from OSM URL to `assets/image/map.png`

## Files Changed

- `junjun-app/src/app/app.component.html` — map img src → `assets/image/map.png`
- `junjun-app/src/app/app.component.less` — 4 print CSS changes (header, QR, pricing, contact)
- `junjun-app/src/app/components/contact/contact-section.component.ts` — DOM item reorder

## Build / Deploy
Build requires manual run (pwsh.exe unavailable in CI env):
```batch
cd /d "c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\junjun-app"
node node_modules\@angular\cli\bin\ng.js build
cd /d "c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel"
xcopy "junjun-app\dist\junjun-app" "deployment\Current\junjun-app" /E /I /Y
xcopy "junjun-app\dist\junjun-app" "deployment\Archived\junjun-app-2026-05-19_Round6" /E /I /Y
```
