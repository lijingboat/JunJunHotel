import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface ContactInfo {
  phone: string;
  address: string;
  email: string;
  operationHours: string;
  mapEmbedUrl: string;
}

interface ContactCardLabels {
  phone: string;
  address: string;
  email: string;
  hours: string;
  mapTitle: string;
}

@Component({
  selector: 'app-contact-section',
  standalone: true,
  template: `
    <div id="id_contactSection_container" class="contact-container">
      <div id="id_contactSection_contactCard" class="contact-card">
        <h3 id="id_contactSection_contactTitle">{{ brand }}</h3>
        <div id="id_contactSection_contactList" class="contact-list">
          <div id="id_contactSection_contactPhoneWrapper" class="contact-item">
            <span class="contact-label">{{ labels.phone }}</span>
            <p id="id_contactSection_contactPhone">{{ contact.phone }}</p>
          </div>
          <div id="id_contactSection_contactAddressWrapper" class="contact-item">
            <span class="contact-label">{{ labels.address }}</span>
            <p id="id_contactSection_contactAddress" class="address">{{ contact.address }}</p>
          </div>
          <div id="id_contactSection_contactEmailWrapper" class="contact-item">
            <span class="contact-label">{{ labels.email }}</span>
            <p id="id_contactSection_contactEmail">{{ contact.email }}</p>
          </div>
          <div id="id_contactSection_contactHoursWrapper" class="contact-item">
            <span class="contact-label">{{ labels.hours }}</span>
            <p id="id_contactSection_contactHours">{{ contact.operationHours }}</p>
          </div>
        </div>
      </div>
      <figure id="id_contactSection_mapCard" class="map-card">
        <iframe
          id="id_contactSection_mapFrame"
          [src]="safeMapUrl"
          [title]="labels.mapTitle"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </figure>
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
      border-radius: 1.25rem;
      background: #ffffff;
      box-shadow: 0 0.9375rem 2.1875rem rgba(0, 0, 0, 0.08);
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
      display: grid;
      grid-template-columns: 88px 1fr;
      gap: 0.5rem;
      align-items: start;
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
  @Input({ required: true }) labels!: ContactCardLabels;
  @Input({ required: true }) resourceLinks: string[] = [];
  @Output() linkClick = new EventEmitter<Event>();

  safeMapUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.contact.mapEmbedUrl);
  }
}
