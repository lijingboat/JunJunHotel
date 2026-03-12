import { ChangeDetectionStrategy, Component, HostListener, ViewEncapsulation } from '@angular/core';
import { ContactSectionComponent } from './components/contact/contact-section.component';
import { NavigationBrandComponent } from './components/navigation/navigation-brand.component';
import { NavigationCtaComponent } from './components/navigation/navigation-cta.component';
import { NavigationLinkComponent } from './components/navigation/navigation-link.component';
import { NavigationToggleComponent } from './components/navigation/navigation-toggle.component';
import { RoomReservationSectionComponent } from './components/room-reservation/room-reservation-section.component';
import { NoticeBarComponent } from './components/notice-bar/notice-bar.component';
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
  SITE_META,
  STRINGS,
} from './app.content';

type ViewportTier = 'xs' | 's' | 'm' | 'l';
type RoomKey = 'roomType' | 'capacity' | 'duration' | 'priceAfterTax' | 'facility';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactSectionComponent, NavigationBrandComponent, NavigationToggleComponent, NavigationLinkComponent, NavigationCtaComponent, RoomReservationSectionComponent, NoticeBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  isMenuOpen = false;
  readonly brand = SITE_META.brand;
  readonly brandIcon = ASSETS.brandIcon;

  readonly navLinks = NAV_LINKS;
  readonly noticeBars = NOTICE_BARS;
  readonly noticeBarConfig = NOTICE_BAR_CONFIG;
  readonly about = ABOUT;
  readonly aboutParagraphs = ABOUT.paragraphs;
  readonly aboutImages = ABOUT_IMAGES;
  readonly roomPricing = ROOM_PRICING;
  readonly pricingColumns = PRICING.columns;
  readonly pricingDisplayConfig = PRICING_DISPLAY_CONFIG;
  readonly galleryDisplayConfig = GALLERY_DISPLAY_CONFIG;
  readonly galleryImages = GALLERY.images;
  readonly faqs = FAQS;
  readonly faqConfig = FAQ_CONFIG;
  readonly contact = CONTACT;
  readonly resourceLinks = [...RESOURCE_LINKS];
  readonly navLanguageConfig = NAV_LANGUAGE_CONFIG;
  readonly strings = STRINGS;
  selectedLanguage: string = NAV_LANGUAGE_CONFIG.defaultValue;
  readonly currentYear = SITE_META.year;
  readonly roomReservationConfig = ROOM_RESERVATION_CONFIG;
  currentViewport: ViewportTier = 'l';

  constructor() {
    this.updateViewportTier();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateViewportTier();
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
        message: strings.noticeBars?.[notice.id] ?? notice.message,
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

  // ===== TRANSLATION GETTERS =====
  private getCurrentLanguageStrings(): any {
    const lang = this.selectedLanguage as any;
    return (this.strings as any)[lang] || (this.strings as any).en;
  }

  get translatedNavLinks(): Array<{ label: string; target: string }> {
    const strings = this.getCurrentLanguageStrings();
    return [
      { label: strings.nav.about, target: '#id_appComponent_aboutSection' },
      { label: strings.nav.pricing, target: '#id_appComponent_pricingSection' },
      { label: strings.nav.gallery, target: '#id_appComponent_gallerySection' },
      { label: strings.nav.faq, target: '#id_appComponent_faqSection' },
      { label: strings.nav.contact, target: '#id_appComponent_contactSection' },
    ];
  }

  get translatedAboutTitle(): string {
    return this.getCurrentLanguageStrings().about.title;
  }

  get translatedAboutParagraphs(): string[] {
    return [...(this.getCurrentLanguageStrings().about.paragraphs as string[])];
  }

  get translatedPricingLabel(): string {
    return this.getCurrentLanguageStrings().pricing.label;
  }

  get translatedPricingColumns(): typeof this.pricingColumns {
    // Return original columns with translated titles via helper method
    return this.pricingColumns;
  }

  get translatedPricingRooms(): typeof ROOM_PRICING {
    return this.getCurrentLanguageStrings().pricing.rooms;
  }

  get translatedGalleryLabel(): string {
    return this.getCurrentLanguageStrings().gallery.label;
  }

  get translatedGalleryDescription(): string {
    return this.getCurrentLanguageStrings().gallery.description;
  }

  get translatedGalleryImages(): any[] {
    const strings = this.getCurrentLanguageStrings();
    return GALLERY.images.map((img, idx) => ({
      ...img,
      label: strings.gallery.images[idx]?.label || img.label,
    }));
  }

  get translatedFaqLabel(): string {
    return this.getCurrentLanguageStrings().faq.label;
  }

  get translatedFaqs(): any[] {
    const strings = this.getCurrentLanguageStrings();
    return [...strings.faq.items] as any[];
  }

  get translatedContactLabel(): string {
    return this.getCurrentLanguageStrings().contact.label;
  }

  get translatedContactPhone(): string {
    return this.getCurrentLanguageStrings().contact.phone;
  }

  get translatedContactAddress(): string {
    return this.getCurrentLanguageStrings().contact.address;
  }

  get translatedContactEmail(): string {
    return this.getCurrentLanguageStrings().contact.email;
  }

  get translatedContactHours(): string {
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
    return {
      phone: strings.contact.phoneLabel,
      address: strings.contact.addressLabel,
      email: strings.contact.emailLabel,
      hours: strings.contact.hoursLabel,
      mapTitle: strings.contact.mapTitle,
    };
  }

  get translatedRoomReservationLabel(): string {
    return this.getCurrentLanguageStrings().roomReservation.label;
  }

  get translatedRoomReservationCopy() {
    const strings = this.getCurrentLanguageStrings();
    return {
      title: strings.roomReservation.title,
      description: strings.roomReservation.description,
      highlights: [...strings.roomReservation.highlights],
      form: {
        checkInLabel: strings.roomReservation.form.checkInLabel,
        checkOutLabel: strings.roomReservation.form.checkOutLabel,
        guestCountLabel: strings.roomReservation.form.guestCountLabel,
        emailLabel: strings.roomReservation.form.emailLabel,
        emailPlaceholder: strings.roomReservation.form.emailPlaceholder,
        submitLabel: strings.roomReservation.form.submitLabel,
      },
    };
  }

  get translatedResourceLinks(): string[] {
    return [...(this.getCurrentLanguageStrings().resourceLinks as string[])];
  }

  get translatedFooter(): string {
    return this.getCurrentLanguageStrings().footer.copyright;
  }

  get translatedFaqPrefix(): any {
    const strings = this.getCurrentLanguageStrings();
    return strings.faq.prefix;
  }

  getTranslatedPricingColumnTitle(columnKey: string): string {
    const strings = this.getCurrentLanguageStrings();
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

