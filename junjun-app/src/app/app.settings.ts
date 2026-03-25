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
      "Bienvenue à une visite approfondie de l'Hôtel Jun Jun, un hébergement confortable et bien situé, composé de suites privées conçues pour les clients qui apprécient la commodité, l'accessibilité financière et un séjour sans tracas au cœur du centre-ville de Toronto. Situé dans l'un des quartiers les plus pratiques et culturellement dynamiques de la ville, la suite place les visiteurs à proximité des services quotidiens, des grandes destinations et des quartiers urbains dynamiques. Cet équilibre la rend particulièrement adaptée aux étudiants, aux professionnels, aux clients de longue durée et aux voyageurs qui souhaitent une base de vie centrale facile à vivre.",
      "🌆 Emplacement et commodités du quotidien\nLa suite offre une accessibilité exceptionnelle aux quartiers les plus dynamiques de Toronto. Située à proximité de la Petite Italie, de l'Hôpital Général, du Quartier chinois et du campus St. George de l'Université de Toronto, la région offre un équilibre parfait entre immersion culturelle et commodités pratiques. Les clients apprécieront la proximité des arrêts de métro et de tramway de la TTC directement en bas, ce qui rend le transport fluide. L'immeuble accueille un restaurant vietnamien au rez-de-chaussée, parfait pour des repas rapides et de saveurs locales. À distance de marche, vous trouverez Tim Hortons, le supermarché T&T avec des produits frais et des articles asiatiques, McDonald's, Subway, Freshco pour des achats à petit budget et des dépanneurs locaux. Le marché Kensington est également à proximité, offrant des commerces indépendants et des cuisines du monde. Que vous soyez à Toronto pour affaires, études ou loisirs, vous trouverez tout ce dont vous avez besoin à quelques pas.",
      "🛏️ Confort intérieur et équipements pratiques\nLa suite est conçue à la fois pour le confort et la fonctionnalité. Un lit queen-size offre un espace de couchage généreux, tandis qu'une douche privée offre la commodité sans installations partagées. Le plancher en bois ajoute une esthétique propre et moderne, et un grand téléviseur de 40 pouces soutient des soirées relaxantes à l'intérieur. Un internet rapide et stable permet le télétravail, l'étude en ligne, la diffusion en continu et les appels vidéo en toute aisance. Ensemble, ces caractéristiques créent un environnement fiable et autonome adapté aux visites courtes et aux séjours plus longs.",
      "💰 Séjours flexibles et abordables\nL'accessibilité financière reste l'un des plus grands atouts de l'Hôtel Jun Jun. Les tarifs flexibles et les durées de service adaptables permettent aux clients de sélectionner un mode de séjour qui correspond à leurs besoins réels au lieu de structures hôtelières rigides. Cela fait de la suite un choix judicieux et fiable pour les voyageurs, les étudiants et les résidents de longue durée qui souhaitent une base bien située à Toronto sans le coût élevé des hébergements traditionnels.",
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
      "Bienvenido a conocer mejor el Jun Jun Hotel, un alojamiento cómodo y bien ubicado, compuesto de suites privadas diseñadas para huéspedes que valoran la comodidad, la asequibilidad y una estadía sin preocupaciones en el corazón del centro de Toronto. Ubicado en uno de los barrios más prácticos y culturalmente activos de la ciudad, la suite coloca a los visitantes cerca de servicios esenciales, destinos principales y distritos urbanos vibrantes. Este equilibrio la hace especialmente adecuada para estudiantes, profesionales, huéspedes de larga duración y viajeros que desean una base central que sea fácil de vivir.",
      "🌆 Ubicación y comodidades cotidianas\nLa suite ofrece una accesibilidad excepcional a los barrios más vibrantes de Toronto. Ubicada cerca de Little Italy, Hospital Occidental, Chinatown y el campus St. George de la Universidad de Toronto, la zona ofrece un equilibrio perfecto entre inmersión cultural y servicios prácticos. Los huéspedes apreciarán la proximidad a las estaciones de metro y tranvía de la TTC directamente en el piso inferior, haciendo el transporte continuo. El edificio cuenta con un restaurante vietnamita en la planta baja, perfecto para comidas rápidas y sabores locales. A poca distancia caminando encontrará Tim Hortons, el supermercado T&T con productos frescos y artículos especiales asiáticos, McDonald's, Subway, Freshco para compras presupuestarias, y tiendas de bebidas locales. El Mercado Kensington también está cerca, ofreciendo tiendas independientes y cocina global. Ya sea que esté en Toronto por negocios, estudio o placer, encontrará todo lo que necesita a pocos pasos.",
      "🛏️ Comodidad interior y servicios prácticos\nEl interior de la suite está diseñado tanto para comodidad como para funcionalidad. Una cama queen-size proporciona un espacio de cama generoso, mientras que una ducha privada ofrece conveniencia sin instalaciones compartidas. Los pisos de madera añaden una estética limpia y moderna, y un televisor grande de 40 pulgadas permite tardes relajantes en casa. Internet rápido y estable permite trabajo remoto, aulas en línea, transmisión y videollamadas con facilidad. Juntos, estas características crean un ambiente confiable y autónomo adecuado para visitas cortas y estadías más largas.",
      "💰 Estancias flexibles y asequibles\nLa asequibilidad sigue siendo una de las ventajas más fuertes del Jun Jun Hotel. La tarificación flexible y las duraciones de servicio adaptables permiten a los huéspedes seleccionar un patrón de estadía que se ajuste a sus necesidades reales en lugar de estructuras hoteleras rígidas. Esto hace que la suite sea una opción inteligente y confiable para viajeros, estudiantes y residentes de largo plazo que desean una base bien ubicada en Toronto sin el costo elevado de los alojamientos tradicionales.",
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
      "Willkommen zu einem genaueren Blick auf das Jun Jun Hotel, ein komfortables und gut erreichbares privates Apartmenthotel, das für Gäste konzipiert ist, die Komfort, Erschwinglichkeit und einen reibungslosen Aufenthalt im Herzen von Torontos Innenstadt schätzen. Gelegen in einem der praktischsten und kulturell lebendigen Viertel der Stadt, bringt die Suite Besucher in die Nähe von Tagesbedarfsangeboten, Hauptzielen und lebendigen Stadtvierteln. Dieses Gleichgewicht macht es besonders für Studenten, Berufstätige, Langzeitgäste und Reisende geeignet, die eine zentrale Basis suchen, die einfach zu leben ist.",
      "🌆 Lage und alltäglicher Komfort\nDie Suite bietet außergewöhnliche Erreichbarkeit zu Torontos lebendigen Vierteln. In der Nähe von Little Italy, Western Hospital, Chinatown und dem Campus St. George der Universität Toronto gelegen, bietet die Gegend ein perfektes Gleichgewicht zwischen kulturellem Eintauchen und praktischen Notwendigkeiten. Gäste werden die Nähe zu TTC-U-Bahn- und Straßenbahnhaltestellen direkt im Erdgeschoss zu schätzen wissen, was den Transit nahtlos macht. Das Gebäude beherbergt ein vietnamesisches Restaurant im Erdgeschoss – perfekt für schnelle Mahlzeiten und lokale Aromen. Fußläufig in der Nähe finden Sie Tim Hortons, das T&T-Supermärket mit frischen Lebensmitteln und asiatischen Spezialartikeln, McDonald's, Subway, Freshco für preisgünstige Einkäufe und lokale Geschäfte. Der Kensington Market ist ebenfalls in der Nähe und bietet unabhängige Geschäfte und globale Küche. Ob Sie in Toronto für Geschäfte, Studium oder Freizeit sind, Sie finden alles, was Sie brauchen, nur wenige Schritte entfernt.",
      "🛏️ Innenausstattung und praktische Einrichtungen\nDie Suite ist sowohl auf Komfort als auch auf Funktionalität ausgelegt. Ein Queen-Size-Bett bietet großzügigen Schlafplatz, während eine private Dusche Komfort ohne Gemeinschaftseinrichtungen bietet. Holzböden verleihen eine saubere, moderne Ästhetik, und ein großer 40-Zoll-Fernseher unterstützt entspannende Abende drinnen. Schnelles, stabiles Internet ermöglicht Fernarbeit, Online-Studium, Streaming und Videoanrufe mit Leichtigkeit. Zusammen schaffen diese Merkmale eine zuverlässige, in sich geschlossene Umgebung, die sich für Kurzbesuche und längere Aufenthalte eignet.",
      "💰 Flexible und erschwingliche Aufenthalte\nErschwinglichkeit bleibt einer der größten Vorteile des Jun Jun Hotels. Flexible Preisgestaltung und anpassbare Servicedauern ermöglichen Gästen, ein Aufenthaltsmuster zu wählen, das ihren wirklichen Bedürfnissen entspricht, anstatt starrer Hotelstrukturen. Dies macht die Suite zu einer intelligenten und zuverlässigen Option für Reisende, Studenten und Langzeitbewohner, die eine zentral gelegene Basis in Toronto ohne die hohen Kosten traditioneller Unterkünfte wünschen.",
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
      "ジュンジュンホテルの詳細をご覧ください。快適でアクセスしやすいプライベートスイート設備は、利便性、手頃な価格、トロントのダウンタウンの中心部でのスムーズな滞在を重視するゲスト向けに設計されています。市内で最も実用的で文化的に活発な地区の1つに位置するスイートは、訪問者を日用品の近く、主要な目的地、活気のある都市地区に配置しています。このバランスは、便利で住みやすい中央の拠点を望む学生、専門家、長期ゲスト、および旅行者に特に適しています。",
      "🌆 立地と日常の利便性\nこのスイートは、トロントで最も活気のある地域への優れたアクセシビリティを提供します。リトルイタリー、ウェスタンホスピタル、チャイナタウン、トロント大学セント・ジョージキャンパス近くに位置し、文化的な没入感と実際的な必需品のバランスが完璧です。ゲストは、1階下のTTC地下鉄とストリートカーの停留所の近さを高く評価し、輸送をシームレスにします。建物の1階にはベトナムレストランがあり、快速食事と地元の味に最適です。徒歩圏内には、新鮮な食材とアジア系特産品を扱うティムホートンズ、T&Tスーパーマーケット、マクドナルド、サブウェイ、予算に優しいFreshco、地元のビール店があります。ケンジントンマーケットも近く、独立した店舗と世界中の料理があります。ビジネス、勉強、レジャーのためトロントに来ても、必要なものはすべて数歩先にあります。",
      "🛏️ 室内の快適さと実用的な設備\n室内は快適さと機能性の両方のために設計されています。クイーンサイズベッドは十分な寝床スペースを提供し、プライベートシャワーは共有施設なしで利便性を提供します。木製フローリングはきれいでモダンな美学を加え、大型の40インチテレビは屋内でのリラックスタイムをサポートします。高速で安定したインターネットは、リモートワーク、オンライン学習、ストリーミング、ビデオ通話を簡単にします。これらの機能はすべて、短期滞在と長期滞在の両方に適した信頼性が高く自己完結した環境を作成しています。",
      "💰 柔軟でリーズナブルな滞在\n手頃な価格はジュンジュンホテルの最大の利点の1つです。柔軟な料金設定と調整可能なサービス期間により、ゲストは厳格なホテル構造ではなく、実際のニーズに合わせた滞在パターンを選択できます。これにより、スイートは、従来の宿泊施設の高いコストなしにトロントで便利に配置された拠点を希望する旅行者、学生、および長期居住者にとって賢明で信頼できる選択肢になります。",
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
      "준준 호텔을 자세히 알아보세요. 편안하고 잘 위치한 전용 스위트로서, 편리성, 저렴한 가격, 그리고 토론토 다운타운 중심부에서의 원활한 숙박을 원하는 손님을 위해 설계되었습니다. 도시에서 가장 실용적이고 문화적으로 활발한 지역 중 하나에 위치한 이 스위트는 방문객들을 일상 필수 시설, 주요 목적지, 그리고 활기찬 도시 지역 근처에 제공합니다. 이러한 균형은 편리하고 살기 좋은 중심부 거점을 원하는 학생, 직장인, 장기 투숙객, 그리고 여행객들에게 특히 적합합니다.",
      "🌆 위치와 일상 편의시설\n이 스위트는 토론토의 가장 활기찬 지역으로의 탁월한 접근성을 제공합니다. 리틀 이탈리, 웨스턴 병원, 차이나타운, 토론토 대학 세인트 조지 캠퍼스 근처에 위치하며, 문화적 몰입과 실질적 필수품 사이의 완벽한 균형을 제공합니다. 투숙객들은 1층 아래의 TTC 지하철 및 트램 정거장의 근접성을 높이 평가할 것이며, 이는 교통을 원활하게 합니다. 건물의 1층에는 베트남 레스토랑이 있으며, 빠른 식사와 지역 음식에 완벽합니다. 걸어서 갈 수 있는 거리에는 신선한 식료품과 아시아 특산품이 있는 T&T 슈퍼마켓, 팀 호튼스, 맥도날드, 서브웨이, 저예산 쇼핑을 위한 Freshco, 그리고 지역 주류점이 있습니다. 켄싱턴 마켓도 근처에 있으며, 독립적인 상점과 세계 요리를 제공합니다. 비즈니스, 공부, 또는 여가를 위해 토론토에 오든 필요한 모든 것이 몇 발 걸음 거리에 있습니다.",
      "🛏️ 실내 편안함과 실용적인 시설\n실내는 편안함과 기능성 모두를 위해 설계되었습니다. 퀸사이즈 침대는 넓은 수면 공간을 제공하는 한편, 전용 샤워실은 공용 시설 없이 편리함을 제공합니다. 나무 바닥은 깨끗하고 현대적인 미학을 더하고, 큰 40인치 TV는 실내에서의 편안한 저녁을 지원합니다. 빠르고 안정적인 인터넷은 원격 작업, 온라인 학습, 스트리밍, 그리고 화상 통화를 쉽게 사용할 수 있도록 합니다. 이 모든 특징이 단기 방문 및 장기 숙박 모두에 적합한 신뢰할 수 있는 자립적 환경을 창출합니다.",
      "💰 유연하고 합리적인 숙박\n저렴한 가격은 준준 호텔의 가장 강력한 장점 중 하나입니다. 유연한 가격 책정과 조정 가능한 서비스 기간을 통해 투숙객들은 엄격한 호텔 구조가 아닌 실제 필요에 맞는 숙박 패턴을 선택할 수 있습니다. 이는 전통적인 숙박의 높은 비용 없이 토론토에 잘 위치한 거점을 원하는 여행객, 학생, 장기 거주자들에게 현명하고 신뢰할 수 있는 선택이 됩니다.",
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
      "مرحباً بكم في نظرة أقرب على فندق جون جون، وهو مكان إقامة مريح وموقعه جيد يتألف من أجنحة خاصة مصممة للنزلاء الذين يقدرون الراحة والقدرة على تحمل التكاليف والإقامة السلسة في قلب وسط مدينة تورنتو. يقع الفندق في أحد أكثر الأحياء عملية وحيويةً ثقافياً في المدينة، ويضع المجمع السياحي الزوار بالقرب من المتطلبات اليومية والوجهات الرئيسية والأحياء الحضرية النابضة بالحياة. يجعل هذا التوازن مناسباً بشكل خاص للطلاب والمهنيين والنزلاء طويلي الأجل والمسافرين الذين يريدون قاعدة منزلية مركزية يسهل العيش فيها.",
      "🌆 الموقع والخدمات اليومية\nيوفر المجمع إمكانية وصول استثنائية إلى أكثر أحياء تورنتو نشاطاً. يقع بالقرب من حي ليتل إيطاليا والمستشفى الغربي والحي الصيني وحرم جامعة سانت جورج، وتوفر المنطقة توازناً مثالياً بين الغمر الثقافي والضروريات العملية. سيقدر الضيوف قرب محطات مترو ومترو TTC مباشرة أسفل الشارع، مما يجعل النقل سلساً. يضم المبنى مطعماً فيتنامياً في الطابق الأرضي—مثالي للوجبات السريعة والنكهات المحلية. على مسافة سير قريبة ستجد تيم هورتون و سوبرماركت T&T مع المنتجات الطازجة والعناصر الآسيوية المتخصصة وماكدونالدز وسابواي و Freshco للتسوق بميزانية وسطية والمحلات الميسرة المحلية. سوق كينسينغتون قريب أيضاً، يوفر المتاجر المستقلة والمأكولات العالمية. سواء كنت في تورنتو للعمل أو الدراسة أو الترفيه، ستجد كل ما تحتاجه على بعد خطوات قليلة.",
      "🛏️ الراحة الداخلية والمرافق العملية\nتم تصميم المجمع للراحة والوظيفة على حد سواء. توفر سرير كوين سايز مساحة نوم واسعة، في حين توفر دش خاص الراحة بدون منشآت مشتركة. تضيف أرضيات خشبية جمالياً نظيفاً وحديثاً، وتدعم شاشة تلفزيون مقاس 40 بوصة كبيرة المساءات المريحة في الداخل. يمكّن الإنترنت السريع والمستقر من العمل عن بعد والدراسة عبر الإنترنت والبث والمكالمات الفيديوية بسهولة. معاً، تخلق هذه الميزات بيئة موثوقة وذاتية الاكتفاء مناسبة للزيارات القصيرة والإقامات الأطول.",
      "💰 إقامة مرنة وبأسعار معقولة\nتبقى القدرة على تحمل التكاليف أحد أكبر مميزات فندق جون جون. تسمح الأسعار المرنة ومدد الخدمة القابلة للتعديل للضيوف باختيار نمط إقامة يناسب احتياجاتهم الفعلية بدلاً من هياكل الفندق الصارمة. هذا يجعل المجمع خياراً ذكياً وموثوقاً للمسافرين والطلاب والمقيمين على المدى الطويل الذين يريدون قاعدة منزلية موقعتها كويسة في تورنتو بدون التكلفة العالية للإقامة التقليدية.",
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
      "जुन जुन होटल पर करीब से नज़र डालें, यह एक आरामदायक और अच्छी तरह स्थित निजी सूट है जो सुविधा, सामर्थ्य और टोरंटो के डाउनटाउन के दिल में आसान रहने की सराहना करने वाले मेहमानों के लिए डिज़ाइन किया गया है। शहर के सबसे व्यावहारिक और सांस्कृतिक रूप से सक्रिय इलाकों में से एक में स्थित, यह सूट आगंतुकों को दैनिक आवश्यकताओं, प्रमुख गंतव्यों और जीवंत शहरी जिलों के पास रखता है। यह संतुलन छात्रों, व्यावसायिकों, लंबी अवधि के मेहमानों और यात्रियों के लिए विशेष रूप से उपयुक्त है जो एक केंद्रीय घर का आधार चाहते हैं जहां रहना आसान है।",
      "🌆 स्थान और दैनिक सुविधाएँ\nयह सूट टोरंटो के सबसे जीवंत पड़ोस तक असाधारण पहुंच प्रदान करता है। लिटल इटली, वेस्टर्न हॉस्पिटल, चाइनाटाउन और टोरंटो विश्वविद्यालय के सेंट जॉर्ज कैंपस के पास स्थित, यह क्षेत्र सांस्कृतिक विसर्जन और व्यावहारिक आवश्यकताओं के बीच एक परिपूर्ण संतुलन प्रदान करता है। मेहमान सीधे नीचे की मंजिल पर TTC सबवे और स्ट्रीटकार स्टॉप की निकटता की सराहना करेंगे, जिससे पारगमन निर्बाध होता है। इमारत में जमीनी तल पर एक वियतनामी रेस्तरां है - तेजी से भोजन और स्थानीय स्वाद के लिए बिल्कुल सही। पैदल दूरी पर आपको टिम हॉर्टन्स, ताजी किराना और एशिया की विशेष वस्तुओं के साथ T&T सुपरमार्केट, मैकडॉनल्ड्स, सबवे, सस्ती खरीदारी के लिए फ्रेश्को और स्थानीय शराब स्टोर मिलेंगे। केंसिंगटन बाजार भी पास है, जो स्वतंत्र दुकानें और वैश्विक खाना पदार्थ प्रदान करता है। चाहे आप टोरंटो व्यापार, अध्ययन या अवकाश के लिए आएं, आपको सब कुछ मिलेगा जो आप कुछ कदम दूरी पर चाहते हैं।",
      "🛏️ आंतरिक आराम और व्यावहारिक सुविधाएँ\nआंतरिक आराम और कार्यक्षमता दोनों के लिए डिज़ाइन किया गया है। एक क्वीन साइज बेड विशाल सोने की जगह प्रदान करता है, जबकि एक निजी शॉवर साझा सुविधाओं के बिना सुविधा प्रदान करता है। लकड़ी की फर्श एक साफ, आधुनिक सौंदर्य जोड़ता है, और एक बड़ा 40-इंच टीवी घर के अंदर आरामदायक शाम का समर्थन करता है। तेजी से, स्थिर इंटरनेट दूरस्थ काम, ऑनलाइन अध्ययन, स्ट्रीमिंग और वीडियो कॉल को सहजता से सक्षम करता है। ये सभी सुविधाएँ एक विश्वसनीय, आत्मनिर्भर माहौल बनाती हैं जो छोटी यात्राओं और लंबी अवधि के रहने दोनों के लिए उपयुक्त है।",
      "💰 लचीली और किफायती रहने की सुविधा\nसामर्थ्य जुन जुन होटल की सबसे शक्तिशाली विशेषताओं में से एक है। लचीली मूल्य निर्धारण और समायोज्य सेवा अवधि मेहमानों को कठोर होटल संरचनाओं के बजाय अपनी वास्तविक आवश्यकताओं के अनुरूप एक रहने का तरीका चुनने देती है। यह सूट यात्रियों, छात्रों और दीर्घकालीन निवासियों के लिए एक स्मार्ट और विश्वसनीय विकल्प बनाता है जो परंपरागत आवास की उच्च लागत के बिना टोरंटो में एक अच्छी तरह से स्थित आधार चाहते हैं।",
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
      "Добро пожаловать на подробное обзорное ознакомление с отелем Jun Jun Hotel, комфортным и хорошо расположенным приватным люксом, разработанным для гостей, ценящих удобство, доступность и беззаботное пребывание в самом центре Торонто. Расположеный в одном из самых практичных и культурно активных районов города, люкс размещает гостей рядом с ежедневными необходимостями, основными достопримечательностями и живыми городскими районами. Этот баланс делает его особенно подходящим для студентов, профессионалов, долгосрочных гостей и путешественников, которые ищут центральную домашнюю базу, которая легко живет.",
      "🌆 Расположение и ежедневные удобства\nЛюкс предоставляет исключительный доступ к самым оживленным районам Торонто. Расположенный рядом с Литл-Италией, Западной больницей, Чайнатауном и кампусом Святого Георгия Университета Торонто, район предлагает идеальный баланс между культурным погружением и практическими необходимостями. Гости оценят близость станций метро и трамвая ТТЦ прямо внизу, что делает транспорт бесперебойным. В здании на первом этаже находится вьетнамский ресторан — идеален для быстрых обедов и местных вкусов. В пешей доступности вы найдете Tim Hortons, супермаркет T&T с свежей продукцией и азиатскими специальностями, McDonald's, Subway, Freshco для бюджетных покупок и местные винотеки. Рынок Кенсингтон также находится поблизости, предлагая независимые магазины и мировую кухню. Находитесь ли вы в Торонто по работе, учебе или отдыху, вы найдете все необходимое в нескольких шагах.",
      "🛏️ Внутренний комфорт и практичные удобства\nЛюкс спроектирован как для комфорта, так и для функциональности. Кровать kingsize обеспечивает просторное спальное место, в то время как собственный душ предлагает удобство без общих объектов. Деревянный пол добавляет чистую, современную эстетику, а большой 40-дюймовый телевизор поддерживает расслабляющие вечера в помещении. Быстрый и стабильный интернет позволяет удаленную работу, онлайн-обучение, потоковую передачу и видеовызовы с легкостью. Вместе эти характеристики создают надежную, самодостаточную среду, подходящую как для коротких визитов, так и для более длительных пребываний.",
      "💰 Гибкие и доступные цены\nДоступность остается одним из самых сильных преимуществ отеля Jun Jun Hotel. Гибкое ценообразование и регулируемые периоды обслуживания позволяют гостям выбирать модель пребывания, которая соответствует их реальным потребностям, вместо строгих сетевых структур. Это делает люкс разумным и надежным выбором для путешественников, студентов и долгосрочных жителей, которые ищут центральную базу в Торонто без высоких затрат на традиционное проживание.",
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
      "Chào mừng bạn khám phá chi tiết Jun Jun Hotel, một chỗ nghỉ thoải mái và có vị trí tốt, được thiết kế cho những khách muốn tiện nghi, giá cả hợp lý và kỳ nghỉ suôn sẻ tại trung tâm thành phố Toronto. Nằm trong một trong những khu phố tiện dụng và sôi động nhất về mặt văn hóa của thành phố, phòng nghỉ này đặt khách gần các dịch vụ hàng ngày thiết yếu, những điểm đến chính và những khu phố sống động. Sự cân bằng này làm cho nó đặc biệt phù hợp với sinh viên, chuyên gia, khách lưu trú dài hạn và những người du lịch muốn có một căn cứ trung tâm dễ sống.",
      "🌆 Vị trí và tiện ích hàng ngày\nPhòng nghỉ cung cấp khả năng tiếp cận ngoài thường cho những khu phố sôi động nhất của Toronto. Nằm gần Little Italy, Bệnh viện Phương Tây, Khu phố Tàu và khuôn viên St. George của Đại học Toronto, khu vực này mang đến sự cân bằng hoàn hảo giữa du nhập văn hóa và những nhu cầu thiết thực. Khách sẽ đánh giá cao sự gần gũi với các trạm metro và xe điện TTC ngay bên dưới, làm cho giao thông vận tải suôn sẻ. Tòa nhà có một quán ăn Việt ở tầng trệt, hoàn hảo cho bữa ăn nhanh và hương vị địa phương. Trong vòng bước chân bạn sẽ tìm thấy Tim Hortons, siêu thị T&T với các sản phẩm tươi mới và đặc sản châu Á, McDonald's, Subway, Freshco cho mua sắm tiết kiệm và các cửa hàng bia địa phương. Chợ Kensington cũng gần đó, cung cấp các cửa hàng độc lập và ẩm thực toàn cầu. Dù bạn đến Toronto vì công việc, học tập hay giải trí, bạn sẽ tìm thấy mọi thứ bạn cần chỉ cách xa vài bước.",
      "🛏️ Sự trang nhã bên trong và tiện nghi thực tế\nPhòng được thiết kế cho cả sự thoải mái và chức năng. Giường queen kích thước lớn cung cấp không gian ngủ rộng rãi, trong khi vòi sen riêng tư cung cấp sự tiện lợi mà không có các cơ sở chung. Sàn gỗ tạo thêm một thẩm mỹ sạch sẽ và hiện đại, và chiếc TV 40 inch lớn hỗ trợ những buổi tối thư giãn trong nhà. Internet nhanh và ổn định cho phép làm việc từ xa, học trực tuyến, phát trực tuyến và các cuộc gọi video dễ dàng. Cùng nhau, những tính năng này tạo ra một môi trường đáng tin cậy và tự cung cấp phù hợp cho cả những chuyến thăm ngắn và những lần lưu trú dài hơn.",
      "💰 Giá linh hoạt và hợp lý\nTính hợp lý về giá cả vẫn là một trong những ưu điểm mạnh nhất của Jun Jun Hotel. Định giá linh hoạt và thời gian dịch vụ có thể điều chỉnh cho phép khách lựa chọn một mô hình lưu trú phù hợp với nhu cầu thực tế của họ thay vì cấu trúc khách sạn cứng nhắc. Điều này làm cho phòng nghỉ là lựa chọn thông minh và đáng tin cậy cho những người du lịch, sinh viên và cư dân dài hạn muốn có một căn cứ tọa lạc tốt ở Toronto mà không có chi phí cao của những nơi lưu trú truyền thống.",
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
      "歡迎仔細了解君君旅店，這是一間舒適且交通便利的私人套房旅館，專為重視便利性、經濟實惠和在多倫多市中心無憂入住的客人而設計。旅館坐落在城市最實用和文化最活躍的社區之一，將訪客置於日常必需品、主要景點和充滿活力的市區附近。這種平衡使其特別適合學生、專業人士、長期住客和希望擁有易於生活的中心住宅基地的旅客。",
      "🌆 地理位置與日常便利\n旅館提供對多倫多最活躍社區的無與倫比的便利。位於小意大利、西方醫院、唐人街和多倫多大學聖喬治校園附近，該地區在文化沉浸和實際需要之間提供完美平衡。客人會欣賞位於樓下的 TTC 地鐵和路面電車站的便利，使交通無縫銜接。該大樓的一樓設有越南餐廳，是快餐和當地風味的完美選擇。在步行距離內，您會找到 Tim Hortons、T&T 超市（有新鮮農產品和亞洲特色商品）、麥當勞、 Subway、Freshco（預算友好的購物）和當地酒類商店。肯辛頓市場也在附近，提供獨立商店和全球美食。無論您因為工作、學習還是休閒而來多倫多，您都會發現所需的一切就在幾步之遙。",
      "🛏️ 室內舒適與實用設施\n套房兼顧舒適感和實用性而設計。特大雙人床提供寬敞的睡眠空間，而獨立淋浴間提供無需共用設施的便利。木製地板增添了清爽現代的美感，40 英寸大電視支持室內放鬆的夜晚。快速穩定的網路支持遠程工作、在線學習、串流媒體和視頻通話。這些特點共同為短期訪問和較長期的住宿創造了一個可靠且自給自足的環境。",
      "💰 靈活且實惠的住宿\n經濟實惠性仍然是君君旅店最大的優勢之一。靈活的定價和可調整的服務期限允許客人選擇符合其實際需求的住宿方式，而不是死板的酒店結構。對於希望在多倫多擁有便利地理位置的住宅基地而不承擔傳統住宿高成本的旅客、學生和長期住戶，這使套房成為明智而可靠的選擇。",
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
      "欢迎仔细了解君君旅店，这是一间舒适且交通便利的私人套房旅店，专为重视便利性、经济实惠和在多伦多市中心无忧入住的客人而设计。旅店坐落在城市最实用和文化最活跃的社区之一，将访客置于日常必需品、主要景点和充满活力的市区附近。这种平衡使其特别适合学生、专业人士、长期住客和希望拥有易于生活的中心住宅基地的旅客。",
      "🌆 位置与日常便利\n旅店提供对多伦多最活跃社区的无与伦比的便利。位于小意大利、西方医院、唐人街和多伦多大学圣乔治校园附近，该地区在文化沉浸和实际需要之间提供完美平衡。客人会欣赏位于楼下的 TTC 地铁和有轨电车站的便利，使交通无缝衔接。该大楼的一楼设有越南餐厅，是快餐和当地风味的完美选择。在步行距离内，您会找到 Tim Hortons、T&T 超市（有新鲜农产品和亚洲特色商品）、麦当劳、 Subway、Freshco（预算友好的购物）和当地酒类商店。肯辛顿市场也在附近，提供独立商店和全球美食。无论您因为工作、学习还是休闲而来多伦多，您都会发现所需的一切就在几步之遥。",
      "🛏️ 室内舒适与实用设施\n套房兼顾舒适和实用性而设计。特大双人床提供宽敞的睡眠空间，而独立淋浴间提供无需共用设施的便利。木制地板增添了清爽现代的美感，40 英寸大电视支持室内放松的夜晚。快速稳定的网络支持远程工作、在线学习、流媒体和视频通话。这些特点共同为短期访问和较长期的住宿创造了一个可靠且自给自足的环境。",
      "💰 灵活实惠的住宿选择\n经济实惠性仍然是君君旅店最大的优势之一。灵活的定价和可调整的服务期限允许客人选择符合其实际需求的住宿方式，而不是死板的酒店结构。对于希望在多伦多拥有便利地理位置的住宅基地而不承担传统住宿高成本的旅客、学生和长期住户，这使套房成为明智而可靠的选择。",
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
