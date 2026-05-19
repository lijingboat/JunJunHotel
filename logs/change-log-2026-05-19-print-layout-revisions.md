# Print Layout Revisions – 2026-05-19

## Summary
Second-round print layout refinements based on user screenshot annotations.

## Changes Made

### `junjun-app/src/app/app.component.less` – `@media print` block (full rewrite)

1. **Removed all section eyebrow labels** – `.section-label { display: none !important }` (was showing "ABOUT", "PRICING", "GALLERY", "CONTACT")
2. **Outer square border** – `#id_appComponent_main { border: 1.5px solid #1f1a17 !important; border-radius: 0 }` wraps all 4 content sections
3. **Light separators between sections** – `border-top: 1px solid rgba(31,26,23,0.12)` on pricing/gallery/contact; first section (about) has no top border
4. **Payment methods text** – right-aligned (`text-align: right`) + smaller (`font-size: 0.56rem`) + `display: inline-block` (pill shape preserved)
5. **Alternating pricing rows** – explicit `background-color: #fff9f5 / #f7f1ea !important` on odd/even `td` cells to ensure print-color-adjust renders them
6. **Gallery 3×2 grid** – `grid-template-columns: repeat(3, 1fr)` with 6 images (figures 0–5): Room_22, Room_23, Room_02, Room_09, Room_01, Room_10
7. **Gallery captions hidden** – `.gallery-item figcaption, .gallery-label { display: none }` to save vertical space
8. **Contact grid forced 3-column** – `.contact-container { grid-template-columns: 1.5fr 0.65fr 1fr !important }` overrides component's `@media (max-width:1280px)` collapse
9. **QR card min-height removed** – `.qr-card { min-height: 0 !important }` prevents tall empty block
10. **QR image constrained** – `width: 80px; height: 80px; max-width: 80px` overrides `min(11.5rem, 40vw)` which was rendering large in print
11. **QR card title hidden** – `.qr-card__title { display: none }` per "remove all title" instruction
12. **Map iframe fixed height** – `height: 115px; min-height: 0` for compact map display
13. **Reduced page margins** – `0.35in 0.4in` (was 0.4in 0.45in) to gain more usable area

## Build Required (manual – pwsh not available in environment)
```
cd c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\junjun-app
npm run build
```

## Deploy Commands (manual)
```powershell
$ts = Get-Date -Format "yyyy-MM-dd_HH.mm.ss"
$src = "c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\junjun-app\dist\junjun-app"
$cur = "c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Current\junjun-app"
$arc = "c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Archived\junjun-app-$ts"
Remove-Item $cur -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item $src $cur -Recurse -Force
Copy-Item $src $arc -Recurse -Force
Write-Host "Deployed to: $cur"
Write-Host "Archived to: $arc"
```
