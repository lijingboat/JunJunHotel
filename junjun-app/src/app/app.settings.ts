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
  favicon: 'assets/image/Icon/icon_06_T.png',
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
    'Welcome to a closer look at Jun Jun Hotel, a comfortable and well-located private suite designed for guests who value convenience, affordability, and a smooth stay in the heart of downtown Toronto. Set in one of the city\'s most practical and culturally active neighbourhoods, the suite places visitors near daily essentials, major destinations, and vibrant urban districts. This balance makes it especially suitable for students, professionals, long-term guests, and travellers who want a central home base that feels easy to live in.',
    '🌆 Location and Everyday Convenience\nThe suite offers exceptional accessibility to Toronto\'s most vibrant neighborhoods. Located close to Little Italy, Western Hospital, Chinatown, and the University of Toronto\'s St. George campus, the area perfectly balances cultural immersion with practical necessities. Guests will appreciate the proximity to the TTC subway and streetcar stops right downstairs, making transit seamless. The building features a Vietnamese restaurant on the first floor—perfect for quick meals and local flavours. Within walking distance you\'ll find Tim Hortons, T&T Supermarket with fresh groceries and Asian specialty items, McDonald\'s, Subway, Freshco for budget-friendly shopping, and local beer stores. Kensington Market is also nearby, offering independent shops and global cuisine. Whether you\'re in Toronto for business, study, or leisure, you\'ll find everything you need just steps away.',
    '🛏️ Interior Comfort and Practical Features\nInside, the suite is designed for both comfort and function. A queen-size bed provides generous sleeping space, while a private shower offers convenience without shared facilities. Wooden flooring adds a clean, modern aesthetic, and a large 40-inch TV supports relaxing evenings indoors. Fast, stable internet enables remote work, online study, streaming, and video calls with ease. Together, these features create a dependable, self-contained environment suitable for both short visits and longer stays.',
    '💰 Flexible and Affordable Stays\nAffordability remains one of Jun Jun Hotel\'s strongest advantages. Flexible pricing and adaptable service durations allow guests to select a stay pattern that fits their real needs instead of rigid hotel structures. This makes the suite a smart and dependable option for travellers, students, and long-term residents who want a well-located Toronto base without the high cost of traditional accommodations.',
  ],
} as const;

export const ABOUT_IMAGES = [
  { src: 'assets/image/Hotel_Room_22.jpg', alt: 'Hotel Front Door View' },
  { src: 'assets/image/Hotel_Room_02.jpg', alt: 'Hotel Room Interior View' },
  { src: 'assets/image/Hotel_Room_07.jpg', alt: 'Hotel Room Bedroom View' },
] as const;

export const PRICING = {
  columns: [
    { key: 'roomType', title: { xs: 'Room', s: 'Room', m: 'Room Type', l: 'Room Type' }, width: { xs: 34, s: 36, m: 30, l: 30 }, visible: { xs: true, s: true, m: true, l: true } },
    { key: 'capacity', title: { xs: 'Capacity', s: 'Capacity', m: 'Capacity', l: 'Capacity' }, width: { xs: 20, s: 22, m: 16, l: 16 }, visible: { xs: true, s: true, m: true, l: true } },
    { key: 'duration', title: { xs: 'Duration', s: 'Duration', m: 'Duration', l: 'Duration' }, width: { xs: 20, s: 18, m: 16, l: 16 }, visible: { xs: true, s: true, m: true, l: true } },
    { key: 'priceAfterTax', title: { xs: 'Price', s: 'Price', m: 'Price (after tax)', l: 'Price (after tax)' }, width: { xs: 26, s: 24, m: 18, l: 18 }, visible: { xs: true, s: true, m: true, l: true } },
    { key: 'facility', title: { xs: 'Facility', s: 'Facility', m: 'Facility', l: 'Facility' }, width: { xs: 0, s: 0, m: 20, l: 20 }, visible: { xs: false, s: false, m: true, l: true } },
  ],
  rooms: [
    { roomType: 'Two Person Room', capacity: '1-2 persons', duration: '24 Hours', priceAfterTax: 'CAD $150|CAD $120', facility: 'One Queen Size Bed, Private Shower, TV and Fast Internet' },
    { roomType: 'Three Person Room', capacity: '1-3 persons', duration: '24 Hours', priceAfterTax: 'CAD $165|CAD $135', facility: 'One Queen Size Bed, One Single Bed, Private Shower, TV and Fast Internet' },
    { roomType: 'Four Person Bed Room', capacity: '1-3 persons', duration: '24 Hours', priceAfterTax: 'CAD $195|CAD $165', facility: 'Two Queen Size Beds, Private Shower, TV and Fast Internet' },
    { roomType: 'Basement Two Person Bed Room', capacity: '1-2 persons', duration: '24 Hours', priceAfterTax: 'CAD $135|CAD $120', facility: 'Basement Single Room with One Queen Size Bed, Private Shower, TV and Fast Internet' },
    { roomType: 'Basement Three Persons Bed Room', capacity: '1-2 persons', duration: '24 Hours', priceAfterTax: 'CAD $140|CAD $120', facility: 'Basement Room with One Queen Size Bed and One Single Bed, Private Shower, TV and Fast Internet' },
    { roomType: 'Temporary Room', capacity: '1-2 persons', duration: '4 Hours', priceAfterTax: 'CAD $95|CAD $80', facility: 'One Queen Size Bed, Private Shower, TV and Fast Internet' },
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
  { id: 'notice_faq_help', message: 'Need a quick answer? Click this notice to jump to FAQ #1.', level: 'blue' as const, visible: false, beginDate: undefined, expireDate: undefined, faqTargetIndex: 0, isInfoNotice: false },
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
    { value: 'ar', label: 'العربية' },
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
  aboutTitle: string;
  aboutP: readonly [string, string, string, string];
  aboutImgAlts: readonly [string, string, string];
  galleryDesc: string;
  galleryLabels: readonly [string, string, string, string, string, string, string, string, string, string];
  pricingRooms: readonly [
    { roomType: string; capacity: string; duration: string; facility: string },
    { roomType: string; capacity: string; duration: string; facility: string },
    { roomType: string; capacity: string; duration: string; facility: string },
    { roomType: string; capacity: string; duration: string; facility: string },
    { roomType: string; capacity: string; duration: string; facility: string },
    { roomType: string; capacity: string; duration: string; facility: string },
  ];
  phoneLabel: string;
  addressLabel: string;
  emailLabel: string;
  hoursLabel: string;
  reserveTitle: string;
  reserveDesc: string;
  reserveH: readonly [string, string, string];
  reserveForm: {
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    personCountLabel: string;
    personCountPlaceholder: string;
    checkInLabel: string;
    checkOutLabel: string;
    submitLabel: string;
  };
  faqItems: readonly [
    { title: string; body: string },
    { title: string; body: string },
    { title: string; body: string },
  ];
  noticeWelcome: string;
  noticeFaqHelp: string;
  resLinks: readonly [string, string, string, string];
}) => ({
  siteMeta: { title: labels.brand, description: SITE_META.description, brand: labels.brand },
  nav: { about: labels.about, pricing: labels.pricing, gallery: labels.gallery, faq: labels.faq, contact: labels.contact, roomReservation: labels.reserve },
  about: {
    title: labels.aboutTitle,
    paragraphs: [...labels.aboutP],
    images: labels.aboutImgAlts.map((alt, i) => ({ ...ABOUT_IMAGES[i], alt })),
  },
  pricing: {
    label: labels.pricing,
    columns: [
      { key: 'roomType', title: { xs: labels.roomXs, s: labels.roomXs, m: labels.roomM, l: labels.roomM } },
      { key: 'capacity', title: { xs: labels.cap, s: labels.cap, m: labels.cap, l: labels.cap } },
      { key: 'duration', title: { xs: labels.dur, s: labels.dur, m: labels.dur, l: labels.dur } },
      { key: 'priceAfterTax', title: { xs: labels.price, s: labels.price, m: labels.price, l: labels.price } },
      { key: 'facility', title: { xs: labels.facility, s: labels.facility, m: labels.facility, l: labels.facility } },
    ],
    rooms: PRICING.rooms.map((r, i) => ({
      ...r,
      roomType: labels.pricingRooms[i].roomType,
      capacity: labels.pricingRooms[i].capacity,
      duration: labels.pricingRooms[i].duration,
      facility: labels.pricingRooms[i].facility,
    })),
  },
  gallery: { label: labels.gallery, description: labels.galleryDesc, images: labels.galleryLabels.map((label) => ({ label })) },
  faq: { label: labels.faq, prefix: { question: 'Q', answer: 'A', index: '#' }, items: [...labels.faqItems] },
  contact: { label: labels.contact, phoneLabel: labels.phoneLabel, addressLabel: labels.addressLabel, emailLabel: labels.emailLabel, hoursLabel: labels.hoursLabel, mapTitle: `${labels.brand} Map`, phone: CONTACT.phone, address: CONTACT.address, email: CONTACT.email, operationHours: CONTACT.operationHours },
  roomReservation: { label: labels.reserve, title: labels.reserveTitle, description: labels.reserveDesc, highlights: [...labels.reserveH], form: { ...labels.reserveForm } },
  noticeBars: { notice_welcome: labels.noticeWelcome, notice_faq_help: labels.noticeFaqHelp },
  resourceLinks: [...labels.resLinks],
  footer: { copyright: `© 2026 ${labels.brand}` },
});

