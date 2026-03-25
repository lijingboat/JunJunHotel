# Change Log - Translation + QR + Branding + Payment Banner

Date: 2026-03-25
Project: JunJunHotel

## Scope Completed

1. Translation catch-up for all active languages (UI additions included)
- Added full language coverage for newly introduced UI text in all configured languages: `en`, `fr`, `es`, `de`, `ja`, `ko`, `ar`, `hi`, `ru`, `vi`, `zhHant`, `zh`.
- Newly translated UI text includes:
  - Payment methods banner text
  - QR card title and hint
  - QR image copy button label
  - Open website button label
  - Copy result statuses (success / fallback / error)
- Existing gallery popup labels remain language-driven through per-language `galleryLabels` and are preserved.

2. Contact section red-rectangle replacement with QR feature
- Reworked contact layout to include a dedicated center QR card between contact info and map on desktop, and stacked placement on mobile.
- Added QR image for `https://www.junjunhotel.com`.
- Added action buttons below QR:
  - Copy QR image data
  - Open website
- Implemented clipboard logic:
  - Primary: copy actual image blob via Clipboard API
  - Fallback: copy Data URL text when image clipboard is unavailable
  - Status feedback shown under buttons

3. Favicon update
- Updated favicon to use `assets/image/Icon/icon_06_T.png`.
- Updated both settings asset reference and `src/index.html` favicon link.

4. Navigation brand icon replacement
- Replaced `id_navigationBrand_homeButton` image icon rendering with a new inline SVG hostel-style icon.
- SVG contains only iconography (no text embedded in SVG), while brand text remains as separate UI text next to icon.

5. Payment methods banner redesign
- Reworked `id_appComponent_paymentMethods` into centered, compact badge-like container.
- Visual style aligned with existing rounded banner language and section tone.
- Font size aligned to pricing content scale (`@font-size-section-text`).

## Files Changed
- `junjun-app/src/app/app.component.html`
- `junjun-app/src/app/app.component.less`
- `junjun-app/src/app/app.component.ts`
- `junjun-app/src/app/components/contact/contact-section.component.ts`
- `junjun-app/src/app/components/navigation/navigation-brand.component.ts`
- `junjun-app/src/app/app.settings.ts`
- `junjun-app/src/index.html`

## Validation
- Type/template diagnostics checked: no file-level errors.
- Production build executed successfully:
  - `npm run build`
  - Bundle generation completed
  - SSR/browser outputs generated
  - No Angular build budget warnings remaining in final run output

## Notes
- QR copy behavior depends on browser clipboard capabilities and page security context.
- A fallback path is implemented to keep the feature usable when image clipboard is blocked.
