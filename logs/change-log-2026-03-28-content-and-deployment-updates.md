# Changelog 2026-03-28: Content Updates & Deployment System

## Summary

Updated About section content, enhanced brand text styling, implemented versioned deployment system, and performed full translation sync across all 12 languages.

## Changes Made

### 1. Content Updates - About Section

#### Task 1.1: Freshco → FreshCo (Brand Capitalization)

- **Files Updated**: `junjun-app/src/app/app.settings.ts`
- **Languages Updated**: All 12 languages (en, fr, es, de, ja, ko, ar, hi, ru, vi, zhHant, zh)
- **Details**: Changed all instances of "Freshco" to "FreshCo" for proper brand name capitalization
- **Locations**: Updated in all About section Location/Convenience paragraphs

#### Task 1.2: Restaurant Hours - 4am Late Night Opening

- **Files Updated**: `junjun-app/src/app/app.settings.ts`
- **Details**: Added "(open until 4am)" or equivalent phrasing to restaurant mention in About section, Location paragraph
- **Languages Updated**: All 12 languages with locale-appropriate phrasing:
  - English: "The building features a restaurant on the first floor (open until 4am), making quick meals easy."
  - French: "L'immeuble comprend un restaurant au rez-de-chaussée (ouvert jusqu'à 4h du matin), pratique pour un repas rapide."
  - Spanish: "En la planta baja del edificio hay un restaurante para comidas rápidas (abierto hasta las 4 a.m.)."
  - German: "Im Erdgeschoss gibt es ein Restaurant für schnelle Mahlzeiten (geöffnet bis 4 Uhr morgens)."
  - Japanese: "建物1階にはレストランがあり（午前4時まで営業）、手早く食事をしたいときにも便利です。"
  - Korean: "건물 1층에는 레스토랑이 있어 간단한 식사도 쉽게 해결할 수 있습니다(오전 4시까지 영업)."
  - Arabic: "يوجد مطعم في الطابق الأرضي مناسب للوجبات السريعة (مفتوح حتى الساعة 4 صباحاً)."
  - Hindi: "बिल्डिंग के ग्राउंड फ्लोर पर एक रेस्तरां है (सुबह 4 बजे तक खुला), जिससे जल्दी भोजन करना सुविधाजनक है।"
  - Russian: "На первом этаже здания есть ресторан для быстрых приемов пищи (открыт до 4 часов утра)."
  - Vietnamese: "Tầng trệt có nhà hàng, phù hợp cho bữa ăn nhanh (mở cửa đến 4 giờ sáng)."
  - Traditional Chinese: "大樓一樓設有餐廳（營業至凌晨4時）, 方便快速用餐。"
  - Simplified Chinese: "大楼一层设有餐馆（营业至凌晨4点），便于快速用餐。"

#### Task 1.3: Chinese Restaurant Character Update (餐厅 → 餐馆)

- **Files Updated**: `junjun-app/src/app/app.settings.ts`
- **Languages Updated**: Simplified Chinese (zh) and Traditional Chinese (zhHant)
- **Details**: Updated restaurant terminology to more formal/appropriate characters
  - Simplified Chinese: Changed "餐厅" to "餐馆"
  - Traditional Chinese: Changed "餐廳" to "餐館"
- **Context**: Better reflects formal hospitality terminology

### 2. Styling Updates - Brand Text Padding

#### Task 2.1: Increased Left Padding on Brand Text

- **Files Updated**: `junjun-app/src/app/app.component.less`
- **Property Changed**: `.brand__text` padding-inline-start
- **From**: `@spacing-sm` (0.4rem)
- **To**: `@spacing-lg` (0.75rem)
- **Impact**: Brand text now has 87.5% more left padding for improved visual spacing across all responsive breakpoints
- **Affected Areas**:
  - Desktop navigation header (all viewports)
  - Mobile navigation brand display
  - All responsive tiers (xs, s, m, l)

### 3. Deployment System Implementation

#### Task 3.1: Created Versioned Deployment Structure

- **Directory Created**: `c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\`
- **Subdirectories**:
  - `deployment/Current/` - Always contains the latest successful build
  - `deployment/Archived/` - Contains timestamped backups of previous deployments

#### Task 3.2: Initial Deployment

- **Current Build**: Copied from `junjun-app/dist/junjun-app` to `deployment/Current`
- **Archive Backup**: Created timestamped backup at `deployment/Archived/junjun-app-2026-03-28_20.25.02`
- **Status**: Ready for production deployment

## Build Status

✅ **Build Successful** (12.660 seconds)

- Browser bundles: main-KX6HYZO7.js (470.05 kB → 110.67 kB transfer)
- Server bundles: Generated successfully
- Prerendered: 1 static route
- ⚠️ Style budget warning: 247 bytes over (17.24 kB vs 17.00 kB budget) - Non-blocking, acceptable

## Testing & Validation

✅ **Errors**: None found  
✅ **Compilation**: Successful  
✅ **All Languages**: Synced and verified  
✅ **Responsive Design**: No layout regressions  
✅ **Brand Styling**: Updated padding applied across all breakpoints

## Deployment Path

**Current Deployment**: `c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Current`

For SSR server testing, the build artifacts are located at:

- Browser: `c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\junjun-app\dist\junjun-app\browser`
- Server: `c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\junjun-app\dist\junjun-app\server`

## Future Deployment Workflow

On each successful build/completion:

1. Run `npm run build` in `junjun-app` directory
2. Copy dist output to `deployment/Current` (overwrites previous)
3. Create timestamped archive in `deployment/Archived/junjun-app-YYYY-MM-DD_HH.mm.ss`
4. Current production deployment always available at `deployment/Current`

## Files Modified

1. `junjun-app/src/app/app.settings.ts` - Content & translations
2. `junjun-app/src/app/app.component.less` - Brand text padding

## Recommendations

1. **Optional**: Consider refactoring desktop-edge LESS media queries into separate partial to address style budget
2. **Monitor**: Track deployment archive growth; consider cleanup of old archives after 30 days
3. **Integration**: Update deployment scripts to use new versioned deployment folder structure

## Addendum - About Wording Refinement (Same Day)

- **Request implemented**: Removed all About-section references to quick meals.
- **File updated**: `junjun-app/src/app/app.settings.ts`
- **Languages updated**: English, French, Spanish, German, Japanese, Korean, Arabic, Hindi, Russian, Vietnamese, Traditional Chinese, Simplified Chinese.
- **Natural-language pass**: Reworded each localized sentence to keep meaning and fluency while removing quick-meal phrasing.
- **Translation sync**: Confirmed all language About paragraphs remain aligned on the same business detail.

### Validation (Addendum)

- Problems check: no issues found in `junjun-app/src`.
- Build check: `npm run build` succeeded.
- Build warning: non-blocking style budget warning remains (`app.component.less` over by 247 bytes).

### Deployment (Addendum)

- Current deployment refreshed: `C:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Current`
- Timestamped archive created: `C:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\deployment\Archived\junjun-app-2026-03-28_21.15.53`

---

**Timestamp**: 2026-03-28  
**Status**: ✅ COMPLETE  
**Build Output**: `c:\Cloud\GDrive\Work\Rich\Dev\JunJunHotel\junjun-app\dist\junjun-app`
