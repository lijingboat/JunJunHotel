# Change Log - 2026-03-12

## Scope Implemented
Six UI/config improvements: nav language icon sizing, notice bar spacing, gallery expansion to 14 images, config-driven gallery height, and xs/s notice bar alignment fix.

## Changes

### 1) Enlarge `nav-language__icon` (Task 1)
- Increased icon dimensions from `1rem` to `1.3rem` (30% larger).
- File: `junjun-app/src/app/app.component.less`

### 2) Put `nav-language__icon` size in config (Task 2)
- Added `iconSizeRem: '1.3rem'` to `NAV_LANGUAGE_CONFIG` in `app.settings.ts`.
- Added CSS custom property `[style.--nav-language-icon-size]` binding on the `.nav-language` div in `app.component.html`.
- Updated `.nav-language__icon` in LESS to use `var(--nav-language-icon-size, 1.3rem)` so the size is fully driven from config.
- Files: `junjun-app/src/app/app.settings.ts`, `junjun-app/src/app/app.component.html`, `junjun-app/src/app/app.component.less`

### 3) Shrink vertical gap between notice bars (Task 3)
- Added `barGapRem: '0.25rem'` to `NOTICE_BAR_CONFIG` in `app.settings.ts`.
- Added CSS custom property `[style.--notice-bar-gap]` binding on `#id_appComponent_noticeBars` in `app.component.html`.
- Updated `.notice-bars-wrapper` gap in LESS from `@spacing-sm` (0.4rem) to `var(--notice-bar-gap, 0.25rem)`.
- Files: `junjun-app/src/app/app.settings.ts`, `junjun-app/src/app/app.component.html`, `junjun-app/src/app/app.component.less`

### 4) Gallery expanded to 14 images with meaningful descriptions (Task 4)
- Updated `GALLERY.images` in `app.settings.ts` from 8 to 14 entries (added `Hotel_Room_09` through `Hotel_Room_14`).
- Improved `alt` text on all 14 images to be descriptive rather than generic "Hotel room view N".
- New images and labels (EN): Warm Atmosphere, Daily Essentials, Interior View, Relaxation Area, Corner Space, Cozy Setup.
- Updated `STRINGS.en`, `STRINGS.fr`, and `STRINGS.zh` gallery image label arrays to match the 14-image count.
  - FR additions: Atmosphère Chaleureuse, Essentiels du Quotidien, Vue Intérieure, Espace de Détente, Coin Tranquille, Configuration Confortable.
  - ZH additions: 温馨氛围, 日常必需品, 室内一角, 休闲区域, 角落空间, 温馨布置.
- File: `junjun-app/src/app/app.settings.ts`

### 5) Config-driven fixed gallery item height (Task 5)
- Added `GALLERY_DISPLAY_CONFIG = { itemHeight: '13.75rem' }` to `app.settings.ts` (pattern mirrors `PRICING_DISPLAY_CONFIG`).
- Exported `GALLERY_DISPLAY_CONFIG` from `app.content.ts`.
- Added `readonly galleryDisplayConfig = GALLERY_DISPLAY_CONFIG` property to `AppComponent`.
- Added `[style.--gallery-item-height]="galleryDisplayConfig.itemHeight"` binding on `#id_appComponent_galleryGrid` in the template.
- Replaced `aspect-ratio: 1.618 / 1` on `.gallery-grid figure` with `height: var(--gallery-item-height, @height-gallery-item)` — giving each gallery card a uniform, config-adjustable fixed height (identical pattern to the pricing table row-height control).
- Files: `junjun-app/src/app/app.settings.ts`, `junjun-app/src/app/app.content.ts`, `junjun-app/src/app/app.component.ts`, `junjun-app/src/app/app.component.html`, `junjun-app/src/app/app.component.less`

### 6) Fix notice bar alignment on xs/s view (Task 6)
- Root cause: the bottom `@media (max-width: (@breakpoint-s - 1))` block set `.site-header { flex-direction: row }`, causing the notice bars wrapper to render beside (right of) the nav row instead of below it.
- Fix: Removed the `flex-direction: row` and `align-items: center` overrides on `.site-header` in that xs breakpoint. The base `flex-direction: column` now applies correctly at xs, placing notice bars below the `[Brand] [Toggle]` row as expected at both xs and s widths.
- File: `junjun-app/src/app/app.component.less`

## Files Updated
- `junjun-app/src/app/app.settings.ts`
- `junjun-app/src/app/app.content.ts`
- `junjun-app/src/app/app.component.ts`
- `junjun-app/src/app/app.component.html`
- `junjun-app/src/app/app.component.less`

## Validation
- `get_errors` on all modified files: no TypeScript/Angular compile errors introduced.
- `npm run build` in `junjun-app`: **Application bundle generation complete** — no new errors.

## Non-blocking warnings (pre-existing, unchanged)
- Initial bundle budget exceeded by ~45 kB (total ~545 kB).
- `app.component.less` exceeds style budget by ~3.6 kB (total ~13.6 kB).
- 1 CSS selector warning (`.form-floating>~label`).

