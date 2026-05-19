# Change Log — 2026-05-19 — Print CSS Fix (Blank Page Bug)

## Problem

The print preview was showing a completely blank page. Root cause: the original `@media print` block used `body > * { display: none !important }` to hide everything, then tried to show specific sections. This hid `<main id="id_appComponent_main">` which contains all content sections, because the CSS was referencing `#id_appComponent_pageContent` which does not exist in the template (the real ID is `#id_appComponent_main`).

Additionally, `.gallery-figure` was referenced in CSS but the template uses `class="gallery-item"`. The QR image selector `.qr-image` was wrong; the actual class is `.qr-card__imageButton img`.

## Fix Applied

**File:** `junjun-app/src/app/app.component.less`

Rewrote the entire `@media print` block with a **hide-what-we-don't-want** approach instead of **hide-all-then-show**:

1. **Removed** `body > * { display: none }` and all attempts to show sections back.
2. **Explicitly hide** only the unwanted elements:
   - `.nav-cluster`, `.notice-bars-wrapper`, `.menu-toggle`, `.nav-print-btn`
   - `#id_appComponent_roomReservationSection`
   - `#id_appComponent_faqSection`
   - `#id_appComponent_footer`
3. **Everything else renders normally** — About, Pricing, Gallery, Contact all visible by default.
4. **Fixed class selectors:**
   - Gallery: `.gallery-item` (not `.gallery-figure`)
   - Gallery labels: `.gallery-label` (not `figcaption`)
   - QR image: `.qr-card__imageButton img` (added alongside `.qr-card img`)
   - QR actions: `.qr-card__actions` and `.qr-card__status` hidden in print
5. **Header** stripped of sticky position, box-shadow for print.
6. **Contact grid** updated to `1.4fr 0.8fr 1fr` for better content balance.

## Build Required

Run manually (pwsh not available in this shell):
```powershell
cd junjun-app
npm run build
$ts = Get-Date -Format "yyyy-MM-dd_HH.mm.ss"
Remove-Item "..\deployment\Current" -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item "dist\junjun-app" -Destination "..\deployment\Current" -Recurse
Copy-Item "..\deployment\Current" -Destination "..\deployment\Archived\junjun-app-$ts" -Recurse
```
