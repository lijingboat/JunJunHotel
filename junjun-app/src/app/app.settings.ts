/**
 * Centralized Configuration Settings
 * This file contains all configurable content, styling, and resource paths.
 */

export const SITE_META = {
  title: 'Jun Jun Hotel',
  description: 'Affordable accommodations in downtown Toronto',
  brand: 'Jun Jun Hotel',
  year: new Date().getFullYear(),
} as const;

export const ASSETS = {
  brandIcon: 'assets/image/Icon/icon_06_T.png',
  favicon: 'assets/image/Icon/icon_01.png',
} as const;

export const NAV_LINKS = [
  { label: 'About', target: '#id_appComponent_aboutSection' },
  { label: 'Pricing', target: '#id_appComponent_pricingSection' },
  { label: 'Gallery', target: '#id_appComponent_gallerySection' },
  { label: 'FAQ', target: '#id_appComponent_faqSection' },
  { label: 'Contact', target: '#id_appComponent_contactSection' },
] as const;

export const ABOUT = {
  title: 'Welcome to Jun Jun Hotel',
  paragraphs: [
    'Welcome to Jun Jun Hotel, a comfortable and practical place to stay in downtown Toronto.',
    '🌆 Location and Everyday Convenience\nThe suite is close to T&T Supermarket, Kensington Market, the University of Toronto, and Chinatown.',
    '🛏️ Interior Comfort and Practical Features\nEach room offers essential comfort including a queen-size bed, private shower, TV, and fast internet.',
    '💰 Flexible and Affordable Stays\nFlexible pricing and stay durations make this a dependable option for short and long stays.',
  ],
} as const;

export const ABOUT_IMAGES = [
  { src: 'assets/image/Hotel_Room_22.jpg', alt: 'Hotel Front Door View' },
  { src: 'assets/image/Hotel_Room_02.jpg', alt: 'Hotel Room Interior View' },
  { src: 'assets/image/Hotel_Room_07.jpg', alt: 'Hotel Room Bedroom View' },
] as const;

export const PRICING = {
  columns: [
    { key: 'roomType', title: { xs: 'Room', s: 'Room', m: 'Room Type', l: 'Room Type' }, width: { xs: 40, s: 38, m: 30, l: 30 }, visible: { xs: true, s: true, m: true, l: true } },
    { key: 'capacity', title: { xs: 'Capacity', s: 'Capacity', m: 'Capacity', l: 'Capacity' }, width: { xs: 20, s: 22, m: 16, l: 16 }, visible: { xs: true, s: true, m: true, l: true } },
    { key: 'duration', title: { xs: 'Duration', s: 'Duration', m: 'Duration', l: 'Duration' }, width: { xs: 14, s: 16, m: 16, l: 16 }, visible: { xs: true, s: true, m: true, l: true } },
    { key: 'priceAfterTax', title: { xs: 'Price', s: 'Price', m: 'Price (after tax)', l: 'Price (after tax)' }, width: { xs: 26, s: 24, m: 18, l: 18 }, visible: { xs: true, s: true, m: true, l: true } },
    { key: 'facility', title: { xs: 'Facility', s: 'Facility', m: 'Facility', l: 'Facility' }, width: { xs: 0, s: 0, m: 20, l: 20 }, visible: { xs: false, s: false, m: true, l: true } },
  ],
  rooms: [
    { roomType: 'Two Person Room', capacity: '1-2 persons', duration: '24 Hours', priceAfterTax: 'CAD $130|$120', facility: 'One Queen Size Bed, Private Shower, TV and Fast Internet' },
    { roomType: 'Three Person Room', capacity: '1-3 persons', duration: '24 Hours', priceAfterTax: 'CAD $150|$135', facility: 'One Queen Size Bed, One Single Bed, Private Shower, TV and Fast Internet' },
    { roomType: 'Four Person Bed Room', capacity: '1-3 persons', duration: '24 Hours', priceAfterTax: 'CAD $180|$165', facility: 'Two Queen Size Beds, Private Shower, TV and Fast Internet' },
    { roomType: 'Basement Two Person Bed Room', capacity: '1-2 persons', duration: '24 Hours', priceAfterTax: 'CAD $100|$105', facility: 'Basement Single Room with One Queen Size Bed, Private Shower, TV and Fast Internet' },
    { roomType: 'Basement Three Persons Bed Room', capacity: '1-2 persons', duration: '24 Hours', priceAfterTax: 'CAD $100|$120', facility: 'Basement Room with One Queen Size Bed and One Single Bed, Private Shower, TV and Fast Internet' },
    { roomType: 'Temporary Room', capacity: '1-2 persons', duration: '4 Hours', priceAfterTax: 'CAD $80', facility: 'One Queen Size Bed, Private Shower, TV and Fast Internet' },
  ],
} as const;

