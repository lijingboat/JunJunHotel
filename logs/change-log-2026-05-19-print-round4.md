# Print Layout – Round 4 Revisions
Date: 2026-05-19

## Summary
Revised print brochure layout per user-provided reference images.

## Changes

### `junjun-app/src/app/app.component.html`
- Added `#id_appComponent_printHeaderMeta` div between `app-navigation-brand` and `#id_appComponent_navCluster`
  - Contains `.print-header-phone` (bound to `translatedContactPhone` getter)
  - Contains `.print-header-qr` img element (QR via qrserver.com API)
  - `aria-hidden="true"` + `display: none` on screen; shown only in `@media print`

### `junjun-app/src/app/app.component.less`
- Added `.print-header-meta { display: none }` screen rule
- Rewrote entire `@media print` block (Round 4):
  - **Header**: brand left, phone centre-right, QR top-right — all on one header row
  - **Typography**: base body 0.76rem uniform; brand 1.05rem bold; phone badge 0.88rem bold
  - **Left-alignment**: `text-align: left !important` on all body content elements
  - **Gallery**: `--gallery-item-ratio: 1 / 0.618` (golden ratio landscape, was panoramic 1/0.168)
  - **Contact layout**: `.contact-container` flex-column; `.contact-list` 4-col grid
    (`max-content 1fr max-content 1fr`) → phone+address on row 1, email+hours on row 2;
    `.map-card` full-width below; `.qr-card` hidden (QR moved to header)
  - Map iframe height: 190px (taller than Round 3's 155px)
  - Border lightened: `#c0c0c0` on outer border; separators `rgba(192,192,192,0.5)`

## Visual layout (print page order)
1. Header row: [icon+brand] ·· [phone] ·· [QR]
2. About paragraph (uniform 0.76rem)
3. Pricing table (alternating rows, left-aligned, no facility column)
4. Gallery 3×2 grid (golden ratio landscape)
5. Contact: [Phone|Email / Address|Hours] info grid → full-width map

## Notes
- `translatedContactPhone` getter already existed in app.component.ts – no TS changes needed
- QR image from: `https://api.qrserver.com/v1/create-qr-code/?size=420x420&format=png&data=https%3A%2F%2Fwww.junjunhotel.com`
- All 12-language translations previously completed in Rounds 1-3 remain unchanged
