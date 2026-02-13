import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  mapImage: string;
}

@Component({
  selector: 'app-contact-section',
  standalone: true,
  template: `
    <div id="id_contactSection_contactCard" class="contact-card">
      <p id="id_contactSection_contactEyebrow" class="eyebrow">{{ brand }}</p>
      <h3 id="id_contactSection_contactTitle">Contact & Location</h3>
      <p id="id_contactSection_contactDescription">Located at 374 College Street in Downtown Toronto, with quick access to transit, shops, and city attractions.</p>
      <div id="id_contactSection_contactList" class="contact-list">
        <a id="id_contactSection_contactPhone" href="" (click)="linkClick.emit($event)">{{ contact.phone }}</a>
        <a id="id_contactSection_contactEmail" href="" (click)="linkClick.emit($event)">{{ contact.email }}</a>
      </div>
      <p id="id_contactSection_contactAddress" class="address">{{ contact.address }}</p>
      <div id="id_contactSection_footerLinks" class="footer-links">
        @for (link of resourceLinks; track link; let resourceIndex = $index) {
          <a [attr.id]="'id_contactSection_footerLink_' + resourceIndex" href="" (click)="linkClick.emit($event)">{{ link }}</a>
        }
      </div>
    </div>
    <figure id="id_contactSection_mapCard" class="map-card">
      <img id="id_contactSection_mapImage" [src]="contact.mapImage" alt="Jun Jun Hotel location map" [attr.title]="'Jun Jun Hotel location map'" />
      <div id="id_contactSection_mapOverlay" class="map-overlay">
        <h4 id="id_contactSection_mapOverlayTitle">Visit Us</h4>
        <p id="id_contactSection_mapOverlayAddress">{{ contact.address }}</p>
      </div>
    </figure>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  @Input({ required: true }) brand = '';
  @Input({ required: true }) contact!: ContactInfo;
  @Input({ required: true }) resourceLinks: string[] = [];
  @Output() linkClick = new EventEmitter<Event>();
}