export const GALLERY = {
  description: 'The following are the picked images showcasing our rooms and amenities.',
  images: [
    { src: 'assets/image/Hotel_Room_22.jpg', label: 'Front View', rank: 1 },
    { src: 'assets/image/Hotel_Room_02.jpg', label: 'Hotel Hallway', rank: 2 },
    { src: 'assets/image/Hotel_Room_09.jpg', label: 'Standard Room Inner View', rank: 3 },
    { src: 'assets/image/Hotel_Room_01.jpg', label: 'Standard Room', rank: 4 },
    { src: 'assets/image/Hotel_Room_10.jpg', label: '3 Persons Double Beds Room', rank: 5 },
    { src: 'assets/image/Hotel_Room_11.jpg', label: '4 Persons Double Queen Beds Room', rank: 6 },
    { src: 'assets/image/Hotel_Room_18.jpg', label: 'Basement Interior View', rank: 7 },
    { src: 'assets/image/Hotel_Room_17.jpg', label: 'Basement Bathroom', rank: 8 },
    { src: 'assets/image/Hotel_Room_16.jpg', label: 'Bathroom Double Beds', rank: 9 },
    { src: 'assets/image/Hotel_Room_15.jpg', label: 'Basement Bathroom', rank: 10 },
  ],
} as const;

export const FAQS = [
  { title: 'Can I reserve without a credit card?', body: 'Yes. You can come in person, pay a cash deposit, and reserve a room without providing a credit card number.', highlightColor: '#fff8dc' },
  { title: 'What are check-in and check-out times?', body: 'One-night stays are from 1:00 PM to 12:00 PM (noon) the next day. Earliest check-in is 1:00 PM and latest check-out is noon.', highlightColor: '#e8f5ff' },
  { title: 'Are pets and smoking allowed?', body: 'Pets are not allowed. Smoking must be outside in accordance with Canadian law.', highlightColor: '#eef8ee' },
] as const;

export const FAQ_CONFIG = {
  showIndex: false,
  questionPrefix: 'Q',
  answerPrefix: 'A',
  indexPrefix: '#',
  useHashIndexStyle: true,
  indexHighlightTextColor: '#8a5d37',
} as const;

export const TRANSLATION_SYNC_PROMPT =
  'Use export const FAQS (English) as the only source of meaning, then update all language entries consistently for nav, pricing, gallery labels, notice bars, contact, room reservation, and footer while preserving ids and data structure.';

export const CONTACT = {
  phone: '647-349-9220',
  address: '374 College St. M5T 1S6 Toronto ON CANADA',
  email: 'junjunhotel@gmail.com',
  operationHours: '24 hours',
  mapEmbedUrl: 'https://maps.google.com/maps?q=374%20College%20St%20Toronto%20ON%20M5T%201S6&t=&z=15&ie=UTF8&iwloc=&output=embed',
} as const;

export const RESOURCE_LINKS = ['About Us', 'Service', 'Photo', 'FAQ'] as const;

export const NOTICE_BARS = [
  { id: 'notice_welcome', message: 'Welcome! Special rates available for extended stays. Contact us for details.', level: 'red' as const, visible: false, beginDate: undefined, expireDate: undefined, faqTargetIndex: null, isInfoNotice: true },
  { id: 'notice_faq_help', message: 'Need a quick answer? Click this notice to jump to FAQ #1.', level: 'blue' as const, visible: false, beginDate: undefined, expireDate: undefined, faqTargetIndex: null, isInfoNotice: false },
] as const;

export const NOTICE_BAR_CONFIG = {
  defaultBeginDate: 'today',
  defaultExpireDate: '9999-12-31',
  defaultTextColor: '#f8f6ef',
  stickyBelowNav: true,
  scrollPaddingTopPx: 100,
  barGapRem: '0.25rem',
} as const;

export const ROOM_RESERVATION_CONFIG = {
  showContent: true,
  showHighlights: true,
  showForm: false,
} as const;

