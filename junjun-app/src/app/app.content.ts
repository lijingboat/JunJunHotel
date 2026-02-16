export const NAV_LINKS = [
  { label: 'About', target: '#id_appComponent_aboutSection' },
  { label: 'Pricing', target: '#id_appComponent_pricingSection' },
  { label: 'Gallery', target: '#id_appComponent_gallerySection' },
  { label: 'FAQ', target: '#id_appComponent_faqSection' },
  { label: 'Contact', target: '#id_appComponent_contactSection' },
] as const;

export const ABOUT = {
  eyebrow: 'About',
  title: 'Welcome to Jun Jun Hotel',
  body:
    'Jun Jun Hotel is a well downtown located hotel which provides affordable convenient accommodations in all levels with different types of rooms and flexible hours.',
  secondary:
    'Private shower, clean towels, beddings and free toilet paper are provided for every stay.',
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

export const ROOM_PRICING = [
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
] as const;

export const GALLERY_IMAGES = [
  { src: 'assets/heavenly-connected/gallery-sunlit-lounge.jpg', alt: 'Sun-drenched lounge vignette' },
  { src: 'assets/heavenly-connected/gallery-sculptural-lighting.jpg', alt: 'Living room with sculptural lighting' },
  { src: 'assets/heavenly-connected/gallery-reading-nook.jpg', alt: 'Contemporary reading nook' },
  { src: 'assets/heavenly-connected/gallery-gourmet-kitchen.jpg', alt: 'Gourmet kitchen with marble surfaces' },
  { src: 'assets/heavenly-connected/gallery-cozy-lounge.jpg', alt: 'Cozy lounge corner' },
  { src: 'assets/heavenly-connected/gallery-suite-hallway.jpg', alt: 'Suite hallway with art' },
] as const;

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

export const CONTACT = {
  phone: '647-349-9220',
  address: '374 Collge St. M5T 1S6',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=374%20College%20St%20Toronto%20ON%20M5T%201S6&t=&z=15&ie=UTF8&iwloc=&output=embed',
} as const;

export const RESOURCE_LINKS = ['About Us', 'Service', 'Photo', 'FAQ'] as const;
