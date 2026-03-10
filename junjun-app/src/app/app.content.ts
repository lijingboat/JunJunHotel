// Re-export all settings from centralized configuration
export {
  NAV_LINKS,
  ABOUT,
  ABOUT_IMAGES,
  PRICING,
  GALLERY,
  FAQS,
  FAQ_CONFIG,
  CONTACT,
  RESOURCE_LINKS,
  SITE_META,
  ASSETS,
  STYLING,
  NOTICE_BAR,
  ROOM_RESERVATION_CONFIG,
} from './app.settings';

// Keep ROOM_PRICING for backward compatibility
import { PRICING } from './app.settings';
export const ROOM_PRICING = PRICING.rooms;

// Keep GALLERY_IMAGES for backward compatibility
import { GALLERY } from './app.settings';
export const GALLERY_IMAGES = GALLERY.images;