export const ROOM_RESERVATION = {
  label: 'Room Reservation',
  title: 'Please call us at 647-349-9220 for inquiries and reservations.',
  description: 'Please see the following highlights for details and policies regarding our room reservation service.',
  highlights: [
    'We accept credit card, debit card, Email Money Transfer and cash for reservation payment and deposit.',
    'We need everyone to follow the check-in and check-out time policy to ensure smooth room turnover and availability.',
    'Cancellation is allowed up to 24 hours before check-in time. Late cancellation or no-show will result in a charge of one night\'s stay.',
  ],
  form: {
    nameLabel: 'Name',
    namePlaceholder: 'Your full name',
    phoneLabel: 'Phone Number',
    phonePlaceholder: '+1 (___) ___-____',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    personCountLabel: 'Number of Persons',
    personCountPlaceholder: '1',
    checkInLabel: 'Check-in Date',
    checkOutLabel: 'Check-out Date',
    submitLabel: 'Submit Reservation Request',
  },
} as const;

export const NAV_LANGUAGE_CONFIG = {
  visible: true,
  options: [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
    { value: 'es', label: 'Español' },
    { value: 'de', label: 'Deutsch' },
    { value: 'ja', label: '日本語' },
    { value: 'ko', label: '한국어' },
    { value: 'hi', label: 'हिन्दी' },
    { value: 'ru', label: 'Русский' },
    { value: 'vi', label: 'Tiếng Việt' },
    { value: 'zhHant', label: '繁体中文' },
    { value: 'zh', label: '简体中文' },
  ],
  defaultValue: 'en',
  iconSizeRem: '1.3rem',
} as const;

const mkLang = (labels: {
  brand: string;
  about: string;
  pricing: string;
  gallery: string;
  faq: string;
  contact: string;
  reserve: string;
  roomXs: string;
  roomM: string;
  cap: string;
  dur: string;
  price: string;
  facility: string;
}) => ({
  siteMeta: { title: labels.brand, description: SITE_META.description, brand: labels.brand },
  nav: { about: labels.about, pricing: labels.pricing, gallery: labels.gallery, faq: labels.faq, contact: labels.contact, roomReservation: labels.reserve },
  about: { title: ABOUT.title, paragraphs: [...ABOUT.paragraphs] },
  pricing: {
    label: labels.pricing,
    columns: [
      { key: 'roomType', title: { xs: labels.roomXs, s: labels.roomXs, m: labels.roomM, l: labels.roomM } },
      { key: 'capacity', title: { xs: labels.cap, s: labels.cap, m: labels.cap, l: labels.cap } },
      { key: 'duration', title: { xs: labels.dur, s: labels.dur, m: labels.dur, l: labels.dur } },
      { key: 'priceAfterTax', title: { xs: labels.price, s: labels.price, m: labels.price, l: labels.price } },
      { key: 'facility', title: { xs: labels.facility, s: labels.facility, m: labels.facility, l: labels.facility } },
    ],
    rooms: PRICING.rooms.map((r) => ({ ...r })),
  },
  gallery: { label: labels.gallery, description: GALLERY.description, images: GALLERY.images.map((g) => ({ label: g.label })) },
  faq: { label: labels.faq, prefix: { question: 'Q', answer: 'A', index: '#' }, items: FAQS.map((f) => ({ title: f.title, body: f.body })) },
  contact: { label: labels.contact, phoneLabel: 'Phone:', addressLabel: 'Address:', emailLabel: 'Email:', hoursLabel: 'Hours:', mapTitle: `${labels.brand} Map`, phone: CONTACT.phone, address: CONTACT.address, email: CONTACT.email, operationHours: CONTACT.operationHours },
  roomReservation: { label: labels.reserve, title: ROOM_RESERVATION.title, description: ROOM_RESERVATION.description, highlights: [...ROOM_RESERVATION.highlights], form: { ...ROOM_RESERVATION.form } },
  noticeBars: { notice_welcome: NOTICE_BARS[0].message, notice_faq_help: NOTICE_BARS[1].message },
  resourceLinks: [...RESOURCE_LINKS],
  footer: { copyright: `© 2026 ${labels.brand}` },
});

