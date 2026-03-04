/**
 * Centralized Configuration Settings
 * This file contains all configurable content, styling, and resource paths
 * Used throughout the application for consistency and easy maintenance
 */

// ===== SITE META =====
export const SITE_META = {
  title: 'Jun Jun Hotel',
  description: 'Affordable accommodations in downtown Toronto',
  brand: 'Jun Jun Hotel',
  year: new Date().getFullYear(),
} as const;

// ===== ASSETS & IMAGES =====
export const ASSETS = {
  brandIcon: 'assets/image/Icon/icon_06_T.png',
  favicon: 'assets/image/Icon/icon_01.png',
} as const;

// ===== NAVIGATION =====
export const NAV_LINKS = [
  { label: 'About', target: '#id_appComponent_aboutSection' },
  { label: 'Pricing', target: '#id_appComponent_pricingSection' },
  { label: 'Gallery', target: '#id_appComponent_gallerySection' },
  { label: 'FAQ', target: '#id_appComponent_faqSection' },
  { label: 'Contact', target: '#id_appComponent_contactSection' },
] as const;

// ===== ABOUT SECTION =====
export const ABOUT = {
  title: 'Welcome to Jun Jun Hotel',
  body: `A more polished and concentrated introduction can highlight the suite's strengths with clearer emphasis on location, comfort, and everyday convenience. The accommodation presents itself as a private, well‑appointed space situated in one of downtown Toronto's most practical and culturally rich districts. Its position places guests within immediate reach of essential amenities and vibrant neighbourhoods, making it an appealing choice for visitors seeking both accessibility and value.

The presence of T&T Supermarket just steps away is a defining advantage, offering effortless access to fresh produce, prepared meals, and Asian groceries—an uncommon level of convenience for central Toronto stays and a major benefit for long‑term guests who prefer to cook or shop frequently.

The surrounding area enhances the experience further. Kensington Market, with its eclectic mix of cafés, global cuisine, and independent shops, is only a short walk away, providing a lively atmosphere and endless dining options. The suite is also exceptionally close to the University of Toronto's St. George campus, making it ideal for students, visiting scholars, and professionals attending campus events. Chinatown lies just beyond, offering late‑night eateries, specialty markets, and a dynamic cultural environment that enriches daily life.

Inside, the suite is designed to balance comfort with functionality. A queen‑size bed ensures restful sleep, while the private shower provides personal convenience without shared facilities. The wooden flooring contributes to a clean, modern aesthetic, and the large 40‑inch television offers entertainment for evenings in. Fast, reliable internet supports remote work, online study, and streaming without interruption, making the space suitable for both leisure and productivity.

Affordability remains one of the suite's most compelling qualities. With flexible pricing and adaptable service durations, guests can tailor their stay to their needs rather than conforming to rigid hotel structures. This makes the accommodation accessible to a wide range of visitors, from short‑term travellers to long‑term residents seeking a stable, well‑located base in the city.`,
} as const;

export const ABOUT_IMAGES = [
  {
    src: 'assets/image/Hotel_Room_01.jpg',
    alt: 'Hotel room type 1',
  },
  {
    src: 'assets/image/Hotel_Room_02.jpg',
    alt: 'Hotel room type 2',
  },
  {
    src: 'assets/image/Hotel_Room_03.jpg',
    alt: 'Hotel room type 3',
  },
] as const;

// ===== PRICING SECTION =====
export const PRICING = {
  title: 'Room types and stay options',
  rooms: [
    {
      roomType: 'Standard Room',
      capacity: '1-2 persons',
      duration: '24 Hours',
      priceAfterTax: 'CAD$120',
      facility: 'Clean Bedding and Free Toilet Paper',
    },
    {
      roomType: 'Extend Room',
      capacity: '1-3 persons',
      duration: '24 Hours',
      priceAfterTax: 'CAD$150',
      facility: 'Clean Bedding and Free Toilet Paper',
    },
    {
      roomType: 'Basement Room',
      capacity: '1-2 persons',
      duration: '24 Hours',
      priceAfterTax: 'CAD$100',
      facility: 'Clean Bedding and Free Toilet Paper',
    },
    {
      roomType: 'Temporary Room',
      capacity: '1-2 persons',
      duration: '4 Hours',
      priceAfterTax: 'CAD$80',
      facility: 'Clean Bedding and Free Toilet Paper',
    },
  ],
} as const;

// ===== GALLERY SECTION =====
export const GALLERY = {
  description: 'The following are the picked images showcasing our rooms and amenities.',
  images: [
    { src: 'assets/image/Hotel_Room_01.jpg', alt: 'Hotel room view 1' },
    { src: 'assets/image/Hotel_Room_02.jpg', alt: 'Hotel room view 2' },
    { src: 'assets/image/Hotel_Room_03.jpg', alt: 'Hotel room view 3' },
    { src: 'assets/image/Hotel_Room_04.jpg', alt: 'Hotel room view 4' },
    { src: 'assets/image/Hotel_Room_05.jpg', alt: 'Hotel room view 5' },
    { src: 'assets/image/Hotel_Room_06.jpg', alt: 'Hotel room view 6' },
    { src: 'assets/image/Hotel_Room_07.jpg', alt: 'Hotel room view 7' },
    { src: 'assets/image/Hotel_Room_08.jpg', alt: 'Hotel room view 8' },
  ],
} as const;

// ===== FAQ SECTION =====
export const FAQS = [
  {
    title: 'Can I reserve without a credit card?',
    body: 'Yes. You can come in person, pay a cash deposit, and reserve a room without providing a credit card number.',
  },
  {
    title: 'What are check-in and check-out times?',
    body: 'One-night stays are from 1:00 PM to 12:00 PM (noon) the next day. Earliest check-in is 1:00 PM and latest check-out is noon.',
  },
  {
    title: 'Are pets and smoking allowed?',
    body: 'Pets are not allowed. Smoking must be outside in accordance with Canadian law.',
  },
] as const;

// ===== CONTACT SECTION =====
export const CONTACT = {
  phone: '647-349-9220',
  address: '374 Collge St. M5T 1S6',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=374%20College%20St%20Toronto%20ON%20M5T%201S6&t=&z=15&ie=UTF8&iwloc=&output=embed',
} as const;

// ===== RESOURCE LINKS =====
export const RESOURCE_LINKS = ['About Us', 'Service', 'Photo', 'FAQ'] as const;

// ===== STYLING VARIABLES =====
export const STYLING = {
  // Colors
  colors: {
    ink: '#1f1a17',
    sand: '#f7f1ea',
    cream: '#fff9f5',
    clay: '#c18a5f',
    cocoa: '#8a5d37',
    dusk: '#4d4035',
  },
  // Typography
  fonts: {
    sizeEyebrow: '0.85rem',
    sizeLabel: '0.85rem',
    sizeContent: '1rem',
    sizeNav: '0.95rem',
    sizeBrand: '1.5rem',
  },
  // Spacing
  spacing: {
    headerPaddingMobile: '16px',
    headerPaddingTablet: '16px',
    headerPaddingDesktop: '16px',
  },
  // Dimensions
  dimensions: {
    heightImageCard: '16.25rem',
    heightGalleryItem: '13.75rem',
    heightMapMin: '20rem',
  },
} as const;
