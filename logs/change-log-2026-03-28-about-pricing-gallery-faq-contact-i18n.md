# Change Log - 2026-03-28

## Scope

Updated About, Pricing, Gallery, FAQ, Contact Hours, and navigation brand styling with multilingual sync.

## Files Updated

- junjun-app/src/app/app.settings.ts
- junjun-app/src/app/app.component.html
- junjun-app/src/app/app.component.ts
- junjun-app/src/app/app.component.less

## Completed Changes

1. About section wording/grammar updates:

- Removed language-specific restaurant mention in About copy and used generic downstairs restaurant wording.
- Updated TTC wording to indicate downstairs TTC access available 24 hours.
- Removed specialty-item wording and generalized convenience wording.
- Added neighborhood convenience wording in English (hair barber, coffee shops, walk-in clinic, and other restaurants).
- Replaced 40-inch TV wording with big TV wording.
- Synced corresponding About text updates across language entries.

1. Pricing section visual + data updates:

- Removed old/strikethrough price rendering and now only shows the current price in bold black.
- Updated pricing data to single active prices (removed old|new display pairs).
- Updated Basement Three Persons Bed Room capacity to 1-3 persons in English and language variants.
- Updated all non-temporary room durations from 24 hours to One Night equivalents in all languages.

1. Payment methods placement/style updates:

- Moved payment methods line below pricing table.
- Increased top spacing and reduced bottom spacing for payment methods placement.
- Reduced payment methods helper text font size.

1. Gallery updates:

- Added assets/image/Hotel_Room_23.jpg into gallery list.
- Added label "Standard 2 persons room" for English and synced translated labels for all language lists.
- Included new image in gallery list source used by both card grid and popup/lightbox captions.

1. FAQ updates:

- Updated Q2 answer in English to:
  "the check out time is next day 12 noon time and check in time is today and can be as early as 10AM (while room available.)"
- Synced equivalent meaning in all language FAQ Q2 answers.

1. Contact Hours update:

- Updated contact operation hours value to 10AM-2AM.
- Updated English hours label to "Acceptance Hour:".
- Synced acceptance-hour label text for all languages.

1. Navigation brand text style update:

- Increased brand text size slightly.
- Added left-side inline padding for id_navigationBrand_text via .brand__text.

## Validation

- VS Code errors check: no errors in updated files.
- Build validation: npm run build (Angular) completed successfully.
- Note: terminal showed a transient Set-Location path warning due shell CWD state, but build executed and passed.

## Notes

- The gallery image file Hotel_Room_23.jpg is now referenced by settings and appears in git as a new tracked binary file.

## Follow-up Pass (same day)

Applied the requested additional polish pass after the original completion:

1. English FAQ sentence polish:

- Refined Q2 English wording for clarity and natural grammar while preserving meaning:
  "Check-out time is 12:00 noon the next day, and check-in is today, as early as 10:00 AM (subject to room availability)."

1. Non-English About prose polish:

- Improved readability and natural phrasing for About paragraphs in:

  - French (`fr`)
  - Spanish (`es`)
  - German (`de`)
  - Japanese (`ja`)
  - Korean (`ko`)
  - Arabic (`ar`)
  - Hindi (`hi`)
  - Russian (`ru`)
  - Vietnamese (`vi`)
  - Traditional Chinese (`zhHant`)
  - Simplified Chinese (`zh`)

- Kept all core intent aligned with English: central location, 24-hour TTC access, downstairs restaurant, nearby neighborhood businesses, room comfort features, and flexible/affordable stay positioning.

## Follow-up Validation

- VS Code errors check: no errors in `junjun-app/src/app/app.settings.ts`.
- Build validation: `npm run build` completed successfully.