export const STRINGS = {
  fr: mkLang({ brand: 'Hôtel Jun Jun', about: 'À propos', pricing: 'Tarifs', gallery: 'Galerie', faq: 'FAQ', contact: 'Contact', reserve: 'Réservation', roomXs: 'Ch.', roomM: 'Type de chambre', cap: 'Cap.', dur: 'Durée', price: 'Prix TTC', facility: 'Équipements' }),
  es: mkLang({ brand: 'Jun Jun Hotel', about: 'Acerca de', pricing: 'Precios', gallery: 'Galería', faq: 'FAQ', contact: 'Contacto', reserve: 'Reservar', roomXs: 'Hab.', roomM: 'Tipo de habitación', cap: 'Cap.', dur: 'Duración', price: 'Precio final', facility: 'Servicios' }),
  de: mkLang({ brand: 'Jun Jun Hotel', about: 'Über uns', pricing: 'Preise', gallery: 'Galerie', faq: 'FAQ', contact: 'Kontakt', reserve: 'Reservierung', roomXs: 'Zi.', roomM: 'Zimmertyp', cap: 'Kap.', dur: 'Dauer', price: 'Endpreis', facility: 'Ausstattung' }),
  ja: mkLang({ brand: 'Jun Jun Hotel', about: '概要', pricing: '料金', gallery: 'ギャラリー', faq: 'FAQ', contact: '連絡先', reserve: '予約', roomXs: '部屋', roomM: '部屋タイプ', cap: '定員', dur: '利用時間', price: '料金（税込）', facility: '設備' }),
  ko: mkLang({ brand: '준준 호텔', about: '소개', pricing: '요금', gallery: '갤러리', faq: '자주 묻는 질문', contact: '연락처', reserve: '예약', roomXs: '객실', roomM: '객실 유형', cap: '수용 인원', dur: '이용 시간', price: '세후 가격', facility: '시설' }),
  hi: mkLang({ brand: 'जुन जुन होटल', about: 'परिचय', pricing: 'कीमत', gallery: 'गैलरी', faq: 'सामान्य प्रश्न', contact: 'संपर्क', reserve: 'बुकिंग', roomXs: 'कमरा', roomM: 'कमरे का प्रकार', cap: 'क्षमता', dur: 'अवधि', price: 'कर के बाद मूल्य', facility: 'सुविधा' }),
  ru: mkLang({ brand: 'Jun Jun Hotel', about: 'О нас', pricing: 'Цены', gallery: 'Галерея', faq: 'FAQ', contact: 'Контакты', reserve: 'Бронирование', roomXs: 'Ном.', roomM: 'Тип номера', cap: 'Вмест.', dur: 'Срок', price: 'Итоговая цена', facility: 'Удобства' }),
  vi: mkLang({ brand: 'Jun Jun Hotel', about: 'Giới thiệu', pricing: 'Bảng giá', gallery: 'Hình ảnh', faq: 'Câu hỏi thường gặp', contact: 'Liên hệ', reserve: 'Đặt phòng', roomXs: 'Phòng', roomM: 'Loại phòng', cap: 'Sức chứa', dur: 'Thời gian', price: 'Giá sau thuế', facility: 'Tiện ích' }),
  zhHant: mkLang({ brand: '君君旅店', about: '關於', pricing: '價格', gallery: '相簿', faq: '常見問題', contact: '聯絡', reserve: '預訂', roomXs: '房型', roomM: '房間類型', cap: '容納人數', dur: '住宿時長', price: '價格（含稅）', facility: '房內設施' }),
  zh: mkLang({ brand: '君君旅店', about: '关于', pricing: '价格', gallery: '相册', faq: '常见问题', contact: '联系', reserve: '预订', roomXs: '房间', roomM: '房间类型', cap: '容量', dur: '时长', price: '价格(税后)', facility: '设施' }),
} as const;

export const PRICING_DISPLAY_CONFIG = {
  enableRowContrast: true,
  oddRowBackground: '#fff9f5',
  evenRowBackground: '#f7f1ea',
} as const;

export const GALLERY_DISPLAY_CONFIG = {
  itemAspectRatio: '1 / 0.618',
} as const;

export const STYLING = {
  colors: { ink: '#1f1a17', sand: '#f7f1ea', cream: '#fff9f5', clay: '#c18a5f', cocoa: '#8a5d37', dusk: '#4d4035' },
  fonts: { sizeEyebrow: '0.85rem', sizeLabel: '0.85rem', sizeContent: '1rem', sizeNav: '0.95rem', sizeBrand: '1.5rem' },
  spacing: { headerPaddingMobile: '16px', headerPaddingTablet: '16px', headerPaddingDesktop: '16px' },
  dimensions: { heightImageCard: '16.25rem', heightGalleryItem: '13.75rem', heightMapMin: '20rem' },
} as const;
