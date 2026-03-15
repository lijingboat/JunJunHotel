# Change Log – 2026-03-15 – English draft mode and content alignment

## Summary

Updated the app so English drafting follows the base configuration where that content already exists, and added safer translation fallbacks so rendered content stays aligned with the authoritative config.

## Files changed

- `junjun-app/src/app/app.component.ts`
- `junjun-app/src/app/app.component.html`

## What changed

### English draft mode

For English (`en`), the page now prefers base config values instead of duplicated `STRINGS.en` content where a base source already exists:

- navigation labels use `NAV_LINKS`
- about title and paragraphs use `ABOUT`
- pricing rows use `PRICING.rooms`
- pricing section label follows navigation/base label
- gallery labels use `GALLERY.images`
- FAQ items use `FAQS`
- contact values use `CONTACT`
- resource links use `RESOURCE_LINKS`
- notice bar messages use `NOTICE_BARS`
- footer text now uses a computed config-driven value instead of hardcoded HTML

### Content alignment safeguards

Added fallbacks so array-based translated content cannot drift out of sync with the base config:

- pricing rooms fall back to base rooms if translation row count does not match
- gallery image labels fall back to base labels if translation count does not match
- FAQ items fall back to base items if translation count does not match
- pricing column headers fall back to base column titles if translation metadata is incomplete

## Bug fixed

The duplicate `Temporary Room` / missing `VIP Room` issue happened because English pricing previously rendered from `STRINGS.en.pricing.rooms`, which only had 4 rows. After a previous index-merge fallback, rows became misaligned. English pricing now renders directly from the 5-row base config, so the table matches `PRICING.rooms` again.

## Validation

- `get_errors` on `app.component.ts`: no errors
- `get_errors` on `app.component.html`: no errors
- `npm run build`: success
- Existing unrelated warning remains: `.form-floating>~label -> Did not expect successive traversals.`

## Recommendation

The next cleanup step would be to reduce duplicated English content in `STRINGS.en` or add a small sync strategy for the admin editor, because the admin page still edits some English text through `strings.en` paths rather than the base config paths.
