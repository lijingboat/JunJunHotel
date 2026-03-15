# Change Log - 2026-03-15

## Scope

Stable reimplementation of the requested content, pricing, reservation, translation, and gallery updates for the JunJunHotel Angular app.

## Changes Completed

- Removed duplicated English content from `STRINGS` in `junjun-app/src/app/app.settings.ts`.
- Added exported `ROOM_RESERVATION` content model and kept English fallback data in base constants instead of `STRINGS.en`.
- Set `ROOM_RESERVATION_CONFIG.showForm` to `false` so the reservation form is hidden by config.
- Updated reservation copy and form schema to use:
  - required name
  - required phone number
  - optional email
  - required number of persons
  - required check-in date
  - required check-out date
- Added bottom padding for `id_roomReservationSection_title` in the reservation section component.
- Adjusted pricing table behavior so room type wraps better, facility content has more usable space, and duration / price-after-tax are centered.
- Corrected facility wording such as `Private Shower, TV` in English pricing content.
- Added gallery lightbox popup behavior for medium and large viewports with close button, overlay close, and Escape-key close.
- Updated non-English reservation/gallery content so the French and Simplified Chinese structures match the new English room-reservation schema, and ensured translated gallery label counts align with English where needed.
- Added runtime-safe translation fallbacks in `junjun-app/src/app/app.component.ts` so the app no longer depends on `STRINGS.en` at runtime.
- Added compatibility handling for older persisted admin payloads that may still store `roomReservation` under `strings.en.roomReservation`.

## Validation

- `get_errors` for `junjun-app/src/app` returned no errors after the final edits.
- `npm run build` in `junjun-app` completed successfully.

## Notes

- The production build still reports one existing non-blocking stylesheet budget warning for `src/app/app.component.less` being slightly over budget.
- The build also reports one skipped selector warning from form-floating styles. Neither warning blocked the build.
