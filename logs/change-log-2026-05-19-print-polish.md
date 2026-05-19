# Print Layout Polish – 2026-05-19 (Round 3)

## Summary
Nine user-requested print refinements based on print-preview screenshot annotations.

## Changes Made

### `junjun-app/src/app/app.component.less` – `@media print` block

1. **Full rounded corners on gallery images**  
   - `.gallery-grid figure` now has `border-radius: 4px; overflow: hidden`  
   - `.gallery-grid img` also has `border-radius: 4px`  
   - Fixed by also overriding the CSS custom property `--gallery-item-ratio` on the figure itself (the live site uses `aspect-ratio: var(--gallery-item-ratio, 1/0.618)` with `overflow: hidden` on the figure element, so the border-radius clips properly)

2. **Image aspect ratio 1:0.168 (panoramic strips)**  
   - Set `--gallery-item-ratio: 1 / 0.168 !important` on `.gallery-grid figure` in print  
   - This overrides the default `1/0.618` to very wide panoramic strips  
   - Each image fills its grid cell via `height: 100%; object-fit: cover`

3. **Font size consistency (0.68rem base throughout)**  
   - About summary: `0.68rem`  
   - Table: `0.68rem` (th + td)  
   - Contact info: `0.68rem`  
   - Contact labels: `0.64rem`  
   - Contact title: `0.72rem`  
   - Payment footnote: `0.52rem`

4. **QR code at top-right corner — no description**  
   - `#id_appComponent_main { position: relative }` added  
   - `.qr-card { position: absolute; top: 0.09in; right: 0.09in; width: 0.72in }` (out of grid flow)  
   - All QR text hidden: title, hint, actions, status  
   - About section gets `padding-right: 0.85in` to avoid overlap  
   - Contact container reduced to 2-column: contact-info | map

5. **Line spacing / margin alignment**  
   - All section padding reduced to `0.05in 0`  
   - Contact list `row-gap: 0.04in`  
   - Consistent margins throughout

6. **Use full page (reduced whitespace)**  
   - `@page` margin reduced from `0.35in 0.4in` → `0.22in 0.28in`  
   - `#id_appComponent_main` padding `0.1in` → `0.09in`  
   - Gallery gap `0.1rem` → `3px`

7. **Map larger and wider**  
   - Contact grid: `1fr 1.9fr` (map gets ~65% of contact area width)  
   - Map iframe height increased from `115px` → `155px`

8. **"Welcome to Jun Jun Hotel" removed**  
   - `#id_appComponent_aboutTitle { display: none !important }`

9. **Border color lighter grey**  
   - `#id_appComponent_main` border: `1px solid #c0c0c0` (was `1.5px solid #1f1a17`)  
   - Header border: `#c4c4c4`  
   - Section separators: `rgba(192, 192, 192, 0.5)`  
   - Table borders: `rgba(192, 192, 192, 0.55)`

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
Write-Host "Current: $cur"
Write-Host "Archived: $arc"
```
