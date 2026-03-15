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
  selectedGalleryImage: any = null;
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
        hoursLabel: 'Hours:',
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

  getPricingValue(room: (typeof this.roomPricing)[number], key: RoomKey): string {
    return room[key];
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

  openGalleryLightbox(image: any): void {
    if (this.currentViewport !== 'm' && this.currentViewport !== 'l') {
      return;
    }

    this.selectedGalleryImage = image;
  }

  closeGalleryLightbox(): void {
    this.selectedGalleryImage = null;
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeGalleryLightbox();
  }

  // ===== TRANSLATION GETTERS =====
  private get isEnglishSelected(): boolean {
    return this.selectedLanguage === 'en';
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

    if (!Array.isArray(translatedRooms) || translatedRooms.length !== this.roomPricing.length) {
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
    const translatedImages = strings.gallery.images ?? [];

    if (!Array.isArray(translatedImages) || translatedImages.length !== this.galleryImages.length) {
      return ranked.map(({ originalIndex, ...img }) => ({ ...img }));
    }

    return ranked.map((img) => ({
      ...img,
      label: strings.gallery.images[img.originalIndex]?.label || img.label,
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
      hours: contactStrings.hoursLabel ?? 'Hours:',
      mapTitle: contactStrings.mapTitle ?? 'Jun Jun Hotel Map',
    };
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