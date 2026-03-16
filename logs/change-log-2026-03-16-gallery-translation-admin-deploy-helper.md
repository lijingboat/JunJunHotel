# Change Log - 2026-03-16

## Scope
Implemented gallery popup UX updates, translation behavior fixes, Chinese brand rename updates, and an admin-only deployment helper page.

## Files Updated
- junjun-app/src/app/app.component.ts
- junjun-app/src/app/app.component.html
- junjun-app/src/app/app.component.less
- junjun-app/src/app/app.settings.ts
- junjun-app/src/app/components/admin/admin-page.component.ts

## Functional Changes
1. Gallery labels and tooltips
- Removed tooltip behavior from gallery images and popup images by removing title usage and using empty alt attributes in rendering.
- Canonical gallery labels now come from GALLERY image labels in app.settings.ts for all languages, including English.

2. Pricing translation fallback behavior
- Updated pricing translation merge logic so translated rows apply by index when available, instead of requiring full row-count match.
- This prevents full fallback to English when some languages provide fewer translated room rows.

3. Notice bar translation synchronization
- Updated notice FAQ message source text in English and adjusted all language notice_faq_help entries to consistent FAQ-jump meaning.

4. Chinese brand rename
- Replaced all Simplified/Traditional Chinese strings from 君君酒店 to 君君旅店.
- Ensured navigation brand text displays 君君旅店 only for zh and zhHant.

5. Gallery popup UX
- Close button now uses dark background with light foreground.
- Popup label moved to top-center with milk-colored text style.
- Added left/right navigation buttons and keyboard arrow support.

6. Admin-only deployment helper page
- Added query-string route view under /admin?view=deploy.
- Added toolbar links between main admin config and deployment helper view.
- Added step-by-step GoDaddy deployment instructions with generated inline SVG guide images.
- Kept same admin credential gate and no changes to public route behavior.

7. Reusable translation prompt
- Added TRANSLATION_SYNC_PROMPT in app.settings.ts using FAQS English meaning as source.

## Validation
- Type/lint diagnostics for changed files: no errors.
- Build command executed: npm run build (from junjun-app).
- Build result: success.
- Existing warnings (non-blocking):
  - app.component.less size budget exceeded by 835 bytes.
  - one CSS selector rule skipped by optimizer.

## Notes
- Deployment helper is isolated to admin route and does not impact main presenting site runtime.

## Follow-up Update
- Completed the two previously missing pricing rows in French and Simplified Chinese so the pricing table now shows translated content for all six rooms.
- Adjusted the gallery popup so the close button, label, and left/right navigation buttons are all overlayed inside the image area.
- Increased the size of the close and navigation buttons and changed their background color from dark neutral to blue.

## Follow-up Validation
- Changed files diagnostics: no errors.
- Production build re-run: success.
- Current non-blocking warning remains the LESS size budget warning for app.component.less.
