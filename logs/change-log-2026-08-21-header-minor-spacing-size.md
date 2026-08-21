# Jun Jun Hotel Change Log - 2026-08-21 Minor Header Spacing/Size Update

## Summary

- Increased only the small-view vertical distance between the title row and the phone pill slightly.
- Increased only the large-view phone number size slightly.
- Kept the application version unchanged at `2026.8.20`.

## Files Updated

- `junjun-app/src/app/app.component.less`

## Exact Revert Reference

If you want to revert **only this prompt's change**, undo these two values in `junjun-app/src/app/app.component.less`:

- desktop phone size: `1.08rem` -> `1.02rem`
- small-view row gap: `0.28rem` -> `0.18rem`

If you want to revert the full deployed site to the state before this prompt, restore this archive:

- `C:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Archived\junjun-app-2026-08-20_23.50.46`

## Validation

- `npm test -- --watch=false --browsers=ChromeHeadless` ✅
- `npm run build` ✅
- Deployed SSR health check at `http://127.0.0.1:4000` ✅
- Browser verification completed:
  - mobile row gap: `10.4px`
  - desktop phone size: `17.28px`

## Translation Review

- No wording changed in this task.
- All existing language resources remain in sync.

## Deployment

- Current deployment: `C:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Current`
- Archive backup: `C:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Archived\junjun-app-2026-08-21_01.05.19`
