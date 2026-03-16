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
    src: 'assets/image/Hotel_Room_22.jpg',
    alt: 'Hotel Front Door View',
  },
  {
    src: 'assets/image/Hotel_Room_02.jpg',
    alt: 'Hotel Room Interior View',
  },
  {
    src: 'assets/image/Hotel_Room_07.jpg',
    alt: 'Hotel Room Bedroom View',
  },
  
] as const;

// ===== PRICING SECTION =====
export const PRICING = {
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
      roomType: 'Two Person Room',
      capacity: '1-2 persons',
      duration: '24 Hours',
      priceAfterTax: 'CAD $130',
      facility: 'One Queen Size Bed, Private Shower, TV and Fast Internet',
    },
    {
      roomType: 'Three Person Room',
      capacity: '1-3 persons',
      duration: '24 Hours',
      priceAfterTax: 'CAD $150',
      facility: 'One Queen Size Bed, One Single Bed, Private Shower, TV and Fast Internet',
    },
    {
      roomType: 'Four Person Bed Room',
      capacity: '1-3 persons',
      duration: '24 Hours',
      priceAfterTax: 'CAD $180',
      facility: 'Two Queen Size Beds, Private Shower, TV and Fast Internet',
    },
    {
      roomType: 'Basement Two Person Bed Room',
      capacity: '1-2 persons',
      duration: '24 Hours',
      priceAfterTax: 'CAD $100',
      facility: 'Basement Single Room with One Queen Size Bed, Private Shower, TV and Fast Internet',
    },
    {
      roomType: 'Basement Three Persons Bed Room',
      capacity: '1-2 persons',
      duration: '24 Hours',
      priceAfterTax: 'CAD $100',
      facility: 'Basement Room with One Queen Size Bed and One Single Bed, Private Shower, TV and Fast Internet',
    },
    {
      roomType: 'Temporary Room',
      capacity: '1-2 persons',
      duration: '4 Hours',
      priceAfterTax: 'CAD $80',
      facility: 'One Queen Size Bed, Private Shower, TV and Fast Internet',
    },
  ],
} as const;

// ===== GALLERY SECTION =====
export const GALLERY = {
  description: 'The following are the picked images showcasing our rooms and amenities.',
  images: [
    { src: 'assets/image/Hotel_Room_21.jpg', label: 'Front View', rank: 1 },
    { src: 'assets/image/Hotel_Room_22.jpg', label: 'Front View', rank: 2 },
    { src: 'assets/image/Hotel_Room_02.jpg', label: 'Hotel Hallway', rank: 22 },
    { src: 'assets/image/Hotel_Room_03.jpg', label: 'Standard Room Inner View', rank: 3 },
    { src: 'assets/image/Hotel_Room_04.jpg', label: 'Queen Size Bed', rank: 4 },
    { src: 'assets/image/Hotel_Room_05.jpg', label: '3 Persons Double Beds Room', rank: 5 },
    { src: 'assets/image/Hotel_Room_06.jpg', label: '4 Persons Double Queen Beds Room', rank: 6 },
    { src: 'assets/image/Hotel_Room_07.jpg', label: '4 Persons Double Queen Beds Room', rank: 7 },
    { src: 'assets/image/Hotel_Room_08.jpg', label: 'Hotel Hallway', rank: 8 },
    { src: 'assets/image/Hotel_Room_09.jpg', label: 'Standard Room Inner View', rank: 9 },
    { src: 'assets/image/Hotel_Room_10.jpg', label: '3 Persons Double Beds Room', rank: 10 },
    { src: 'assets/image/Hotel_Room_11.jpg', label: '4 Persons Double Queen Beds Room', rank: 11 },
    { src: 'assets/image/Hotel_Room_12.jpg', label: '4 Persons Double Queen Beds Room', rank: 12 },
    { src: 'assets/image/Hotel_Room_13.jpg', label: '4 Persons Double Queen Beds Room', rank: 13 },
    { src: 'assets/image/Hotel_Room_14.jpg', label: 'Hotel Hallway', rank: 14 },
    { src: 'assets/image/Hotel_Room_15.jpg', label: 'Basement Bathroom', rank: 15 },
    { src: 'assets/image/Hotel_Room_16.jpg', label: 'Bathroom Double Beds', rank: 16 },
    { src: 'assets/image/Hotel_Room_17.jpg', label: 'Basement Bathroom', rank: 17 },
    { src: 'assets/image/Hotel_Room_18.jpg', label: 'Basement Interior View', rank: 18 },
    { src: 'assets/image/Hotel_Room_19.jpg', label: 'Front View', rank: 19 },
    { src: 'assets/image/Hotel_Room_20.jpg', label: 'Front View', rank: 20 },
    { src: 'assets/image/Hotel_Room_01.jpg', label: 'Standard Room', rank: 21 },
  ],
} as const;

