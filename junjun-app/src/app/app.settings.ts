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
  brandIcon: 'assets/image/Icon/logo-brand.svg',
  favicon: 'assets/image/Icon/logo-favicon.svg',
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
    '🌆 Location and Everyday Convenience\nThe suite offers exceptional accessibility to Toronto\'s most vibrant neighborhoods. Located close to Little Italy, Western Hospital, Chinatown, and the University of Toronto\'s St. George campus, the area perfectly balances cultural immersion with practical necessities. Guests will appreciate the TTC subway and streetcar stops right downstairs, available 24 hours for convenient transit. The building features a restaurant on the first floor (open until 4am), offering a convenient dining option. In the surrounding neighborhood, you can also find a hair barber, coffee shops, a walk-in clinic, and other restaurants. Within walking distance, you\'ll find Tim Hortons, T&T Supermarket, McDonald\'s, Subway, FreshCo for budget-friendly shopping, and local beer stores. Kensington Market is also nearby, offering independent shops and global cuisine. Whether you\'re in Toronto for business, study, or leisure, you\'ll find everything you need just steps away.',
    '🛏️ Interior Comfort and Practical Features\nInside, the suite is designed for both comfort and function. A queen-size bed provides generous sleeping space, while a private shower offers convenience without shared facilities. Wooden flooring adds a clean, modern aesthetic, and a big TV supports relaxing evenings indoors. Fast, stable internet enables remote work, online study, streaming, and video calls with ease. Together, these features create a dependable, self-contained environment suitable for both short visits and longer stays.',
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
    { roomType: 'Two Person Room', capacity: '1-2 persons', duration: 'One Night', priceAfterTax: 'CAD $120', facility: 'One Queen Size Bed, Private Shower, TV and Fast Internet' },
    { roomType: 'Three Person Room', capacity: '1-3 persons', duration: 'One Night', priceAfterTax: 'CAD $135', facility: 'One Queen Size Bed, One Single Bed, Private Shower, TV and Fast Internet' },
    { roomType: 'Four Person Bed Room', capacity: '1-3 persons', duration: 'One Night', priceAfterTax: 'CAD $165', facility: 'Two Queen Size Beds, Private Shower, TV and Fast Internet' },
    { roomType: 'Basement Two Person Bed Room', capacity: '1-2 persons', duration: 'One Night', priceAfterTax: 'CAD $105', facility: 'Basement Single Room with One Queen Size Bed, Private Shower, TV and Fast Internet' },
    { roomType: 'Basement Three Persons Bed Room', capacity: '1-3 persons', duration: 'One Night', priceAfterTax: 'CAD $120', facility: 'Basement Room with One Queen Size Bed and One Single Bed, Private Shower, TV and Fast Internet' },
    { roomType: 'Temporary Room', capacity: '1-2 persons', duration: '4 Hours', priceAfterTax: 'CAD $80', facility: 'One Queen Size Bed, Private Shower, TV and Fast Internet' },
  ],
} as const;

export const GALLERY = {
  description: 'The following are the picked images showcasing our rooms and amenities.',
  images: [
    { src: 'assets/image/Hotel_Room_23.jpg', label: 'Standard 2 persons room', rank: 2 },
    { src: 'assets/image/Hotel_Room_22.jpg', label: 'Front View', rank: 1 },
    { src: 'assets/image/Hotel_Room_02.jpg', label: 'Hotel Hallway', rank: 3 },
    { src: 'assets/image/Hotel_Room_09.jpg', label: 'Standard Room Inner View', rank: 4 },
    { src: 'assets/image/Hotel_Room_01.jpg', label: 'Standard Room', rank: 5 },
    { src: 'assets/image/Hotel_Room_10.jpg', label: '3 Persons Double Beds Room', rank: 6 },
    { src: 'assets/image/Hotel_Room_11.jpg', label: '4 Persons Double Queen Beds Room', rank: 7 },
    { src: 'assets/image/Hotel_Room_18.jpg', label: 'Basement Interior View', rank: 8 },
    { src: 'assets/image/Hotel_Room_17.jpg', label: 'Basement Bathroom', rank: 9 },
    { src: 'assets/image/Hotel_Room_16.jpg', label: 'Bathroom Double Beds', rank: 10 },
    { src: 'assets/image/Hotel_Room_15.jpg', label: 'Basement Bathroom', rank: 11 },
  ],
} as const;

