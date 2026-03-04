import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
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
  FAQS,
  GALLERY_IMAGES,
  NAV_LINKS,
  RESOURCE_LINKS,
  ROOM_PRICING,
  SITE_META,
} from './app.content';

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
  readonly aboutImages = ABOUT_IMAGES;
  readonly roomPricing = ROOM_PRICING;
  readonly galleryImages = GALLERY_IMAGES;
  readonly GALLERY_DESCRIPTION = 'The following are the picked images showcasing our rooms and amenities.';
  readonly faqs = FAQS;
  readonly contact = CONTACT;
  readonly resourceLinks = [...RESOURCE_LINKS];
  readonly currentYear = SITE_META.year;

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

