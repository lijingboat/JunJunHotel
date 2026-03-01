import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface ContactInfo {
  phone: string;
  address: string;
  mapEmbedUrl: string;
}

@Component({
  selector: 'app-contact-section',
  standalone: true,
  template: `
    <div id="id_contactSection_contactCard" class="contact-card">
      <h3 id="id_contactSection_contactTitle">{{ brand }}</h3>
      <div id="id_contactSection_contactList" class="contact-list">
        <p id="id_contactSection_contactPhone">{{ contact.phone }}</p>
        <p id="id_contactSection_contactAddress" class="address">{{ contact.address }}</p>
      </div>
    </div>
    <figure id="id_contactSection_mapCard" class="map-card">
      <iframe
        id="id_contactSection_mapFrame"
        [src]="safeMapUrl"
        title="Jun Jun Hotel map"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </figure>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent implements OnInit {
  @Input({ required: true }) brand = '';
  @Input({ required: true }) contact!: ContactInfo;
  @Input({ required: true }) resourceLinks: string[] = [];
  @Output() linkClick = new EventEmitter<Event>();

  safeMapUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.contact.mapEmbedUrl);
  }
}
