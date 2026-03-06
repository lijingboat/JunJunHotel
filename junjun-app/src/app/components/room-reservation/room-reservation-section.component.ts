import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-room-reservation-section',
  standalone: true,
  template: `
    <div id="id_roomReservationSection_layout" class="reservation-layout">
      <div id="id_roomReservationSection_content" class="reservation-content">
        <h3 id="id_roomReservationSection_title">Reserve your room with no online fee</h3>
        <p id="id_roomReservationSection_description">
          Reservations can be made without a credit card. Cash deposit reservations are accepted in person.
        </p>
        <ul id="id_roomReservationSection_highlightList" class="reservation-highlights">
          @for (highlight of highlights; track highlight; let highlightIndex = $index) {
            <li [attr.id]="'id_roomReservationSection_highlightItem_' + highlightIndex">{{ highlight }}</li>
          }
        </ul>
      </div>

      <form id="id_roomReservationSection_form" class="reservation-form" (submit)="submitReservation($event)">
        <label id="id_roomReservationSection_checkInLabel" for="id_roomReservationSection_checkInInput">Check-in</label>
        <input id="id_roomReservationSection_checkInInput" type="date" required />

        <label id="id_roomReservationSection_checkOutLabel" for="id_roomReservationSection_checkOutInput">Check-out</label>
        <input id="id_roomReservationSection_checkOutInput" type="date" required />

        <label id="id_roomReservationSection_guestCountLabel" for="id_roomReservationSection_guestCountInput">Guests</label>
        <input id="id_roomReservationSection_guestCountInput" type="number" min="1" max="10" value="2" required />

        <label id="id_roomReservationSection_emailLabel" for="id_roomReservationSection_emailInput">Email</label>
        <input id="id_roomReservationSection_emailInput" type="email" placeholder="you@example.com" required />

        <button id="id_roomReservationSection_submitButton" type="submit" class="book-button">Submit Reservation Request</button>
      </form>
    </div>
  `,
  styles: [
    `
      .reservation-layout {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
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
  readonly highlights = [
    '4-hour temporary rooms currently from CAD $50 (cash price after tax)',
    'Check-in from 1:00 PM and check-out by 12:00 PM (noon)',
    'Optional parking available at CAD $10 per spot per night',
  ];

  submitReservation(event: Event): void {
    event.preventDefault();
  }
}
