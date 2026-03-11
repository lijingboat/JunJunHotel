import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Input } from '@angular/core';

interface RoomReservationVisibility {
  showContent: boolean;
  showHighlights: boolean;
  showForm: boolean;
}

interface RoomReservationCopy {
  title: string;
  description: string;
  highlights: string[];
  form: {
    checkInLabel: string;
    checkOutLabel: string;
    guestCountLabel: string;
    emailLabel: string;
    emailPlaceholder: string;
    submitLabel: string;
  };
}

@Component({
  selector: 'app-room-reservation-section',
  standalone: true,
  template: `
    <div id="id_roomReservationSection_layout" class="reservation-layout">
      @if (config.showContent || config.showHighlights) {
        <div id="id_roomReservationSection_content" class="reservation-content">
          @if (config.showContent) {
            <h3 id="id_roomReservationSection_title">{{ copy.title }}</h3>
            <p id="id_roomReservationSection_description">
              {{ copy.description }}
            </p>
          }
          @if (config.showHighlights) {
            <ul id="id_roomReservationSection_highlightList" class="reservation-highlights">
              @for (highlight of copy.highlights; track highlight; let highlightIndex = $index) {
                <li [attr.id]="'id_roomReservationSection_highlightItem_' + highlightIndex">{{ highlight }}</li>
              }
            </ul>
          }
        </div>
      }

      @if (config.showForm) {
        <form id="id_roomReservationSection_form" class="reservation-form" (submit)="submitReservation($event)">
          <label id="id_roomReservationSection_checkInLabel" for="id_roomReservationSection_checkInInput">{{ copy.form.checkInLabel }}</label>
          <input id="id_roomReservationSection_checkInInput" type="date" required />

          <label id="id_roomReservationSection_checkOutLabel" for="id_roomReservationSection_checkOutInput">{{ copy.form.checkOutLabel }}</label>
          <input id="id_roomReservationSection_checkOutInput" type="date" required />

          <label id="id_roomReservationSection_guestCountLabel" for="id_roomReservationSection_guestCountInput">{{ copy.form.guestCountLabel }}</label>
          <input id="id_roomReservationSection_guestCountInput" type="number" min="1" max="10" value="2" required />

          <label id="id_roomReservationSection_emailLabel" for="id_roomReservationSection_emailInput">{{ copy.form.emailLabel }}</label>
          <input id="id_roomReservationSection_emailInput" type="email" [placeholder]="copy.form.emailPlaceholder" required />

          <button id="id_roomReservationSection_submitButton" type="submit" class="book-button">{{ copy.form.submitLabel }}</button>
        </form>
      }
    </div>
  `,
  styles: [
    `
      .reservation-layout {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
        gap: 1.5rem;
      }

      .reservation-content p {
        margin-top: 0;
        color: #4d4035;
        line-height: 1.6;
      }

      .reservation-highlights {
        margin: 1rem 0 0;
        padding-left: 1.1rem;
        color: #4d4035;
        display: grid;
        gap: 0.45rem;
        font-size: clamp(0.98rem, 0.3vw + 0.92rem, 1.08rem);
      }

      .reservation-form {
        display: grid;
        gap: 0.65rem;
        padding: 1.25rem;
        background: #ffffff;
        border-radius: 1.25rem;
        box-shadow: 0 1.5625rem 3.75rem rgba(23, 17, 14, 0.15);
      }

      .reservation-form label {
        font-size: clamp(0.85rem, 0.2vw + 0.82rem, 0.95rem);
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #4d4035;
      }

      .reservation-form input {
        border: 1px solid rgba(31, 26, 23, 0.12);
        border-radius: 12px;
        padding: 0.75rem 0.85rem;
        font: inherit;
      }

      .reservation-form .book-button {
        margin-top: 0.5rem;
        border: 0;
        cursor: pointer;
      }

      @media (max-width: 900px) {
        .reservation-layout {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomReservationSectionComponent {
  @Input({ required: true }) config!: RoomReservationVisibility;
  @Input({ required: true }) copy!: RoomReservationCopy;

  submitReservation(event: Event): void {
    event.preventDefault();
  }
}