export const STRINGS = {
  fr: mkLang({
    brand: 'Hôtel Jun Jun', about: 'À propos', pricing: 'Tarifs', gallery: 'Galerie', faq: 'FAQ', contact: 'Contact', reserve: 'Réservation',
    roomXs: 'Ch.', roomM: 'Type de chambre', cap: 'Cap.', dur: 'Durée', price: 'Prix TTC', facility: 'Équipements',
    aboutTitle: "Bienvenue à l'Hôtel Jun Jun",
    aboutP: [
      "Bienvenue à l'Hôtel Jun Jun, un hébergement confortable et pratique au cœur de Toronto.",
      "🌆 Emplacement et commodités du quotidien\nLa suite est proche du supermarché T&T, du marché Kensington, de l'Université de Toronto et du quartier chinois.",
      "🛏️ Confort intérieur et équipements pratiques\nChaque chambre offre un confort essentiel : lit queen-size, douche privée, télévision et internet rapide.",
      "💰 Séjours flexibles et abordables\nAvec des tarifs flexibles et des durées de séjour adaptables, c'est une option fiable pour les courts et longs séjours.",
    ],
    aboutImgAlts: ["Vue de l'entrée de l'hôtel", "Vue intérieure de la chambre", "Vue de la chambre à coucher"],
    galleryDesc: "Voici les images sélectionnées de nos chambres et installations.",
    galleryLabels: ["Vue de l'entrée", "Couloir de l'hôtel", "Vue intérieure de chambre", "Chambre standard", "Chambre pour 3 (2 lits)", "Chambre pour 4 (2 lits queen)", "Vue intérieure sous-sol", "Salle de bain sous-sol", "Salle de bain (2 lits)", "Salle de bain sous-sol"],
    pricingRooms: [
      { roomType: 'Chambre 2 pers.', capacity: '1-2 pers.', duration: '24 h', facility: 'Un lit queen, douche privée, TV et internet rapide' },
      { roomType: 'Chambre 3 pers.', capacity: '1-3 pers.', duration: '24 h', facility: 'Un lit queen, un lit simple, douche privée, TV et internet rapide' },
      { roomType: 'Chambre 4 pers.', capacity: '1-3 pers.', duration: '24 h', facility: 'Deux lits queen, douche privée, TV et internet rapide' },
      { roomType: 'Sous-sol 2 pers.', capacity: '1-2 pers.', duration: '24 h', facility: "Chambre sous-sol avec un lit queen, douche privée, TV et internet rapide" },
      { roomType: 'Sous-sol 3 pers.', capacity: '1-2 pers.', duration: '24 h', facility: 'Chambre sous-sol avec un lit queen et un lit simple, douche privée, TV et internet rapide' },
      { roomType: 'Chambre temporaire', capacity: '1-2 pers.', duration: '4 h', facility: 'Un lit queen, douche privée, TV et internet rapide' },
    ],
    phoneLabel: 'Tél. :', addressLabel: 'Adresse :', emailLabel: 'E-mail :', hoursLabel: 'Horaires :',
    reserveTitle: "Veuillez nous appeler au 647-349-9220 pour toute demande ou réservation.",
    reserveDesc: "Consultez les points suivants pour en savoir plus sur notre politique de réservation.",
    reserveH: [
      "Nous acceptons les cartes de crédit, de débit, les virements par courriel et les espèces pour le paiement et le dépôt.",
      "Veuillez respecter les horaires d'arrivée et de départ pour assurer le bon roulement des chambres.",
      "L'annulation est permise jusqu'à 24 h avant l'arrivée. Une annulation tardive ou une absence entraîne des frais d'une nuit.",
    ],
    reserveForm: { nameLabel: 'Nom', namePlaceholder: 'Votre nom complet', phoneLabel: 'Téléphone', phonePlaceholder: '+1 (___) ___-____', emailLabel: 'E-mail', emailPlaceholder: 'vous@exemple.com', personCountLabel: 'Nombre de personnes', personCountPlaceholder: '1', checkInLabel: "Date d'arrivée", checkOutLabel: 'Date de départ', submitLabel: 'Envoyer la demande de réservation' },
    faqItems: [
      { title: "Puis-je réserver sans carte de crédit ?", body: "Oui. Vous pouvez vous présenter en personne, payer un dépôt en espèces et réserver sans fournir de numéro de carte de crédit." },
      { title: "Quelles sont les heures d'arrivée et de départ ?", body: "Les séjours d'une nuit sont de 13h00 à 12h00 (midi) le lendemain. L'arrivée la plus tôt est à 13h00 et le départ au plus tard à midi." },
      { title: "Les animaux et le tabac sont-ils autorisés ?", body: "Les animaux ne sont pas admis. Il est interdit de fumer à l'intérieur, conformément à la loi canadienne." },
    ],
    noticeWelcome: "Bienvenue ! Tarifs spéciaux pour longs séjours. Contactez-nous pour plus d'informations.",
    noticeFaqHelp: "Besoin d'une réponse rapide ? Cliquez pour accéder à la FAQ #1.",
    resLinks: ["À propos", "Service", "Photos", "FAQ"],
  }),
  es: mkLang({
    brand: 'Jun Jun Hotel', about: 'Acerca de', pricing: 'Precios', gallery: 'Galería', faq: 'FAQ', contact: 'Contacto', reserve: 'Reservar',
    roomXs: 'Hab.', roomM: 'Tipo de habitación', cap: 'Cap.', dur: 'Duración', price: 'Precio final', facility: 'Servicios',
    aboutTitle: "Bienvenido al Jun Jun Hotel",
    aboutP: [
      "Bienvenido al Jun Jun Hotel, un lugar cómodo y práctico en el centro de Toronto.",
      "🌆 Ubicación y comodidades cotidianas\nLa suite está cerca del supermercado T&T, el Mercado Kensington, la Universidad de Toronto y el barrio chino.",
      "🛏️ Comodidad interior y servicios prácticos\nCada habitación ofrece lo esencial: cama queen, baño privado, TV e internet rápido.",
      "💰 Estancias flexibles y asequibles\nLa tarificación flexible y la duración adaptable hacen de este lugar una opción confiable para estancias cortas y largas.",
    ],
    aboutImgAlts: ["Vista de la entrada del hotel", "Vista interior de la habitación", "Vista del dormitorio"],
    galleryDesc: "Las siguientes imágenes muestran nuestras habitaciones e instalaciones seleccionadas.",
    galleryLabels: ["Vista exterior", "Pasillo del hotel", "Vista interior de habitación", "Habitación estándar", "Hab. para 3 (2 camas)", "Hab. para 4 (2 camas queen)", "Vista interior del sótano", "Baño del sótano", "Baño (2 camas)", "Baño del sótano"],
    pricingRooms: [
      { roomType: 'Habitación doble', capacity: '1-2 pers.', duration: '24 h', facility: 'Una cama queen, baño privado, TV e internet rápido' },
      { roomType: 'Habitación triple', capacity: '1-3 pers.', duration: '24 h', facility: 'Una cama queen, una cama individual, baño privado, TV e internet rápido' },
      { roomType: 'Habitación cuádruple', capacity: '1-3 pers.', duration: '24 h', facility: 'Dos camas queen, baño privado, TV e internet rápido' },
      { roomType: 'Sótano doble', capacity: '1-2 pers.', duration: '24 h', facility: 'Habitación en sótano con cama queen, baño privado, TV e internet rápido' },
      { roomType: 'Sótano triple', capacity: '1-2 pers.', duration: '24 h', facility: 'Habitación en sótano con cama queen y cama individual, baño privado, TV e internet rápido' },
      { roomType: 'Habitación temporal', capacity: '1-2 pers.', duration: '4 h', facility: 'Una cama queen, baño privado, TV e internet rápido' },
    ],
    phoneLabel: 'Tel.:', addressLabel: 'Dirección:', emailLabel: 'Correo:', hoursLabel: 'Horario:',
    reserveTitle: "Llámenos al 647-349-9220 para consultas y reservas.",
    reserveDesc: "Consulte los siguientes puntos para conocer los detalles y políticas de nuestro servicio de reservas.",
    reserveH: [
      "Aceptamos tarjeta de crédito, débito, transferencia electrónica y efectivo como forma de pago y depósito.",
      "Pedimos que todos cumplan con los horarios de entrada y salida para garantizar la rotación de habitaciones.",
      "La cancelación está permitida hasta 24 horas antes del check-in. Las cancelaciones tardías o no presentarse implican el cargo de una noche.",
    ],
    reserveForm: { nameLabel: 'Nombre', namePlaceholder: 'Su nombre completo', phoneLabel: 'Teléfono', phonePlaceholder: '+1 (___) ___-____', emailLabel: 'Correo', emailPlaceholder: 'usted@ejemplo.com', personCountLabel: 'Número de personas', personCountPlaceholder: '1', checkInLabel: 'Fecha de entrada', checkOutLabel: 'Fecha de salida', submitLabel: 'Enviar solicitud de reserva' },
    faqItems: [
      { title: "¿Puedo reservar sin tarjeta de crédito?", body: "Sí. Puede venir en persona, pagar un depósito en efectivo y reservar sin proporcionar número de tarjeta de crédito." },
      { title: "¿Cuáles son los horarios de entrada y salida?", body: "Las estancias de una noche van de 1:00 PM a 12:00 PM del día siguiente. El check-in más temprano es a la 1:00 PM y el check-out al mediodía." },
      { title: "¿Se admiten mascotas y fumadores?", body: "No se admiten mascotas. Fumar debe hacerse en el exterior, de conformidad con la ley canadiense." },
    ],
    noticeWelcome: "¡Bienvenido! Tarifas especiales para estadías prolongadas. Contáctenos para más información.",
    noticeFaqHelp: "¿Necesita una respuesta rápida? Haga clic aquí para ir a la FAQ #1.",
    resLinks: ["Acerca de", "Servicio", "Fotos", "FAQ"],
  }),
  de: mkLang({
    brand: 'Jun Jun Hotel', about: 'Über uns', pricing: 'Preise', gallery: 'Galerie', faq: 'FAQ', contact: 'Kontakt', reserve: 'Reservierung',
    roomXs: 'Zi.', roomM: 'Zimmertyp', cap: 'Kap.', dur: 'Dauer', price: 'Endpreis', facility: 'Ausstattung',
    aboutTitle: "Willkommen im Jun Jun Hotel",
    aboutP: [
      "Willkommen im Jun Jun Hotel, einem komfortablen und praktischen Ort im Herzen von Toronto.",
      "🌆 Lage und täglicher Komfort\nDie Suite liegt in der Nähe des T&T Supermarkts, des Kensington Markets, der Universität Toronto und Chinatowns.",
      "🛏️ Innenausstattung und praktische Einrichtungen\nJedes Zimmer bietet wesentlichen Komfort: Queensize-Bett, eigene Dusche, TV und schnelles Internet.",
      "💰 Flexible und günstige Aufenthalte\nFlexible Preise und Aufenthaltsdauern machen dieses Haus zu einer verlässlichen Option für kurze und lange Aufenthalte.",
    ],
    aboutImgAlts: ["Blick auf den Hoteleingang", "Hotelzimmer Innenansicht", "Schlafzimmer Ansicht"],
    galleryDesc: "Hier sind ausgewählte Bilder unserer Zimmer und Einrichtungen.",
    galleryLabels: ["Außenansicht", "Hotelkorridor", "Zimmer Innenansicht", "Standardzimmer", "Zimmer für 3 (2 Betten)", "Zimmer für 4 (2 Queen-Betten)", "Keller Innenansicht", "Bad im Keller", "Bad (2 Betten)", "Bad im Keller"],
    pricingRooms: [
      { roomType: 'Doppelzimmer', capacity: '1-2 Pers.', duration: '24 Std.', facility: 'Ein Queensize-Bett, eigene Dusche, TV und schnelles Internet' },
      { roomType: 'Dreibettzimmer', capacity: '1-3 Pers.', duration: '24 Std.', facility: 'Ein Queensize-Bett, ein Einzelbett, eigene Dusche, TV und schnelles Internet' },
      { roomType: 'Vierbettzimmer', capacity: '1-3 Pers.', duration: '24 Std.', facility: 'Zwei Queensize-Betten, eigene Dusche, TV und schnelles Internet' },
      { roomType: 'Keller-Doppelzimmer', capacity: '1-2 Pers.', duration: '24 Std.', facility: 'Kellerunterkunft mit Queensize-Bett, eigener Dusche, TV und schnellem Internet' },
      { roomType: 'Keller-Dreibettzimmer', capacity: '1-2 Pers.', duration: '24 Std.', facility: 'Kellerunterkunft mit Queensize-Bett und Einzelbett, eigener Dusche, TV und schnellem Internet' },
      { roomType: 'Temporäres Zimmer', capacity: '1-2 Pers.', duration: '4 Std.', facility: 'Ein Queensize-Bett, eigene Dusche, TV und schnelles Internet' },
    ],
    phoneLabel: 'Tel.:', addressLabel: 'Adresse:', emailLabel: 'E-Mail:', hoursLabel: 'Öffnungszeiten:',
    reserveTitle: "Bitte rufen Sie uns unter 647-349-9220 für Anfragen und Reservierungen an.",
    reserveDesc: "Bitte beachten Sie die folgenden Hinweise zu unseren Reservierungsrichtlinien.",
    reserveH: [
      "Wir akzeptieren Kredit- und Debitkarten, E-Mail-Geldtransfers und Bargeld als Zahlungsmittel.",
      "Bitte halten Sie die Check-in- und Check-out-Zeiten ein, um einen reibungslosen Zimmerwechsel zu gewährleisten.",
      "Eine Stornierung ist bis 24 Stunden vor dem Check-in möglich. Spätstornierungen oder Nichterscheinen werden mit einer Nacht berechnet.",
    ],
    reserveForm: { nameLabel: 'Name', namePlaceholder: 'Ihr vollständiger Name', phoneLabel: 'Telefonnummer', phonePlaceholder: '+1 (___) ___-____', emailLabel: 'E-Mail', emailPlaceholder: 'sie@beispiel.de', personCountLabel: 'Anzahl der Personen', personCountPlaceholder: '1', checkInLabel: 'Check-in-Datum', checkOutLabel: 'Check-out-Datum', submitLabel: 'Reservierungsanfrage senden' },
    faqItems: [
      { title: "Kann ich ohne Kreditkarte reservieren?", body: "Ja. Sie können persönlich vorbeikommen, eine Barkaution hinterlegen und ein Zimmer ohne Kreditkartennummer reservieren." },
      { title: "Was sind die Check-in- und Check-out-Zeiten?", body: "Einnächtige Aufenthalte gehen von 13:00 Uhr bis 12:00 Uhr (Mittag) am nächsten Tag. Frühester Check-in ist 13:00 Uhr, spätester Check-out ist Mittag." },
      { title: "Sind Haustiere und Rauchen erlaubt?", body: "Haustiere sind nicht gestattet. Rauchen ist gemäß kanadischem Recht nur außerhalb erlaubt." },
    ],
    noticeWelcome: "Willkommen! Sonderpreise für Langzeitaufenthalte verfügbar. Kontaktieren Sie uns für Details.",
    noticeFaqHelp: "Schnelle Antwort gesucht? Klicken Sie hier, um zur FAQ #1 zu gelangen.",
    resLinks: ["Über uns", "Service", "Fotos", "FAQ"],
  }),
  ja: mkLang({
    brand: 'Jun Jun Hotel', about: '概要', pricing: '料金', gallery: 'ギャラリー', faq: 'FAQ', contact: '連絡先', reserve: '予約',
    roomXs: '部屋', roomM: '部屋タイプ', cap: '定員', dur: '時間', price: '料金（税込）', facility: '設備',
    aboutTitle: "ジュンジュンホテルへようこそ",
    aboutP: [
      "ジュンジュンホテルへようこそ。トロントのダウンタウンに位置する、快適で実用的な宿泊施設です。",
      "🌆 立地と日常の利便性\nスイートはT&Tスーパーマーケット、ケンジントンマーケット、トロント大学、チャイナタウンの近くにあります。",
      "🛏️ 室内の快適さと実用的な設備\n各部屋にはクイーンサイズベッド、専用シャワー、テレビ、高速インターネットが備わっています。",
      "💰 柔軟でリーズナブルな滞在\n柔軟な料金設定と滞在期間により、短期・長期滞在に最適な選択肢です。",
    ],
    aboutImgAlts: ["ホテル正面玄関", "ホテル客室内部", "ホテル寝室"],
    galleryDesc: "こちらは選りすぐりの客室・設備の写真です。",
    galleryLabels: ["正面玄関", "ホテル廊下", "客室内部", "スタンダードルーム", "3人用ダブルベッドルーム", "4人用クイーンベッドルーム", "地下室内部", "地下室バスルーム", "バスルーム（ダブルベッド）", "地下室バスルーム"],
    pricingRooms: [
      { roomType: '2人部屋', capacity: '1〜2名', duration: '24時間', facility: 'クイーンベッド1台、専用シャワー、テレビ、高速インターネット' },
      { roomType: '3人部屋', capacity: '1〜3名', duration: '24時間', facility: 'クイーンベッド1台、シングルベッド1台、専用シャワー、テレビ、高速インターネット' },
      { roomType: '4人ベッドルーム', capacity: '1〜3名', duration: '24時間', facility: 'クイーンベッド2台、専用シャワー、テレビ、高速インターネット' },
      { roomType: '地下2人部屋', capacity: '1〜2名', duration: '24時間', facility: '地下客室、クイーンベッド1台、専用シャワー、テレビ、高速インターネット' },
      { roomType: '地下3人部屋', capacity: '1〜2名', duration: '24時間', facility: '地下客室、クイーンベッド1台、シングルベッド1台、専用シャワー、テレビ、高速インターネット' },
      { roomType: '短時間利用', capacity: '1〜2名', duration: '4時間', facility: 'クイーンベッド1台、専用シャワー、テレビ、高速インターネット' },
    ],
    phoneLabel: '電話：', addressLabel: '住所：', emailLabel: 'メール：', hoursLabel: '営業時間：',
    reserveTitle: "お問い合わせ・ご予約は647-349-9220までお電話ください。",
    reserveDesc: "以下の重要事項をご確認の上、ご予約をお願いします。",
    reserveH: [
      "クレジットカード、デビットカード、電子送金、現金での支払い・デポジットに対応しています。",
      "スムーズな客室準備のため、チェックイン・チェックアウトの時間をお守りください。",
      "キャンセルはチェックイン24時間前まで可能です。それ以降は1泊分の料金が発生します。",
    ],
    reserveForm: { nameLabel: 'お名前', namePlaceholder: 'フルネームをご入力ください', phoneLabel: '電話番号', phonePlaceholder: '+1 (___) ___-____', emailLabel: 'メールアドレス', emailPlaceholder: 'email@example.com', personCountLabel: '人数', personCountPlaceholder: '1', checkInLabel: 'チェックイン日', checkOutLabel: 'チェックアウト日', submitLabel: '予約リクエストを送信' },
    faqItems: [
      { title: "クレジットカードなしで予約できますか？", body: "はい。現金でのデポジットをお支払いいただければ、クレジットカードなしでご予約いただけます。" },
      { title: "チェックインとチェックアウトの時間は？", body: "1泊の場合は午後1時から翌日正午まです。最早チェックインは午後1時、最遅チェックアウトは正午です。" },
      { title: "ペットや喫煙は可能ですか？", body: "ペットの持ち込みはお断りしております。喫煙はカナダの法律に従い、屋外のみとなります。" },
    ],
    noticeWelcome: "ようこそ！長期滞在の特別料金をご用意しています。詳細はお問い合わせください。",
    noticeFaqHelp: "すぐに答えが必要ですか？クリックしてFAQ #1へお進みください。",
    resLinks: ["概要", "サービス", "写真", "FAQ"],
  }),
  ko: mkLang({
    brand: '준준 호텔', about: '소개', pricing: '요금', gallery: '갤러리', faq: '자주 묻는 질문', contact: '연락처', reserve: '예약',
    roomXs: '객실', roomM: '객실 유형', cap: '인원', dur: '이용시간', price: '세후 가격', facility: '시설',
    aboutTitle: "준준 호텔에 오신 것을 환영합니다",
    aboutP: [
      "준준 호텔에 오신 것을 환영합니다. 토론토 다운타운에 위치한 편리하고 실용적인 숙소입니다.",
      "🌆 위치와 일상 편의시설\n이 스위트는 T&T 슈퍼마켓, 켄싱턴 마켓, 토론토 대학교, 차이나타운과 가깝습니다.",
      "🛏️ 실내 편안함과 실용적인 시설\n각 객실에는 퀸사이즈 침대, 전용 샤워실, TV, 고속 인터넷이 갖춰져 있습니다.",
      "💰 유연하고 합리적인 숙박\n유연한 요금제와 다양한 숙박 기간 옵션으로 단기 및 장기 투숙에 적합합니다.",
    ],
    aboutImgAlts: ["호텔 정문 전경", "호텔 객실 내부", "호텔 침실 전경"],
    galleryDesc: "아래는 저희 객실과 시설을 선별한 사진들입니다.",
    galleryLabels: ["정문 전경", "호텔 복도", "객실 내부", "스탠더드 룸", "3인실 더블 침대", "4인실 퀸 침대 2개", "지하실 내부", "지하실 욕실", "욕실 더블 침대", "지하실 욕실"],
    pricingRooms: [
      { roomType: '2인실', capacity: '1-2명', duration: '24시간', facility: '퀸 침대 1개, 전용 샤워실, TV, 고속 인터넷' },
      { roomType: '3인실', capacity: '1-3명', duration: '24시간', facility: '퀸 침대 1개, 싱글 침대 1개, 전용 샤워실, TV, 고속 인터넷' },
      { roomType: '4인 침실', capacity: '1-3명', duration: '24시간', facility: '퀸 침대 2개, 전용 샤워실, TV, 고속 인터넷' },
      { roomType: '지하 2인실', capacity: '1-2명', duration: '24시간', facility: '지하 객실, 퀸 침대 1개, 전용 샤워실, TV, 고속 인터넷' },
      { roomType: '지하 3인실', capacity: '1-2명', duration: '24시간', facility: '지하 객실, 퀸 침대 1개, 싱글 침대 1개, 전용 샤워실, TV, 고속 인터넷' },
      { roomType: '단시간 이용', capacity: '1-2명', duration: '4시간', facility: '퀸 침대 1개, 전용 샤워실, TV, 고속 인터넷' },
    ],
    phoneLabel: '전화:', addressLabel: '주소:', emailLabel: '이메일:', hoursLabel: '운영 시간:',
    reserveTitle: "예약 및 문의는 647-349-9220으로 전화해 주세요.",
    reserveDesc: "객실 예약 서비스에 관한 세부 사항 및 정책을 아래에서 확인하세요.",
    reserveH: [
      "신용카드, 체크카드, 이메일 머니 트랜스퍼 및 현금으로 예약금 및 결제가 가능합니다.",
      "원활한 객실 준비를 위해 체크인 및 체크아웃 시간 정책을 준수해 주세요.",
      "체크인 24시간 전까지 취소가 가능합니다. 늦은 취소 또는 노쇼 시 1박 요금이 부과됩니다.",
    ],
    reserveForm: { nameLabel: '이름', namePlaceholder: '전체 이름을 입력하세요', phoneLabel: '전화번호', phonePlaceholder: '+1 (___) ___-____', emailLabel: '이메일', emailPlaceholder: 'email@example.com', personCountLabel: '인원수', personCountPlaceholder: '1', checkInLabel: '체크인 날짜', checkOutLabel: '체크아웃 날짜', submitLabel: '예약 요청 제출' },
    faqItems: [
      { title: "신용카드 없이도 예약할 수 있나요?", body: "네. 직접 방문하여 현금 보증금을 납부하면 신용카드 없이도 예약하실 수 있습니다." },
      { title: "체크인 및 체크아웃 시간은 언제인가요?", body: "1박 투숙은 오후 1시부터 다음 날 정오(12시)까지입니다. 가장 이른 체크인은 오후 1시, 가장 늦은 체크아웃은 정오입니다." },
      { title: "반려동물과 흡연이 허용되나요?", body: "반려동물은 허용되지 않습니다. 흡연은 캐나다 법률에 따라 실외에서만 가능합니다." },
    ],
    noticeWelcome: "환영합니다! 장기 투숙 특별 할인이 있습니다. 자세한 내용은 문의해 주세요.",
    noticeFaqHelp: "빠른 답변이 필요하신가요? 이 공지를 클릭하여 FAQ #1로 이동하세요.",
    resLinks: ["소개", "서비스", "사진", "FAQ"],
  }),
  ar: mkLang({
    brand: 'فندق جون جون', about: 'حول', pricing: 'الأسعار', gallery: 'صور', faq: 'الأسئلة الشائعة', contact: 'تواصل', reserve: 'حجز',
    roomXs: 'غرفة', roomM: 'نوع الغرفة', cap: 'السعة', dur: 'المدة', price: 'السعر (شامل الضريبة)', facility: 'المرافق',
    aboutTitle: "مرحباً بكم في فندق جون جون",
    aboutP: [
      "مرحباً بكم في فندق جون جون، مكان مريح وعملي في وسط مدينة تورنتو.",
      "🌆 الموقع والخدمات اليومية\nيقع الفندق بالقرب من سوبرماركت T&T وسوق كينسينغتون وجامعة تورنتو والحي الصيني.",
      "🛏️ الراحة الداخلية والمرافق العملية\nتوفر كل غرفة الراحة الأساسية: سرير كوين، حمام خاص، تلفزيون وإنترنت سريع.",
      "💰 إقامة مرنة وبأسعار معقولة\nتجعل الأسعار المرنة ومدد الإقامة المتنوعة من هذا المكان خياراً موثوقاً للإقامة القصيرة والطويلة.",
    ],
    aboutImgAlts: ["واجهة الفندق", "داخل غرفة الفندق", "غرفة النوم"],
    galleryDesc: "فيما يلي صور مختارة تعرض غرفنا ومرافقنا.",
    galleryLabels: ["المدخل الأمامي", "ممر الفندق", "داخل الغرفة القياسية", "الغرفة القياسية", "غرفة لـ 3 أشخاص", "غرفة لـ 4 أشخاص", "داخل الطابق السفلي", "حمام الطابق السفلي", "الحمام (سريران)", "حمام الطابق السفلي"],
    pricingRooms: [
      { roomType: 'غرفة لشخصين', capacity: '1-2 أشخاص', duration: '24 ساعة', facility: 'سرير كوين، حمام خاص، تلفزيون وإنترنت سريع' },
      { roomType: 'غرفة لثلاثة', capacity: '1-3 أشخاص', duration: '24 ساعة', facility: 'سرير كوين وسرير مفرد، حمام خاص، تلفزيون وإنترنت سريع' },
      { roomType: 'غرفة لأربعة', capacity: '1-3 أشخاص', duration: '24 ساعة', facility: 'سريران كوين، حمام خاص، تلفزيون وإنترنت سريع' },
      { roomType: 'سرداب لشخصين', capacity: '1-2 أشخاص', duration: '24 ساعة', facility: 'غرفة سرداب بسرير كوين، حمام خاص، تلفزيون وإنترنت سريع' },
      { roomType: 'سرداب لثلاثة', capacity: '1-2 أشخاص', duration: '24 ساعة', facility: 'غرفة سرداب بسرير كوين وسرير مفرد، حمام خاص، تلفزيون وإنترنت سريع' },
      { roomType: 'غرفة مؤقتة', capacity: '1-2 أشخاص', duration: '4 ساعات', facility: 'سرير كوين، حمام خاص، تلفزيون وإنترنت سريع' },
    ],
    phoneLabel: 'هاتف:', addressLabel: 'العنوان:', emailLabel: 'البريد:', hoursLabel: 'ساعات العمل:',
    reserveTitle: "يرجى الاتصال بنا على 647-349-9220 للاستفسار والحجز.",
    reserveDesc: "يرجى مراجعة النقاط التالية للاطلاع على تفاصيل وسياسات خدمة الحجز.",
    reserveH: [
      "نقبل بطاقات الائتمان والخصم والتحويل الإلكتروني والنقد للدفع والإيداع.",
      "نطلب من الجميع الالتزام بمواعيد الوصول والمغادرة لضمان سلاسة التغيير.",
      "يمكن الإلغاء حتى 24 ساعة قبل وقت الوصول. الإلغاء المتأخر أو عدم الحضور يؤدي إلى فرض رسوم بقيمة ليلة واحدة.",
    ],
    reserveForm: { nameLabel: 'الاسم', namePlaceholder: 'اسمك الكامل', phoneLabel: 'رقم الهاتف', phonePlaceholder: '+1 (___) ___-____', emailLabel: 'البريد الإلكتروني', emailPlaceholder: 'email@example.com', personCountLabel: 'عدد الأشخاص', personCountPlaceholder: '1', checkInLabel: 'تاريخ الوصول', checkOutLabel: 'تاريخ المغادرة', submitLabel: 'إرسال طلب الحجز' },
    faqItems: [
      { title: "هل يمكنني الحجز دون بطاقة ائتمان؟", body: "نعم. يمكنك الحضور شخصياً ودفع وديعة نقدية وحجز غرفة دون الحاجة إلى رقم بطاقة ائتمان." },
      { title: "ما هي مواعيد الوصول والمغادرة؟", body: "إقامة ليلة واحدة: من الساعة 1:00 م حتى 12:00 ظهراً في اليوم التالي. أقرب وصول الساعة 1:00 م وأحدث مغادرة الساعة 12:00 ظهراً." },
      { title: "هل يُسمح بالحيوانات الأليفة والتدخين؟", body: "لا يُسمح بالحيوانات الأليفة. يجب التدخين في الخارج وفقاً للقانون الكندي." },
    ],
    noticeWelcome: "مرحباً! أسعار خاصة للإقامات الطويلة. تواصل معنا للمزيد.",
    noticeFaqHelp: "تريد إجابة سريعة؟ انقر هنا للانتقال إلى الأسئلة الشائعة #1.",
    resLinks: ["حول", "خدمات", "صور", "الأسئلة الشائعة"],
  }),
  hi: mkLang({
    brand: 'जुन जुन होटल', about: 'परिचय', pricing: 'कीमत', gallery: 'गैलरी', faq: 'सामान्य प्रश्न', contact: 'संपर्क', reserve: 'बुकिंग',
    roomXs: 'कमरा', roomM: 'कमरे का प्रकार', cap: 'क्षमता', dur: 'अवधि', price: 'कर के बाद मूल्य', facility: 'सुविधा',
    aboutTitle: "जुन जुन होटल में आपका स्वागत है",
    aboutP: [
      "जुन जुन होटल में आपका स्वागत है, टोरंटो के डाउनटाउन में एक आरामदायक और व्यावहारिक रहने की जगह।",
      "🌆 स्थान और दैनिक सुविधाएँ\nसूट T&T सुपरमार्केट, केंसिंगटन बाजार, टोरंटो विश्वविद्यालय और चाइनाटाउन के पास है।",
      "🛏️ आंतरिक आराम और व्यावहारिक सुविधाएँ\nप्रत्येक कमरे में क्वीन साइज बेड, प्राइवेट शॉवर, टीवी और तेज इंटरनेट है।",
      "💰 लचीली और किफायती रहने की सुविधा\nलचीली कीमतों के कारण यह छोटे और लंबे प्रवास के लिए एक विश्वसनीय विकल्प है।",
    ],
    aboutImgAlts: ["होटल के सामने का दृश्य", "होटल के कमरे की आंतरिक सज्जा", "होटल का शयनकक्ष"],
    galleryDesc: "निम्नलिखित चुनी हुई तस्वीरें हमारे कमरों और सुविधाओं को प्रदर्शित करती हैं।",
    galleryLabels: ["सामने का दृश्य", "होटल का गलियारा", "कमरे का आंतरिक दृश्य", "मानक कमरा", "3 व्यक्ति डबल बेड", "4 व्यक्ति क्वीन बेड", "तहखाना आंतरिक दृश्य", "तहखाना बाथरूम", "बाथरूम डबल बेड", "तहखाना बाथरूम"],
    pricingRooms: [
      { roomType: '2 व्यक्ति कमरा', capacity: '1-2 व्यक्ति', duration: '24 घंटे', facility: 'एक क्वीन बेड, निजी शॉवर, टीवी और तेज इंटरनेट' },
      { roomType: '3 व्यक्ति कमरा', capacity: '1-3 व्यक्ति', duration: '24 घंटे', facility: 'एक क्वीन बेड, एक सिंगल बेड, निजी शॉवर, टीवी और तेज इंटरनेट' },
      { roomType: '4 व्यक्ति बेडरूम', capacity: '1-3 व्यक्ति', duration: '24 घंटे', facility: 'दो क्वीन बेड, निजी शॉवर, टीवी और तेज इंटरनेट' },
      { roomType: 'तहखाना 2 व्यक्ति', capacity: '1-2 व्यक्ति', duration: '24 घंटे', facility: 'तहखाना कमरा, एक क्वीन बेड, निजी शॉवर, टीवी और तेज इंटरनेट' },
      { roomType: 'तहखाना 3 व्यक्ति', capacity: '1-2 व्यक्ति', duration: '24 घंटे', facility: 'तहखाना कमरा, एक क्वीन बेड और एक सिंगल बेड, निजी शॉवर, टीवी और तेज इंटरनेट' },
      { roomType: 'अस्थायी कमरा', capacity: '1-2 व्यक्ति', duration: '4 घंटे', facility: 'एक क्वीन बेड, निजी शॉवर, टीवी और तेज इंटरनेट' },
    ],
    phoneLabel: 'फोन:', addressLabel: 'पता:', emailLabel: 'ईमेल:', hoursLabel: 'समय:',
    reserveTitle: "पूछताछ और आरक्षण के लिए कृपया 647-349-9220 पर कॉल करें।",
    reserveDesc: "हमारी बुकिंग सेवा के विवरण और नीतियों के लिए कृपया निम्नलिखित बिंदुओं को देखें।",
    reserveH: [
      "आरक्षण के लिए हम क्रेडिट कार्ड, डेबिट कार्ड, ईमेल मनी ट्रांसफर और नकद स्वीकार करते हैं।",
      "कमरे की सुचारू उपलब्धता के लिए सभी से चेक-इन और चेक-आउट समय नीति का पालन करने का अनुरोध है।",
      "चेक-इन समय से 24 घंटे पहले तक रद्द करना संभव है। देर से रद्द करने या नो-शो पर एक रात का शुल्क लगेगा।",
    ],
    reserveForm: { nameLabel: 'नाम', namePlaceholder: 'आपका पूरा नाम', phoneLabel: 'फ़ोन नंबर', phonePlaceholder: '+1 (___) ___-____', emailLabel: 'ईमेल', emailPlaceholder: 'email@example.com', personCountLabel: 'व्यक्तियों की संख्या', personCountPlaceholder: '1', checkInLabel: 'चेक-इन तिथि', checkOutLabel: 'चेक-आउट तिथि', submitLabel: 'आरक्षण अनुरोध भेजें' },
    faqItems: [
      { title: "क्या मैं बिना क्रेडिट कार्ड के आरक्षण कर सकता हूँ?", body: "हाँ। आप व्यक्तिगत रूप से आ सकते हैं, नकद जमा कर सकते हैं और बिना क्रेडिट कार्ड नंबर दिए कमरा आरक्षित कर सकते हैं।" },
      { title: "चेक-इन और चेक-आउट का समय क्या है?", body: "एक रात का प्रवास दोपहर 1:00 बजे से अगले दिन दोपहर 12:00 बजे तक होता है। सबसे जल्दी चेक-इन 1:00 बजे और सबसे देर से चेक-आउट दोपहर तक है।" },
      { title: "क्या पालतू जानवर और धूम्रपान की अनुमति है?", body: "पालतू जानवरों की अनुमति नहीं है। धूम्रपान कनाडाई कानून के अनुसार बाहर करना अनिवार्य है।" },
    ],
    noticeWelcome: "स्वागत है! लंबे प्रवास के लिए विशेष दरें उपलब्ध हैं। विवरण के लिए हमसे संपर्क करें।",
    noticeFaqHelp: "त्वरित उत्तर चाहिए? FAQ #1 पर जाने के लिए यहाँ क्लिक करें।",
    resLinks: ["परिचय", "सेवा", "फ़ोटो", "सामान्य प्रश्न"],
  }),
  ru: mkLang({
    brand: 'Jun Jun Hotel', about: 'О нас', pricing: 'Цены', gallery: 'Галерея', faq: 'FAQ', contact: 'Контакты', reserve: 'Бронирование',
    roomXs: 'Ном.', roomM: 'Тип номера', cap: 'Вмест.', dur: 'Срок', price: 'Итоговая цена', facility: 'Удобства',
    aboutTitle: "Добро пожаловать в Jun Jun Hotel",
    aboutP: [
      "Добро пожаловать в Jun Jun Hotel — комфортный и практичный отель в центре Торонто.",
      "🌆 Расположение и удобства\nОтель находится рядом с супермаркетом T&T, рынком Кенсингтон, Университетом Торонто и Чайнатауном.",
      "🛏️ Интерьер и оснащение\nВ каждом номере есть кровать queen-size, собственный душ, телевизор и высокоскоростной интернет.",
      "💰 Гибкие и доступные цены\nГибкое ценообразование и продолжительность проживания делают отель надёжным выбором для коротких и длительных поездок.",
    ],
    aboutImgAlts: ["Вид на вход в отель", "Интерьер гостиничного номера", "Спальня в отеле"],
    galleryDesc: "Ниже представлены отобранные фотографии наших номеров и удобств.",
    galleryLabels: ["Вид на вход", "Коридор отеля", "Внутренний вид номера", "Стандартный номер", "Номер на 3 чел.", "Номер на 4 чел.", "Интерьер подвала", "Ванная в подвале", "Ванная (2 кровати)", "Ванная в подвале"],
    pricingRooms: [
      { roomType: 'Номер на 2 чел.', capacity: '1-2 чел.', duration: '24 часа', facility: 'Кровать queen, собственный душ, ТВ и быстрый интернет' },
      { roomType: 'Номер на 3 чел.', capacity: '1-3 чел.', duration: '24 часа', facility: 'Кровать queen, односпальная кровать, собственный душ, ТВ и быстрый интернет' },
      { roomType: 'Номер на 4 чел.', capacity: '1-3 чел.', duration: '24 часа', facility: 'Две кровати queen, собственный душ, ТВ и быстрый интернет' },
      { roomType: 'Подвал на 2 чел.', capacity: '1-2 чел.', duration: '24 часа', facility: 'Номер в подвале, кровать queen, собственный душ, ТВ и быстрый интернет' },
      { roomType: 'Подвал на 3 чел.', capacity: '1-2 чел.', duration: '24 часа', facility: 'Номер в подвале, кровать queen, односпальная кровать, собственный душ, ТВ и быстрый интернет' },
      { roomType: 'Краткосрочный номер', capacity: '1-2 чел.', duration: '4 часа', facility: 'Кровать queen, собственный душ, ТВ и быстрый интернет' },
    ],
    phoneLabel: 'Тел.:', addressLabel: 'Адрес:', emailLabel: 'E-mail:', hoursLabel: 'Часы работы:',
    reserveTitle: "Звоните нам по номеру 647-349-9220 для бронирования и справок.",
    reserveDesc: "Ознакомьтесь со следующими важными пунктами о нашем сервисе бронирования.",
    reserveH: [
      "Мы принимаем оплату кредитной и дебетовой картой, электронным переводом и наличными.",
      "Просим всех соблюдать время заезда и выезда для плавной смены номеров.",
      "Отмена возможна за 24 часа до заезда. Поздняя отмена или неявка влечёт оплату одной ночи.",
    ],
    reserveForm: { nameLabel: 'Имя', namePlaceholder: 'Ваше полное имя', phoneLabel: 'Телефон', phonePlaceholder: '+1 (___) ___-____', emailLabel: 'E-mail', emailPlaceholder: 'email@example.com', personCountLabel: 'Количество гостей', personCountPlaceholder: '1', checkInLabel: 'Дата заезда', checkOutLabel: 'Дата выезда', submitLabel: 'Отправить запрос на бронирование' },
    faqItems: [
      { title: "Можно ли забронировать без кредитной карты?", body: "Да. Вы можете приехать лично, внести наличный депозит и забронировать номер без предоставления номера кредитной карты." },
      { title: "Каково время заезда и выезда?", body: "Заезд с 13:00, выезд до 12:00 (полдень) следующего дня. Самый ранний заезд — 13:00, самый поздний выезд — полдень." },
      { title: "Допускаются ли домашние животные и курение?", body: "Домашние животные не допускаются. Курение разрешено только на улице в соответствии с канадским законодательством." },
    ],
    noticeWelcome: "Добро пожаловать! Специальные тарифы для длительного проживания. Свяжитесь с нами для уточнений.",
    noticeFaqHelp: "Нужен быстрый ответ? Нажмите на это уведомление, чтобы перейти к FAQ #1.",
    resLinks: ["О нас", "Услуги", "Фото", "FAQ"],
  }),
  vi: mkLang({
    brand: 'Jun Jun Hotel', about: 'Giới thiệu', pricing: 'Bảng giá', gallery: 'Hình ảnh', faq: 'Câu hỏi thường gặp', contact: 'Liên hệ', reserve: 'Đặt phòng',
    roomXs: 'Phòng', roomM: 'Loại phòng', cap: 'Sức chứa', dur: 'Thời gian', price: 'Giá sau thuế', facility: 'Tiện ích',
    aboutTitle: "Chào mừng đến với Jun Jun Hotel",
    aboutP: [
      "Chào mừng quý khách đến với Jun Jun Hotel, nơi nghỉ ngơi thoải mái và tiện nghi tại trung tâm Toronto.",
      "🌆 Vị trí và tiện ích hàng ngày\nKhách sạn ở gần siêu thị T&T, chợ Kensington, Đại học Toronto và phố Tàu.",
      "🛏️ Sự thoải mái và tiện nghi\nMỗi phòng đều có giường queen, phòng tắm riêng, TV và internet tốc độ cao.",
      "💰 Giá linh hoạt và hợp lý\nBảng giá linh hoạt giúp đây là lựa chọn tốt cho cả lưu trú ngắn và dài hạn.",
    ],
    aboutImgAlts: ["Cửa trước khách sạn", "Nội thất phòng khách sạn", "Phòng ngủ khách sạn"],
    galleryDesc: "Dưới đây là những hình ảnh chọn lọc giới thiệu phòng và tiện ích của chúng tôi.",
    galleryLabels: ["Cổng trước", "Hành lang khách sạn", "Nội thất phòng chuẩn", "Phòng chuẩn", "Phòng 3 người (2 giường)", "Phòng 4 người (2 giường queen)", "Nội thất tầng hầm", "Phòng tắm tầng hầm", "Phòng tắm (2 giường)", "Phòng tắm tầng hầm"],
    pricingRooms: [
      { roomType: 'Phòng 2 người', capacity: '1-2 người', duration: '24 giờ', facility: 'Giường queen, phòng tắm riêng, TV và internet tốc độ cao' },
      { roomType: 'Phòng 3 người', capacity: '1-3 người', duration: '24 giờ', facility: 'Giường queen, giường đơn, phòng tắm riêng, TV và internet tốc độ cao' },
      { roomType: 'Phòng 4 người', capacity: '1-3 người', duration: '24 giờ', facility: 'Hai giường queen, phòng tắm riêng, TV và internet tốc độ cao' },
      { roomType: 'Tầng hầm 2 người', capacity: '1-2 người', duration: '24 giờ', facility: 'Phòng tầng hầm, giường queen, phòng tắm riêng, TV và internet tốc độ cao' },
      { roomType: 'Tầng hầm 3 người', capacity: '1-2 người', duration: '24 giờ', facility: 'Phòng tầng hầm, giường queen và giường đơn, phòng tắm riêng, TV và internet tốc độ cao' },
      { roomType: 'Phòng tạm thời', capacity: '1-2 người', duration: '4 giờ', facility: 'Giường queen, phòng tắm riêng, TV và internet tốc độ cao' },
    ],
    phoneLabel: 'ĐT:', addressLabel: 'Địa chỉ:', emailLabel: 'Email:', hoursLabel: 'Giờ:',
    reserveTitle: "Vui lòng gọi 647-349-9220 để hỏi thông tin và đặt phòng.",
    reserveDesc: "Vui lòng xem các điểm nổi bật sau đây để biết chi tiết và chính sách đặt phòng.",
    reserveH: [
      "Chúng tôi chấp nhận thẻ tín dụng, thẻ ghi nợ, chuyển khoản và tiền mặt để đặt cọc và thanh toán.",
      "Vui lòng tuân thủ giờ nhận và trả phòng để đảm bảo quá trình luân chuyển phòng được suôn sẻ.",
      "Có thể hủy trước 24 giờ trước giờ nhận phòng. Hủy muộn hoặc không đến sẽ bị tính phí một đêm.",
    ],
    reserveForm: { nameLabel: 'Họ tên', namePlaceholder: 'Họ và tên đầy đủ', phoneLabel: 'Số điện thoại', phonePlaceholder: '+1 (___) ___-____', emailLabel: 'Email', emailPlaceholder: 'email@example.com', personCountLabel: 'Số người', personCountPlaceholder: '1', checkInLabel: 'Ngày nhận phòng', checkOutLabel: 'Ngày trả phòng', submitLabel: 'Gửi yêu cầu đặt phòng' },
    faqItems: [
      { title: "Tôi có thể đặt phòng không cần thẻ tín dụng không?", body: "Có. Bạn có thể đến trực tiếp, đặt cọc bằng tiền mặt và đặt phòng mà không cần cung cấp số thẻ tín dụng." },
      { title: "Giờ nhận và trả phòng là mấy giờ?", body: "Lưu trú một đêm từ 1:00 chiều đến 12:00 trưa ngày hôm sau. Nhận phòng sớm nhất lúc 1:00 chiều, trả phòng muộn nhất lúc 12:00 trưa." },
      { title: "Có cho mang thú cưng và hút thuốc không?", body: "Không được mang thú cưng. Hút thuốc chỉ được phép ở ngoài trời theo quy định của luật Canada." },
    ],
    noticeWelcome: "Chào mừng! Có giá ưu đãi cho lưu trú dài hạn. Liên hệ để biết thêm thông tin.",
    noticeFaqHelp: "Cần câu trả lời nhanh? Nhấp vào thông báo này để chuyển đến FAQ #1.",
    resLinks: ["Giới thiệu", "Dịch vụ", "Ảnh", "Câu hỏi thường gặp"],
  }),
  zhHant: mkLang({
    brand: '君君旅店', about: '關於', pricing: '價格', gallery: '相簿', faq: '常見問題', contact: '聯絡', reserve: '預訂',
    roomXs: '房型', roomM: '房間類型', cap: '容納人數', dur: '住宿時長', price: '價格（含稅）', facility: '房內設施',
    aboutTitle: "歡迎光臨君君旅店",
    aboutP: [
      "歡迎光臨君君旅店，位於多倫多市中心，是一個舒適且實用的住宿選擇。",
      "🌆 地理位置與日常便利\n旅館鄰近 T&T 超市、肯辛頓市場、多倫多大學及唐人街。",
      "🛏️ 室內舒適與實用設施\n每間客房均配有雙人加大床、獨立淋浴間、電視及高速網路。",
      "💰 靈活且實惠的住宿\n彈性的定價與住宿期限，讓本旅館成為短期與長期住宿的可靠選擇。",
    ],
    aboutImgAlts: ["旅館正門外觀", "旅館房間內部", "旅館臥室"],
    galleryDesc: "以下是精選的客房與設施照片。",
    galleryLabels: ["正門外觀", "旅館走廊", "標準房內部", "標準房", "三人雙床房", "四人雙大床房", "地下室內部", "地下室浴室", "浴室（雙床）", "地下室浴室"],
    pricingRooms: [
      { roomType: '雙人房', capacity: '1-2人', duration: '24小時', facility: '一張雙人加大床、獨立淋浴間、電視及高速網路' },
      { roomType: '三人房', capacity: '1-3人', duration: '24小時', facility: '一張雙人加大床、一張單人床、獨立淋浴間、電視及高速網路' },
      { roomType: '四人臥室', capacity: '1-3人', duration: '24小時', facility: '兩張雙人加大床、獨立淋浴間、電視及高速網路' },
      { roomType: '地下室雙人房', capacity: '1-2人', duration: '24小時', facility: '地下室客房，一張雙人加大床、獨立淋浴間、電視及高速網路' },
      { roomType: '地下室三人房', capacity: '1-2人', duration: '24小時', facility: '地下室客房，一張雙人加大床及一張單人床、獨立淋浴間、電視及高速網路' },
      { roomType: '短時客房', capacity: '1-2人', duration: '4小時', facility: '一張雙人加大床、獨立淋浴間、電視及高速網路' },
    ],
    phoneLabel: '電話：', addressLabel: '地址：', emailLabel: '電郵：', hoursLabel: '營業時間：',
    reserveTitle: "如需諮詢或預訂，請致電 647-349-9220。",
    reserveDesc: "請參閱以下重點說明，了解客房預訂服務的詳情與政策。",
    reserveH: [
      "我們接受信用卡、扣帳卡、電子匯款及現金作為預訂付款及押金方式。",
      "請遵守入住及退房時間政策，以確保客房順利交接。",
      "允許在入住時間前 24 小時取消。逾期取消或未到場將收取一晚住宿費。",
    ],
    reserveForm: { nameLabel: '姓名', namePlaceholder: '您的全名', phoneLabel: '電話號碼', phonePlaceholder: '+1 (___) ___-____', emailLabel: '電子郵件', emailPlaceholder: 'email@example.com', personCountLabel: '人數', personCountPlaceholder: '1', checkInLabel: '入住日期', checkOutLabel: '退房日期', submitLabel: '提交預訂申請' },
    faqItems: [
      { title: "沒有信用卡可以預訂嗎？", body: "可以。您可以親自前來，支付現金押金，無需提供信用卡號碼即可預訂房間。" },
      { title: "入住和退房時間是幾點？", body: "住宿一晚為下午1:00至翌日中午12:00。最早入住時間為下午1:00，最遲退房時間為中午12:00。" },
      { title: "是否允許攜帶寵物或吸菸？", body: "不允許攜帶寵物。依加拿大法律規定，吸菸須於室外進行。" },
    ],
    noticeWelcome: "歡迎光臨！長期住宿享有特別優惠，歡迎聯絡我們了解詳情。",
    noticeFaqHelp: "有任何疑問？點擊此通知直接跳至常見問題第1條。",
    resLinks: ["關於", "服務", "相簿", "常見問題"],
  }),
  zh: mkLang({
    brand: '君君旅店', about: '关于', pricing: '价格', gallery: '相册', faq: '常见问题', contact: '联系', reserve: '预订',
    roomXs: '房间', roomM: '房间类型', cap: '容量', dur: '时长', price: '价格(税后)', facility: '设施',
    aboutTitle: "欢迎来到君君旅店",
    aboutP: [
      "欢迎来到君君旅店，坐落于多伦多市中心，是一个舒适实用的住宿之选。",
      "🌆 位置与日常便利\n旅店毗邻 T&T 超市、肯辛顿市场、多伦多大学及唐人街。",
      "🛏️ 室内舒适与实用设施\n每间客房均配备大床、独立淋浴间、电视和高速网络。",
      "💰 灵活实惠的住宿选择\n灵活的价格与住宿周期，使本旅店成为短期和长期住宿的可靠选择。",
    ],
    aboutImgAlts: ["旅店正门外观", "旅店客房内部", "旅店卧室"],
    galleryDesc: "以下是精选的客房与设施照片。",
    galleryLabels: ["正门外观", "旅店走廊", "标准间内部", "标准间", "三人双床间", "四人双大床间", "地下室内部", "地下室浴室", "浴室（双床）", "地下室浴室"],
    pricingRooms: [
      { roomType: '双人间', capacity: '1-2人', duration: '24小时', facility: '一张大床、独立淋浴间、电视及高速网络' },
      { roomType: '三人间', capacity: '1-3人', duration: '24小时', facility: '一张大床、一张单人床、独立淋浴间、电视及高速网络' },
      { roomType: '四人卧室', capacity: '1-3人', duration: '24小时', facility: '两张大床、独立淋浴间、电视及高速网络' },
      { roomType: '地下室双人间', capacity: '1-2人', duration: '24小时', facility: '地下室客房，一张大床、独立淋浴间、电视及高速网络' },
      { roomType: '地下室三人间', capacity: '1-2人', duration: '24小时', facility: '地下室客房，一张大床及一张单人床、独立淋浴间、电视及高速网络' },
      { roomType: '短时客房', capacity: '1-2人', duration: '4小时', facility: '一张大床、独立淋浴间、电视及高速网络' },
    ],
    phoneLabel: '电话：', addressLabel: '地址：', emailLabel: '邮箱：', hoursLabel: '营业时间：',
    reserveTitle: "如需咨询或预订，请致电 647-349-9220。",
    reserveDesc: "请参阅以下重点说明，了解客房预订服务的详情与政策。",
    reserveH: [
      "我们接受信用卡、借记卡、电子转账及现金作为预订付款及押金方式。",
      "请遵守入住及退房时间政策，以确保客房顺利交接。",
      "允许在入住时间前 24 小时取消。逾期取消或未到场将收取一晚住宿费。",
    ],
    reserveForm: { nameLabel: '姓名', namePlaceholder: '您的全名', phoneLabel: '电话号码', phonePlaceholder: '+1 (___) ___-____', emailLabel: '电子邮件', emailPlaceholder: 'email@example.com', personCountLabel: '人数', personCountPlaceholder: '1', checkInLabel: '入住日期', checkOutLabel: '退房日期', submitLabel: '提交预订申请' },
    faqItems: [
      { title: "没有信用卡也可以预订吗？", body: "可以。您可以亲自前来，支付现金押金，无需提供信用卡号码即可预订房间。" },
      { title: "入住和退房时间是什么时候？", body: "住宿一晚为下午1:00至次日中午12:00。最早入住时间为下午1:00，最晚退房时间为中午12:00。" },
      { title: "是否允许携带宠物或吸烟？", body: "不允许携带宠物。根据加拿大法律规定，吸烟须在室外进行。" },
    ],
    noticeWelcome: "欢迎光临！长期住宿享有特别优惠，欢迎联系我们了解详情。",
    noticeFaqHelp: "有任何疑问？点击此通知直接跳至常见问题第1条。",
    resLinks: ["关于", "服务", "相册", "常见问题"],
  }),
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
