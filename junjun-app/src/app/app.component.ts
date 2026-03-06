import { ChangeDetectionStrategy, Component, HostListener, ViewEncapsulation } from '@angular/core';
import { ContactSectionComponent } from './components/contact/contact-section.component';
import { NavigationBrandComponent } from './components/navigation/navigation-brand.component';
import { NavigationCtaComponent } from './components/navigation/navigation-cta.component';
import { NavigationLinkComponent } from './components/navigation/navigation-link.component';
import { NavigationToggleComponent } from './components/navigation/navigation-toggle.component';
import { RoomReservationSectionComponent } from './components/room-reservation/room-reservation-section.component';
import {
  ABOUT,
  ABOUT_IMAGES,
  ASSETS,
  CONTACT,
  FAQ_CONFIG,
  FAQS,
  GALLERY,
  NAV_LINKS,
  PRICING,
  RESOURCE_LINKS,
  ROOM_PRICING,
  SITE_META,
} from './app.content';

type ViewportTier = 'xs' | 's' | 'm' | 'l';
type RoomKey = 'roomType' | 'capacity' | 'duration' | 'priceAfterTax' | 'facility';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactSectionComponent, NavigationBrandComponent, NavigationToggleComponent, NavigationLinkComponent, NavigationCtaComponent, RoomReservationSectionComponent],
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
  readonly about = ABOUT;
  readonly aboutParagraphs = ABOUT.paragraphs;
  readonly aboutImages = ABOUT_IMAGES;
  readonly pricingTitle = PRICING.title;
  readonly roomPricing = ROOM_PRICING;
  readonly pricingColumns = PRICING.columns;
  readonly galleryImages = GALLERY.images;
  readonly faqs = FAQS;
  readonly faqConfig = FAQ_CONFIG;
  readonly contact = CONTACT;
  readonly resourceLinks = [...RESOURCE_LINKS];
  readonly currentYear = SITE_META.year;
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

  getPricingValue(room: (typeof this.roomPricing)[number], key: RoomKey): string {
    return room[key];
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

    if (typeof window === 'undefined') {
      return;
    }

    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  stopNavigation(event: Event): void {
    event.preventDefault();
  }
}

