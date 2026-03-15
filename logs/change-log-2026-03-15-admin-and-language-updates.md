# Change Log — 2026-03-15 (Admin + Language + Gallery Config)

## Scope

Implemented user-requested tasks: 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16.

## Files Updated

- junjun-app/src/app/app.settings.ts
- junjun-app/src/app/app.component.ts
- junjun-app/src/app/app.config.ts
- junjun-app/src/app/components/admin/admin-page.component.ts

## Changes

### 1) Gallery sequence index in settings only

- Added `rank` for every `GALLERY.images` item in `app.settings.ts` (1..22).
- Updated `translatedGalleryImages` in `app.component.ts` to sort by `rank` first.
- No gallery UI design change required for this task.

### 2) Language querystring + cookie memory

- Added language initialization from URL query `?lan=` with cookie fallback.
- Default language remains English (`en`) on first visit.
- Added alias mapping: `zh2` (query/cookie) <-> `zhHant` (internal language key).
- Language change now writes:
  - URL query `lan` using `history.replaceState`.
  - Cookie `junjun-hotel-lang` (365 days).

### 3) Admin buttons logic fixed

- `Save` emits full override payload.
- `Reload` reloads current runtime values.
- `Reset` clears overrides and returns to defaults.
- Status feedback now appears for all actions.

### 6) Admin field width + wrapping

- Field column adjusted and wrapped with:
  - `overflow-wrap: anywhere`
  - `word-break: break-word`
  - `white-space: normal`

### 7) IDs on all admin page DOM elements

- Added explicit IDs for login controls, toolbar controls, status blocks, section/table structures, row/cell/input elements.

### 8) One table per section

- Implemented grouped sections (`AdminSectionGroup`).
- Rendered one `<table>` per section.

### 9) Remove "Loaded" wording

- Removed automatic "Loaded." status message.

### 10) Result messages with exact changed items

- Save now displays:
  - Success/failure message.
  - Exact changed field list in `root.path: old -> new` format.
- Note included in status list:
  - Runtime overrides are updated in browser storage.
  - `app.settings.ts` remains source baseline file during runtime.

### 11) Back to home button

- Added `Back To Home` button.
- Opens `/` in a new tab.

### 12) Admin URL display (/admin)

- Added current URL hint on login screen.
- Routing config includes disabled initial navigation support for stable `/admin` rendering in SSR boot path.

### 13) Changed-row highlight before Save

- Added dirty tracking per field.
- Rows with unsaved edits are highlighted.
- Dirty highlights are cleared after Save / Reload / Reset.

### 14) Button renames

- `Save & Apply` -> `Save`
- `Reload From Current` -> `Reload`
- `Clear Overrides` -> `Reset`

### 15) Theme grouped with Theme Colors

- Grouped theme-related config under `Theme` section, including color keys and related display/language layout config.

### 16) Messages below buttons with bootstrap styles

- Status block shown directly below toolbar.
- Uses bootstrap-compatible classes:
  - success -> `bg-success`
  - error -> `bg-danger`
  - info -> `bg-secondary`
- Text color forced to milk-like light color for readability.

## Validation

```text
Command: npm run build
Result: SUCCESS
Notes: Existing warning retained
  .form-floating>~label -> Did not expect successive traversals.
```
