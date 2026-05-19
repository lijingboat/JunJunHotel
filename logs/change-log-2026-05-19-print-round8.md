# Print Layout Round 8 — Phone Position, Single-Page, Square Corners

## Changes

### Root cause analysis & fixes

#### Bug 1: Phone number appearing beside QR instead of hotel name
**Root cause**: `@media (max-width: 62rem - 1)` is NOT scoped to screen media, so it also fires
during print. Chrome's print viewport (~762px) is less than `@breakpoint-l` (992px), so the
rule `.brand { flex: 1 1 auto; min-width: 0 }` applies, stretching the brand component to full
flex-container width and pushing the phone span to the right side next to QR.

**Fix**: Added `.brand { flex: 0 0 auto !important; min-width: 0 !important; width: auto !important }`
inside `@media print` in `app.component.less` to explicitly override.

#### Bug 2: Two pages instead of one
**Root cause**: `.print-static-map` had `height: auto !important; min-height: 1.6in !important`.
With `width: 100%`, the map image scaled proportionally to its natural aspect ratio. If
`map.png` is landscape 1200×800, it would render at `7.94in × 5.3in` — more than half the
page height on its own, causing overflow to page 2.

**Fix**: Changed to `height: 1.4in !important; min-height: 0 !important; object-fit: cover !important`
to enforce a fixed crop height.

#### Bug 3: Pricing table corners still rounded
**Root cause**: `border-radius: 3px` is still a visible rounded corner on the pricing wrapper.
User wants truly square (right-angle) corners.

**Fix**: Changed to `border-radius: 0 !important` on `.pricing-table-wrapper`.

## Files Modified
- `junjun-app/src/app/app.component.less` — three targeted edits in `@media print` block

## Build & Deploy
Build environment lacks pwsh.exe. Run manually:
```batch
cd /d c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\junjun-app
node node_modules\@angular\cli\bin\ng.js build
cd /d c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel
xcopy "junjun-app\dist\junjun-app" "deployment\Current\junjun-app" /E /I /Y
xcopy "junjun-app\dist\junjun-app" "deployment\Archived\junjun-app-2026-05-19_Round8" /E /I /Y
```
Current deployment path: `deployment\Current\junjun-app`
