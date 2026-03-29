# Change Log — 2026-03-29 — Icon Transparency & Contact Alignment Fixes

## Summary
Two critical UI fixes: brand icon and favicon transparency, plus contact info label alignment across all languages.

---

## Task 1: Icon Transparency + Alignment

### Brand Icon (logo-brand.svg)
**File:** `junjun-app/src/assets/image/Icon/logo-brand.svg`

- **Removed:** Outer white rounded-square background (`<rect x="1" y="1" width="254" height="254" rx="22" fill="#ffffff"/>`)
- **Kept:** Inner circle with black stroke + bed icon graphics
- **Result:** Icon now renders with transparent background outside the circle; brand nav shows just the circular emblem

### Favicon (logo-favicon.svg)
**File:** `junjun-app/src/assets/image/Icon/logo-favicon.svg`

- **Removed:** All bed icon graphics (`<g>` element with lines and paths) and the small black dot
- **Kept:** Single white circle (`<circle cx="128" cy="128" r="118" fill="#ffffff"/>`)
- **Result:** Favicon is now a clean, minimal white circle on transparent background — no black circumference stroke per requirements

---

## Task 2: Contact Info Alignment (All Languages)

### Problem
The contact list used a fixed `88px` label column, which was too narrow for longer labels across different languages:
- EN: "Acceptance Hour:" (17 chars)
- FR: "Heure d'acceptation :" (22 chars)
- DE: "Annahmezeit:" (12 chars)

This caused misalignment and poor UX especially on mobile.

### Solution
**File:** `junjun-app/src/app/components/contact/contact-section.component.ts`

Changed from per-row fixed grid to a parent-level smart grid with `display: contents`:

**Desktop+ (≥576px):**
```css
.contact-list {
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 0.75rem;
  row-gap: 1.5rem;
  align-items: baseline;
}
.contact-item {
  display: contents;  /* Makes label & value direct grid children */
}
```

- `max-content` sizes the label column to the **widest label across all rows**
- All labels are now perfectly aligned vertically
- Works for all 12 languages including RTL (Arabic)

**Mobile (< 576px / xs breakpoint):**
```css
@media (max-width: 35.9375rem) {
  .contact-list {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
  }
  .contact-item {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  .contact-label {
    font-size: 0.8rem;
    opacity: 0.65;
  }
}
```

- At xs breakpoint, layout switches to stacked (label above value)
- Labels become subtle captions (0.8rem, 65% opacity)
- Values get full card width for better readability
- Address wraps minimally on iPhone XR and smaller

---

## Validation & Deployment

| Metric | Result |
|--------|--------|
| **Errors** | ✅ None |
| **Build** | ✅ `main-Y5MZLRWD.js` (470.13 kB) |
| **Style Budget** | ⚠️ 247 bytes over (non-blocking, pre-existing) |
| **Current Deploy** | `C:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Current` |
| **Archive** | `C:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Archived\junjun-app-2026-03-29_00.32.36` |

---

## Impact

✅ Brand icon now displays as clean circular emblem with transparent corners  
✅ Favicon is minimal white circle without extra graphics  
✅ Contact labels aligned perfectly across all languages on desktop  
✅ Contact responsive behavior optimized for xs devices (iPhone SE, XR, 13 mini)
