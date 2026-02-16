# Change Log — 2026-02-15

## User request (normalized)
Improve navigation/menu behavior, section interaction and visual contrast, simplify section readability, constrain typography into four levels, and keep a dated work log.

## Issues found
1. Menu toggle behavior became inconsistent due to mixed click/double-click logic.
2. Brand logo had no direct top-of-page action.
3. Section banners were static labels instead of interactive controls.
4. Section separation was visually weak.
5. Main app content structure was dense in one component file.
6. Header/banner contrast could be weak against some backgrounds.
7. Typography scale used many levels instead of a clear four-level system.

## Corrections applied
- Reverted toggle button to single-click event emission only.
- Made brand a dedicated home action (scrolls to top smoothly).
- Converted section banners to clickable buttons that scroll to section anchors.
- Added visible separators between adjacent sections.
- Improved readability by:
  - adding section comments in template
  - extracting large static content into `src/app/app.content.ts`
- Strengthened header/background contrast and made banner pills solid with stronger borders.
- Introduced four primary typography levels and mapped component font-size variables to those levels.

## Files changed
- `junjun-app/src/app/components/navigation/navigation-toggle.component.ts`
- `junjun-app/src/app/components/navigation/navigation-brand.component.ts`
- `junjun-app/src/app/app.component.ts`
- `junjun-app/src/app/app.component.html`
- `junjun-app/src/app/app.component.less`
- `junjun-app/src/app/app.content.ts`

## Timestamp
- 2026-02-15

---

## Recent updates (2026-02-15 continued)

### CSS custom properties → LESS variables
**Issue**: CSS custom properties (--variables) were mixed with LESS variables, creating inconsistent styling approach.

**Fix**: Converted all CSS custom properties to LESS variables (@variables):
- Added color palette variables at top of file (@ink, @sand, @cream, @clay, @cocoa, @dusk, @line)
- Added @font-nav, @card-shadow, @radius-lg, @radius-md
- Replaced all var(--*) references with @ equivalents throughout file
- Cleaned up :host selector to only contain display and derived properties

### Hamburger menu visibility fix
**Issue 1**: Hamburger icon disappeared behind nav-cluster when menu expanded in portrait orientation.

**Fix 1**: Changed z-index from auto to 50 for menu-toggle in portrait orientation media query.

**Issue 2**: Hamburger icon not visible between 768px-992px (M-L breakpoints) even though nav menu was hidden.

**Fix 2**: 
- Made menu-toggle display:inline-flex at L breakpoint (< 62rem/992px) instead of M breakpoint
- Removed duplicate display rules that were causing visibility gaps
- Now hamburger shows consistently whenever nav menu is hidden (width < 975px)

### Section banner buttons removed
**Issue**: Section banners (About, Pricing, Gallery, Amenities, FAQ, Contact) were clickable buttons that scrolled to their own sections, which was redundant since users were already viewing those sections.

**Fix**: Removed all 6 section banner buttons from app.component.html template.

### Files modified in this session:
- `junjun-app/src/app/app.component.less` (3 updates: CSS→LESS conversion, z-index fix, hamburger visibility fix)
- `junjun-app/src/app/app.component.html` (1 update: removed 6 banner buttons)
