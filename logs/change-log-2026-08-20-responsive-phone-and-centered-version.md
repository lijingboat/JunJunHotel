# Jun Jun Hotel Change Log - 2026-08-20 Responsive Header/Footer Refinement

## Summary

- Refined the responsive header phone layout.
- Small portrait/mobile view now keeps the rounded outlined phone chip and aligns it beneath the hotel title.
- Large view now removes the circular rim treatment and displays the phone number inline beside the brand title.
- Grouped the footer copyright and app version into one centered block.
- Kept the existing version source unchanged: `junjun-app/package.json`.

## Files Updated

- `junjun-app/src/app/app.component.html`
- `junjun-app/src/app/app.component.less`

## Validation

- `npm test -- --watch=false --browsers=ChromeHeadless` ✅
- `npm run build` ✅
- Deployed SSR health check at `http://127.0.0.1:4000` ✅
- Browser verification completed for:
  - mobile portrait layout
  - desktop layout
  - centered footer metadata

## Translation Review

- No translatable copy changed in this update.
- All existing language resources remain in sync because this task only adjusted responsive layout and grouping.

## Deployment

- Current deployment: `C:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Current`
- Archive backup: `C:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Archived\junjun-app-2026-08-20_23.17.40`
