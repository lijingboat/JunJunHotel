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
    <div id="id_contactSection_container" class="contact-container">
      <figure id="id_contactSection_mapCard" class="map-card">
        <iframe
          id="id_contactSection_mapFrame"
          [src]="safeMapUrl"
          title="Jun Jun Hotel map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </figure>
      <div id="id_contactSection_contactCard" class="contact-card">
        <h3 id="id_contactSection_contactTitle">{{ brand }}</h3>
        <div id="id_contactSection_contactList" class="contact-list">
          <div id="id_contactSection_contactPhoneWrapper" class="contact-item">
            <span class="contact-label">Phone:</span>
            <p id="id_contactSection_contactPhone">{{ contact.phone }}</p>
          </div>
          <div id="id_contactSection_contactAddressWrapper" class="contact-item">
            <span class="contact-label">Address:</span>
            <p id="id_contactSection_contactAddress" class="address">{{ contact.address }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    .contact-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: stretch;
    }
    @media (max-width: 1024px) {
      .contact-container {
        grid-template-columns: 1fr;
      }
    }
    .map-card {
      margin: 0;
      border-radius: 0.5rem;
      overflow: hidden;
      min-height: 20rem;
    }
    .map-card iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
    .contact-card {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    #id_contactSection_contactTitle {
      margin: 0 0 1.5rem 0;
      font-weight: 600;
    }
    .contact-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .contact-item {
      display: flex;
      gap: 0.5rem;
    }
    .contact-label {
      font-weight: 700;
      min-width: 80px;
    }
    .contact-item p {
      margin: 0;
      flex: 1;
    }
  `],
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
