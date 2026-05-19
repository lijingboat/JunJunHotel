import { ChangeDetectionStrategy, Component, HostListener, ViewEncapsulation } from '@angular/core';
import { ContactSectionComponent } from './components/contact/contact-section.component';
import { NavigationBrandComponent } from './components/navigation/navigation-brand.component';
import { NavigationCtaComponent } from './components/navigation/navigation-cta.component';
import { NavigationLinkComponent } from './components/navigation/navigation-link.component';
import { NavigationToggleComponent } from './components/navigation/navigation-toggle.component';
import { RoomReservationSectionComponent } from './components/room-reservation/room-reservation-section.component';
import { NoticeBarComponent } from './components/notice-bar/notice-bar.component';
import { AdminPageComponent } from './components/admin/admin-page.component';
import {
  ABOUT,
  ABOUT_IMAGES,
  ASSETS,
  CONTACT,
  FAQ_CONFIG,
  FAQS,
  GALLERY,
  GALLERY_DISPLAY_CONFIG,
  NAV_LANGUAGE_CONFIG,
  NAV_LINKS,
  NOTICE_BARS,
  NOTICE_BAR_CONFIG,
  PRICING_DISPLAY_CONFIG,
  PRICING,
  RESOURCE_LINKS,
  ROOM_PRICING,
  ROOM_RESERVATION_CONFIG,
  ROOM_RESERVATION,
  SITE_META,
  STYLING,
  STRINGS,
} from './app.content';

