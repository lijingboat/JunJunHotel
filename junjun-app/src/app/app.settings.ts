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
  paragraphs: [
    `Welcome to a closer look at Jun Jun Hotel, a comfortable and well-located private suite designed for guests who value convenience, affordability, and a smooth stay in the heart of downtown Toronto. Set in one of the city’s most practical and culturally active neighbourhoods, the suite places visitors near daily essentials, major destinations, and vibrant urban districts. This balance makes it especially suitable for students, professionals, long-term guests, and travellers who want a central home base that feels easy to live in.`,
    `🌆 Location and Everyday Convenience\nThe suite offers exceptional accessibility. T&T Supermarket is only steps away, making it easy to pick up fresh groceries, ready-made meals, and Asian specialty items without long walks or transit rides. This is a major advantage for extended stays and for guests who like to cook regularly. Kensington Market is also within walking distance, offering a lively mix of global cuisine, independent shops, and creative local culture. The University of Toronto’s St. George campus is nearby as well, making the suite a practical choice for students, visiting academics, and conference attendees. Chinatown is just beyond, with late-night eateries and specialty markets that add energy and convenience to daily life.`,
    `🛏️ Interior Comfort and Practical Features\nInside, the suite is designed for both comfort and function. A queen-size bed provides generous sleeping space, while a private shower offers convenience without shared facilities. Wooden flooring adds a clean, modern aesthetic, and a large 40-inch TV supports relaxing evenings indoors. Fast, stable internet enables remote work, online study, streaming, and video calls with ease. Together, these features create a dependable, self-contained environment suitable for both short visits and longer stays.`,
    `💰 Flexible and Affordable Stays\nAffordability remains one of Jun Jun Hotel’s strongest advantages. Flexible pricing and adaptable service durations allow guests to select a stay pattern that fits their real needs instead of rigid hotel structures. This makes the suite a smart and dependable option for travellers, students, and long-term residents who want a well-located Toronto base without the high cost of traditional accommodations.`,
  ],
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
  columns: [
    {
      key: 'roomType',
      title: { xs: 'Room', s: 'Room', m: 'Room Type', l: 'Room Type' },
      width: { xs: 34, s: 34, m: 30, l: 30 },
      visible: { xs: true, s: true, m: true, l: true },
    },
    {
      key: 'capacity',
      title: { xs: 'Capacity', s: 'Capacity', m: 'Capacity', l: 'Capacity' },
      width: { xs: 18, s: 20, m: 16, l: 16 },
      visible: { xs: true, s: true, m: true, l: true },
    },
    {
      key: 'duration',
      title: { xs: 'Duration', s: 'Duration', m: 'Duration', l: 'Duration' },
      width: { xs: 18, s: 20, m: 16, l: 16 },
      visible: { xs: true, s: true, m: true, l: true },
    },
    {
      key: 'priceAfterTax',
      title: { xs: 'Price', s: 'Price', m: 'Price (after tax)', l: 'Price (after tax)' },
      width: { xs: 30, s: 26, m: 18, l: 18 },
      visible: { xs: true, s: true, m: true, l: true },
    },
    {
      key: 'facility',
      title: { xs: 'Facility', s: 'Facility', m: 'Facility', l: 'Facility' },
      width: { xs: 0, s: 0, m: 20, l: 20 },
      visible: { xs: false, s: false, m: true, l: true },
    },
  ],
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

export const FAQ_CONFIG = {
  showIndex: true,
  questionPrefix: 'Q',
  answerPrefix: 'A',
} as const;

// ===== CONTACT SECTION =====
export const CONTACT = {
  phone: '647-349-9220',
  address: '374 College St. M5T 1S6 Toronto ON CANADA',
  email: 'junjunhotel@gmail.com',
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
