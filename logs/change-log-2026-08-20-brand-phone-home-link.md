# Jun Jun Hotel Change Log - 2026-08-20 Brand/Phone Home Link Update

## Summary

- Tightened the small-view brand spacing so `Jun Jun Hotel` no longer appears overly separated.
- Reworked the small-view layout so the phone pill sits closer to the title start for better vertical alignment.
- Moved the phone number into the same home button as the icon and brand text for large view.
- Large view now lets the icon, hotel name, and phone number all click back to home together.
- Added matching hover color behavior for both the hotel name and the phone number in the shared home control.
- Slightly increased the large-view phone size from the previous overly small state.

## Files Updated

- `junjun-app/src/app/components/navigation/navigation-brand.component.ts`
- `junjun-app/src/app/app.component.html`
- `junjun-app/src/app/app.component.ts`
- `junjun-app/src/app/app.component.less`

## Validation

- `npm test -- --watch=false --browsers=ChromeHeadless` ✅
- `npm run build` ✅
- Deployed SSR health check at `http://127.0.0.1:4000` ✅
- Browser verification completed for mobile and desktop header behavior ✅

## Translation Review

- No wording changed in this task.
- All existing language resources remain in sync.

## Deployment

- Current deployment: `C:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Current`
- Archive backup: `C:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Archived\junjun-app-2026-08-20_23.50.46`
