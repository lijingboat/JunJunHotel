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
