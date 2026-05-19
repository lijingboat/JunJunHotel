# Print Layout – Round 7 Fixes
Date: 2026-05-19

## Changes

### 1. Logo/brand larger
- `.brand__icon` → `width: 1.6rem; height: 1.6rem` (was inheriting screen default ~1.1rem)
- `.brand__text` / `.brand__name` → `font-size: 1.5rem` (was 1.2rem)

### 2. Phone number vertically centred beside title
- `.print-header-phone` changed from `display: inline` → `display: flex; align-items: center`
- This ensures phone baseline matches the brand text centre point

### 3. All header elements (icon, title, phone, QR) centre-aligned on same line
- `.site-header__navRow` changed from `align-items: baseline` → `align-items: center`
- Matches user's green line indicator showing all items should share the same vertical midpoint

### 4. Pricing table border-radius — square-round corners
- `.pricing-table-wrapper { border-radius: 3px }` (was `0.25rem` which appeared rounded)

### 5. Section spacing enlarged for even distribution on one page
- All 4 sections: `padding: 0.09in 0` (was `0.05in 0`) — ~80% more vertical breathing room
- About section: `padding-top: 0.04in` (was 0) for a small top breath before first content

### 6. One-letter-page notes
- `@page { size: letter portrait; margin: 0.22in 0.28in }` — unchanged, still letter size
- All sections have `page-break-inside: avoid; break-inside: avoid`
- Sections are sized to fit by using compact font sizes (0.76rem) and golden-ratio gallery images

## Files Changed
- `junjun-app/src/app/app.component.less` — print @media block updated

## Build / Deploy (manual — pwsh.exe unavailable)
```batch
cd /d "c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\junjun-app"
node node_modules\@angular\cli\bin\ng.js build
cd /d "c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel"
xcopy "junjun-app\dist\junjun-app" "deployment\Current\junjun-app" /E /I /Y
xcopy "junjun-app\dist\junjun-app" "deployment\Archived\junjun-app-2026-05-19_Round7" /E /I /Y
```
