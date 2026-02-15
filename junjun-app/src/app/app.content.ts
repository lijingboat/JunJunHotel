export const NAV_LINKS = [
  { label: 'About', target: '#id_appComponent_aboutSection' },
  { label: 'Pricing', target: '#id_appComponent_pricingSection' },
  { label: 'Gallery', target: '#id_appComponent_gallerySection' },
  { label: 'FAQ', target: '#id_appComponent_faqSection' },
  { label: 'Contact', target: '#id_appComponent_contactSection' },
] as const;

export const HERO_COPY = {
  eyebrow: 'Downtown Toronto Boutique Stay',
  title: 'Affordable Comfort in the City Core',
  description:
    'Welcome to Jun Jun Hotel. Enjoy queen-bed rooms with private bathrooms, cable LCD TV, and free wireless internet—steps from Toronto culture, restaurants, and transit.',
  primaryCta: 'View Room Rates',
  secondaryCta: 'About Us',
  image: 'assets/heavenly-connected/hero-living-room.jpg',
  insetImage: 'assets/heavenly-connected/hero-inset-design-vignette.jpg',
} as const;

export const HERO_STATS = [
  { value: '12', label: 'Curated Apartments' },
  { value: '4.9/5', label: 'Guest Rating' },
  { value: '3', label: 'Cities Covered' },
] as const;

export const ABOUT = {
  eyebrow: 'Our Story',
  title: 'Boutique hospitality in Downtown Toronto',
  body:
    'Jun Jun Hotel is located in the heart of Downtown Toronto, close to major commercial, cultural, and tourist areas. We serve business travelers, leisure guests, sports visitors, and unexpected overnight stays.',
  secondary:
    'Guests enjoy affordable rates, group-friendly options, and practical in-room amenities designed for comfort and convenience.',
  featureImage: 'assets/heavenly-connected/about-apartment-detail.jpg',
} as const;

export const APARTMENTS = [
  {
    name: 'Standard Room',
    area: '1 Queen Bed',
    description:
      'Private bathroom with shower, cable LCD TV, free Wi-Fi, mini fridge, extra sink, marble table, chairs, and one window.',
    image: 'assets/heavenly-connected/apartment-artisan-hideaway.jpeg',
  },
  {
    name: 'Sofa Room',
    area: '1 Queen Bed + Sofa',
    description:
      'Rear-facing large window plus all standard room amenities, with additional sofa seating for a more relaxed stay.',
    image: 'assets/heavenly-connected/apartment-urban-oasis.jpg',
  },
  {
    name: 'Double Beds Room',
    area: '2 Queen Beds',
    description:
      'Best for small groups. Includes private bathroom, cable TV, free Wi-Fi, mini fridge, and rear-facing large window.',
    image: 'assets/heavenly-connected/apartment-midtown-retreat.jpg',
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

export const AMENITIES = [
  {
    title: 'Spa',
    subtitle: 'Relaxation Retreat',
    description: 'Massages, facials, and aromatherapy rituals to reset mind and body.',
    icon: 'assets/heavenly-connected/brand-mark-icon.png',
  },
  {
    title: 'Gym',
    subtitle: 'Fitness Haven',
    description: 'A fully equipped studio with curated playlists and personal trainers on-call.',
    icon: 'assets/heavenly-connected/amenity-gym-icon.png',
  },
  {
    title: 'Pool',
    subtitle: 'Rooftop Pool',
    description: 'Take a dip above the skyline, complete with cabanas and craft refreshments.',
    icon: 'assets/heavenly-connected/amenity-pool-icon.png',
  },
  {
    title: 'Rooftop',
    subtitle: 'Panoramic Views',
    description: 'Sunrise yoga, stargazing dinners, and sweeping perspectives of the city.',
    icon: 'assets/heavenly-connected/amenity-rooftop.jpg',
  },
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
  phone: 'Call Front Desk for Reservations',
  email: 'Email via Contact Page',
  address: '374 College Street\nToronto, Ontario',
  mapImage: 'assets/heavenly-connected/contact-map-rooftop-view.jpg',
} as const;

export const RESOURCE_LINKS = ['About Us', 'Service', 'Photo', 'FAQ'] as const;