export const FAQS = [
  { title: 'Can I reserve without a credit card?', body: 'Yes. You can come in person, pay a cash deposit, and reserve a room without providing a credit card number.', highlightColor: '#fff8dc' },
  { title: 'What are check-in and check-out times?', body: 'Check-out time is 12:00 noon the next day, and check-in is today and can be as early as 10:00 AM (subject to room availability).', highlightColor: '#e8f5ff' },
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
  operationHours: '10AM-2AM',
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
  galleryLabels: readonly string[];
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
  gallery: {
    label: labels.gallery,
    description: labels.galleryDesc,
    images: GALLERY.images.map((image, index) => ({ label: labels.galleryLabels[index] ?? image.label })),
  },
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
      "Bienvenue à l'Hôtel Jun Jun, une suite privée confortable et bien située, conçue pour les voyageurs qui recherchent la commodité, un bon rapport qualité-prix et un séjour fluide au cœur du centre-ville de Toronto. Installée dans l'un des quartiers les plus pratiques et dynamiques de la ville, elle vous place près des services du quotidien, des destinations clés et des zones urbaines animées. Cet équilibre convient particulièrement aux étudiants, aux professionnels, aux séjours prolongés et aux visiteurs qui veulent un point d'ancrage central et facile à vivre.",
      "🌆 Emplacement et commodités du quotidien\nLa suite offre un accès excellent aux quartiers les plus vivants de Toronto. Située près de Little Italy, de l'Hôpital Western, de Chinatown et du campus St. George de l'Université de Toronto, la zone combine immersion culturelle et besoins pratiques. Les arrêts de métro et de tramway de la TTC se trouvent juste en bas et sont accessibles 24 heures, ce qui rend les déplacements simples. L'immeuble comprend un restaurant au rez-de-chaussée (ouvert jusqu'à 4h du matin), ce qui ajoute une option de restauration pratique. À distance de marche, vous trouverez aussi Tim Hortons, le supermarché T&T, McDonald's, Subway, FreshCo, des commerces de quartier et le marché Kensington.",
      "🛏️ Confort intérieur et équipements pratiques\nL'intérieur est pensé pour le confort et l'usage quotidien. Un lit queen-size offre un espace de couchage généreux et la douche privée apporte une vraie autonomie sans espaces partagés. Le plancher en bois donne une ambiance propre et moderne, et un grand téléviseur permet de se détendre en soirée. L'internet rapide et stable convient au télétravail, aux études en ligne, au streaming et aux appels vidéo. L'ensemble crée un environnement fiable et agréable, adapté autant aux courts séjours qu'aux séjours prolongés.",
      "💰 Séjours flexibles et abordables\nL'accessibilité de prix reste l'un des grands atouts de l'Hôtel Jun Jun. Les tarifs flexibles et les durées de séjour adaptables permettent de choisir une formule qui correspond aux besoins réels, plutôt qu'à une structure hôtelière rigide. La suite devient ainsi une option sûre et pratique pour les voyageurs, les étudiants et les résidents de plus longue durée qui souhaitent une base bien située à Toronto, sans les coûts élevés des hébergements traditionnels.",
    ],
    aboutImgAlts: ["Vue de l'entrée de l'hôtel", "Vue intérieure de la chambre", "Vue de la chambre à coucher"],
    galleryDesc: "Voici les images sélectionnées de nos chambres et installations.",
    galleryLabels: ["Chambre standard 2 personnes", "Vue de l'entrée", "Couloir de l'hôtel", "Vue intérieure de chambre", "Chambre standard", "Chambre pour 3 (2 lits)", "Chambre pour 4 (2 lits queen)", "Vue intérieure sous-sol", "Salle de bain sous-sol", "Salle de bain (2 lits)", "Salle de bain sous-sol"],
    pricingRooms: [
      { roomType: 'Chambre 2 pers.', capacity: '1-2 pers.', duration: 'Une nuit', facility: 'Un lit queen, douche privée, TV et internet rapide' },
      { roomType: 'Chambre 3 pers.', capacity: '1-3 pers.', duration: 'Une nuit', facility: 'Un lit queen, un lit simple, douche privée, TV et internet rapide' },
      { roomType: 'Chambre 4 pers.', capacity: '1-3 pers.', duration: 'Une nuit', facility: 'Deux lits queen, douche privée, TV et internet rapide' },
      { roomType: 'Sous-sol 2 pers.', capacity: '1-2 pers.', duration: 'Une nuit', facility: "Chambre sous-sol avec un lit queen, douche privée, TV et internet rapide" },
      { roomType: 'Sous-sol 3 pers.', capacity: '1-3 pers.', duration: 'Une nuit', facility: 'Chambre sous-sol avec un lit queen et un lit simple, douche privée, TV et internet rapide' },
      { roomType: 'Chambre temporaire', capacity: '1-2 pers.', duration: '4 h', facility: 'Un lit queen, douche privée, TV et internet rapide' },
    ],
    phoneLabel: 'Tél. :', addressLabel: 'Adresse :', emailLabel: 'E-mail :', hoursLabel: "Heure d'acceptation :",
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
      { title: "Quelles sont les heures d'arrivée et de départ ?", body: "L'heure de départ est le lendemain à 12h00 (midi), et l'arrivée peut se faire dès 10h00 selon la disponibilité des chambres." },
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
      "Bienvenido a Jun Jun Hotel, una suite privada cómoda y bien ubicada, pensada para huéspedes que valoran la practicidad, el buen precio y una estadía tranquila en pleno centro de Toronto. Está situada en una zona activa y muy funcional de la ciudad, cerca de servicios diarios, puntos clave y barrios con mucha vida. Por eso resulta ideal para estudiantes, profesionales, visitantes de larga estancia y viajeros que buscan una base céntrica y fácil de usar.",
      "🌆 Ubicación y comodidad diaria\nLa suite ofrece excelente acceso a los barrios más dinámicos de Toronto. Está cerca de Little Italy, Western Hospital, Chinatown y el campus St. George de la Universidad de Toronto. Las paradas de metro y tranvía de la TTC están justo abajo y operan 24 horas, lo que facilita moverse por la ciudad. En la planta baja del edificio hay un restaurante (abierto hasta las 4 a.m.), una opción práctica para comer. A pocos minutos caminando encontrará Tim Hortons, T&T, McDonald's, Subway, FreshCo, comercios de barrio y también Kensington Market.",
      "🛏️ Confort interior y servicios prácticos\nEl interior está diseñado para combinar comodidad y funcionalidad. La cama queen-size ofrece espacio generoso para descansar, y la ducha privada aporta privacidad sin áreas compartidas. El piso de madera da una imagen limpia y moderna, y el televisor grande ayuda a relajarse al final del día. El internet rápido y estable permite trabajo remoto, estudio en línea, streaming y videollamadas sin problema. En conjunto, es un espacio confiable para estancias cortas o largas.",
      "💰 Estancias flexibles y asequibles\nLa relación costo-beneficio sigue siendo una de las mayores fortalezas de Jun Jun Hotel. Con precios flexibles y duraciones adaptables, cada huésped puede elegir la opción que mejor se ajusta a sus necesidades reales. Esto convierte la suite en una alternativa práctica y confiable para viajeros, estudiantes y residentes de largo plazo que quieren buena ubicación en Toronto sin los costos altos de un alojamiento tradicional.",
    ],
    aboutImgAlts: ["Vista de la entrada del hotel", "Vista interior de la habitación", "Vista del dormitorio"],
    galleryDesc: "Las siguientes imágenes muestran nuestras habitaciones e instalaciones seleccionadas.",
    galleryLabels: ["Habitación estándar para 2 personas", "Vista exterior", "Pasillo del hotel", "Vista interior de habitación", "Habitación estándar", "Hab. para 3 (2 camas)", "Hab. para 4 (2 camas queen)", "Vista interior del sótano", "Baño del sótano", "Baño (2 camas)", "Baño del sótano"],
    pricingRooms: [
      { roomType: 'Habitación doble', capacity: '1-2 pers.', duration: 'Una noche', facility: 'Una cama queen, baño privado, TV e internet rápido' },
      { roomType: 'Habitación triple', capacity: '1-3 pers.', duration: 'Una noche', facility: 'Una cama queen, una cama individual, baño privado, TV e internet rápido' },
      { roomType: 'Habitación cuádruple', capacity: '1-3 pers.', duration: 'Una noche', facility: 'Dos camas queen, baño privado, TV e internet rápido' },
      { roomType: 'Sótano doble', capacity: '1-2 pers.', duration: 'Una noche', facility: 'Habitación en sótano con cama queen, baño privado, TV e internet rápido' },
      { roomType: 'Sótano triple', capacity: '1-3 pers.', duration: 'Una noche', facility: 'Habitación en sótano con cama queen y cama individual, baño privado, TV e internet rápido' },
      { roomType: 'Habitación temporal', capacity: '1-2 pers.', duration: '4 h', facility: 'Una cama queen, baño privado, TV e internet rápido' },
    ],
    phoneLabel: 'Tel.:', addressLabel: 'Dirección:', emailLabel: 'Correo:', hoursLabel: 'Hora de aceptación:',
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
      { title: "¿Cuáles son los horarios de entrada y salida?", body: "La hora de salida es al día siguiente a las 12:00 del mediodía, y el check-in puede ser desde las 10:00 AM si hay habitación disponible." },
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
      "Willkommen im Jun Jun Hotel, einer komfortablen und gut gelegenen privaten Suite für Gäste, die Wert auf Bequemlichkeit, faire Preise und einen reibungslosen Aufenthalt im Zentrum von Toronto legen. Die Unterkunft liegt in einem praktischen und kulturell lebendigen Viertel und bringt Sie nah an wichtige Ziele und den täglichen Bedarf. Dadurch eignet sie sich besonders für Studierende, Berufstätige, Langzeitgäste und Reisende, die eine zentrale und unkomplizierte Basis suchen.",
      "🌆 Lage und Alltagskomfort\nDie Suite bietet sehr gute Anbindung an die lebendigsten Viertel Torontos. In der Nähe liegen Little Italy, Western Hospital, Chinatown und der St.-George-Campus der University of Toronto. Die TTC-U-Bahn- und Straßenbahnhaltestellen befinden sich direkt unten am Gebäude und sind rund um die Uhr verfügbar. Im Erdgeschoss gibt es ein Restaurant (geöffnet bis 4 Uhr morgens). Zu Fuß erreichen Sie außerdem Tim Hortons, T&T, McDonald's, Subway, FreshCo, weitere lokale Geschäfte und den Kensington Market.",
      "🛏️ Innenkomfort und praktische Ausstattung\nDie Innenausstattung verbindet Komfort mit Funktionalität. Ein Queen-Size-Bett bietet großzügigen Schlafplatz, und die private Dusche sorgt für Bequemlichkeit ohne Gemeinschaftsbereiche. Der Holzboden wirkt sauber und modern, und ein großer Fernseher eignet sich ideal für entspannte Abende. Schnelles, stabiles Internet unterstützt Homeoffice, Online-Lernen, Streaming und Videotelefonie. So entsteht eine verlässliche, eigenständige Umgebung für kurze wie auch längere Aufenthalte.",
      "💰 Flexible und bezahlbare Aufenthalte\nEin großer Vorteil des Jun Jun Hotels ist die Preisflexibilität. Mit anpassbaren Tarifen und Aufenthaltsdauern können Gäste die Option wählen, die wirklich zu ihren Bedürfnissen passt. Damit ist die Suite eine praktische und verlässliche Wahl für Reisende, Studierende und Langzeitgäste, die eine gut gelegene Toronto-Basis ohne die hohen Kosten klassischer Unterkünfte suchen.",
    ],
    aboutImgAlts: ["Blick auf den Hoteleingang", "Hotelzimmer Innenansicht", "Schlafzimmer Ansicht"],
    galleryDesc: "Hier sind ausgewählte Bilder unserer Zimmer und Einrichtungen.",
    galleryLabels: ["Standardzimmer für 2 Personen", "Außenansicht", "Hotelkorridor", "Zimmer Innenansicht", "Standardzimmer", "Zimmer für 3 (2 Betten)", "Zimmer für 4 (2 Queen-Betten)", "Keller Innenansicht", "Bad im Keller", "Bad (2 Betten)", "Bad im Keller"],
    pricingRooms: [
      { roomType: 'Doppelzimmer', capacity: '1-2 Pers.', duration: 'Eine Nacht', facility: 'Ein Queensize-Bett, eigene Dusche, TV und schnelles Internet' },
      { roomType: 'Dreibettzimmer', capacity: '1-3 Pers.', duration: 'Eine Nacht', facility: 'Ein Queensize-Bett, ein Einzelbett, eigene Dusche, TV und schnelles Internet' },
      { roomType: 'Vierbettzimmer', capacity: '1-3 Pers.', duration: 'Eine Nacht', facility: 'Zwei Queensize-Betten, eigene Dusche, TV und schnelles Internet' },
      { roomType: 'Keller-Doppelzimmer', capacity: '1-2 Pers.', duration: 'Eine Nacht', facility: 'Kellerunterkunft mit Queensize-Bett, eigener Dusche, TV und schnellem Internet' },
      { roomType: 'Keller-Dreibettzimmer', capacity: '1-3 Pers.', duration: 'Eine Nacht', facility: 'Kellerunterkunft mit Queensize-Bett und Einzelbett, eigener Dusche, TV und schnellem Internet' },
      { roomType: 'Temporäres Zimmer', capacity: '1-2 Pers.', duration: '4 Std.', facility: 'Ein Queensize-Bett, eigene Dusche, TV und schnelles Internet' },
    ],
    phoneLabel: 'Tel.:', addressLabel: 'Adresse:', emailLabel: 'E-Mail:', hoursLabel: 'Annahmezeit:',
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
      { title: "Was sind die Check-in- und Check-out-Zeiten?", body: "Die Check-out-Zeit ist am nächsten Tag um 12:00 Uhr mittags, und der Check-in kann bereits ab 10:00 Uhr erfolgen (je nach Verfügbarkeit)." },
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
      "ジュンジュンホテルへようこそ。ここは、トロント中心部で利便性と手頃な価格、そして快適な滞在を重視する方のために設計された、立地の良いプライベートスイートです。街の中でも実用性と活気のあるエリアにあり、日常の用事から主要スポットまでアクセスしやすいのが特長です。学生、ビジネス利用、長期滞在、観光のいずれにも使いやすい、暮らしやすい拠点です。",
      "🌆 立地と日常の利便性\nリトルイタリー、ウェスタン病院、チャイナタウン、トロント大学セントジョージキャンパスに近く、生活面と移動面のバランスに優れています。TTCの地下鉄とストリートカーの停留所は建物のすぐ下にあり、24時間利用できるため移動もスムーズです。建物1階にはレストランがあり（午前4時まで営業）、食事の選択肢として便利です。徒歩圏内には Tim Hortons、T&T、McDonald's、Subway、FreshCo、周辺店舗、そしてケンジントンマーケットがあります。",
      "🛏️ 室内の快適さと実用性\n室内は快適さと機能性を両立するよう設計されています。クイーンサイズベッドでゆったり休めるほか、専用シャワーでプライバシーも確保されています。木目の床は清潔感と現代的な雰囲気を与え、大型テレビで夜のリラックスタイムも充実します。高速で安定したインターネットにより、リモートワーク、オンライン学習、動画視聴、ビデオ通話にも対応できます。",
      "💰 柔軟で手頃な滞在\nジュンジュンホテルの強みは、価格と滞在期間の柔軟さです。固定的な宿泊プランではなく、実際のニーズに合わせて選べるため、無駄なく滞在できます。トロント中心部でコストを抑えながら便利に滞在したい旅行者、学生、長期滞在者にとって、実用的で信頼できる選択肢です。",
    ],
    aboutImgAlts: ["ホテル正面玄関", "ホテル客室内部", "ホテル寝室"],
    galleryDesc: "こちらは選りすぐりの客室・設備の写真です。",
    galleryLabels: ["スタンダード2名様ルーム", "正面玄関", "ホテル廊下", "客室内部", "スタンダードルーム", "3人用ダブルベッドルーム", "4人用クイーンベッドルーム", "地下室内部", "地下室バスルーム", "バスルーム（ダブルベッド）", "地下室バスルーム"],
    pricingRooms: [
      { roomType: '2人部屋', capacity: '1〜2名', duration: '1泊', facility: 'クイーンベッド1台、専用シャワー、テレビ、高速インターネット' },
      { roomType: '3人部屋', capacity: '1〜3名', duration: '1泊', facility: 'クイーンベッド1台、シングルベッド1台、専用シャワー、テレビ、高速インターネット' },
      { roomType: '4人ベッドルーム', capacity: '1〜3名', duration: '1泊', facility: 'クイーンベッド2台、専用シャワー、テレビ、高速インターネット' },
      { roomType: '地下2人部屋', capacity: '1〜2名', duration: '1泊', facility: '地下客室、クイーンベッド1台、専用シャワー、テレビ、高速インターネット' },
      { roomType: '地下3人部屋', capacity: '1〜3名', duration: '1泊', facility: '地下客室、クイーンベッド1台、シングルベッド1台、専用シャワー、テレビ、高速インターネット' },
      { roomType: '短時間利用', capacity: '1〜2名', duration: '4時間', facility: 'クイーンベッド1台、専用シャワー、テレビ、高速インターネット' },
    ],
    phoneLabel: '電話：', addressLabel: '住所：', emailLabel: 'メール：', hoursLabel: '受付時間：',
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
      { title: "チェックインとチェックアウトの時間は？", body: "チェックアウトは翌日の正午12時で、チェックインは当日午前10時から可能です（空室がある場合）。" },
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
      "준준 호텔에 오신 것을 환영합니다. 이곳은 토론토 다운타운 중심에서 편리함, 합리적인 가격, 편안한 숙박을 원하는 분들을 위한 전용 스위트입니다. 실용적이면서도 활기찬 지역에 위치해 있어 일상 편의시설과 주요 목적지 접근이 모두 좋습니다. 학생, 직장인, 장기 투숙객, 여행객 모두에게 도심 거점으로 적합합니다.",
      "🌆 위치와 일상 편의\n숙소는 리틀 이탈리, 웨스턴 병원, 차이나타운, 토론토대학교 세인트 조지 캠퍼스와 가깝습니다. 건물 바로 아래에는 TTC 지하철과 스트리트카 정류장이 있어 24시간 이동이 편리합니다. 건물 1층에는 레스토랑이 있으며(오전 4시까지 영업), 식사 선택지가 편리합니다. 도보권에는 Tim Hortons, T&T, McDonald's, Subway, FreshCo, 다양한 로컬 상점, 켄싱턴 마켓이 있습니다.",
      "🛏️ 실내 편안함과 실용성\n실내는 편안함과 기능성을 균형 있게 갖추고 있습니다. 퀸사이즈 침대는 넉넉한 휴식 공간을 제공하고, 전용 샤워실은 프라이버시를 보장합니다. 우드 플로어는 깔끔하고 현대적인 분위기를 만들며, 대형 TV는 실내 휴식 시간을 더 편안하게 해 줍니다. 빠르고 안정적인 인터넷으로 원격 근무, 온라인 학습, 스트리밍, 화상 통화를 무리 없이 이용할 수 있습니다.",
      "💰 유연하고 합리적인 숙박\n준준 호텔의 큰 장점은 유연한 가격과 숙박 기간 선택입니다. 고정된 방식이 아니라 실제 필요에 맞게 선택할 수 있어 효율적인 이용이 가능합니다. 전통적인 숙박시설의 높은 비용 부담 없이, 토론토 중심에서 편리한 거점을 찾는 분들에게 실용적이고 믿을 수 있는 선택입니다.",
    ],
    aboutImgAlts: ["호텔 정문 전경", "호텔 객실 내부", "호텔 침실 전경"],
    galleryDesc: "아래는 저희 객실과 시설을 선별한 사진들입니다.",
    galleryLabels: ["스탠다드 2인실", "정문 전경", "호텔 복도", "객실 내부", "스탠더드 룸", "3인실 더블 침대", "4인실 퀸 침대 2개", "지하실 내부", "지하실 욕실", "욕실 더블 침대", "지하실 욕실"],
    pricingRooms: [
      { roomType: '2인실', capacity: '1-2명', duration: '1박', facility: '퀸 침대 1개, 전용 샤워실, TV, 고속 인터넷' },
      { roomType: '3인실', capacity: '1-3명', duration: '1박', facility: '퀸 침대 1개, 싱글 침대 1개, 전용 샤워실, TV, 고속 인터넷' },
      { roomType: '4인 침실', capacity: '1-3명', duration: '1박', facility: '퀸 침대 2개, 전용 샤워실, TV, 고속 인터넷' },
      { roomType: '지하 2인실', capacity: '1-2명', duration: '1박', facility: '지하 객실, 퀸 침대 1개, 전용 샤워실, TV, 고속 인터넷' },
      { roomType: '지하 3인실', capacity: '1-3명', duration: '1박', facility: '지하 객실, 퀸 침대 1개, 싱글 침대 1개, 전용 샤워실, TV, 고속 인터넷' },
      { roomType: '단시간 이용', capacity: '1-2명', duration: '4시간', facility: '퀸 침대 1개, 전용 샤워실, TV, 고속 인터넷' },
    ],
    phoneLabel: '전화:', addressLabel: '주소:', emailLabel: '이메일:', hoursLabel: '접수 시간:',
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
      { title: "체크인 및 체크아웃 시간은 언제인가요?", body: "체크아웃 시간은 다음 날 정오 12시이며, 체크인은 객실이 가능한 경우 당일 오전 10시부터 가능합니다." },
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
      "مرحباً بكم في فندق جون جون، وهو جناح خاص مريح بموقع ممتاز، مخصص للضيوف الذين يبحثون عن الراحة والسعر المناسب وإقامة سلسة في قلب وسط مدينة تورنتو. يقع الفندق في حي عملي ونشط ثقافياً، ما يضعكم بالقرب من الاحتياجات اليومية والوجهات الرئيسية. لذلك فهو مناسب للطلاب والمهنيين وضيوف الإقامة الطويلة والمسافرين الذين يريدون قاعدة مركزية سهلة للحياة اليومية.",
      "🌆 الموقع والراحة اليومية\nيقع الفندق بالقرب من ليتل إيطاليا والمستشفى الغربي والحي الصيني وحرم سانت جورج بجامعة تورنتو. محطات مترو وترام TTC موجودة مباشرة في الأسفل ومتاحة على مدار 24 ساعة، مما يجعل التنقل سهلاً. يوجد مطعم في الطابق الأرضي (مفتوح حتى الساعة 4 صباحاً)، ويوفر خياراً مناسباً لتناول الطعام. كما يمكنكم الوصول سيراً إلى Tim Hortons وT&T وMcDonald's وSubway وFreshCo ومتاجر محلية متعددة، بالإضافة إلى سوق كينسينغتون.",
      "🛏️ الراحة الداخلية والمرافق العملية\nتم تصميم الجناح ليجمع بين الراحة والوظيفة. يوفر سرير كوين مساحة نوم واسعة، بينما يوفر الدش الخاص خصوصية وراحة من دون مرافق مشتركة. تضيف الأرضيات الخشبية مظهراً نظيفاً وحديثاً، ويساعد التلفزيون الكبير على الاسترخاء مساءً. كما يدعم الإنترنت السريع والمستقر العمل عن بُعد والدراسة عبر الإنترنت والبث والمكالمات المرئية بسهولة.",
      "💰 إقامة مرنة وبأسعار مناسبة\nمن أبرز مزايا فندق جون جون مرونة الأسعار ومدد الإقامة. يمكن للضيف اختيار الخيار الأنسب لاحتياجاته الفعلية بدلاً من النماذج الفندقية الجامدة. لهذا يعد الفندق خياراً عملياً وموثوقاً للمسافرين والطلاب والمقيمين لفترات أطول ممن يريدون إقامة جيدة الموقع في تورنتو بتكلفة أقل من أماكن الإقامة التقليدية.",
    ],
    aboutImgAlts: ["واجهة الفندق", "داخل غرفة الفندق", "غرفة النوم"],
    galleryDesc: "فيما يلي صور مختارة تعرض غرفنا ومرافقنا.",
    galleryLabels: ["غرفة قياسية لشخصين", "المدخل الأمامي", "ممر الفندق", "داخل الغرفة القياسية", "الغرفة القياسية", "غرفة لـ 3 أشخاص", "غرفة لـ 4 أشخاص", "داخل الطابق السفلي", "حمام الطابق السفلي", "الحمام (سريران)", "حمام الطابق السفلي"],
    pricingRooms: [
      { roomType: 'غرفة لشخصين', capacity: '1-2 أشخاص', duration: 'ليلة واحدة', facility: 'سرير كوين، حمام خاص، تلفزيون وإنترنت سريع' },
      { roomType: 'غرفة لثلاثة', capacity: '1-3 أشخاص', duration: 'ليلة واحدة', facility: 'سرير كوين وسرير مفرد، حمام خاص، تلفزيون وإنترنت سريع' },
      { roomType: 'غرفة لأربعة', capacity: '1-3 أشخاص', duration: 'ليلة واحدة', facility: 'سريران كوين، حمام خاص، تلفزيون وإنترنت سريع' },
      { roomType: 'سرداب لشخصين', capacity: '1-2 أشخاص', duration: 'ليلة واحدة', facility: 'غرفة سرداب بسرير كوين، حمام خاص، تلفزيون وإنترنت سريع' },
      { roomType: 'سرداب لثلاثة', capacity: '1-3 أشخاص', duration: 'ليلة واحدة', facility: 'غرفة سرداب بسرير كوين وسرير مفرد، حمام خاص، تلفزيون وإنترنت سريع' },
      { roomType: 'غرفة مؤقتة', capacity: '1-2 أشخاص', duration: '4 ساعات', facility: 'سرير كوين، حمام خاص، تلفزيون وإنترنت سريع' },
    ],
    phoneLabel: 'هاتف:', addressLabel: 'العنوان:', emailLabel: 'البريد:', hoursLabel: 'ساعة القبول:',
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
      { title: "ما هي مواعيد الوصول والمغادرة؟", body: "وقت تسجيل المغادرة هو اليوم التالي الساعة 12 ظهراً، ووقت تسجيل الوصول يمكن أن يكون من الساعة 10 صباحاً اليوم (حسب توفر الغرفة)." },
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
      "जुन जुन होटल में आपका स्वागत है। यह एक आरामदायक और अच्छी लोकेशन वाला निजी सूट है, जो उन मेहमानों के लिए बनाया गया है जो सुविधा, उचित कीमत और टोरंटो डाउनटाउन में सहज ठहराव चाहते हैं। होटल शहर के एक व्यावहारिक और सांस्कृतिक रूप से सक्रिय इलाके में स्थित है, जहाँ रोज़मर्रा की जरूरतें और प्रमुख स्थान आसानी से उपलब्ध हैं। इसलिए यह छात्रों, पेशेवरों, लंबी अवधि के मेहमानों और यात्रियों के लिए बहुत उपयुक्त है।",
      "🌆 स्थान और दैनिक सुविधा\nसूट लिटिल इटली, वेस्टर्न हॉस्पिटल, चाइनाटाउन और यूनिवर्सिटी ऑफ़ टोरंटो के सेंट जॉर्ज कैंपस के पास स्थित है। नीचे ही TTC सबवे और स्ट्रीटकार स्टॉप उपलब्ध हैं और 24 घंटे चलने के कारण यात्रा आसान रहती है। बिल्डिंग के ग्राउंड फ्लोर पर एक रेस्तरां है (सुबह 4 बजे तक खुला), जो भोजन के लिए एक सुविधाजनक विकल्प है। पैदल दूरी पर Tim Hortons, T&T, McDonald's, Subway, FreshCo, स्थानीय दुकानें और Kensington Market भी मिल जाते हैं।",
      "🛏️ अंदरूनी आराम और व्यावहारिक सुविधाएँ\nकमरा आराम और उपयोगिता दोनों को ध्यान में रखकर तैयार किया गया है। क्वीन-साइज़ बेड पर्याप्त सोने की जगह देता है, और निजी शॉवर गोपनीयता के साथ सुविधा देता है। लकड़ी का फ़्लोर साफ और आधुनिक अनुभव देता है, जबकि बड़ा टीवी शाम को आराम के लिए अच्छा है। तेज़ और स्थिर इंटरनेट रिमोट वर्क, ऑनलाइन पढ़ाई, स्ट्रीमिंग और वीडियो कॉल के लिए उपयुक्त है।",
      "💰 लचीला और किफायती ठहराव\nजुन जुन होटल की मुख्य ताकत इसकी किफायती और लचीली मूल्य-व्यवस्था है। मेहमान अपनी वास्तविक जरूरत के अनुसार अवधि और विकल्प चुन सकते हैं, बजाय किसी कठोर होटल ढाँचे के। इस कारण यह यात्रियों, छात्रों और लंबी अवधि के निवासियों के लिए टोरंटो में एक भरोसेमंद और व्यावहारिक विकल्प बनता है।",
    ],
    aboutImgAlts: ["होटल के सामने का दृश्य", "होटल के कमरे की आंतरिक सज्जा", "होटल का शयनकक्ष"],
    galleryDesc: "निम्नलिखित चुनी हुई तस्वीरें हमारे कमरों और सुविधाओं को प्रदर्शित करती हैं।",
    galleryLabels: ["स्टैंडर्ड 2 व्यक्ति कमरा", "सामने का दृश्य", "होटल का गलियारा", "कमरे का आंतरिक दृश्य", "मानक कमरा", "3 व्यक्ति डबल बेड", "4 व्यक्ति क्वीन बेड", "तहखाना आंतरिक दृश्य", "तहखाना बाथरूम", "बाथरूम डबल बेड", "तहखाना बाथरूम"],
    pricingRooms: [
      { roomType: '2 व्यक्ति कमरा', capacity: '1-2 व्यक्ति', duration: 'एक रात', facility: 'एक क्वीन बेड, निजी शॉवर, टीवी और तेज इंटरनेट' },
      { roomType: '3 व्यक्ति कमरा', capacity: '1-3 व्यक्ति', duration: 'एक रात', facility: 'एक क्वीन बेड, एक सिंगल बेड, निजी शॉवर, टीवी और तेज इंटरनेट' },
      { roomType: '4 व्यक्ति बेडरूम', capacity: '1-3 व्यक्ति', duration: 'एक रात', facility: 'दो क्वीन बेड, निजी शॉवर, टीवी और तेज इंटरनेट' },
      { roomType: 'तहखाना 2 व्यक्ति', capacity: '1-2 व्यक्ति', duration: 'एक रात', facility: 'तहखाना कमरा, एक क्वीन बेड, निजी शॉवर, टीवी और तेज इंटरनेट' },
      { roomType: 'तहखाना 3 व्यक्ति', capacity: '1-3 व्यक्ति', duration: 'एक रात', facility: 'तहखाना कमरा, एक क्वीन बेड और एक सिंगल बेड, निजी शॉवर, टीवी और तेज इंटरनेट' },
      { roomType: 'अस्थायी कमरा', capacity: '1-2 व्यक्ति', duration: '4 घंटे', facility: 'एक क्वीन बेड, निजी शॉवर, टीवी और तेज इंटरनेट' },
    ],
    phoneLabel: 'फोन:', addressLabel: 'पता:', emailLabel: 'ईमेल:', hoursLabel: 'स्वीकृति समय:',
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
      { title: "चेक-इन और चेक-आउट का समय क्या है?", body: "चेक-आउट का समय अगले दिन दोपहर 12 बजे है, और चेक-इन आज सुबह 10 बजे से हो सकता है (यदि कमरा उपलब्ध हो)।" },
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
      "Добро пожаловать в Jun Jun Hotel — комфортный частный номер в удобной локации для гостей, которым важны практичность, разумная цена и спокойное проживание в центре Торонто. Отель расположен в оживленном и функциональном районе, рядом с повседневной инфраструктурой и ключевыми точками города. Такой формат особенно подходит студентам, специалистам, гостям на длительный срок и путешественникам, которым нужна удобная городская база.",
      "🌆 Расположение и повседневные удобства\nРядом находятся Little Italy, Western Hospital, Chinatown и кампус St. George Университета Торонто. Остановки метро и трамвая TTC расположены прямо внизу и доступны 24 часа, поэтому передвигаться по городу удобно. На первом этаже здания есть ресторан (открыт до 4 часов утра). В пешей доступности также Tim Hortons, T&T, McDonald's, Subway, FreshCo, другие локальные магазины и Kensington Market.",
      "🛏️ Внутренний комфорт и практичность\nНомер спроектирован так, чтобы сочетать комфорт и функциональность. Кровать queen-size дает достаточно места для отдыха, а отдельный душ обеспечивает приватность без общих зон. Деревянный пол создает чистую и современную атмосферу, а большой телевизор подходит для спокойного вечера. Быстрый и стабильный интернет поддерживает удаленную работу, онлайн-обучение, стриминг и видеосвязь.",
      "💰 Гибкие и доступные условия\nОдно из главных преимуществ Jun Jun Hotel — гибкие тарифы и варианты длительности проживания. Гости могут выбрать формат, который лучше соответствует их реальным потребностям, без жестких ограничений. Это делает отель практичным и надежным выбором для путешественников, студентов и тех, кто останавливается в Торонто надолго.",
    ],
    aboutImgAlts: ["Вид на вход в отель", "Интерьер гостиничного номера", "Спальня в отеле"],
    galleryDesc: "Ниже представлены отобранные фотографии наших номеров и удобств.",
    galleryLabels: ["Стандартный номер на 2 человека", "Вид на вход", "Коридор отеля", "Внутренний вид номера", "Стандартный номер", "Номер на 3 чел.", "Номер на 4 чел.", "Интерьер подвала", "Ванная в подвале", "Ванная (2 кровати)", "Ванная в подвале"],
    pricingRooms: [
      { roomType: 'Номер на 2 чел.', capacity: '1-2 чел.', duration: 'Одна ночь', facility: 'Кровать queen, собственный душ, ТВ и быстрый интернет' },
      { roomType: 'Номер на 3 чел.', capacity: '1-3 чел.', duration: 'Одна ночь', facility: 'Кровать queen, односпальная кровать, собственный душ, ТВ и быстрый интернет' },
      { roomType: 'Номер на 4 чел.', capacity: '1-3 чел.', duration: 'Одна ночь', facility: 'Две кровати queen, собственный душ, ТВ и быстрый интернет' },
      { roomType: 'Подвал на 2 чел.', capacity: '1-2 чел.', duration: 'Одна ночь', facility: 'Номер в подвале, кровать queen, собственный душ, ТВ и быстрый интернет' },
      { roomType: 'Подвал на 3 чел.', capacity: '1-3 чел.', duration: 'Одна ночь', facility: 'Номер в подвале, кровать queen, односпальная кровать, собственный душ, ТВ и быстрый интернет' },
      { roomType: 'Краткосрочный номер', capacity: '1-2 чел.', duration: '4 часа', facility: 'Кровать queen, собственный душ, ТВ и быстрый интернет' },
    ],
    phoneLabel: 'Тел.:', addressLabel: 'Адрес:', emailLabel: 'E-mail:', hoursLabel: 'Часы приема:',
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
      { title: "Каково время заезда и выезда?", body: "Время выезда — на следующий день в 12:00 (полдень), а заезд возможен уже с 10:00 сегодня (при наличии свободного номера)." },
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
      "Chào mừng bạn đến với Jun Jun Hotel, một suite riêng tư thoải mái và có vị trí thuận tiện, phù hợp cho khách cần sự tiện lợi, giá hợp lý và lưu trú ổn định ngay trung tâm Toronto. Khách sạn nằm trong khu vực năng động, dễ tiếp cận các nhu cầu hằng ngày và nhiều điểm đến quan trọng của thành phố. Vì vậy nơi đây rất phù hợp với sinh viên, người đi làm, khách ở dài ngày và du khách cần một điểm dừng chân trung tâm.",
      "🌆 Vị trí và tiện ích hằng ngày\nSuite nằm gần Little Italy, Western Hospital, Chinatown và khuôn viên St. George của Đại học Toronto. Trạm TTC metro và streetcar ở ngay bên dưới tòa nhà, hoạt động 24 giờ nên việc di chuyển rất thuận tiện. Tầng trệt có nhà hàng (mở cửa đến 4 giờ sáng), thuận tiện cho nhu cầu ăn uống. Trong khoảng đi bộ, bạn có thể đến Tim Hortons, T&T, McDonald's, Subway, FreshCo, nhiều cửa hàng địa phương và cả Kensington Market.",
      "🛏️ Sự thoải mái và tính thực dụng bên trong\nKhông gian bên trong được thiết kế để cân bằng giữa tiện nghi và công năng. Giường queen-size mang lại chỗ nghỉ rộng rãi, còn phòng tắm riêng giúp đảm bảo riêng tư. Sàn gỗ tạo cảm giác sạch và hiện đại, TV lớn giúp thư giãn buổi tối. Internet nhanh và ổn định hỗ trợ làm việc từ xa, học trực tuyến, xem nội dung số và gọi video một cách mượt mà.",
      "💰 Linh hoạt và tiết kiệm chi phí\nMột điểm mạnh của Jun Jun Hotel là mức giá linh hoạt cùng thời lượng lưu trú dễ tùy chỉnh. Khách có thể chọn phương án phù hợp nhu cầu thực tế thay vì khuôn mẫu cố định. Nhờ đó, đây là lựa chọn đáng tin cậy cho du khách, sinh viên và người lưu trú dài hạn muốn ở vị trí tốt tại Toronto với chi phí hợp lý.",
    ],
    aboutImgAlts: ["Cửa trước khách sạn", "Nội thất phòng khách sạn", "Phòng ngủ khách sạn"],
    galleryDesc: "Dưới đây là những hình ảnh chọn lọc giới thiệu phòng và tiện ích của chúng tôi.",
    galleryLabels: ["Phòng tiêu chuẩn 2 người", "Cổng trước", "Hành lang khách sạn", "Nội thất phòng chuẩn", "Phòng chuẩn", "Phòng 3 người (2 giường)", "Phòng 4 người (2 giường queen)", "Nội thất tầng hầm", "Phòng tắm tầng hầm", "Phòng tắm (2 giường)", "Phòng tắm tầng hầm"],
    pricingRooms: [
      { roomType: 'Phòng 2 người', capacity: '1-2 người', duration: 'Một đêm', facility: 'Giường queen, phòng tắm riêng, TV và internet tốc độ cao' },
      { roomType: 'Phòng 3 người', capacity: '1-3 người', duration: 'Một đêm', facility: 'Giường queen, giường đơn, phòng tắm riêng, TV và internet tốc độ cao' },
      { roomType: 'Phòng 4 người', capacity: '1-3 người', duration: 'Một đêm', facility: 'Hai giường queen, phòng tắm riêng, TV và internet tốc độ cao' },
      { roomType: 'Tầng hầm 2 người', capacity: '1-2 người', duration: 'Một đêm', facility: 'Phòng tầng hầm, giường queen, phòng tắm riêng, TV và internet tốc độ cao' },
      { roomType: 'Tầng hầm 3 người', capacity: '1-3 người', duration: 'Một đêm', facility: 'Phòng tầng hầm, giường queen và giường đơn, phòng tắm riêng, TV và internet tốc độ cao' },
      { roomType: 'Phòng tạm thời', capacity: '1-2 người', duration: '4 giờ', facility: 'Giường queen, phòng tắm riêng, TV và internet tốc độ cao' },
    ],
    phoneLabel: 'ĐT:', addressLabel: 'Địa chỉ:', emailLabel: 'Email:', hoursLabel: 'Giờ tiếp nhận:',
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
      { title: "Giờ nhận và trả phòng là mấy giờ?", body: "Giờ trả phòng là 12:00 trưa ngày hôm sau, và nhận phòng có thể sớm từ 10:00 sáng hôm nay (nếu còn phòng)." },
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
      "歡迎光臨君君旅店。這是一間舒適、位置便利的私人套房旅店，適合重視便利性、價格實惠與入住體驗順暢的旅客。旅店位於多倫多市中心實用且充滿活力的區域，鄰近日常所需、主要地點與熱鬧街區。這樣的條件特別適合學生、專業人士、長住旅客與需要市中心據點的訪客。",
      "🌆 地理位置與日常便利\n旅店鄰近小意大利、西方醫院、唐人街與多倫多大學聖喬治校區。TTC 地鐵與路面電車站就在樓下，且 24 小時可用，交通非常便利。大樓一樓設有餐館（營業至凌晨4時），提供便利的用餐選擇。步行即可到達 Tim Hortons、T&T、麥當勞、Subway、FreshCo、周邊商店與肯辛頓市場，生活機能完整。",
      "🛏️ 室內舒適與實用設施\n室內設計兼顧舒適與功能。加大雙人床提供寬敞睡眠空間，獨立淋浴間提升隱私與便利。木地板營造乾淨現代的氛圍，大電視適合晚間放鬆。快速穩定的網路可支援遠端工作、線上學習、串流與視訊通話，短住或長住都能維持良好體驗。",
      "💰 彈性且實惠的住宿\n君君旅店的一大優勢是價格與住宿時長的彈性。旅客可依實際需求選擇合適方案，不必受制於僵化的住宿模式。對希望在多倫多以合理成本獲得良好位置的旅客、學生與長住者而言，這是可靠且務實的選擇。",
    ],
    aboutImgAlts: ["旅館正門外觀", "旅館房間內部", "旅館臥室"],
    galleryDesc: "以下是精選的客房與設施照片。",
    galleryLabels: ["標準雙人房", "正門外觀", "旅館走廊", "標準房內部", "標準房", "三人雙床房", "四人雙大床房", "地下室內部", "地下室浴室", "浴室（雙床）", "地下室浴室"],
    pricingRooms: [
      { roomType: '雙人房', capacity: '1-2人', duration: '一晚', facility: '一張雙人加大床、獨立淋浴間、電視及高速網路' },
      { roomType: '三人房', capacity: '1-3人', duration: '一晚', facility: '一張雙人加大床、一張單人床、獨立淋浴間、電視及高速網路' },
      { roomType: '四人臥室', capacity: '1-3人', duration: '一晚', facility: '兩張雙人加大床、獨立淋浴間、電視及高速網路' },
      { roomType: '地下室雙人房', capacity: '1-2人', duration: '一晚', facility: '地下室客房，一張雙人加大床、獨立淋浴間、電視及高速網路' },
      { roomType: '地下室三人房', capacity: '1-3人', duration: '一晚', facility: '地下室客房，一張雙人加大床及一張單人床、獨立淋浴間、電視及高速網路' },
      { roomType: '短時客房', capacity: '1-2人', duration: '4小時', facility: '一張雙人加大床、獨立淋浴間、電視及高速網路' },
    ],
    phoneLabel: '電話：', addressLabel: '地址：', emailLabel: '電郵：', hoursLabel: '接待時間：',
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
      { title: "入住和退房時間是幾點？", body: "退房時間為翌日中午12點，入住時間為今天且最早可於上午10點辦理（視房況而定）。" },
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
      "欢迎来到君君旅店。这是一间舒适、位置便利的私人套房旅店，适合重视便利、预算与入住体验的客人。旅店位于多伦多市中心实用且充满活力的区域，临近日常所需、主要目的地与热门街区。这样的条件尤其适合学生、专业人士、长期住客与需要市中心据点的旅客。",
      "🌆 位置与日常便利\n旅店靠近小意大利、西方医院、唐人街和多伦多大学圣乔治校区。TTC 地铁与有轨电车站就在楼下，并且 24 小时可用，出行非常方便。大楼一层设有餐馆（营业至凌晨4点），提供便捷的用餐选择。步行范围内还有 Tim Hortons、T&T、麦当劳、Subway、FreshCo、多家本地商铺以及肯辛顿市场，生活便利度很高。",
      "🛏️ 室内舒适与实用设施\n室内设计兼顾舒适与功能。加大床提供宽敞睡眠空间，独立淋浴间带来更好的私密性与便利性。木地板让空间更整洁现代，大电视适合夜间放松。快速稳定的网络支持远程办公、在线学习、流媒体和视频通话，短住与长住都能保持良好体验。",
      "💰 灵活且实惠的住宿\n君君旅店的核心优势之一是价格和住宿时长的灵活性。客人可以根据实际需求选择方案，而不必受制于固定模式。对于希望在多伦多以合理成本获得良好地段的旅客、学生和长期住客来说，这是务实且可靠的选择。",
    ],
    aboutImgAlts: ["旅店正门外观", "旅店客房内部", "旅店卧室"],
    galleryDesc: "以下是精选的客房与设施照片。",
    galleryLabels: ["标准双人房", "正门外观", "旅店走廊", "标准间内部", "标准间", "三人双床间", "四人双大床间", "地下室内部", "地下室浴室", "浴室（双床）", "地下室浴室"],
    pricingRooms: [
      { roomType: '双人间', capacity: '1-2人', duration: '一晚', facility: '一张大床、独立淋浴间、电视及高速网络' },
      { roomType: '三人间', capacity: '1-3人', duration: '一晚', facility: '一张大床、一张单人床、独立淋浴间、电视及高速网络' },
      { roomType: '四人卧室', capacity: '1-3人', duration: '一晚', facility: '两张大床、独立淋浴间、电视及高速网络' },
      { roomType: '地下室双人间', capacity: '1-2人', duration: '一晚', facility: '地下室客房，一张大床、独立淋浴间、电视及高速网络' },
      { roomType: '地下室三人间', capacity: '1-3人', duration: '一晚', facility: '地下室客房，一张大床及一张单人床、独立淋浴间、电视及高速网络' },
      { roomType: '短时客房', capacity: '1-2人', duration: '4小时', facility: '一张大床、独立淋浴间、电视及高速网络' },
    ],
    phoneLabel: '电话：', addressLabel: '地址：', emailLabel: '邮箱：', hoursLabel: '接待时间：',
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
      { title: "入住和退房时间是什么时候？", body: "退房时间为次日中午12点，入住时间为今天且最早可于上午10点办理（视房间供应情况而定）。" },
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

