# Print Brochure — Round 11 Changes
**Date:** 2026-05-19

## Issues Fixed

### 1. Two-page overflow → forced back to one page
- Section padding: `0.12in` → `0.085in` (all 4 sections)
- Gallery image aspect ratio: `1/0.618` → `1/0.55` (shorter images)
- Map height: `2.0in` → `1.65in`
- Main box padding: `0.09in` → `0.07in`

### 2. Bottom alignment — Jun Jun Hotel title & phone number
- `site-header__navRow align-items`: `baseline` → `flex-end`
- Hotel name and phone text now share the same bottom edge

### 3. Phone font-size reduced
- `print-header-phone font-size`: `1.5rem` → `1.2rem`
- Added `padding-bottom: 0.02in` to fine-tune baseline nudge

### 4. QR code vertically centered with brand row
- `print-header-qr-wrap`: added `align-self: center !important`
- QR is now vertically centered relative to the navRow

## Files Modified
- `junjun-app/src/app/app.component.less`
