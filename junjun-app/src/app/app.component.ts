import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ContactSectionComponent } from './components/contact/contact-section.component';
import { NavigationBrandComponent } from './components/navigation/navigation-brand.component';
import { NavigationCtaComponent } from './components/navigation/navigation-cta.component';
import { NavigationLinkComponent } from './components/navigation/navigation-link.component';
import { NavigationToggleComponent } from './components/navigation/navigation-toggle.component';
import { RoomReservationSectionComponent } from './components/room-reservation/room-reservation-section.component';

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

  readonly navLinks = [
    { label: 'About', target: '#id_appComponent_aboutSection' },
    { label: 'Pricing', target: '#id_appComponent_pricingSection' },
    { label: 'Gallery', target: '#id_appComponent_gallerySection' },
    { label: 'FAQ', target: '#id_appComponent_faqSection' },
    { label: 'Contact', target: '#id_appComponent_contactSection' },
  ];

  readonly heroCopy = {
    eyebrow: 'Stylish Urban Apartment Rentals',
    title: 'Live Like a Local',
    description:
      'Jun Jun Hotel offers thoughtfully curated city apartments that balance modern comfort with artisanal character. Each stay is infused with soft textures, custom art, and the energy of the neighborhood.',
    primaryCta: 'Discover Spaces',
    secondaryCta: 'About Us',
    image: 'assets/heavenly-connected/hero-living-room.jpg',
    insetImage: 'assets/heavenly-connected/hero-inset-design-vignette.jpg',
  };

  readonly heroStats = [
    { value: '12', label: 'Curated Apartments' },
    { value: '4.9/5', label: 'Guest Rating' },
    { value: '3', label: 'Cities Covered' },
  ];

  readonly about = {
    eyebrow: 'Our Story',
    title: 'Design-forward stays in the heart of the city',
    body:
      'Situated steps away from galleries, hidden cafes, and leafy parks, Jun Jun Hotel blends modern amenities with soulful styling. Each unit is finished with locally sourced textiles, sculptural lighting, and immersive art moments that invite you to slow down.',
    secondary:
      'From weekend escapes to extended relocations, our spaces feel airy, uncluttered, and deeply personal.',
    featureImage: 'assets/heavenly-connected/about-apartment-detail.jpg',
  };

  readonly apartments = [
    {
      name: 'The Artisan Hideaway',
      area: '160 sq. m',
      description:
        'A cozy, handcrafted retreat layered with textured walls, vintage ceramics, and warm lighting for travelers who adore a creative sanctuary.',
      image: 'assets/heavenly-connected/apartment-artisan-hideaway.jpeg',
    },
    {
      name: 'The Urban Oasis',
      area: '120 sq. m',
      description:
        'Lush greenery, minimalist silhouettes, and soothing neutral tones create a restorative escape from the rhythm of downtown.',
      image: 'assets/heavenly-connected/apartment-urban-oasis.jpg',
    },
    {
      name: 'The Midtown Retreat',
      area: '120 sq. m',
      description:
        'Sleek modern lines softened with earthy hues and curated local art—perfect for city explorers seeking comfort with personality.',
      image: 'assets/heavenly-connected/apartment-midtown-retreat.jpg',
    },
  ];

  readonly galleryImages = [
    {
      src: 'assets/heavenly-connected/gallery-sunlit-lounge.jpg',
      alt: 'Sun-drenched lounge vignette',
    },
    {
      src: 'assets/heavenly-connected/gallery-sculptural-lighting.jpg',
      alt: 'Living room with sculptural lighting',
    },
    { src: 'assets/heavenly-connected/gallery-reading-nook.jpg', alt: 'Contemporary reading nook' },
    { src: 'assets/heavenly-connected/gallery-gourmet-kitchen.jpg', alt: 'Gourmet kitchen with marble surfaces' },
    { src: 'assets/heavenly-connected/gallery-cozy-lounge.jpg', alt: 'Cozy lounge corner' },
    { src: 'assets/heavenly-connected/gallery-suite-hallway.jpg', alt: 'Suite hallway with art' },
  ];

  readonly amenities = [
    {
      title: 'Spa',
      subtitle: 'Relaxation Retreat',
      description: 'Massages, facials, and aromatherapy rituals to reset mind and body.',
      icon: 'assets/heavenly-connected/brand-mark-icon.png',
    },
    {
      title: 'Gym',
      subtitle: 'Fitness Haven',
      description: 'A fully equipped studio with curated playlists and personal trainers on-call.',
      icon: 'assets/heavenly-connected/amenity-gym-icon.png',
    },
    {
      title: 'Pool',
      subtitle: 'Rooftop Pool',
      description: 'Take a dip above the skyline, complete with cabanas and craft refreshments.',
      icon: 'assets/heavenly-connected/amenity-pool-icon.png',
    },
    {
      title: 'Rooftop',
      subtitle: 'Panoramic Views',
      description: 'Sunrise yoga, stargazing dinners, and sweeping perspectives of the city.',
      icon: 'assets/heavenly-connected/amenity-rooftop.jpg',
    },
  ];

  readonly faqs = [
    {
      title: 'Booking Process',
      body:
        'Browse the collection, select dates, and submit the reservation form. We share access instructions and concierge contacts once confirmed.',
    },
    {
      title: 'Amenities Included',
      body:
        'High-speed Wi-Fi, fully stocked kitchens, premium linens, climate control, and curated neighborhood guides are standard.',
    },
    {
      title: 'Cancellation Policy',
      body:
        'Plans change—we offer flexible cancellations up to 5 days before arrival. Review your confirmation for complete details.',
    },
  ];

  readonly contact = {
    phone: '123-456-7890',
    email: 'info@mysite.com',
    address: '500 Terry Francine St.\nSan Francisco, CA 94158',
    mapImage: 'assets/heavenly-connected/contact-map-rooftop-view.jpg',
  };

  readonly resourceLinks = ['Privacy Policy', 'Accessibility Statement'];
  readonly currentYear = new Date().getFullYear();

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
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
