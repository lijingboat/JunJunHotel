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
    { src: 'assets/image/Hotel_Room_01.jpg', alt: 'Hotel room view 1', label: 'Standard Room' },
    { src: 'assets/image/Hotel_Room_02.jpg', alt: 'Hotel room view 2', label: 'Deluxe Suite' },
    { src: 'assets/image/Hotel_Room_03.jpg', alt: 'Hotel room view 3', label: 'Queen Bed' },
    { src: 'assets/image/Hotel_Room_04.jpg', alt: 'Hotel room view 4', label: 'Bathroom' },
    { src: 'assets/image/Hotel_Room_05.jpg', alt: 'Hotel room view 5', label: 'Living Area' },
    { src: 'assets/image/Hotel_Room_06.jpg', alt: 'Hotel room view 6', label: 'Amenities' },
    { src: 'assets/image/Hotel_Room_07.jpg', alt: 'Hotel room view 7', label: 'Room Details' },
    { src: 'assets/image/Hotel_Room_08.jpg', alt: 'Hotel room view 8', label: 'Comfort Space' },
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
    visible: true,
    beginDate: undefined,
    expireDate: undefined,
    faqTargetIndex: null,
    isInfoNotice: true,
  },
  {
    id: 'notice_faq_help',
    message: 'Need answers fast? Click this bar to jump to FAQ item #1.',
    level: 'blue' as const,
    visible: true,
    beginDate: undefined,
    expireDate: undefined,
    faqTargetIndex: 0,
    isInfoNotice: false,
  },
] as const;

export const NOTICE_BAR_CONFIG = {
  defaultBeginDate: 'today',
  defaultExpireDate: '9999-12-31',
  defaultTextColor: '#f8f6ef',
  stickyBelowNav: true,
  scrollPaddingTopPx: 100,
} as const;





// ===== ROOM RESERVATION VISIBILITY =====
export const ROOM_RESERVATION_CONFIG = {
  showContent: true,
  showHighlights: true,
  showForm: true,
} as const;

// ===== NAV LANGUAGE =====
export const NAV_LANGUAGE_CONFIG = {
  visible: true,
  options: [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
    { value: 'zh', label: '中文' },
  ],
  defaultValue: 'en',
} as const;