// ===== FAQ SECTION =====
export const FAQS = [
  {
    title: 'Can I reserve without a credit card?',
    body: 'Yes. You can come in person, pay a cash deposit, and reserve a room without providing a credit card number.',
    highlightColor: '#fff8dc',
  },
  {
    title: 'What are check-in and check-out times?',
    body: 'One-night stays are from 1:00 PM to 12:00 PM (noon) the next day. Earliest check-in is 1:00 PM and latest check-out is noon.',
    highlightColor: '#e8f5ff',
  },
  {
    title: 'Are pets and smoking allowed?',
    body: 'Pets are not allowed. Smoking must be outside in accordance with Canadian law.',
    highlightColor: '#eef8ee',
  },
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

// ===== CONTACT SECTION =====
export const CONTACT = {
  phone: '647-349-9220',
  address: '374 College St. M5T 1S6 Toronto ON CANADA',
  email: 'junjunhotel@gmail.com',
  operationHours: '24 hours',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=374%20College%20St%20Toronto%20ON%20M5T%201S6&t=&z=15&ie=UTF8&iwloc=&output=embed',
} as const;

// ===== RESOURCE LINKS =====
export const RESOURCE_LINKS = ['About Us', 'Service', 'Photo', 'FAQ'] as const;

// ===== NOTICE BARS =====
// level: 'navy' | 'red' | 'blue' | 'green'
// beginDate/expireDate: ISO date string or undefined (today/infinite)
// faqTargetIndex: 0-based index into FAQS array, or null for info-only notice
// isInfoNotice: if false, notice will link to FAQ at faqTargetIndex (if provided)
export const NOTICE_BARS = [
  {
    id: 'notice_welcome',
    message: 'Welcome! Special rates available for extended stays. Contact us for details.',
    level: 'red' as const,
    visible: false,
    beginDate: undefined,
    expireDate: undefined,
    faqTargetIndex: null,
    isInfoNotice: true,
  },
  {
    id: 'notice_faq_help',
    message: 'Need a quick answer? Click this notice to jump to FAQ #1.',
    level: 'blue' as const,
    visible: false,
    beginDate: undefined,
    expireDate: undefined,
    faqTargetIndex: null,
    isInfoNotice: false,
  },
] as const;

export const NOTICE_BAR_CONFIG = {
  defaultBeginDate: 'today',
  defaultExpireDate: '9999-12-31',
  defaultTextColor: '#f8f6ef',
  stickyBelowNav: true,
  scrollPaddingTopPx: 100,
  barGapRem: '0.25rem',
} as const;





// ===== ROOM RESERVATION VISIBILITY =====
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

// ===== NAV LANGUAGE =====
export const NAV_LANGUAGE_CONFIG = {
  visible: true,
  options: [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
    { value: 'zh', label: '简体中文' },
    { value: 'es', label: 'española' },
    { value: 'zhHant', label: '繁体中文' },
    { value: 'ja', label: '日本語' },
  ],
  defaultValue: 'en',
  iconSizeRem: '1.3rem',
} as const;

// ===== TRANSLATIONS (INTERNATIONALIZATION) =====
export const STRINGS = {
  fr: {
    siteMeta: {
      title: 'Hôtel Jun Jun',
      description: 'Logements abordables au cœur du centre-ville de Toronto',
      brand: 'Hôtel Jun Jun',
    },
    nav: {
      about: 'À Propos',
      pricing: 'Tarification',
      gallery: 'Galerie',
      faq: 'FAQ',
      contact: 'Contact',
      roomReservation: 'Réserver',
    },
    about: {
      title: 'Bienvenue à l\'Hôtel Jun Jun',
      paragraphs: [
        'Bienvenue pour mieux connaître l\'Hôtel Jun Jun, une suite privée confortable et bien située conçue pour les clients qui apprécient la commodité, l\'accessibilité tarifaire et un séjour agréable au cœur du centre-ville de Toronto. Situé dans l\'un des quartiers les plus pratiques et culturellement actifs de la ville, la suite place les visiteurs à proximité des services essentiels, des destinations principales et des quartiers urbains dynamiques. Cet équilibre la rend particulièrement adaptée aux étudiants, aux professionnels, aux clients de longue durée et aux voyageurs qui cherchent une base d\'accueil bien localisée et facile à vivre.',
        '🌆 Localisation et Commodité Quotidienne\nLa suite offre une accessibilité exceptionnelle. Le T&T Supermarket est à seulement quelques pas, ce qui facilite l\'accès aux épiceries frais, aux repas prêts à manger et aux produits asiatiques spécialisés sans longues marches ni trajets en transports en commun. C\'est un avantage majeur pour les séjours prolongés et pour les clients qui aiment cuisiner régulièrement. Le Kensington Market est également accessible à pied, offrant un mélange dynamique de cuisine mondiale, de boutiques indépendantes et de culture créative locale. Le campus St. George de l\'Université de Toronto est également à proximité, ce qui rend la suite un choix pratique pour les étudiants, les universitaires invités et les participants aux conférences. Chinatown est juste à côté, avec des restaurants ouverts tard et des marchés spécialisés qui ajoutent de l\'énergie et de la commodité à la vie quotidienne.',
        '🛏️ Confort Intérieur et Caractéristiques Pratiques\nÀ l\'intérieur, la suite est conçue pour le confort et la fonctionnalité. Un lit queen-size offre un espace de couchage généreux, tandis qu\'une douche privée offre une commodité sans partage d\'installations. Le parquet ajoute une esthétique propre et moderne, et une grande télévision de 40 pouces soutient les soirées détente à l\'intérieur. Internet rapide et stable facilite le travail à distance, les études en ligne, la diffusion en continu et les appels vidéo. Ensemble, ces caractéristiques créent un environnement fiable et autonome adapté aux courtes visites comme aux séjours plus longs.',
        '💰 Séjours Flexibles et Abordables\nL\'accessibilité tarifaire reste l\'un des plus grands avantages de l\'Hôtel Jun Jun. Les tarifs flexibles et les durées de service adaptables permettent aux clients de choisir un schéma de séjour qui correspond à leurs véritables besoins plutôt que de se conformer aux structures rigides des hôtels. Cela en fait une option intelligente et fiable pour les voyageurs, les étudiants et les résidents à long terme qui cherchent une base de Toronto bien localisée sans le coût élevé des logements traditionnels.',
      ],
    },
    pricing: {
      label: 'Tarification',
      columns: [
        { key: 'roomType', title: { xs: 'Chambre', s: 'Chambre', m: 'Type de Chambre', l: 'Type de Chambre' } },
        { key: 'capacity', title: { xs: 'Capacité', s: 'Capacité', m: 'Capacité', l: 'Capacité' } },
        { key: 'duration', title: { xs: 'Durée', s: 'Durée', m: 'Durée', l: 'Durée' } },
        { key: 'priceAfterTax', title: { xs: 'Prix', s: 'Prix', m: 'Prix (taxes incl.)', l: 'Prix (taxes incl.)' } },
        { key: 'facility', title: { xs: 'Équipements', s: 'Équipements', m: 'Équipements', l: 'Équipements' } },
      ],
      rooms: [
        { roomType: 'Chambre Standard', capacity: '1-2 personnes', duration: '24 Heures', priceAfterTax: 'CAD$120', facility: 'Literie propre et papier hygiénique gratuit' },
        { roomType: 'Chambre Spacieuse', capacity: '1-3 personnes', duration: '24 Heures', priceAfterTax: 'CAD$150', facility: 'Literie propre et papier hygiénique gratuit' },
        { roomType: 'Chambre 4 Personnes', capacity: '1-3 personnes', duration: '24 Heures', priceAfterTax: 'CAD$180', facility: 'Deux lits queen, douche privée, TV et internet rapide' },
        { roomType: 'Chambre Sous-sol', capacity: '1-2 personnes', duration: '24 Heures', priceAfterTax: 'CAD$100', facility: 'Literie propre et papier hygiénique gratuit' },
        { roomType: 'Chambre Sous-sol 3 Personnes', capacity: '1-2 personnes', duration: '24 Heures', priceAfterTax: 'CAD$100', facility: 'Chambre au sous-sol avec un lit queen et un lit simple, douche privée, TV et internet rapide' },
        { roomType: 'Chambre Temporaire', capacity: '1-2 personnes', duration: '4 Heures', priceAfterTax: 'CAD$80', facility: 'Un lit queen, douche privée, TV et internet rapide' },
      ],
    },
    gallery: {
      label: 'Galerie',
      description: 'Voici les images sélectionnées mettant en avant nos chambres et équipements.',
      images: [
        { label: 'Chambre standard' },
        { label: 'Suite deluxe' },
        { label: 'Lit queen' },
        { label: 'Salle de bain' },
        { label: 'Espace de vie' },
        { label: 'Équipements' },
        { label: 'Détails de la chambre' },
        { label: 'Espace confort' },
        { label: 'Ambiance chaleureuse' },
        { label: 'Essentiels du quotidien' },
        { label: 'Vue intérieure' },
        { label: 'Espace détente' },
        { label: 'Coin tranquille' },
        { label: 'Aménagement chaleureux' },
        { label: 'Vue lumineuse de jour' },
        { label: 'Disposition propre de la chambre' },
        { label: 'Espace de vie confortable' },
        { label: 'Aménagement intérieur pratique' },
        { label: 'Adapté aux longs séjours' },
        { label: 'Détails du confort quotidien' },
        { label: 'Coin accueillant de la suite' },
        { label: 'Vue d’ensemble de la chambre' },
      ],
    },
    faq: {
      label: 'Questions Fréquemment Posées',
      prefix: { question: 'Q', answer: 'R', index: '#' },
      items: [
        { title: 'Puis-je réserver sans carte de crédit?', body: 'Oui. Vous pouvez vous présenter en personne, payer une caution en espèces et réserver une chambre sans fournir de numéro de carte de crédit.' },
        { title: 'Quels sont les horaires d\'arrivée et de départ?', body: 'Les séjours d\'une nuit se font de 13h00 à 12h00 (midi) le jour suivant. L\'enregistrement au plus tôt est à 13h00 et le départ au plus tard à midi.' },
        { title: 'Les animaux et la cigarette sont-ils autorisés?', body: 'Les animaux ne sont pas autorisés. Est permis de fumer uniquement à l\'extérieur conformément à la loi canadienne.' },
      ],
    },
    contact: {
      label: 'Contact',
      phoneLabel: 'Téléphone :',
      addressLabel: 'Adresse :',
      emailLabel: 'Courriel :',
      hoursLabel: 'Heures :',
      mapTitle: 'Carte de l\'Hôtel Jun Jun',
      phone: '647-349-9220',
      address: '374 College St. M5T 1S6 Toronto ON CANADA',
      email: 'junjunhotel@gmail.com',
      operationHours: '24 heures',
    },
    roomReservation: {
      label: 'Réservation',
      title: 'Veuillez nous appeler au 647-349-9220 pour toute demande et réservation.',
      description: 'Veuillez consulter les points suivants pour connaître les détails et politiques concernant notre service de réservation de chambre.',
      highlights: [
        'Nous acceptons les cartes de crédit, les cartes de débit, le virement Interac et l\'argent comptant pour le paiement et le dépôt de réservation.',
        'Nous demandons à chacun de respecter les heures d\'arrivée et de départ afin d\'assurer une rotation fluide des chambres et leur disponibilité.',
        'L\'annulation est autorisée jusqu\'à 24 heures avant l\'heure d\'arrivée. Une annulation tardive ou une absence entraînera la facturation d\'une nuitée.',
      ],
      form: {
        nameLabel: 'Nom',
        namePlaceholder: 'Votre nom complet',
        phoneLabel: 'Numéro de téléphone',
        phonePlaceholder: '+1 (___) ___-____',
        emailLabel: 'Courriel',
        emailPlaceholder: 'vous@exemple.com',
        personCountLabel: 'Nombre de personnes',
        personCountPlaceholder: '1',
        checkInLabel: 'Date d\'arrivée',
        checkOutLabel: 'Date de départ',
        submitLabel: 'Envoyer la demande de réservation',
      },
    },
    noticeBars: {
      notice_welcome: 'Bienvenue ! Des tarifs spéciaux sont offerts pour les séjours prolongés. Contactez-nous pour en savoir plus.',
      notice_faq_help: 'Besoin d\'une réponse rapide ? Cliquez sur cet avis pour accéder à la FAQ no 1.',
    },
    resourceLinks: ['À Propos', 'Service', 'Photos', 'FAQ'],
    footer: {
      copyright: '© 2026 Hôtel Jun Jun',
    },
  },
  zh: {
    siteMeta: {
      title: '君君旅店',
      description: '位于多伦多市中心的经济型住宿',
      brand: '君君旅店',
    },
    nav: {
      about: '关于',
      pricing: '价格',
      gallery: '相册',
      faq: '常见问题',
      contact: '联系',
      roomReservation: '预订',
    },
    about: {
      title: '欢迎来到君君旅店',
      paragraphs: [
        '欢迎了解君君旅店，这是一间舒适且地理位置优越的私人套房，为重视便利、经济实惠和在多伦多市中心舒适住宿的客人而设计。位于该市最实用和文化活跃的社区之一，这间套房使游客靠近日常生活必需品、主要目的地和充满活力的城市地区。这种平衡使其特别适合学生、专业人士、长期住客和希望拥有一个易于生活的中心住宿基地的旅行者。',
        '🌆 位置和日常便利\n该套房提供卓越的便利性。T&T超市仅几步之遥，可轻松采购新鲜杂货、熟食和亚洲特色食品，无需长距离步行或乘坐公共交通。这对于长期住宿和喜欢经常烹饪的客人来说是一个重大优势。肯辛顿市场也在步行距离内，提供各种全球美食、独立商店和当地创意文化。多伦多大学圣乔治校区也在附近，使这间套房成为学生、访问学者和会议参与者的实用选择。唐人街就在不远处，拥有深夜餐饮和特色商场，为日常生活增加了能量和便利。',
        '🛏️ 内部舒适和实用功能\n在内部，该套房设计具有舒适性和功能性。加州大床提供宽敞的卧铺空间，私人淋浴房提供便利而无需共享设施。木地板增添了简洁现代的美感，40英寸大电视支持室内放松娱乐。快速稳定的互联网使远程工作、在线学习、流媒体和视频通话变得轻松。这些功能共同创造了一个可靠、独立的环境，适合短期访问和长期住宿。',
        '💰 灵活且经济实惠的住宿\n经济实惠仍然是君君旅店最强的优势之一。灵活的价格和可适应的服务时长允许客人选择符合他们真实需求的住宿模式，而不是固定的酒店结构。这使其成为旅行者、学生和长期居住者的聪明而可靠的选择，他们希望在位置优越的多伦多拥有一个住宿基地，而无需承担传统住宿的高成本。',
      ],
    },
    pricing: {
      label: '价格',
      columns: [
        { key: 'roomType', title: { xs: '房间', s: '房间', m: '房间类型', l: '房间类型' } },
        { key: 'capacity', title: { xs: '容量', s: '容量', m: '容量', l: '容量' } },
        { key: 'duration', title: { xs: '时长', s: '时长', m: '时长', l: '时长' } },
        { key: 'priceAfterTax', title: { xs: '价格', s: '价格', m: '价格(含税)', l: '价格(含税)' } },
        { key: 'facility', title: { xs: '设施', s: '设施', m: '设施', l: '设施' } },
      ],
      rooms: [
        { roomType: '标准间', capacity: '1-2人', duration: '24小时', priceAfterTax: 'CAD$120', facility: '清洁床铺和免费卫生纸' },
        { roomType: '豪华间', capacity: '1-3人', duration: '24小时', priceAfterTax: 'CAD$150', facility: '清洁床铺和免费卫生纸' },
        { roomType: '四人间', capacity: '1-3人', duration: '24小时', priceAfterTax: 'CAD$180', facility: '两张大床、独立淋浴、电视和高速网络' },
        { roomType: '地下室间', capacity: '1-2人', duration: '24小时', priceAfterTax: 'CAD$100', facility: '清洁床铺和免费卫生纸' },
        { roomType: '地下室三人间', capacity: '1-2人', duration: '24小时', priceAfterTax: 'CAD$100', facility: '地下室房间，配有一张大床和一张单人床、独立淋浴、电视和高速网络' },
        { roomType: '临时间', capacity: '1-2人', duration: '4小时', priceAfterTax: 'CAD$80', facility: '一张大床、独立淋浴、电视和高速网络' },
      ],
    },
    gallery: {
      label: '相册',
      description: '以下是我们精选的展示房间和设施的图片。',
      images: [
        { label: '标准房间' },
        { label: '豪华套房' },
        { label: '大床' },
        { label: '浴室' },
        { label: '起居空间' },
        { label: '便利设施' },
        { label: '房间细节' },
        { label: '舒适空间' },
        { label: '温馨氛围' },
        { label: '日常必需品' },
        { label: '室内视角' },
        { label: '休闲区域' },
        { label: '角落空间' },
        { label: '温馨布置' },
        { label: '明亮日景' },
        { label: '整洁房间布局' },
        { label: '舒适生活空间' },
        { label: '实用室内布局' },
        { label: '适合长住' },
        { label: '日常便利细节' },
        { label: '温馨套房角落' },
        { label: '整间房概览' },
      ],
    },
    faq: {
      label: '常见问题',
      prefix: { question: '问', answer: '答', index: '#' },
      items: [
        { title: '我可以不用信用卡预订吗？', body: '可以。您可以亲自到来，支付现金押金，并在不提供信用卡号的情况下预订房间。' },
        { title: '入住和退房的时间是什么时候？', body: '一晚住宿从下午1:00到次日中午12:00。最早入住时间为下午1:00，最晚退房时间为中午12:00。' },
        { title: '允许宠物和吸烟吗？', body: '不允许宠物。吸烟必须在室外进行，符合加拿大法律规定。' },
      ],
    },
    contact: {
      label: '联系',
      phoneLabel: '电话：',
      addressLabel: '地址：',
      emailLabel: '邮箱：',
      hoursLabel: '营业时间：',
      mapTitle: '君君旅店地图',
      phone: '647-349-9220',
      address: '374 College St. M5T 1S6 Toronto ON CANADA',
      email: 'junjunhotel@gmail.com',
      operationHours: '24小时',
    },
    roomReservation: {
      label: '预订',
      title: '如需咨询和预订，请致电 647-349-9220。',
      description: '请查看以下重点内容，了解我们的房间预订服务详情和政策。',
      highlights: [
        '我们接受信用卡、借记卡、电子转账和现金作为预订付款及押金方式。',
        '请大家遵守入住和退房时间政策，以确保房间周转顺畅和房态可用。',
        '可在入住时间前 24 小时取消。逾期取消或未入住将收取一晚房费。',
      ],
      form: {
        nameLabel: '姓名',
        namePlaceholder: '请输入您的全名',
        phoneLabel: '电话号码',
        phonePlaceholder: '+1 (___) ___-____',
        emailLabel: '邮箱',
        emailPlaceholder: 'you@example.com',
        personCountLabel: '入住人数',
        personCountPlaceholder: '1',
        checkInLabel: '入住日期',
        checkOutLabel: '退房日期',
        submitLabel: '提交预订请求',
      },
    },
    noticeBars: {
      notice_welcome: '欢迎入住！长住可享特别优惠，详情请联系我们。',
      notice_faq_help: '需要快速答案吗？点击此通知可跳转到常见问题第 1 项。',
    },
    resourceLinks: ['关于我们', '服务', '照片', '常见问题'],
    footer: {
      copyright: '© 2026 君君旅店',
    },
  },
  es: {
    siteMeta: {
      title: 'Jun Jun Hotel',
      description: 'Alojamiento asequible en el centro de Toronto',
      brand: 'Jun Jun Hotel',
    },
    nav: {
      about: 'Acerca de',
      pricing: 'Precios',
      gallery: 'Galería',
      faq: 'FAQ',
      contact: 'Contacto',
      roomReservation: 'Reserva',
    },
    about: {
      title: 'Bienvenido a Jun Jun Hotel',
      paragraphs: [
        'Le damos la bienvenida a Jun Jun Hotel, una suite privada cómoda y bien ubicada para huéspedes que valoran la conveniencia, el precio accesible y una estancia tranquila en el centro de Toronto. Situada en una zona práctica y culturalmente activa, la suite está cerca de servicios diarios, destinos importantes y barrios urbanos dinámicos. Este equilibrio la hace ideal para estudiantes, profesionales, estancias largas y viajeros que buscan una base céntrica y cómoda.',
        '🌆 Ubicación y comodidad diaria\nLa suite ofrece excelente accesibilidad. El supermercado T&T está a pocos pasos, lo que facilita comprar alimentos frescos, comidas preparadas y productos asiáticos sin caminatas largas ni transporte adicional. Esto es una gran ventaja para estancias prolongadas y para quienes cocinan con frecuencia. Kensington Market también está cerca a pie, con cocina internacional, tiendas independientes y cultura local creativa. El campus St. George de la Universidad de Toronto está próximo, por lo que la suite es una opción práctica para estudiantes, académicos visitantes y asistentes a conferencias. Chinatown también queda muy cerca, con restaurantes nocturnos y mercados especializados.',
        '🛏️ Comodidad interior y funciones prácticas\nEn el interior, la suite está diseñada para comodidad y funcionalidad. La cama tamaño queen ofrece buen espacio para descansar y el baño privado con ducha brinda mayor privacidad. El piso de madera aporta un estilo limpio y moderno, y el televisor de 40 pulgadas permite relajarse por la noche. El internet rápido y estable facilita trabajo remoto, estudio en línea, streaming y videollamadas.',
        '💰 Estancias flexibles y asequibles\nLa asequibilidad es una de las mayores ventajas de Jun Jun Hotel. Con tarifas flexibles y duraciones adaptables, los huéspedes pueden elegir el plan que mejor se ajusta a sus necesidades reales en lugar de estructuras rígidas de hotel. Es una opción inteligente y confiable para viajeros, estudiantes y residentes de larga estancia en Toronto.',
      ],
    },
    pricing: {
      label: 'Precios',
      columns: [
        { key: 'roomType', title: { xs: 'Hab.', s: 'Hab.', m: 'Tipo de Habitación', l: 'Tipo de Habitación' } },
        { key: 'capacity', title: { xs: 'Cap.', s: 'Cap.', m: 'Capacidad', l: 'Capacidad' } },
        { key: 'duration', title: { xs: 'Dur.', s: 'Dur.', m: 'Duración', l: 'Duración' } },
        { key: 'priceAfterTax', title: { xs: 'Precio', s: 'Precio', m: 'Precio (impuestos incl.)', l: 'Precio (impuestos incl.)' } },
        { key: 'facility', title: { xs: 'Serv.', s: 'Serv.', m: 'Servicios', l: 'Servicios' } },
      ],
      rooms: [
        { roomType: 'Habitación 2 Personas', capacity: '1-2 personas', duration: '24 Horas', priceAfterTax: 'CAD $130', facility: 'Una cama queen, ducha privada, TV e Internet rápido' },
        { roomType: 'Habitación 3 Personas', capacity: '1-3 personas', duration: '24 Horas', priceAfterTax: 'CAD $150', facility: 'Una cama queen, una cama individual, ducha privada, TV e Internet rápido' },
        { roomType: 'Habitación 4 Personas', capacity: '1-3 personas', duration: '24 Horas', priceAfterTax: 'CAD $180', facility: 'Dos camas queen, ducha privada, TV e Internet rápido' },
        { roomType: 'Habitación Sótano 2 Personas', capacity: '1-2 personas', duration: '24 Horas', priceAfterTax: 'CAD $100', facility: 'Habitación sótano con cama queen, ducha privada, TV e Internet rápido' },
        { roomType: 'Habitación Sótano 3 Personas', capacity: '1-2 personas', duration: '24 Horas', priceAfterTax: 'CAD $100', facility: 'Habitación sótano con cama queen y cama individual, ducha privada, TV e Internet rápido' },
        { roomType: 'Habitación Temporal', capacity: '1-2 personas', duration: '4 Horas', priceAfterTax: 'CAD $80', facility: 'Una cama queen, ducha privada, TV e Internet rápido' },
      ],
    },
    gallery: {
      label: 'Galería',
      description: 'Imágenes seleccionadas de nuestras habitaciones y servicios.',
      images: [
        { label: 'Vista Frontal' },
        { label: 'Vista Frontal' },
        { label: 'Pasillo del Hotel' },
        { label: 'Vista Interior Habitación Estándar' },
        { label: 'Cama Queen' },
        { label: 'Habitación 3 Personas Camas Dobles' },
        { label: 'Habitación 4 Personas Doble Queen' },
        { label: 'Habitación 4 Personas Doble Queen' },
        { label: 'Pasillo del Hotel' },
        { label: 'Vista Interior Habitación Estándar' },
        { label: 'Habitación 3 Personas Camas Dobles' },
        { label: 'Habitación 4 Personas Doble Queen' },
        { label: 'Habitación 4 Personas Doble Queen' },
        { label: 'Habitación 4 Personas Doble Queen' },
        { label: 'Pasillo del Hotel' },
        { label: 'Baño Sótano' },
        { label: 'Baño Camas Dobles' },
        { label: 'Baño Sótano' },
        { label: 'Interior Sótano' },
        { label: 'Vista Frontal' },
        { label: 'Vista Frontal' },
        { label: 'Habitación Estándar' },
      ],
    },
    faq: {
      label: 'Preguntas Frecuentes',
      prefix: { question: 'P', answer: 'R', index: '#' },
      items: [
        { title: '¿Puedo reservar sin tarjeta de crédito?', body: 'Sí. Puede venir en persona, pagar un depósito en efectivo y reservar sin proporcionar número de tarjeta de crédito.' },
        { title: '¿Cuáles son los horarios de entrada y salida?', body: 'Las estancias de una noche son de 1:00 PM a 12:00 PM (mediodía) del día siguiente. La entrada más temprana es a la 1:00 PM y la salida más tardía es al mediodía.' },
        { title: '¿Se permiten mascotas y fumar?', body: 'No se permiten mascotas. Fumar debe hacerse en el exterior conforme a la ley canadiense.' },
      ],
    },
    contact: {
      label: 'Contacto',
      phoneLabel: 'Teléfono:',
      addressLabel: 'Dirección:',
      emailLabel: 'Correo:',
      hoursLabel: 'Horario:',
      mapTitle: 'Mapa de Jun Jun Hotel',
      phone: '647-349-9220',
      address: '374 College St. M5T 1S6 Toronto ON CANADA',
      email: 'junjunhotel@gmail.com',
      operationHours: '24 horas',
    },
    roomReservation: {
      label: 'Reserva',
      title: 'Llámenos al 647-349-9220 para consultas y reservas.',
      description: 'Por favor, consulte los siguientes puntos para detalles y políticas sobre nuestro servicio de reservas.',
      highlights: [
        'Aceptamos tarjeta de crédito, débito, transferencia por correo electrónico y efectivo para pago y depósito.',
        'Pedimos a todos respetar los horarios de entrada y salida para garantizar una rotación fluida de habitaciones.',
        'La cancelación está permitida hasta 24 horas antes del check-in. Las cancelaciones tardías o no presentación resultarán en el cobro de una noche.',
      ],
      form: {
        nameLabel: 'Nombre',
        namePlaceholder: 'Su nombre completo',
        phoneLabel: 'Número de teléfono',
        phonePlaceholder: '+1 (___) ___-____',
        emailLabel: 'Correo',
        emailPlaceholder: 'usted@ejemplo.com',
        personCountLabel: 'Número de personas',
        personCountPlaceholder: '1',
        checkInLabel: 'Fecha de entrada',
        checkOutLabel: 'Fecha de salida',
        submitLabel: 'Enviar Solicitud de Reserva',
      },
    },
    noticeBars: {
      notice_welcome: '¡Bienvenido! Hay tarifas especiales para estancias largas. Contáctenos para más detalles.',
      notice_faq_help: '¿Necesita una respuesta rápida? Haga clic en este aviso para ir al FAQ #1.',
    },
    resourceLinks: ['Acerca de', 'Servicio', 'Fotos', 'FAQ'],
    footer: {
      copyright: '© 2026 Jun Jun Hotel',
    },
  },
  zhHant: {
    siteMeta: {
      title: '君君旅店',
      description: '位於多倫多市中心的經濟型住宿',
      brand: '君君旅店',
    },
    nav: {
      about: '關於',
      pricing: '價格',
      gallery: '相簿',
      faq: '常見問題',
      contact: '聯絡',
      roomReservation: '預訂',
    },
    about: {
      title: '歡迎來到君君旅店',
      paragraphs: [
        '歡迎認識君君旅店。我們提供舒適且地點便利的私人套房，適合重視交通便利、價格合理與住宿品質的旅客。位於多倫多市中心實用且富有文化活力的區域，鄰近日常生活所需與主要目的地，特別適合學生、專業人士、長住旅客與需要市中心據點的訪客。',
        '🌆 地點與日常便利\n套房交通便利。T&T 超市近在咫尺，購買新鮮食材、即食餐點與亞洲特色商品非常方便，對長住與常下廚旅客很實用。Kensington Market 步行可達，擁有多元美食、獨立商店與在地創意文化。多倫多大學 St. George 校區也在附近，對學生、訪問學者與會議參加者都很方便。唐人街同樣鄰近，夜間餐飲與特色市場齊全。',
        '🛏️ 室內舒適與實用功能\n室內設計兼顧舒適與功能。Queen-size 床提供寬敞睡眠空間，私人淋浴間更具私密性。木質地板呈現整潔現代風格，40 吋電視適合晚間放鬆。高速穩定網路可支援遠端工作、線上學習、影音串流與視訊通話。',
        '💰 彈性且實惠的住宿\n價格彈性是君君旅店的重要優勢。可依需求選擇不同住宿時長與方案，不必受制於傳統旅館固定規則。對旅客、學生與長住人士而言，是在多倫多市中心兼具位置與成本效益的可靠選擇。',
      ],
    },
    pricing: {
      label: '價格',
      columns: [
        { key: 'roomType', title: { xs: '房型', s: '房型', m: '房間類型', l: '房間類型' } },
        { key: 'capacity', title: { xs: '人數', s: '人數', m: '容納人數', l: '容納人數' } },
        { key: 'duration', title: { xs: '時長', s: '時長', m: '住宿時長', l: '住宿時長' } },
        { key: 'priceAfterTax', title: { xs: '價格', s: '價格', m: '價格（含稅）', l: '價格（含稅）' } },
        { key: 'facility', title: { xs: '設施', s: '設施', m: '房內設施', l: '房內設施' } },
      ],
      rooms: [
        { roomType: '雙人房', capacity: '1-2 人', duration: '24 小時', priceAfterTax: 'CAD $130', facility: '一張 Queen-size 床、私人淋浴間、電視及高速網路' },
        { roomType: '三人房', capacity: '1-3 人', duration: '24 小時', priceAfterTax: 'CAD $150', facility: '一張 Queen-size 床、一張單人床、私人淋浴間、電視及高速網路' },
        { roomType: '四人房', capacity: '1-3 人', duration: '24 小時', priceAfterTax: 'CAD $180', facility: '兩張 Queen-size 床、私人淋浴間、電視及高速網路' },
        { roomType: '地下室雙人房', capacity: '1-2 人', duration: '24 小時', priceAfterTax: 'CAD $100', facility: '地下室單人房配 Queen-size 床、私人淋浴間、電視及高速網路' },
        { roomType: '地下室三人房', capacity: '1-2 人', duration: '24 小時', priceAfterTax: 'CAD $100', facility: '地下室配 Queen-size 床及單人床、私人淋浴間、電視及高速網路' },
        { roomType: '臨時房', capacity: '1-2 人', duration: '4 小時', priceAfterTax: 'CAD $80', facility: '一張 Queen-size 床、私人淋浴間、電視及高速網路' },
      ],
    },
    gallery: {
      label: '相簿',
      description: '以下為精選房間與設施圖片。',
      images: [
        { label: '正面外觀' },
        { label: '正面外觀' },
        { label: '酒店走廊' },
        { label: '標準房室內' },
        { label: '加大雙人床' },
        { label: '三人雙床房' },
        { label: '四人雙大床房' },
        { label: '四人雙大床房' },
        { label: '酒店走廊' },
        { label: '標準房室內' },
        { label: '三人雙床房' },
        { label: '四人雙大床房' },
        { label: '四人雙大床房' },
        { label: '四人雙大床房' },
        { label: '酒店走廊' },
        { label: '地下室浴室' },
        { label: '雙床浴室' },
        { label: '地下室浴室' },
        { label: '地下室室內' },
        { label: '正面外觀' },
        { label: '正面外觀' },
        { label: '標準間' },
      ],
    },
    faq: {
      label: '常見問題',
      prefix: { question: '問', answer: '答', index: '#' },
      items: [
        { title: '可以不使用信用卡預訂嗎？', body: '可以。您可親自到店支付現金押金，無需提供信用卡號即可預訂。' },
        { title: '入住與退房時間是？', body: '一晚住宿時間為下午 1:00 至次日中午 12:00。最早入住為下午 1:00，最晚退房為中午 12:00。' },
        { title: '可攜帶寵物或吸菸嗎？', body: '不允許攜帶寵物。吸菸須在室外並遵守加拿大法律。' },
      ],
    },
    contact: {
      label: '聯絡',
      phoneLabel: '電話：',
      addressLabel: '地址：',
      emailLabel: '電子郵件：',
      hoursLabel: '營業時間：',
      mapTitle: '君君旅店地圖',
      phone: '647-349-9220',
      address: '374 College St. M5T 1S6 Toronto ON CANADA',
      email: 'junjunhotel@gmail.com',
      operationHours: '24 小時',
    },
    roomReservation: {
      label: '預訂',
      title: '請致電 647-349-9220 進行諮詢與預訂。',
      description: '請查看以下要點，了解我們客房預訂服務的詳情與政策。',
      highlights: [
        '我們接受信用卡、借記卡、電子郵件轉帳及現金作為預訂付款及押金方式。',
        '請所有人遵守入住和退房時間政策，以確保房間順利交接。',
        '可在入住時間前 24 小時內取消預訂。逾期取消或未到店將收取一晚住宿費用。',
      ],
      form: {
        nameLabel: '姓名',
        namePlaceholder: '您的全名',
        phoneLabel: '電話號碼',
        phonePlaceholder: '+1 (___) ___-____',
        emailLabel: '電子郵件',
        emailPlaceholder: 'you@example.com',
        personCountLabel: '入住人數',
        personCountPlaceholder: '1',
        checkInLabel: '入住日期',
        checkOutLabel: '退房日期',
        submitLabel: '提交預訂申請',
      },
    },
    noticeBars: {
      notice_welcome: '歡迎入住！長住可享特別優惠，詳情請聯絡我們。',
      notice_faq_help: '需要快速答案嗎？點擊此通知可跳轉到常見問題第 1 項。',
    },
    resourceLinks: ['關於我們', '服務', '照片', '常見問題'],
    footer: {
      copyright: '© 2026 君君旅店',
    },
  },
  ja: {
    siteMeta: {
      title: 'Jun Jun Hotel',
      description: 'トロント中心部の手頃な宿泊施設',
      brand: 'Jun Jun Hotel',
    },
    nav: {
      about: '概要',
      pricing: '料金',
      gallery: 'ギャラリー',
      faq: 'FAQ',
      contact: '連絡先',
      roomReservation: '予約',
    },
    about: {
      title: 'Jun Jun Hotelへようこそ',
      paragraphs: [
        'Jun Jun Hotelは、利便性・手頃な価格・快適な滞在を重視する方のための、中心部にあるプライベートスイートです。トロント中心部の実用的で文化的に活気あるエリアに位置し、日常の買い物、主要スポット、都市の魅力へアクセスしやすい立地です。学生、ビジネス利用、長期滞在、観光の拠点として最適です。',
        '🌆 立地と日常の便利さ\nT&Tスーパーがすぐ近くにあり、生鮮食品や惣菜、アジア食材を手軽に購入できます。長期滞在や自炊派にとって大きなメリットです。Kensington Marketも徒歩圏内で、多国籍グルメや個性的なショップ、ローカル文化を楽しめます。トロント大学St. Georgeキャンパスも近く、学生や研究者、会議参加者にも便利です。チャイナタウンも近く、夜遅くまで営業する飲食店や専門店があります。',
        '🛏️ 室内の快適性と実用性\n室内は快適性と機能性を重視して設計されています。クイーンサイズベッドでゆったり休め、専用シャワーでプライバシーも確保。木目調フローリングは清潔感があり、40インチTVで夜のリラックスタイムも充実。高速で安定したインターネットにより、リモートワーク・オンライン学習・動画視聴・ビデオ通話にも対応します。',
        '💰 柔軟で手頃な滞在\nJun Jun Hotelの大きな魅力は価格の柔軟性です。滞在時間や利用プランをニーズに合わせて選べるため、一般的なホテルの固定的な料金体系に縛られません。旅行者・学生・長期滞在者にとって、中心部でコストを抑えられる実用的な選択肢です。',
      ],
    },
    pricing: {
      label: '料金',
      columns: [
        { key: 'roomType', title: { xs: '部屋', s: '部屋', m: '部屋タイプ', l: '部屋タイプ' } },
        { key: 'capacity', title: { xs: '人数', s: '人数', m: '定員', l: '定員' } },
        { key: 'duration', title: { xs: '時間', s: '時間', m: '利用時間', l: '利用時間' } },
        { key: 'priceAfterTax', title: { xs: '料金', s: '料金', m: '料金（税込）', l: '料金（税込）' } },
        { key: 'facility', title: { xs: '設備', s: '設備', m: '設備', l: '設備' } },
      ],
      rooms: [
        { roomType: '2名用ルーム', capacity: '1-2名', duration: '24時間', priceAfterTax: 'CAD $130', facility: 'クイーンサイズベッド1台、専用シャワー、TV、高速インターネット' },
        { roomType: '3名用ルーム', capacity: '1-3名', duration: '24時間', priceAfterTax: 'CAD $150', facility: 'クイーンサイズベッド1台、シングルベッド1台、専用シャワー、TV、高速インターネット' },
        { roomType: '4名用ルーム', capacity: '1-3名', duration: '24時間', priceAfterTax: 'CAD $180', facility: 'クイーンサイズベッド2台、専用シャワー、TV、高速インターネット' },
        { roomType: '地下室2名用', capacity: '1-2名', duration: '24時間', priceAfterTax: 'CAD $100', facility: '地下室シングルルーム、クイーンサイズベッド1台、専用シャワー、TV、高速インターネット' },
        { roomType: '地下室3名用', capacity: '1-2名', duration: '24時間', priceAfterTax: 'CAD $100', facility: '地下室、クイーンサイズベッド1台＋シングルベッド1台、専用シャワー、TV、高速インターネット' },
        { roomType: '一時利用ルーム', capacity: '1-2名', duration: '4時間', priceAfterTax: 'CAD $80', facility: 'クイーンサイズベッド1台、専用シャワー、TV、高速インターネット' },
      ],
    },
    gallery: {
      label: 'ギャラリー',
      description: '客室と設備の写真です。',
      images: [
        { label: '外観フロント' },
        { label: '外観フロント' },
        { label: 'ホテル廊下' },
        { label: 'スタンダードルーム室内' },
        { label: 'クイーンサイズベッド' },
        { label: '3名用ダブルベッドルーム' },
        { label: '4名用ダブルクイーンルーム' },
        { label: '4名用ダブルクイーンルーム' },
        { label: 'ホテル廊下' },
        { label: 'スタンダードルーム室内' },
        { label: '3名用ダブルベッドルーム' },
        { label: '4名用ダブルクイーンルーム' },
        { label: '4名用ダブルクイーンルーム' },
        { label: '4名用ダブルクイーンルーム' },
        { label: 'ホテル廊下' },
        { label: '地下室バスルーム' },
        { label: 'ダブルベッドバスルーム' },
        { label: '地下室バスルーム' },
        { label: '地下室室内' },
        { label: '外観フロント' },
        { label: '外観フロント' },
        { label: 'スタンダードルーム' },
      ],
    },
    faq: {
      label: 'よくある質問',
      prefix: { question: 'Q', answer: 'A', index: '#' },
      items: [
        { title: 'クレジットカードなしで予約できますか？', body: 'はい。ご来店のうえ現金デポジットをお支払いいただければ、カード番号なしで予約可能です。' },
        { title: 'チェックイン・チェックアウト時間は？', body: '1泊利用は午後1:00チェックイン、翌日正午12:00チェックアウトです。最早チェックインは午後1:00、最遅チェックアウトは正午です。' },
        { title: 'ペット同伴や喫煙は可能ですか？', body: 'ペット同伴は不可です。喫煙はカナダ法に従い屋外でお願いします。' },
      ],
    },
    contact: {
      label: '連絡先',
      phoneLabel: '電話:',
      addressLabel: '住所:',
      emailLabel: 'メール:',
      hoursLabel: '営業時間:',
      mapTitle: 'Jun Jun Hotel マップ',
      phone: '647-349-9220',
      address: '374 College St. M5T 1S6 Toronto ON CANADA',
      email: 'junjunhotel@gmail.com',
      operationHours: '24時間営業',
    },
    roomReservation: {
      label: '予約',
      title: 'お問い合わせ・ご予約は 647-349-9220 までお電話ください。',
      description: '客室予約サービスの詳細とポリシーについては、以下のハイライトをご確認ください。',
      highlights: [
        'クレジットカード・デビットカード・メール送金・現金でのお支払いおよびデポジットを受け付けています。',
        'スムーズな客室の受け渡しのため、チェックイン・チェックアウト時間のポリシーをお守りください。',
        'キャンセルはチェックイン時刻の24時間前まで可能です。期限後のキャンセルまたは不泊の場合は1泊分の料金が発生します。',
      ],
      form: {
        nameLabel: 'お名前',
        namePlaceholder: 'フルネームをご入力ください',
        phoneLabel: '電話番号',
        phonePlaceholder: '+1 (___) ___-____',
        emailLabel: 'メール',
        emailPlaceholder: 'you@example.com',
        personCountLabel: '宿泊人数',
        personCountPlaceholder: '1',
        checkInLabel: 'チェックイン日',
        checkOutLabel: 'チェックアウト日',
        submitLabel: '予約リクエストを送信',
      },
    },
    noticeBars: {
      notice_welcome: 'ようこそ！長期滞在向けの特別料金があります。詳細はお問い合わせください。',
      notice_faq_help: 'すぐに回答が必要ですか？このお知らせをクリックしてFAQ #1へ移動します。',
    },
    resourceLinks: ['会社情報', 'サービス', '写真', 'FAQ'],
    footer: {
      copyright: '© 2026 Jun Jun Hotel',
    },
  },
} as const;

// ===== PRICING DISPLAY =====
export const PRICING_DISPLAY_CONFIG = {
  enableRowContrast: true,
  oddRowBackground: '#fff9f5',
  evenRowBackground: '#f7f1ea',
} as const;

// ===== GALLERY DISPLAY =====
export const GALLERY_DISPLAY_CONFIG = {
  itemAspectRatio: '1 / 0.618',
} as const;

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