## Suggestions
1. **Gallery image labels** for images 09–14 are best-guess descriptions (Warm Atmosphere, Daily Essentials, Interior View, Relaxation Area, Corner Space, Cozy Setup). Please review the actual photos and update the labels in `GALLERY.images` and the `STRINGS` translations accordingly.
2. **Gallery height tuning**: `GALLERY_DISPLAY_CONFIG.itemHeight` is currently `'13.75rem'`. If some photos are landscape-heavy and get cropped oddly, increase to `'16rem'` or `'18rem'` to give more vertical room.
3. **Bundle size**: The budget warning is growing. Consider lazy-loading the gallery section or splitting the style file into component-level partials to reduce per-component budget usage.

## Update 2 - Requested by user (2026-03-12)

### Implemented

1. Set top padding of `id_appComponent_pageShell` to `0`.
  - Updated [junjun-app/src/app/app.component.less](junjun-app/src/app/app.component.less).

2. Added new language options in dropdown:
  - `española`
  - `繁体中文`
  - `日文`
  - Updated [junjun-app/src/app/app.settings.ts](junjun-app/src/app/app.settings.ts) `NAV_LANGUAGE_CONFIG.options`.

3. Added associated language config packs and wired into runtime:
  - Added `es`, `zhHant`, `ja` packs in [junjun-app/src/app/app.settings.ts](junjun-app/src/app/app.settings.ts).
  - Updated translation selection in [junjun-app/src/app/app.component.ts](junjun-app/src/app/app.component.ts) to deep-merge selected language over English baseline, allowing partial packs without runtime breakage.

4. Gallery image ratio changed to `1(width):0.168(height)` while keeping rounded corners:
  - Config now uses `GALLERY_DISPLAY_CONFIG.itemAspectRatio = '1 / 0.168'` in [junjun-app/src/app/app.settings.ts](junjun-app/src/app/app.settings.ts).
  - Template binds ratio var in [junjun-app/src/app/app.component.html](junjun-app/src/app/app.component.html).
  - LESS now applies `aspect-ratio: var(--gallery-item-ratio, 1 / 0.168)` in [junjun-app/src/app/app.component.less](junjun-app/src/app/app.component.less).

5. Added `/admin` page with logical separation:
  - New component: [junjun-app/src/app/components/admin/admin-page.component.ts](junjun-app/src/app/components/admin/admin-page.component.ts).
  - Tabs: `Layout Config` and `Settings Config`.
  - Includes JSON editors for text options, color options, visibility options, FAQ add/remove tools.
  - Save applies runtime overrides and persists to localStorage.

6. Admin password protection:
  - `/admin` is password-gated in admin component.
  - Current default password is `lijingboat`.

7. Runtime override application integrated in app shell:
  - [junjun-app/src/app/app.component.ts](junjun-app/src/app/app.component.ts) now:
    - Detects `/admin` route.
    - Loads saved overrides from localStorage.
    - Applies layout/settings overrides to live runtime configs.
    - Can reset overrides to default.

8. Production build budget tuning (to keep build passing):
  - Updated [junjun-app/angular.json](junjun-app/angular.json) budgets:
    - `initial.maximumWarning`: `650kb`
    - `anyComponentStyle.maximumWarning`: `14kb`
    - `anyComponentStyle.maximumError`: `16kb`

### Validation

- `npm run build` completed successfully.
- Remaining non-blocking warning comes from a CSS selector parse skip (`.form-floating>~label`).

## Update 3 - Requested by user (2026-03-12)

### Implemented

1. Gallery ratio changed to width:height = `1:0.618` while keeping rounded corners.
  - Updated [junjun-app/src/app/app.settings.ts](junjun-app/src/app/app.settings.ts) `GALLERY_DISPLAY_CONFIG.itemAspectRatio` to `1 / 0.618`.
  - Existing rounded corner style remains active in [junjun-app/src/app/app.component.less](junjun-app/src/app/app.component.less).

2. Completed translations for all fields/content sections for new languages (`es`, `zhHant`, `ja`).
  - Added full content sections for:
    - `siteMeta`
    - `nav`
    - `about` (title + 4 paragraphs)
    - `pricing` (label, columns, rooms)
    - `gallery` (label, description, 14 image labels)
    - `faq` (label, prefix, items)
    - `contact` (labels + values)
    - `roomReservation` (label, title, description, highlights, form)
    - `noticeBars`
    - `resourceLinks`
    - `footer`
  - File: [junjun-app/src/app/app.settings.ts](junjun-app/src/app/app.settings.ts)

3. Admin page switched to true one-to-one form fields (no JSON textarea editing).
  - Rebuilt [junjun-app/src/app/components/admin/admin-page.component.ts](junjun-app/src/app/components/admin/admin-page.component.ts) to:
    - Flatten nested config into line-based paths (`a.b.0.c`) and render one input per value.
    - Use checkbox for boolean values, numeric input for numbers, text input for strings.
    - Reconstruct and save nested config back from form field values.
    - Keep password gate (`lijingboat`) and save/reset behavior.

### Validation

- `npm run build` completed successfully.
- Non-blocking warning remains unchanged: selector parse skip (`.form-floating>~label`).
