# Change Log — 2026-03-25

## Scope
Full-content translation, Arabic language addition, pricing strikethrough/CAD display fix, small-viewport table word-break fix, and duration bold validation.

---

## Changes

### 1. Pricing — Old Price Strikethrough + New Price CAD Label
- **app.component.html**: Added `class="pricing-price-old"` to the primary price `<span>`.
- **app.component.less**: Added `.pricing-price-old { color: @ink; font-weight: 400; text-decoration: line-through; }` — old price is now black, non-bold, with center strike.
- **app.component.less**: Added `font-weight: 700` to `.pricing-price-new` — new price is now bold red.
- **app.settings.ts**: Updated all `priceAfterTax` values to include `CAD` prefix for the secondary (new) price, e.g. `'CAD $130|CAD $120'`.

### 2. Arabic Language Added (ar — العربية)
- **app.settings.ts**: Added `{ value: 'ar', label: 'العربية' }` to `NAV_LANGUAGE_CONFIG.options` — after Korean (`ko`), before Hindi (`hi`).
- **app.settings.ts**: Added `ar: mkLang({...})` entry in `STRINGS` with full Arabic translations for all content sections.

### 3. Full-Content Translation for All Languages
Previously, `mkLang` only passed navigation labels and column headers to each language, while all body content (about paragraphs, gallery labels, FAQ, room reservation, room types, contact labels, notice bars) was duplicated from English constants.

**Expanded `mkLang` function** to accept and use:
- `aboutTitle` — About section heading
- `aboutP` — 4 about-section paragraphs
- `aboutImgAlts` — 3 about inline image alt texts
- `galleryDesc` — Gallery description text
- `galleryLabels` — 10 gallery image captions/popup labels
- `pricingRooms` — room type name, capacity, duration, facility per language (6 rooms)
- `phoneLabel`, `addressLabel`, `emailLabel`, `hoursLabel` — Contact field labels
- `reserveTitle`, `reserveDesc`, `reserveH` — Room reservation heading, description, 3 highlights
- `reserveForm` — All 11 form field labels and placeholders
- `faqItems` — 3 FAQ title + body pairs
- `noticeWelcome`, `noticeFaqHelp` — Notice bar messages
- `resLinks` — 4 resource link labels in footer

**Languages fully translated**: fr, es, de, ja, ko, ar (new), hi, ru, vi, zhHant, zh

**app.component.ts**:
- Fixed `translatedGalleryImages` getter to apply translated gallery `label` from language strings (previously always English).
- Added `translatedAboutImages` getter to return translated `alt` texts for about inline images.

**app.component.html**:
- Updated about image `[alt]` binding to use `translatedAboutImages[paragraphIndex].alt`.

### 4. Small Viewport Pricing Table Fix
**app.settings.ts** — Column width adjustments at `xs`:
- `roomType`: xs `40 → 34` (less room monopoly)
- `duration`: xs `14 → 20` (wider to prevent char-level breaks)
- `roomType` `s` breakpoint: `38 → 36`; `duration` `s`: `16 → 18`

**app.component.less** — XS breakpoint rule updated:
- Reduced `padding` to `0.28rem 0.35rem` (tighter to give more room for content)
- Reduced `font-size` to `0.78rem` (from 0.92rem)
- Changed `overflow-wrap: anywhere` → `overflow-wrap: break-word; word-break: normal` (prevents mid-character breaks)
- `duration` and `capacity` cells: `word-break: keep-all; overflow-wrap: normal` — words only break at spaces, never mid-word

### 5. Duration Bold Confirmed
The existing CSS rule `.pricing-table td[data-key='duration'] { font-weight: 700; }` was already correct. No XS rule was overriding it. Duration is bold at all breakpoints.

---

## Files Changed
- `junjun-app/src/app/app.settings.ts`
- `junjun-app/src/app/app.component.ts`
- `junjun-app/src/app/app.component.html`
- `junjun-app/src/app/app.component.less`

## Validation
- Build command: `npm run build` in `junjun-app`
- Result: **Success — Application bundle generation complete, zero warnings.**

## Suggestions
- **RTL support for Arabic**: Arabic is an RTL (right-to-left) language. Optionally add `dir="rtl"` or CSS `direction: rtl` scoped to Arabic for proper text alignment. Currently renders LTR.
- **Pricing column widths (m/l)**: At medium+ breakpoints, the facility column is visible. Room descriptions in non-Latin scripts may overflow — consider raising facility min-width or enabling text truncation at `l`.
- **Notice bars**: Currently set `visible: false` in settings so translated messages are not shown to users. Enable them when ready to test multilingual notice display.