// ===== TRANSLATIONS (INTERNATIONALIZATION) =====
export const STRINGS = {
  en: {
    siteMeta: {
      title: 'Jun Jun Hotel',
      description: 'Affordable accommodations in downtown Toronto',
      brand: 'Jun Jun Hotel',
    },
    nav: {
      about: 'About',
      pricing: 'Pricing',
      gallery: 'Gallery',
      faq: 'FAQ',
      contact: 'Contact',
      roomReservation: 'Room Reservation',
    },
    about: {
      title: 'Welcome to Jun Jun Hotel',
      paragraphs: [
        'Welcome to a closer look at Jun Jun Hotel, a comfortable and well-located private suite designed for guests who value convenience, affordability, and a smooth stay in the heart of downtown Toronto. Set in one of the city\'s most practical and culturally active neighbourhoods, the suite places visitors near daily essentials, major destinations, and vibrant urban districts. This balance makes it especially suitable for students, professionals, long-term guests, and travellers who want a central home base that feels easy to live in.',
        '🌆 Location and Everyday Convenience\nThe suite offers exceptional accessibility. T&T Supermarket is only steps away, making it easy to pick up fresh groceries, ready-made meals, and Asian specialty items without long walks or transit rides. This is a major advantage for extended stays and for guests who like to cook regularly. Kensington Market is also within walking distance, offering a lively mix of global cuisine, independent shops, and creative local culture. The University of Toronto\'s St. George campus is nearby as well, making the suite a practical choice for students, visiting academics, and conference attendees. Chinatown is just beyond, with late-night eateries and specialty markets that add energy and convenience to daily life.',
        '🛏️ Interior Comfort and Practical Features\nInside, the suite is designed for both comfort and function. A queen-size bed provides generous sleeping space, while a private shower offers convenience without shared facilities. Wooden flooring adds a clean, modern aesthetic, and a large 40-inch TV supports relaxing evenings indoors. Fast, stable internet enables remote work, online study, streaming, and video calls with ease. Together, these features create a dependable, self-contained environment suitable for both short visits and longer stays.',
        '💰 Flexible and Affordable Stays\nAffordability remains one of Jun Jun Hotel\'s strongest advantages. Flexible pricing and adaptable service durations allow guests to select a stay pattern that fits their real needs instead of rigid hotel structures. This makes the suite a smart and dependable option for travellers, students, and long-term residents who want a well-located Toronto base without the high cost of traditional accommodations.',
      ],
    },
    pricing: {
      label: 'Pricing',
      columns: [
        { key: 'roomType', title: { xs: 'Room', s: 'Room', m: 'Room Type', l: 'Room Type' } },
        { key: 'capacity', title: { xs: 'Capacity', s: 'Capacity', m: 'Capacity', l: 'Capacity' } },
        { key: 'duration', title: { xs: 'Duration', s: 'Duration', m: 'Duration', l: 'Duration' } },
        { key: 'priceAfterTax', title: { xs: 'Price', s: 'Price', m: 'Price (after tax)', l: 'Price (after tax)' } },
        { key: 'facility', title: { xs: 'Facility', s: 'Facility', m: 'Facility', l: 'Facility' } },
      ],
      rooms: [
        { roomType: 'Standard Room', capacity: '1-2 persons', duration: '24 Hours', priceAfterTax: 'CAD$120', facility: 'Clean Bedding and Free Toilet Paper' },
        { roomType: 'Extend Room', capacity: '1-3 persons', duration: '24 Hours', priceAfterTax: 'CAD$150', facility: 'Clean Bedding and Free Toilet Paper' },
        { roomType: 'Basement Room', capacity: '1-2 persons', duration: '24 Hours', priceAfterTax: 'CAD$100', facility: 'Clean Bedding and Free Toilet Paper' },
        { roomType: 'Temporary Room', capacity: '1-2 persons', duration: '4 Hours', priceAfterTax: 'CAD$80', facility: 'Clean Bedding and Free Toilet Paper' },
      ],
    },
    gallery: {
      label: 'Gallery',
      description: 'The following are the picked images showcasing our rooms and amenities.',
      images: [
        { label: 'Standard Room' },
        { label: 'Deluxe Suite' },
        { label: 'Queen Bed' },
        { label: 'Bathroom' },
        { label: 'Living Area' },
        { label: 'Amenities' },
        { label: 'Room Details' },
        { label: 'Comfort Space' },
      ],
    },
    faq: {
      label: 'Frequently Asked Questions',
      prefix: { question: 'Q', answer: 'A', index: '#' },
      items: [
        { title: 'Can I reserve without a credit card?', body: 'Yes. You can come in person, pay a cash deposit, and reserve a room without providing a credit card number.' },
        { title: 'What are check-in and check-out times?', body: 'One-night stays are from 1:00 PM to 12:00 PM (noon) the next day. Earliest check-in is 1:00 PM and latest check-out is noon.' },
        { title: 'Are pets and smoking allowed?', body: 'Pets are not allowed. Smoking must be outside in accordance with Canadian law.' },
      ],
    },
    contact: {
      label: 'Contact',
      phone: '647-349-9220',
      address: '374 College St. M5T 1S6 Toronto ON CANADA',
      email: 'junjunhotel@gmail.com',
      operationHours: '24 hours',
    },
    roomReservation: {
      label: 'Room Reservation',
    },
    resourceLinks: ['About Us', 'Service', 'Photo', 'FAQ'],
    footer: {
      copyright: '© 2026 Jun Jun Hotel',
    },
  },
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
        { roomType: 'Chambre Sous-sol', capacity: '1-2 personnes', duration: '24 Heures', priceAfterTax: 'CAD$100', facility: 'Literie propre et papier hygiénique gratuit' },
        { roomType: 'Chambre Temporaire', capacity: '1-2 personnes', duration: '4 Heures', priceAfterTax: 'CAD$80', facility: 'Literie propre et papier hygiénique gratuit' },
      ],
    },
    gallery: {
      label: 'Galerie',
      description: 'Voici les images sélectionnées mettant en avant nos chambres et équipements.',
      images: [
        { label: 'Chambre Standard' },
        { label: 'Suite Deluxe' },
        { label: 'Lit Queen-Size' },
        { label: 'Salle de Bain' },
        { label: 'Salle de Séjour' },
        { label: 'Équipements' },
        { label: 'Détails de Chambre' },
        { label: 'Espace Confort' },
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
      phone: '647-349-9220',
      address: '374 College St. M5T 1S6 Toronto ON CANADA',
      email: 'junjunhotel@gmail.com',
      operationHours: '24 heures',
    },
    roomReservation: {
      label: 'Réservation',
    },
    resourceLinks: ['À Propos', 'Service', 'Photos', 'FAQ'],
    footer: {
      copyright: '© 2026 Hôtel Jun Jun',
    },
  },
  zh: {
    siteMeta: {
      title: '君君酒店',
      description: '位于多伦多市中心的经济型住宿',
      brand: '君君酒店',
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
      title: '欢迎来到君君酒店',
      paragraphs: [
        '欢迎了解君君酒店，这是一间舒适且地理位置优越的私人套房，为重视便利、经济实惠和在多伦多市中心舒适住宿的客人而设计。位于该市最实用和文化活跃的社区之一，这间套房使游客靠近日常生活必需品、主要目的地和充满活力的城市地区。这种平衡使其特别适合学生、专业人士、长期住客和希望拥有一个易于生活的中心住宿基地的旅行者。',
        '🌆 位置和日常便利\n该套房提供卓越的便利性。T&T超市仅几步之遥，可轻松采购新鲜杂货、熟食和亚洲特色食品，无需长距离步行或乘坐公共交通。这对于长期住宿和喜欢经常烹饪的客人来说是一个重大优势。肯辛顿市场也在步行距离内，提供各种全球美食、独立商店和当地创意文化。多伦多大学圣乔治校区也在附近，使这间套房成为学生、访问学者和会议参与者的实用选择。唐人街就在不远处，拥有深夜餐饮和特色商场，为日常生活增加了能量和便利。',
        '🛏️ 内部舒适和实用功能\n在内部，该套房设计具有舒适性和功能性。加州大床提供宽敞的卧铺空间，私人淋浴房提供便利而无需共享设施。木地板增添了简洁现代的美感，40英寸大电视支持室内放松娱乐。快速稳定的互联网使远程工作、在线学习、流媒体和视频通话变得轻松。这些功能共同创造了一个可靠、独立的环境，适合短期访问和长期住宿。',
        '💰 灵活且经济实惠的住宿\n经济实惠仍然是君君酒店最强的优势之一。灵活的价格和可适应的服务时长允许客人选择符合他们真实需求的住宿模式，而不是固定的酒店结构。这使其成为旅行者、学生和长期居住者的聪明而可靠的选择，他们希望在位置优越的多伦多拥有一个住宿基地，而无需承担传统住宿的高成本。',
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
        { roomType: '地下室间', capacity: '1-2人', duration: '24小时', priceAfterTax: 'CAD$100', facility: '清洁床铺和免费卫生纸' },
        { roomType: '临时间', capacity: '1-2人', duration: '4小时', priceAfterTax: 'CAD$80', facility: '清洁床铺和免费卫生纸' },
      ],
    },
    gallery: {
      label: '相册',
      description: '以下是我们精选的展示房间和设施的图片。',
      images: [
        { label: '标准房间' },
        { label: '豪华套房' },
        { label: '加州大床' },
        { label: '浴室' },
        { label: '客厅' },
        { label: '便利设施' },
        { label: '房间细节' },
        { label: '舒适空间' },
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
      phone: '647-349-9220',
      address: '374 College St. M5T 1S6 Toronto ON CANADA',
      email: 'junjunhotel@gmail.com',
      operationHours: '24小时',
    },
    roomReservation: {
      label: '预订',
    },
    resourceLinks: ['关于我们', '服务', '照片', '常见问题'],
    footer: {
      copyright: '© 2026 君君酒店',
    },
  },
} as const;

// ===== PRICING DISPLAY =====
export const PRICING_DISPLAY_CONFIG = {
  enableRowContrast: true,
  oddRowBackground: '#fff9f5',
  evenRowBackground: '#f7f1ea',
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
