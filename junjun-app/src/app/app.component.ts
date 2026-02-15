import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ContactSectionComponent } from './components/contact/contact-section.component';
import { NavigationBrandComponent } from './components/navigation/navigation-brand.component';
import { NavigationCtaComponent } from './components/navigation/navigation-cta.component';
import { NavigationLinkComponent } from './components/navigation/navigation-link.component';
import { NavigationToggleComponent } from './components/navigation/navigation-toggle.component';
import { RoomReservationSectionComponent } from './components/room-reservation/room-reservation-section.component';
import {
  ABOUT,
  AMENITIES,
  APARTMENTS,
  CONTACT,
  FAQS,
  GALLERY_IMAGES,
  HERO_COPY,
  HERO_STATS,
  NAV_LINKS,
  RESOURCE_LINKS,
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
  readonly brand = 'Jun Jun Hotel';
  readonly brandIcon = 'assets/heavenly-connected/brand-mark-icon.png';
  readonly rooftopImage = 'assets/heavenly-connected/rooftop-evening-view.jpg';

  readonly navLinks = NAV_LINKS;
  readonly heroCopy = HERO_COPY;
  readonly heroStats = HERO_STATS;
  readonly about = ABOUT;
  readonly apartments = APARTMENTS;
  readonly galleryImages = GALLERY_IMAGES;
  readonly amenities = AMENITIES;
  readonly faqs = FAQS;
  readonly contact = CONTACT;
  readonly resourceLinks = [...RESOURCE_LINKS];
  readonly currentYear = new Date().getFullYear();

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
