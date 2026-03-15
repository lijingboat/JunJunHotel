# Change Log – 2026-03-15 – Admin JSON Export / Import

## Summary
Added **Export JSON** and **Import JSON** capabilities to the admin page so config changes can be
persisted portably without a backend server.  This satisfies the requirement:
> "Save it to local storage and it can json export or import json."

---

## Approach chosen
- **localStorage + JSON file transfer** (static-host compatible — no Node/Express write API required).
- Admin **Save** already stores the override payload in `localStorage` key `junjun-hotel-config-overrides`.
- New **Export JSON** button downloads that payload as a `.json` file.
- New **Import JSON** button loads a previously exported `.json` file, applies it as overrides, and
  writes it to `localStorage` so the home page picks it up on next load.

---

## Files modified

### `junjun-app/src/app/components/admin/admin-page.component.ts`

#### Template
- Added **Export JSON** button (`id_admin_exportBtn`) after the "Back To Home" button.
- Added **Import JSON** button (`id_admin_importBtn`) after "Export JSON".
- Added hidden `<input type="file" id="id_admin_importFile">` in the toolbar (triggered by the Import
  button click).

#### Class — three new methods

| Method | Purpose |
|--------|---------|
| `exportJson()` | Builds the full config payload from current field values (including unsaved edits), serialises to pretty-printed JSON, and triggers a browser file download as `junjun-hotel-config.json`. |
| `triggerImport()` | Programmatically clicks the hidden file input to open the OS file picker. |
| `importJson(event)` | Reads the selected `.json` file via `FileReader`, validates that it has `layout` or `settings` keys, emits `saveOverrides` (which causes the parent to write to `localStorage`), then immediately refreshes `layoutBase`, `settingsBase`, and all field models so the admin UI reflects the imported values without a page reload. |

---

## Workflow for the user

### Backing up / sharing config
1. Make changes in admin, click **Save** (optional — export works on unsaved edits too).
2. Click **Export JSON** → `junjun-hotel-config.json` downloads.
3. Keep the file as a backup or share it with another device/browser.

### Restoring config
1. Open admin page, log in.
2. Click **Import JSON** → select the previously exported `.json` file.
3. Fields update immediately; config is saved to `localStorage`.
4. Reload the home page to see all changes live.

---

## Persistence notes
- `localStorage` is per-origin, per-browser, per-device.
- Clearing browser site data / private browsing will remove the override.
- The JSON export/import workflow allows the config to be carried across devices or browsers.

---

## Build validation
- `npm run build` — ✅ SUCCESS (4.885 s)
- `get_errors` on modified file — ✅ 0 errors
- Pre-existing warning only: `.form-floating>~label -> Did not expect successive traversals.` (Bootstrap CSS, unrelated)
