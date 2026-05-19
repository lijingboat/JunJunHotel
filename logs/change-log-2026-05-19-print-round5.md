# Print Layout – Round 5 Revisions
Date: 2026-05-19

## Changes

### 1. Header: phone number moved next to brand title
- Replaced `#id_appComponent_printHeaderMeta` (single div containing phone+QR)
  with two separate elements: `span.print-header-phone` + `div.print-header-qr-wrap`
- `span.print-header-phone` is a flex sibling of `app-navigation-brand` → appears immediately to its right
- Phone: `font-size: 1.0rem; font-weight: 700; margin-left: 0.18in`
- Brand: targeted `app-navigation-brand` inner name element for `font-size: 1.2rem bold`

### 2. QR code — margin + website label
- `div.print-header-qr-wrap` (flex column, centered, pushed to far right via `margin-left: auto`)
- Contains: `img.print-header-qr` (0.72in square) + `span.print-header-qr-label` text "www.junjunhotel.com"
- Label style: `font-size: 0.52rem; color: #5a4a3a`

### 3. Website field added to contact info (all languages)
- `app.settings.ts`: Added `website: 'www.junjunhotel.com'` to CONTACT
- `app.settings.ts`: Added `websiteLabel?: string` to mkLang labels type
- `app.settings.ts`: Updated mkLang contact output to include `websiteLabel` + `website`
- `app.settings.ts`: Added `websiteLabel` to all 12 language blocks:
  - fr: 'Site web :' | es: 'Sitio web:' | de: 'Website:' | ja: 'ウェブ：'
  - ko: '웹사이트:' | ar: 'الموقع:' | hi: 'वेबसाइट:' | ru: 'Сайт:'
  - vi: 'Website:' | zhHant: '網站：' | zh: '网站：'
- `contact-section.component.ts`: Added `website?: string` to ContactInfo + ContactCardLabels interfaces
- `contact-section.component.ts`: Added website row in contact-list template (conditionally rendered)
- `app.component.ts`: Added `website: contactStrings.websiteLabel ?? 'Website:'` to translatedContactCardLabels

### 4. Map — static image instead of iframe
- `app.component.html`: Added `div.print-static-map-wrapper` with `img.print-static-map` after `<app-contact-section>`
- Source: `https://staticmap.openstreetmap.de/staticmap.php?center=43.6568,-79.4090&zoom=16&size=800x280&markers=43.6568,-79.4090,red`
- `loading="eager"` so image is pre-fetched before print
- Screen: `display: none`; Print: `display: block; width: 100%; min-height: 1.6in`
- `.map-card` (live iframe card) hidden in print

### 5. Font sizes — larger, styled like live site
- All body text: `0.76rem`
- Brand name: `1.2rem bold`
- Phone in header: `1.0rem bold`
- Pricing table header: warm brown (`#c1895f` bg, white text, bold)
- Duration + price columns: bold + warm brown (`#7a4f2e`)
- Contact labels: bold warm brown

### 6. No border on top (About) section
- `#id_appComponent_aboutSection { border-top: none !important }`
- `.site-header { border-bottom: none !important }` — removed the header separator line

### 7. Other improvements
- Pricing table wrapper gets warm amber border + rounded corners
- Alternating rows: odd `#fff9f5` / even `#f2e8de` (warmer than before)
- Payment footnote: warm `#6b4226` text, `#f4e7db` background
- Contact card: `background: #fffbf7`, warm amber border
- Static map wrapper: warm amber border

## Notes
- Static map URL from OpenStreetMap static map service — free, no API key required
  If the service is down or rate-limited, replace the `src` URL with a locally saved PNG screenshot
- The QR code API (qrserver.com) requires internet access at render time for print
- All 12 languages now have `websiteLabel` translated + website shown in live contact section
