import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly brand = 'Heavenly Connected';
  readonly brandIcon = 'assets/heavenly-connected/88aac0_ac7d639c49e248728c8a55cbe4912025~mv2.png';
  readonly rooftopImage = 'assets/heavenly-connected/d9b33118a3154c3195868a6e5e12ab98.jpg';

  readonly navLinks = [
    { label: 'About', target: '#about' },
    { label: 'Apartments', target: '#apartments' },
    { label: 'Gallery', target: '#gallery' },
    { label: 'Reviews', target: '#reviews' },
    { label: 'Amenities', target: '#amenities' },
    { label: 'FAQs', target: '#faq' },
  ];

  readonly heroCopy = {
    eyebrow: 'Stylish Urban Apartment Rentals',
    title: 'Live Like a Local',
    description:
      'Heavenly Connected offers thoughtfully curated city apartments that balance modern comfort with artisanal character. Each stay is infused with soft textures, custom art, and the energy of the neighborhood.',
    primaryCta: 'Discover Spaces',
    secondaryCta: 'About Us',
    image: 'assets/heavenly-connected/11062b_2bae05e15ef04f02b462dfe5a7e2d22c~mv2.jpg',
    insetImage: 'assets/heavenly-connected/11062b_116970e302ab4a7dab98b06fb1c5be1d~mv2.jpg',
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
      'Situated steps away from galleries, hidden cafes, and leafy parks, Heavenly Connected blends modern amenities with soulful styling. Each unit is finished with locally sourced textiles, sculptural lighting, and immersive art moments that invite you to slow down.',
    secondary:
      'From weekend escapes to extended relocations, our spaces feel airy, uncluttered, and deeply personal.',
    featureImage: 'assets/heavenly-connected/11062b_910b0c82f5774d71a6a9cf62134b3f21~mv2.jpg',
  };

  readonly apartments = [
    {
      name: 'The Artisan Hideaway',
      area: '160 sq. m',
      description:
        'A cozy, handcrafted retreat layered with textured walls, vintage ceramics, and warm lighting for travelers who adore a creative sanctuary.',
      image: 'assets/heavenly-connected/11062b_6306136c687645af808dad2692b32514~mv2.jpeg',
    },
    {
      name: 'The Urban Oasis',
      area: '120 sq. m',
      description:
        'Lush greenery, minimalist silhouettes, and soothing neutral tones create a restorative escape from the rhythm of downtown.',
      image: 'assets/heavenly-connected/11062b_762c77dd9d564d359a225c3ec2eb9e99~mv2.jpg',
    },
    {
      name: 'The Midtown Retreat',
      area: '120 sq. m',
      description:
        'Sleek modern lines softened with earthy hues and curated local art—perfect for city explorers seeking comfort with personality.',
      image: 'assets/heavenly-connected/11062b_914830ce6dd24e47b5c56a5d1b01efda~mv2.jpg',
    },
  ];

  readonly galleryImages = [
    {
      src: 'assets/heavenly-connected/11062b_30d4a81b55b742d1acf4a456ba5edf1b~mv2_d_3400_3400_s_4_2.jpg',
      alt: 'Sun-drenched lounge vignette',
    },
    {
      src: 'assets/heavenly-connected/11062b_58a8e00ae18b4e559b58edb8e3018602~mv2_d_3811_5716_s_4_2.jpg',
      alt: 'Living room with sculptural lighting',
    },
    { src: 'assets/heavenly-connected/11062b_5d8e81048a364466aa04c4133be2b937~mv2.jpg', alt: 'Contemporary reading nook' },
    { src: 'assets/heavenly-connected/11062b_c1cf46e933bc4f9ba86a440a9b4348e8~mv2.jpg', alt: 'Gourmet kitchen with marble surfaces' },
    { src: 'assets/heavenly-connected/11062b_e12e70b804694691a0619a22d02f8a88~mv2.jpg', alt: 'Cozy lounge corner' },
    { src: 'assets/heavenly-connected/837e99f783ed43a497fc5d0efef9c3e0.jpg', alt: 'Suite hallway with art' },
  ];

  readonly testimonials = [
    {
      name: 'Sarah',
      quote: '“The attention to detail in every corner made my stay unforgettable.”',
    },
    {
      name: 'David',
      quote: '“Immersing in the local art scene within the apartment was a delightful surprise.”',
    },
    {
      name: 'Linda',
      quote: '“The cozy yet modern ambiance made it the perfect retreat after a busy day.”',
    },
  ];

  readonly amenities = [
    {
      title: 'Spa',
      subtitle: 'Relaxation Retreat',
      description: 'Massages, facials, and aromatherapy rituals to reset mind and body.',
      icon: 'assets/heavenly-connected/88aac0_ac7d639c49e248728c8a55cbe4912025~mv2.png',
    },
    {
      title: 'Gym',
      subtitle: 'Fitness Haven',
      description: 'A fully equipped studio with curated playlists and personal trainers on-call.',
      icon: 'assets/heavenly-connected/88aac0_0187364db3c34f669400e7582aa3e5b1~mv2.png',
    },
    {
      title: 'Pool',
      subtitle: 'Rooftop Pool',
      description: 'Take a dip above the skyline, complete with cabanas and craft refreshments.',
      icon: 'assets/heavenly-connected/88aac0_97a61d847a914941b7bfa798ff2e3284~mv2.png',
    },
    {
      title: 'Rooftop',
      subtitle: 'Panoramic Views',
      description: 'Sunrise yoga, stargazing dinners, and sweeping perspectives of the city.',
      icon: 'assets/heavenly-connected/11062b_70cd0246f10b48c9b6897b2f18156091~mv2.jpg',
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
    mapImage: 'assets/heavenly-connected/11062b_d5f9d678bfd94439a0f0f529ca4a41b6~mv2.jpg',
  };

  readonly resourceLinks = ['Privacy Policy', 'Accessibility Statement'];
  readonly currentYear = new Date().getFullYear();

  scrollTo(target: string, event: Event): void {
    event.preventDefault();

    if (typeof window === 'undefined') {
      return;
    }

    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  stopNavigation(event: Event): void {
    event.preventDefault();
  }
}
