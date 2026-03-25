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

interface QrCardLabels {
  title: string;
  hint: string;
  copyQrButton: string;
  copySuccess: string;
  copyFallback: string;
  copyError: string;
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
      <aside id="id_contactSection_qrCard" class="qr-card">
        <h4 id="id_contactSection_qrTitle" class="qr-card__title">{{ qrLabels.title }}</h4>
        <button
          id="id_contactSection_qrImageButton"
          class="qr-card__imageButton"
          type="button"
          (click)="copyQrImageData()"
          [attr.aria-label]="qrLabels.copyQrButton"
        >
          <img id="id_contactSection_qrImage" [src]="qrImageUrl" alt="Jun Jun Hotel website QR code" />
        </button>
        <p id="id_contactSection_qrHint" class="qr-card__hint">{{ qrLabels.hint }}</p>
        <div id="id_contactSection_qrActions" class="qr-card__actions">
          <button id="id_contactSection_copyQrButton" class="qr-btn qr-btn--outline" type="button" (click)="copyQrImageData()">
            {{ qrLabels.copyQrButton }}
          </button>
        </div>
        <p id="id_contactSection_qrStatus" class="qr-card__status" aria-live="polite">{{ qrStatusMessage }}</p>
      </aside>
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
      grid-template-columns: minmax(0, 1fr) minmax(15rem, 0.8fr) minmax(0, 1.2fr);
      gap: 2rem;
      align-items: stretch;
    }
    @media (max-width: 1280px) {
      .contact-container {
        grid-template-columns: 1fr;
      }
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
      box-shadow: 0 0.9375rem 2.1875rem rgba(0, 0, 0, 0.08);
      background: #fff;
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
    .qr-card {
      padding: 1.3rem 1.1rem;
      border-radius: 1.25rem;
      background: #ffffff;
      box-shadow: 0 0.9375rem 2.1875rem rgba(0, 0, 0, 0.08);
      border: 1px solid rgba(31, 26, 23, 0.12);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-height: 20rem;
      gap: 0.55rem;
    }
    .qr-card__title {
      margin: 0;
      font-size: 1rem;
      font-weight: 700;
      color: #1f1a17;
    }
    .qr-card__imageButton {
      border: none;
      background: transparent;
      padding: 0;
      margin: 0;
      cursor: pointer;
      border-radius: 0.75rem;
      line-height: 0;
    }
    .qr-card__imageButton:focus-visible {
      outline: 3px solid rgba(193, 138, 95, 0.7);
      outline-offset: 3px;
    }
    .qr-card__imageButton img {
      width: min(11.5rem, 40vw);
      height: min(11.5rem, 40vw);
      object-fit: contain;
      background: #fff;
      border-radius: 0.75rem;
      border: 1px solid rgba(31, 26, 23, 0.14);
      box-shadow: 0 0.625rem 1.45rem rgba(31, 26, 23, 0.12);
    }
    .qr-card__hint {
      margin: 0;
      color: #4d4035;
      font-size: 0.95rem;
      line-height: 1.45;
      max-width: 19rem;
    }
    .qr-card__actions {
      margin-top: 0.2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.55rem;
    }
    .qr-btn {
      appearance: none;
      border-radius: 62.4375rem;
      font-size: 0.95rem;
      font-weight: 600;
      line-height: 1;
      padding: 0.62rem 1rem;
      border: 1px solid #1f1a17;
      cursor: pointer;
      transition: all 0.2s ease;
      min-height: 2.1rem;
    }
    .qr-btn--solid {
      background: #1f1a17;
      color: #fff9f5;
    }
    .qr-btn--solid:hover {
      background: #4d4035;
      border-color: #4d4035;
    }
    .qr-btn--outline {
      background: #f4e7db;
      color: #1f1a17;
    }
    .qr-btn--outline:hover {
      background: #ead7c5;
    }
    .qr-card__status {
      margin: 0.25rem 0 0;
      min-height: 1.3rem;
      font-size: 0.88rem;
      color: #8a5d37;
      font-weight: 600;
    }
    @media (max-width: 1280px) {
      .qr-card {
        min-height: auto;
      }
      .qr-card__imageButton img {
        width: min(13rem, 55vw);
        height: min(13rem, 55vw);
      }
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
  @Input({ required: true }) qrLabels!: QrCardLabels;
  @Input({ required: true }) resourceLinks: string[] = [];
  @Output() linkClick = new EventEmitter<Event>();

  safeMapUrl: SafeResourceUrl = '';
  readonly websiteUrl = 'https://www.junjunhotel.com';
  readonly qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=420x420&format=png&data=${encodeURIComponent(this.websiteUrl)}`;
  qrStatusMessage = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.contact.mapEmbedUrl);
  }

  async copyQrImageData(): Promise<void> {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const response = await fetch(this.qrImageUrl, { mode: 'cors' });
      if (!response.ok) {
        throw new Error('QR fetch failed');
      }

      const blob = await response.blob();
      const clipboardApi = navigator.clipboard;
      const ClipboardItemCtor = (window as Window & { ClipboardItem?: typeof ClipboardItem }).ClipboardItem;

      if (clipboardApi?.write && ClipboardItemCtor) {
        const type = blob.type || 'image/png';
        const item = new ClipboardItemCtor({ [type]: blob });
        await clipboardApi.write([item]);
        this.qrStatusMessage = this.qrLabels.copySuccess;
        return;
      }

      if (clipboardApi?.writeText) {
        const dataUrl = await this.blobToDataUrl(blob);
        await clipboardApi.writeText(dataUrl);
        this.qrStatusMessage = this.qrLabels.copyFallback;
        return;
      }

      throw new Error('No clipboard support');
    } catch {
      this.qrStatusMessage = this.qrLabels.copyError;
    }
  }

  private blobToDataUrl(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
          return;
        }
        reject(new Error('Unable to convert blob to data URL'));
      };
      reader.onerror = () => reject(new Error('FileReader error'));
      reader.readAsDataURL(blob);
    });
  }
}