type ViewportTier = 'xs' | 's' | 'm' | 'l';
type RoomKey = 'roomType' | 'capacity' | 'duration' | 'priceAfterTax' | 'facility';
type LightboxSource = 'gallery' | 'about';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactSectionComponent, NavigationBrandComponent, NavigationToggleComponent, NavigationLinkComponent, NavigationCtaComponent, RoomReservationSectionComponent, NoticeBarComponent, AdminPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  isMenuOpen = false;
  isAdminRoute = false;
  private readonly configStorageKey = 'junjun-hotel-config-overrides';
  private readonly languageCookieKey = 'junjun-hotel-lang';
  private readonly languageQueryKey = 'lan';
  brand = SITE_META.brand;
  brandIcon = ASSETS.brandIcon;

  navLinks: Array<{ label: string; target: string }> = [];
  noticeBars: Array<any> = [];
  noticeBarConfig: any = {};
  about = this.clone(ABOUT);
  aboutParagraphs: string[] = [];
  aboutImages: Array<any> = [];
  roomPricing: Array<any> = [];
  pricingColumns: Array<any> = [];
  pricingDisplayConfig: any = {};
  galleryDisplayConfig: any = {};
  galleryImages: Array<any> = [];
  selectedGalleryIndex: number | null = null;
  selectedLightboxSource: LightboxSource = 'gallery';
  faqs: Array<any> = [];
  faqConfig: any = {};
  contact: any = {};
  resourceLinks: string[] = [];
  navLanguageConfig: any = {};
  strings: any = {};
  styling: any = {};
  selectedLanguage: string = NAV_LANGUAGE_CONFIG.defaultValue;
  readonly currentYear = SITE_META.year;
  roomReservationConfig: any = {};
  roomReservation: any = {};
  currentViewport: ViewportTier = 'l';
  private readonly translatedUiTextByLanguage: Record<string, {
    paymentMethods: string;
    qrTitle: string;
    qrHint: string;
    copyQrButton: string;
    copySuccess: string;
    copyFallback: string;
    copyError: string;
    printButtonLabel: string;
    printAbout: string;
  }> = {
    en: {
      paymentMethods: 'We accept Cash, Visa, Master Card, Interac and EMT (Email Money Transfer).',
      qrTitle: 'Scan QR for Official Website',
      qrHint: 'Point your camera at this code to open www.junjunhotel.com instantly.',
      copyQrButton: 'Copy QR Image Data',
      copySuccess: 'QR image data copied to clipboard.',
      copyFallback: 'Image clipboard is unavailable. Data URL copied instead.',
      copyError: 'Unable to copy now. Please try again.',
      printButtonLabel: 'Print Brochure',
      printAbout: 'Jun Jun Hotel is a comfortable private suite in the heart of downtown Toronto — steps from TTC transit, Little Italy, Chinatown, and the University of Toronto. Enjoy a queen-size bed, private shower, large TV, and fast internet. Flexible rates available for overnight stays, extended visits, and short 4-hour bookings.',
    },
    fr: {
      paymentMethods: 'Nous acceptons les espèces, Visa, MasterCard, Interac et EMT (virement d\'argent par courriel).',
      qrTitle: 'Scannez le QR vers le site officiel',
      qrHint: 'Pointez votre caméra sur ce code pour ouvrir immédiatement www.junjunhotel.com.',
      copyQrButton: 'Copier les données image QR',
      copySuccess: 'Les données de l\'image QR ont été copiées.',
      copyFallback: 'Presse-papiers image indisponible. URL de données copiée.',
      copyError: 'Impossible de copier maintenant. Veuillez réessayer.',
      printButtonLabel: 'Imprimer la brochure',
      printAbout: 'L\'Hôtel Jun Jun est une suite privée confortable au cœur du centre-ville de Toronto — à quelques pas de la TTC, de Little Italy, de Chinatown et de l\'Université de Toronto. Profitez d\'un lit queen-size, d\'une douche privée, d\'un grand téléviseur et d\'une connexion internet rapide. Tarifs flexibles pour une nuit, un séjour prolongé ou une courte visite de 4 heures.',
    },
    es: {
      paymentMethods: 'Aceptamos efectivo, Visa, MasterCard, Interac y EMT (transferencia de dinero por correo electrónico).',
      qrTitle: 'Escanee el QR del sitio oficial',
      qrHint: 'Apunte la cámara a este código para abrir www.junjunhotel.com al instante.',
      copyQrButton: 'Copiar datos de imagen QR',
      copySuccess: 'Se copiaron los datos de la imagen QR.',
      copyFallback: 'No hay portapapeles de imagen. Se copió URL de datos.',
      copyError: 'No se pudo copiar ahora. Inténtelo de nuevo.',
      printButtonLabel: 'Imprimir folleto',
      printAbout: 'Jun Jun Hotel es una suite privada y confortable en el corazón del centro de Toronto — a pasos de la TTC, Little Italy, Chinatown y la Universidad de Toronto. Disfrute de cama queen-size, baño privado, televisor grande e internet rápido. Tarifas flexibles para una noche, estadías prolongadas o visitas cortas de 4 horas.',
    },
    de: {
      paymentMethods: 'Wir akzeptieren Bargeld, Visa, MasterCard, Interac und EMT (E-Mail-Geldtransfer).',
      qrTitle: 'QR zur offiziellen Website scannen',
      qrHint: 'Richten Sie Ihre Kamera auf diesen Code, um www.junjunhotel.com sofort zu öffnen.',
      copyQrButton: 'QR-Bilddaten kopieren',
      copySuccess: 'QR-Bilddaten wurden in die Zwischenablage kopiert.',
      copyFallback: 'Bild-Zwischenablage nicht verfügbar. Daten-URL kopiert.',
      copyError: 'Kopieren derzeit nicht möglich. Bitte erneut versuchen.',
      printButtonLabel: 'Broschüre drucken',
      printAbout: 'Das Jun Jun Hotel ist eine komfortable Privatsuite im Herzen der Innenstadt von Toronto — nur wenige Schritte von TTC, Little Italy, Chinatown und der Universität Toronto entfernt. Genießen Sie ein Queen-Size-Bett, eine eigene Dusche, einen großen Fernseher und schnelles Internet. Flexible Tarife für eine Nacht, Langzeitaufenthalte oder kurze 4-Stunden-Buchungen.',
    },
    ja: {
      paymentMethods: 'お支払いは現金、Visa、MasterCard、Interac、EMT（Eメール送金）に対応しています。',
      qrTitle: '公式サイト用QRコード',
      qrHint: 'このコードをカメラで読み取ると、www.junjunhotel.com をすぐ開けます。',
      copyQrButton: 'QR画像データをコピー',
      copySuccess: 'QR画像データをクリップボードにコピーしました。',
      copyFallback: '画像コピーは非対応のため、データURLをコピーしました。',
      copyError: '現在コピーできません。もう一度お試しください。',
      printButtonLabel: 'パンフレットを印刷',
      printAbout: 'ジュンジュンホテルは、トロント中心部に位置する快適なプライベートスイートです。TTC、リトルイタリー、チャイナタウン、トロント大学まで徒歩圏内。クイーンサイズベッド、専用シャワー、大型テレビ、高速インターネット完備。1泊・長期滞在・4時間プランなど柔軟な料金をご用意しています。',
    },
    ko: {
      paymentMethods: '현금, Visa, MasterCard, Interac 및 EMT(이메일 송금) 결제가 가능합니다.',
      qrTitle: '공식 웹사이트 QR 스캔',
      qrHint: '카메라로 이 코드를 스캔하면 www.junjunhotel.com 이 바로 열립니다.',
      copyQrButton: 'QR 이미지 데이터 복사',
      copySuccess: 'QR 이미지 데이터가 클립보드에 복사되었습니다.',
      copyFallback: '이미지 클립보드 미지원으로 데이터 URL을 복사했습니다.',
      copyError: '지금은 복사할 수 없습니다. 다시 시도해 주세요.',
      printButtonLabel: '브로셔 인쇄',
      printAbout: '준준 호텔은 토론토 다운타운 중심에 자리한 편안한 전용 스위트입니다. TTC, 리틀 이탈리, 차이나타운, 토론토대학교까지 도보 거리에 있습니다. 퀸사이즈 침대, 전용 샤워실, 대형 TV, 고속 인터넷 제공. 1박, 장기 숙박, 4시간 단기 이용 등 유연한 요금제를 갖추고 있습니다.',
    },
    ar: {
      paymentMethods: 'نقبل الدفع نقداً وVisa وMasterCard وInterac وEMT (تحويل الأموال عبر البريد الإلكتروني).',
      qrTitle: 'امسح رمز QR للموقع الرسمي',
      qrHint: 'وجّه كاميرا هاتفك إلى هذا الرمز لفتح www.junjunhotel.com فوراً.',
      copyQrButton: 'نسخ بيانات صورة QR',
      copySuccess: 'تم نسخ بيانات صورة QR إلى الحافظة.',
      copyFallback: 'نسخ الصور غير متاح. تم نسخ رابط البيانات بدلاً من ذلك.',
      copyError: 'تعذر النسخ الآن. يرجى المحاولة مرة أخرى.',
      printButtonLabel: 'طباعة الكتيب',
      printAbout: 'فندق جون جون جناح خاص مريح في قلب وسط مدينة تورنتو — على بُعد خطوات من مترو TTC وليتل إيطاليا والحي الصيني وجامعة تورنتو. يتوفر سرير كوين، دش خاص، تلفزيون كبير وإنترنت سريع. أسعار مرنة للإقامة الليلية والطويلة والزيارات القصيرة لمدة 4 ساعات.',
    },
    hi: {
      paymentMethods: 'हम नकद, Visa, MasterCard, Interac और EMT (Email Money Transfer) स्वीकार करते हैं।',
      qrTitle: 'आधिकारिक वेबसाइट के लिए QR स्कैन करें',
      qrHint: 'इस कोड को कैमरे से स्कैन करें और www.junjunhotel.com तुरंत खोलें।',
      copyQrButton: 'QR इमेज डेटा कॉपी करें',
      copySuccess: 'QR इमेज डेटा क्लिपबोर्ड में कॉपी हो गया है।',
      copyFallback: 'इमेज क्लिपबोर्ड उपलब्ध नहीं है। डेटा URL कॉपी किया गया।',
      copyError: 'अभी कॉपी नहीं हो सका। कृपया फिर प्रयास करें।',
      printButtonLabel: 'ब्रोशर प्रिंट करें',
      printAbout: 'जुन जुन होटल, टोरंटो डाउनटाउन के केंद्र में एक आरामदायक निजी सूट है — TTC ट्रांजिट, लिटिल इटली, चाइनाटाउन और टोरंटो यूनिवर्सिटी के कदमों की दूरी पर। क्वीन-साइज़ बेड, निजी शॉवर, बड़ा टीवी और तेज़ इंटरनेट उपलब्ध है। एक रात, लंबे प्रवास या 4 घंटे की शॉर्ट बुकिंग के लिए लचीले दर उपलब्ध हैं।',
    },
    ru: {
      paymentMethods: 'Мы принимаем наличные, Visa, MasterCard, Interac и EMT (денежный перевод по электронной почте).',
      qrTitle: 'Сканируйте QR для официального сайта',
      qrHint: 'Наведите камеру на этот код, чтобы сразу открыть www.junjunhotel.com.',
      copyQrButton: 'Копировать данные QR-изображения',
      copySuccess: 'Данные QR-изображения скопированы в буфер обмена.',
      copyFallback: 'Буфер изображений недоступен. Скопирован data URL.',
      copyError: 'Сейчас скопировать не удалось. Повторите попытку.',
      printButtonLabel: 'Распечатать буклет',
      printAbout: 'Jun Jun Hotel — комфортный частный номер в самом центре Торонто, в шаговой доступности от транзита TTC, Little Italy, Чайнатауна и Университета Торонто. В номере: кровать queen-size, собственный душ, большой телевизор и быстрый интернет. Гибкие тарифы на ночь, длительный срок или короткое пребывание на 4 часа.',
    },
    vi: {
      paymentMethods: 'Chúng tôi chấp nhận tiền mặt, Visa, MasterCard, Interac và EMT (chuyển tiền qua email).',
      qrTitle: 'Quét mã QR website chính thức',
      qrHint: 'Hướng camera vào mã này để mở ngay www.junjunhotel.com.',
      copyQrButton: 'Sao chép dữ liệu ảnh QR',
      copySuccess: 'Đã sao chép dữ liệu ảnh QR vào bộ nhớ tạm.',
      copyFallback: 'Không hỗ trợ clipboard ảnh. Đã sao chép URL dữ liệu.',
      copyError: 'Không thể sao chép lúc này. Vui lòng thử lại.',
      printButtonLabel: 'In tờ rơi',
      printAbout: 'Jun Jun Hotel là suite riêng tư thoải mái ngay trung tâm Toronto — cách TTC, Little Italy, Phố Tàu và Đại học Toronto chỉ vài bước chân. Phòng có giường queen-size, phòng tắm riêng, TV lớn và internet tốc độ cao. Giá linh hoạt theo đêm, dài hạn hoặc ngắn hạn 4 giờ.',
    },
    zhHant: {
      paymentMethods: '我們接受現金、Visa、MasterCard、Interac 與 EMT（電子郵件匯款）。',
      qrTitle: '掃描 QR 前往官方網站',
      qrHint: '使用相機掃描此代碼即可立即開啟 www.junjunhotel.com。',
      copyQrButton: '複製 QR 圖像資料',
      copySuccess: '已將 QR 圖像資料複製到剪貼簿。',
      copyFallback: '不支援圖片剪貼簿，已改為複製資料 URL。',
      copyError: '目前無法複製，請稍後再試。',
      printButtonLabel: '列印宣傳冊',
      printAbout: '君君旅店是位於多倫多市中心的舒適私人套房，鄰近 TTC 交通站、小意大利、唐人街及多倫多大學。提供加大雙人床、獨立淋浴間、大電視及高速網路。提供彈性住宿方案，包括一晚、長期住宿及 4 小時短時方案。',
    },
    zh: {
      paymentMethods: '我们接受现金、Visa、MasterCard、Interac 和 EMT（电子邮件转账）。',
      qrTitle: '扫描二维码访问官网',
      qrHint: '用手机相机扫描此码即可立即打开 www.junjunhotel.com。',
      copyQrButton: '复制二维码图像数据',
      copySuccess: '二维码图像数据已复制到剪贴板。',
      copyFallback: '不支持图片剪贴板，已改为复制数据 URL。',
      copyError: '当前无法复制，请稍后重试。',
      printButtonLabel: '打印宣传册',
      printAbout: '君君旅店是位于多伦多市中心的舒适私人套房，紧邻 TTC 交通站、小意大利、唐人街及多伦多大学。提供大床、独立淋浴间、大电视及高速网络。提供灵活住宿方案，适合一晚入住、长期住宿及 4 小时短时预订。',
    },
  };

  constructor() {
    this.resetToDefaults();
    this.applyPersistedConfig();
    this.initializeLanguagePreference();
    this.detectRoute();
    this.updateViewportTier();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateViewportTier();
  }

  private detectRoute(): void {
    if (typeof window === 'undefined') {
      this.isAdminRoute = false;
      return;
    }

    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    this.isAdminRoute = path === '/admin';
  }

  private initializeLanguagePreference(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const supportedValues = new Set((this.navLanguageConfig.options ?? []).map((option: { value: string }) => option.value));
    const params = new URLSearchParams(window.location.search);
    const queryValue = params.get(this.languageQueryKey);
    const cookieValue = this.getCookie(this.languageCookieKey);

    const normalizeLanguage = (value: string | null): string | null => {
      if (!value) {
        return null;
      }
      const normalized = value === 'zh2' ? 'zhHant' : value;
      return supportedValues.has(normalized) ? normalized : null;
    };

    const resolved = normalizeLanguage(queryValue) ?? normalizeLanguage(cookieValue) ?? 'en';
    this.selectedLanguage = resolved;
    this.persistLanguagePreference(this.selectedLanguage);
  }

  private persistLanguagePreference(language: string): void {
    if (typeof window === 'undefined') {
      return;
    }

    const alias = language === 'zhHant' ? 'zh2' : language;
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 365);
    document.cookie = `${this.languageCookieKey}=${encodeURIComponent(alias)}; expires=${expiresAt.toUTCString()}; path=/; SameSite=Lax`;

    const url = new URL(window.location.href);
    url.searchParams.set(this.languageQueryKey, alias);
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }

  private getCookie(name: string): string | null {
    if (typeof document === 'undefined') {
      return null;
    }

    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const match = document.cookie.match(new RegExp(`(?:^|; )${escapedName}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
  }

  private clone<T>(value: T): T {
    return JSON.parse(JSON.stringify(value)) as T;
  }

  private isPlainObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

  private deepMerge<T>(base: T, override: unknown): T {
    if (Array.isArray(base)) {
      return (Array.isArray(override) ? override : base) as T;
    }

    if (!this.isPlainObject(base)) {
      return (override ?? base) as T;
    }

    const baseObj = base as Record<string, unknown>;
    const overrideObj = this.isPlainObject(override) ? override : {};
    const result: Record<string, unknown> = { ...baseObj };

    for (const key of Object.keys(overrideObj)) {
      const baseValue = baseObj[key];
      const overrideValue = overrideObj[key];

      if (this.isPlainObject(baseValue) && this.isPlainObject(overrideValue)) {
        result[key] = this.deepMerge(baseValue, overrideValue);
      } else if (Array.isArray(baseValue)) {
        result[key] = Array.isArray(overrideValue) ? overrideValue : baseValue;
      } else {
        result[key] = overrideValue;
      }
    }

    return result as T;
  }

  private resetToDefaults(): void {
    this.navLinks = this.clone(NAV_LINKS) as unknown as Array<{ label: string; target: string }>;
    this.noticeBars = this.clone(NOTICE_BARS) as unknown as Array<any>;
    this.noticeBarConfig = this.clone(NOTICE_BAR_CONFIG);
    this.about = this.clone(ABOUT);
    this.aboutParagraphs = this.clone(ABOUT.paragraphs) as unknown as string[];
    this.aboutImages = this.clone(ABOUT_IMAGES) as unknown as Array<any>;
    this.roomPricing = this.clone(ROOM_PRICING) as unknown as Array<any>;
    this.pricingColumns = this.clone(PRICING.columns) as unknown as Array<any>;
    this.pricingDisplayConfig = this.clone(PRICING_DISPLAY_CONFIG);
    this.galleryDisplayConfig = this.clone(GALLERY_DISPLAY_CONFIG);
    this.galleryImages = this.clone(GALLERY.images) as unknown as Array<any>;
    this.faqs = this.clone(FAQS) as unknown as Array<any>;
    this.faqConfig = this.clone(FAQ_CONFIG);
    this.contact = this.clone(CONTACT);
    this.resourceLinks = this.clone(RESOURCE_LINKS) as unknown as string[];
    this.navLanguageConfig = this.clone(NAV_LANGUAGE_CONFIG);
    this.roomReservationConfig = this.clone(ROOM_RESERVATION_CONFIG);
    this.roomReservation = this.clone(ROOM_RESERVATION);
    this.strings = this.clone(STRINGS);
    this.styling = this.clone(STYLING);
    this.selectedLanguage = this.navLanguageConfig.defaultValue ?? 'en';
  }

  private applyPersistedConfig(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const raw = window.localStorage.getItem(this.configStorageKey);
    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw) as { layout?: unknown; settings?: unknown };
      this.applyAdminConfig(parsed.layout, parsed.settings);
    } catch {
      // Ignore invalid persisted data.
    }
  }

  private getEnglishBaseStrings(): any {
    return {
      siteMeta: {
        title: SITE_META.title,
        description: SITE_META.description,
        brand: SITE_META.brand,
      },
      nav: {
        about: this.navLinks[0]?.label ?? 'About',
        pricing: this.navLinks[1]?.label ?? 'Pricing',
        gallery: this.navLinks[2]?.label ?? 'Gallery',
        faq: this.navLinks[3]?.label ?? 'FAQ',
        contact: this.navLinks[4]?.label ?? 'Contact',
        roomReservation: this.roomReservation?.label ?? 'Room Reservation',
      },
      about: {
        title: this.about?.title ?? ABOUT.title,
        paragraphs: [...(this.aboutParagraphs ?? [])],
      },
      pricing: {
        label: this.navLinks[1]?.label ?? 'Pricing',
        columns: this.pricingColumns.map((column) => ({ key: column.key, title: { ...column.title } })),
        rooms: this.roomPricing.map((room) => ({ ...room })),
      },
      gallery: {
        label: this.navLinks[2]?.label ?? 'Gallery',
        description: GALLERY.description,
        images: this.galleryImages.map((image) => ({ label: image.label })),
      },
      faq: {
        label: this.navLinks[3]?.label ?? 'FAQ',
        prefix: {
          question: this.faqConfig?.questionPrefix ?? 'Q',
          answer: this.faqConfig?.answerPrefix ?? 'A',
          index: this.faqConfig?.indexPrefix ?? '#',
        },
        items: this.faqs.map((item) => ({ title: item.title, body: item.body })),
      },
      contact: {
        label: this.navLinks[4]?.label ?? 'Contact',
        phoneLabel: 'Phone:',
        addressLabel: 'Address:',
        emailLabel: 'Email:',
        hoursLabel: 'Acceptance Hour:',
        mapTitle: 'Jun Jun Hotel Map',
        phone: this.contact?.phone ?? CONTACT.phone,
        address: this.contact?.address ?? CONTACT.address,
        email: this.contact?.email ?? CONTACT.email,
        operationHours: this.contact?.operationHours ?? CONTACT.operationHours,
      },
      roomReservation: {
        label: this.roomReservation?.label ?? 'Room Reservation',
        title: this.roomReservation?.title ?? '',
        description: this.roomReservation?.description ?? '',
        highlights: [...(this.roomReservation?.highlights ?? [])],
        form: { ...(this.roomReservation?.form ?? {}) },
      },
      noticeBars: Object.fromEntries((this.noticeBars ?? []).map((notice) => [notice.id, notice.message])),
      resourceLinks: [...(this.resourceLinks ?? [])],
      footer: {
        copyright: `© ${this.currentYear} ${this.brand}`,
      },
    };
  }

  get adminInitialConfig(): { layout: unknown; settings: unknown } {
    return {
      layout: {
        noticeBarConfig: this.noticeBarConfig,
        navLanguageConfig: this.navLanguageConfig,
        pricingDisplayConfig: this.pricingDisplayConfig,
        galleryDisplayConfig: this.galleryDisplayConfig,
        roomReservationConfig: this.roomReservationConfig,
        styling: this.styling,
      },
      settings: {
        navLinks: this.navLinks,
        noticeBars: this.noticeBars,
        faqs: this.faqs,
        faqConfig: this.faqConfig,
        gallery: { images: this.galleryImages },
        contact: this.contact,
        roomReservation: this.roomReservation,
        strings: { en: this.getEnglishBaseStrings(), ...this.strings },
      },
    };
  }

  onAdminSaveOverrides(payload: { layout: unknown; settings: unknown }): void {
    this.applyAdminConfig(payload.layout, payload.settings);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(this.configStorageKey, JSON.stringify(payload));
    }
  }

  onAdminResetOverrides(): void {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(this.configStorageKey);
    }
    this.resetToDefaults();
  }

  private applyAdminConfig(layoutOverride: unknown, settingsOverride: unknown): void {
    const layoutDefault = {
      noticeBarConfig: this.clone(NOTICE_BAR_CONFIG),
      navLanguageConfig: this.clone(NAV_LANGUAGE_CONFIG),
      pricingDisplayConfig: this.clone(PRICING_DISPLAY_CONFIG),
      galleryDisplayConfig: this.clone(GALLERY_DISPLAY_CONFIG),
      roomReservationConfig: this.clone(ROOM_RESERVATION_CONFIG),
      styling: this.clone(STYLING),
    };

    const settingsDefault = {
      navLinks: this.clone(NAV_LINKS),
      noticeBars: this.clone(NOTICE_BARS),
      faqs: this.clone(FAQS),
      faqConfig: this.clone(FAQ_CONFIG),
      gallery: { images: this.clone(GALLERY.images) },
      contact: this.clone(CONTACT),
      roomReservation: this.clone(ROOM_RESERVATION),
      strings: this.clone(STRINGS),
    };

    const normalizedSettingsOverride = this.isPlainObject(settingsOverride) ? this.clone(settingsOverride) as Record<string, unknown> : {};
    const stringsOverride = normalizedSettingsOverride['strings'] as { en?: { roomReservation?: Record<string, unknown> } } | undefined;
    const englishRoomReservation = stringsOverride?.en?.roomReservation ?? null;
    if (!normalizedSettingsOverride['roomReservation'] && englishRoomReservation) {
      normalizedSettingsOverride['roomReservation'] = englishRoomReservation;
    }

    const mergedLayout = this.deepMerge(layoutDefault, layoutOverride) as any;
    const mergedSettings = this.deepMerge(settingsDefault, normalizedSettingsOverride) as any;

    this.noticeBarConfig = mergedLayout.noticeBarConfig;
    this.navLanguageConfig = mergedLayout.navLanguageConfig;
    this.pricingDisplayConfig = mergedLayout.pricingDisplayConfig;
    this.galleryDisplayConfig = mergedLayout.galleryDisplayConfig;
    this.roomReservationConfig = mergedLayout.roomReservationConfig;
    this.styling = mergedLayout.styling;

    this.navLinks = mergedSettings.navLinks;
    this.noticeBars = mergedSettings.noticeBars;
    this.faqs = mergedSettings.faqs;
    this.faqConfig = mergedSettings.faqConfig;
    this.galleryImages = mergedSettings.gallery.images;
    this.contact = mergedSettings.contact;
    this.roomReservation = mergedSettings.roomReservation;
    this.strings = mergedSettings.strings;

    const supportedValues = new Set((this.navLanguageConfig.options ?? []).map((option: { value: string }) => option.value));
    if (!supportedValues.has(this.selectedLanguage)) {
      this.selectedLanguage = this.navLanguageConfig.defaultValue ?? 'en';
    }
  }

  private updateViewportTier(): void {
    if (typeof window === 'undefined') {
      this.currentViewport = 'l';
      return;
    }

    const width = window.innerWidth;

    if (width < 576) {
      this.currentViewport = 'xs';
      return;
    }

    if (width < 768) {
      this.currentViewport = 's';
      return;
    }

    if (width < 992) {
      this.currentViewport = 'm';
      return;
    }

    this.currentViewport = 'l';
  }

  get visiblePricingColumns() {
    return this.pricingColumns.filter((column) => column.visible[this.currentViewport]);
  }

  get activeNoticeBars() {
    const today = this.toIsoDate(new Date());
    const strings = this.getCurrentLanguageStrings();
    return this.noticeBars
      .filter((notice) => {
        if (!notice.visible) {
          return false;
        }

        const beginDate = notice.beginDate ?? (this.noticeBarConfig.defaultBeginDate === 'today' ? today : this.noticeBarConfig.defaultBeginDate);
        const expireDate = notice.expireDate ?? this.noticeBarConfig.defaultExpireDate;
        return beginDate <= today && today <= expireDate;
      })
      .map((notice) => ({
        ...notice,
        message: this.isEnglishSelected ? notice.message : (strings.noticeBars?.[notice.id] ?? notice.message),
      }));
  }

  get selectedGalleryImage(): any | null {
    if (this.selectedGalleryIndex === null) {
      return null;
    }

    const images = this.currentLightboxImages;
    if (this.selectedGalleryIndex < 0 || this.selectedGalleryIndex >= images.length) {
      return null;
    }

    return images[this.selectedGalleryIndex];
  }

  get canNavigateGalleryLeft(): boolean {
    return this.selectedGalleryIndex !== null && this.selectedGalleryIndex > 0;
  }

  get canNavigateGalleryRight(): boolean {
    return this.selectedGalleryIndex !== null && this.selectedGalleryIndex < this.currentLightboxImages.length - 1;
  }

  private get currentLightboxImages(): Array<{ src: string; label: string }> {
    if (this.selectedLightboxSource === 'about') {
      return this.translatedAboutImages.map((image) => ({
        src: image.src,
        label: image.alt,
      }));
    }

    return this.translatedGalleryImages.map((image) => ({
      src: image.src,
      label: image.label,
    }));
  }

  getPricingValue(room: (typeof this.roomPricing)[number], key: RoomKey): string {
    return room[key];
  }

  getPricingDisplayValue(room: (typeof this.roomPricing)[number]): string {
    const [primary] = `${room.priceAfterTax ?? ''}`.split('|');
    const [, secondary] = `${room.priceAfterTax ?? ''}`.split('|');
    const normalizedPrimary = primary?.trim() ?? '';
    const normalizedSecondary = secondary?.trim() ?? '';
    return normalizedSecondary || normalizedPrimary;
  }

  getFaqIndexLabel(faqIndex: number): string {
    if (!this.faqConfig.showIndex) {
      return '';
    }

    const baseIndex = `${faqIndex + 1}`;
    if (this.faqConfig.useHashIndexStyle) {
      return `${this.faqConfig.indexPrefix}${baseIndex}`;
    }

    return `${this.faqConfig.questionPrefix}${baseIndex}`;
  }

  onNoticeNavigateToFaq(faqIndex: number): void {
    const faqSelector = `#id_appComponent_faqItem_${faqIndex}`;
    this.scrollToTargetSelector(faqSelector);
  }

  onLanguageChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement | null;
    if (!selectElement) {
      return;
    }

    this.selectedLanguage = selectElement.value;
    this.persistLanguagePreference(this.selectedLanguage);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  scrollToTop(event?: Event): void {
    event?.preventDefault();
    this.closeMenu();

    if (typeof window === 'undefined') {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollTo(target: string, event: Event): void {
    event.preventDefault();
    this.closeMenu();

    this.scrollToTargetSelector(target);
  }

  private scrollToTargetSelector(target: string): void {
    this.closeMenu();

    if (typeof window === 'undefined') {
      return;
    }

    const targetElement = document.querySelector(target) as HTMLElement | null;
    if (!targetElement) {
      return;
    }

    const headerElement = document.getElementById('id_appComponent_siteHeader');
    const headerOffset = headerElement?.getBoundingClientRect().height ?? 0;
    const targetTop = window.scrollY + targetElement.getBoundingClientRect().top - headerOffset - 16;

    window.scrollTo({ top: Math.max(targetTop, 0), behavior: 'smooth' });
  }

  private toIsoDate(date: Date): string {
    return date.toISOString().slice(0, 10);
  }

  stopNavigation(event: Event): void {
    event.preventDefault();
  }

  openGalleryLightbox(index: number): void {
    if (this.currentViewport !== 'm' && this.currentViewport !== 'l') {
      return;
    }

    this.selectedLightboxSource = 'gallery';
    this.selectedGalleryIndex = index;
  }

  openAboutLightbox(index: number): void {
    if (this.currentViewport !== 'm' && this.currentViewport !== 'l') {
      return;
    }

    this.selectedLightboxSource = 'about';
    this.selectedGalleryIndex = index;
  }

  showPreviousGalleryImage(): void {
    if (!this.canNavigateGalleryLeft || this.selectedGalleryIndex === null) {
      return;
    }

    this.selectedGalleryIndex -= 1;
  }

  showNextGalleryImage(): void {
    if (!this.canNavigateGalleryRight || this.selectedGalleryIndex === null) {
      return;
    }

    this.selectedGalleryIndex += 1;
  }

  closeGalleryLightbox(): void {
    this.selectedGalleryIndex = null;
    this.selectedLightboxSource = 'gallery';
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeGalleryLightbox();
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeftKey(): void {
    this.showPreviousGalleryImage();
  }

  @HostListener('document:keydown.arrowright')
  onArrowRightKey(): void {
    this.showNextGalleryImage();
  }

  openPrintView(): void {
    window.print();
  }

  // ===== TRANSLATION GETTERS =====
  private get isEnglishSelected(): boolean {
    return this.selectedLanguage === 'en';
  }

  get isRtlLanguage(): boolean {
    return this.selectedLanguage === 'ar';
  }

  private getCurrentLanguageStrings(): any {
    const allStrings = this.strings as Record<string, unknown>;
    const english = this.clone(this.getEnglishBaseStrings() as Record<string, unknown>);
    const selected = (allStrings[this.selectedLanguage] ?? {}) as Record<string, unknown>;
    return this.deepMerge(english, selected);
  }

  get translatedNavLinks(): Array<{ label: string; target: string }> {
    if (this.isEnglishSelected) {
      return this.navLinks.map((link) => ({ ...link }));
    }

    const strings = this.getCurrentLanguageStrings();
    const translatedLabels = [
      strings.nav.about,
      strings.nav.pricing,
      strings.nav.gallery,
      strings.nav.faq,
      strings.nav.contact,
    ];

    return this.navLinks.map((link, idx) => ({
      label: translatedLabels[idx] ?? link.label,
      target: link.target,
    }));
  }

  get translatedAboutTitle(): string {
    if (this.isEnglishSelected) {
      return this.about.title;
    }

    return this.getCurrentLanguageStrings().about.title;
  }

  get translatedAboutParagraphs(): string[] {
    if (this.isEnglishSelected) {
      return [...this.aboutParagraphs];
    }

    return [...(this.getCurrentLanguageStrings().about.paragraphs as string[])];
  }

  get translatedPricingLabel(): string {
    if (this.isEnglishSelected) {
      return this.navLinks[1]?.label ?? 'Pricing';
    }

    return this.getCurrentLanguageStrings().pricing.label;
  }

  get translatedPricingColumns(): typeof this.pricingColumns {
    return this.pricingColumns;
  }

  get translatedPricingRooms(): Array<any> {
    if (this.isEnglishSelected) {
      return this.roomPricing.map((room) => ({ ...room }));
    }

    const translatedRooms = this.getCurrentLanguageStrings().pricing.rooms ?? [];

    if (!Array.isArray(translatedRooms)) {
      return this.roomPricing.map((room) => ({ ...room }));
    }

    return this.roomPricing.map((room, index) => ({
      ...room,
      ...(translatedRooms[index] ?? {}),
    }));
  }

  get translatedGalleryLabel(): string {
    if (this.isEnglishSelected) {
      return this.navLinks[2]?.label ?? 'Gallery';
    }

    return this.getCurrentLanguageStrings().gallery.label;
  }

  get translatedGalleryDescription(): string {
    if (this.isEnglishSelected) {
      return GALLERY.description;
    }

    return this.getCurrentLanguageStrings().gallery.description;
  }

  get translatedGalleryImages(): any[] {
    const ranked = this.galleryImages
      .map((img, originalIndex) => ({
        ...img,
        originalIndex,
        rank: Number.isFinite(Number(img?.rank)) ? Number(img.rank) : originalIndex + 1,
      }))
      .sort((a, b) => a.rank - b.rank || a.originalIndex - b.originalIndex);

    if (this.isEnglishSelected) {
      return ranked.map(({ originalIndex, ...img }) => ({ ...img }));
    }

    const strings = this.getCurrentLanguageStrings();
    const translatedImages = Array.isArray(strings.gallery?.images) ? strings.gallery.images as Array<{ label?: string }> : [];
    return ranked.map(({ originalIndex, ...img }) => ({
      ...img,
      label: translatedImages[originalIndex]?.label ?? img.label,
    }));
  }

  get translatedAboutImages(): Array<{ src: string; alt: string }> {
    if (this.isEnglishSelected) {
      return this.aboutImages.map((img: any) => ({ ...img }));
    }
    const strings = this.getCurrentLanguageStrings();
    const translatedImgs: any[] = strings.about?.images ?? [];
    return this.aboutImages.map((img: any, i: number) => ({
      ...img,
      alt: translatedImgs[i]?.alt ?? img.alt,
    }));
  }

  get translatedFaqLabel(): string {
    if (this.isEnglishSelected) {
      return this.navLinks[3]?.label ?? 'FAQ';
    }

    return this.getCurrentLanguageStrings().faq.label;
  }

  get translatedFaqs(): any[] {
    if (this.isEnglishSelected) {
      return this.faqs.map((item) => ({ ...item }));
    }

    const strings = this.getCurrentLanguageStrings();
    const translatedFaqs = strings.faq.items ?? [];

    if (!Array.isArray(translatedFaqs) || translatedFaqs.length !== this.faqs.length) {
      return this.faqs.map((item) => ({ ...item }));
    }

    return this.faqs.map((item, index) => ({
      ...item,
      ...(translatedFaqs[index] ?? {}),
    }));
  }

  get translatedContactLabel(): string {
    if (this.isEnglishSelected) {
      return this.navLinks[4]?.label ?? 'Contact';
    }

    return this.getCurrentLanguageStrings().contact.label;
  }

  get translatedContactPhone(): string {
    if (this.isEnglishSelected) {
      return this.contact.phone;
    }

    return this.getCurrentLanguageStrings().contact.phone;
  }

  get translatedContactAddress(): string {
    if (this.isEnglishSelected) {
      return this.contact.address;
    }

    return this.getCurrentLanguageStrings().contact.address;
  }

  get translatedContactEmail(): string {
    if (this.isEnglishSelected) {
      return this.contact.email;
    }

    return this.getCurrentLanguageStrings().contact.email;
  }

  get translatedContactHours(): string {
    if (this.isEnglishSelected) {
      return this.contact.operationHours;
    }

    return this.getCurrentLanguageStrings().contact.operationHours;
  }

  get translatedContact() {
    return {
      ...this.contact,
      phone: this.translatedContactPhone,
      address: this.translatedContactAddress,
      email: this.translatedContactEmail,
      operationHours: this.translatedContactHours,
    };
  }

  get translatedContactCardLabels() {
    const strings = this.getCurrentLanguageStrings();
    const contactStrings = strings.contact ?? {};
    return {
      phone: contactStrings.phoneLabel ?? 'Phone:',
      address: contactStrings.addressLabel ?? 'Address:',
      email: contactStrings.emailLabel ?? 'Email:',
      hours: contactStrings.hoursLabel ?? 'Acceptance Hour:',
      website: contactStrings.websiteLabel ?? 'Website:',
      mapTitle: contactStrings.mapTitle ?? 'Jun Jun Hotel Map',
    };
  }

  get translatedPaymentMethodsInfo(): string {
    return this.translatedUiTextByLanguage[this.selectedLanguage]?.paymentMethods
      ?? this.translatedUiTextByLanguage['en'].paymentMethods;
  }

  get translatedQrCardLabels() {
    const text = this.translatedUiTextByLanguage[this.selectedLanguage] ?? this.translatedUiTextByLanguage['en'];
    return {
      title: text.qrTitle,
      hint: text.qrHint,
      copyQrButton: text.copyQrButton,
      copySuccess: text.copySuccess,
      copyFallback: text.copyFallback,
      copyError: text.copyError,
    };
  }

  get translatedPrintButtonLabel(): string {
    return this.translatedUiTextByLanguage[this.selectedLanguage]?.printButtonLabel
      ?? this.translatedUiTextByLanguage['en'].printButtonLabel;
  }

  get translatedPrintAbout(): string {
    return this.translatedUiTextByLanguage[this.selectedLanguage]?.printAbout
      ?? this.translatedUiTextByLanguage['en'].printAbout;
  }

  get translatedRoomReservationLabel(): string {
    if (this.isEnglishSelected) {
      return this.roomReservation?.label ?? 'Room Reservation';
    }

    return this.getCurrentLanguageStrings().roomReservation.label;
  }

  get translatedRoomReservationCopy() {
    const strings = this.getCurrentLanguageStrings();
    const roomReservationStrings = strings.roomReservation ?? {};
    const roomReservationForm = roomReservationStrings.form ?? {};
    return {
      title: roomReservationStrings.title ?? this.roomReservation?.title ?? '',
      description: roomReservationStrings.description ?? this.roomReservation?.description ?? '',
      highlights: [...(roomReservationStrings.highlights ?? this.roomReservation?.highlights ?? [])],
      form: {
        nameLabel: roomReservationForm.nameLabel ?? this.roomReservation?.form?.nameLabel ?? 'Name',
        namePlaceholder: roomReservationForm.namePlaceholder ?? this.roomReservation?.form?.namePlaceholder ?? 'Your full name',
        phoneLabel: roomReservationForm.phoneLabel ?? this.roomReservation?.form?.phoneLabel ?? 'Phone Number',
        phonePlaceholder: roomReservationForm.phonePlaceholder ?? this.roomReservation?.form?.phonePlaceholder ?? '+1 (___) ___-____',
        emailLabel: roomReservationForm.emailLabel ?? this.roomReservation?.form?.emailLabel ?? 'Email',
        emailPlaceholder: roomReservationForm.emailPlaceholder ?? this.roomReservation?.form?.emailPlaceholder ?? 'you@example.com',
        personCountLabel: roomReservationForm.personCountLabel ?? this.roomReservation?.form?.personCountLabel ?? 'Number of Persons',
        personCountPlaceholder: roomReservationForm.personCountPlaceholder ?? this.roomReservation?.form?.personCountPlaceholder ?? '1',
        checkInLabel: roomReservationForm.checkInLabel ?? this.roomReservation?.form?.checkInLabel ?? 'Check-in Date',
        checkOutLabel: roomReservationForm.checkOutLabel ?? this.roomReservation?.form?.checkOutLabel ?? 'Check-out Date',
        submitLabel: roomReservationForm.submitLabel ?? this.roomReservation?.form?.submitLabel ?? 'Submit Reservation Request',
      },
    };
  }

  get translatedResourceLinks(): string[] {
    if (this.isEnglishSelected) {
      return [...this.resourceLinks];
    }

    return [...(this.getCurrentLanguageStrings().resourceLinks as string[])];
  }

  get translatedFooter(): string {
    if (this.isEnglishSelected) {
      return `© ${this.currentYear} ${this.brand}`;
    }

    return this.getCurrentLanguageStrings().footer.copyright;
  }

  get translatedBrand(): string {
    if (this.selectedLanguage === 'zh' || this.selectedLanguage === 'zhHant') {
      return '君君旅店';
    }

    if (this.isEnglishSelected) {
      return this.brand;
    }

    return this.getCurrentLanguageStrings().siteMeta?.brand ?? this.brand;
  }

  get translatedFaqPrefix(): any {
    if (this.isEnglishSelected) {
      return {
        question: this.faqConfig?.questionPrefix ?? 'Q',
        answer: this.faqConfig?.answerPrefix ?? 'A',
        index: this.faqConfig?.indexPrefix ?? '#',
      };
    }

    return this.getCurrentLanguageStrings().faq.prefix;
  }

  getTranslatedPricingColumnTitle(columnKey: string): string {
    if (this.isEnglishSelected) {
      const column = this.pricingColumns.find((item) => item.key === columnKey);
      return column?.title?.[this.currentViewport] || column?.title?.l || '';
    }

    const strings = this.getCurrentLanguageStrings();
    if (!Array.isArray(strings.pricing?.columns) || strings.pricing.columns.length !== this.pricingColumns.length) {
      const column = this.pricingColumns.find((item) => item.key === columnKey);
      return column?.title?.[this.currentViewport] || column?.title?.l || '';
    }

    const numColumns = strings.pricing.columns.length;
    let idx = 0;
    for (let i = 0; i < numColumns; i++) {
      if ((strings.pricing.columns[i] as any).key === columnKey) {
        idx = i;
        break;
      }
    }
    const col = (strings.pricing.columns[idx] as any);
    return col?.title?.[this.currentViewport] || col?.title?.l || '';
  }
}