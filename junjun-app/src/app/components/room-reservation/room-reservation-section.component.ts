import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-room-reservation-section',
  standalone: true,
  template: `
    <div id="id_roomReservationSection_layout" class="reservation-layout">
      <div id="id_roomReservationSection_content" class="reservation-content">
        <p id="id_roomReservationSection_eyebrow" class="eyebrow">Room Reservation</p>
        <h3 id="id_roomReservationSection_title">Reserve your preferred stay dates</h3>
        <p id="id_roomReservationSection_description">
          Share your stay details and our team will confirm the best room option, pricing, and availability.
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

        <button id="id_roomReservationSection_submitButton" type="submit" class="book-button">Request Reservation</button>
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
        color: var(--dusk);
        line-height: 1.6;
      }

      .reservation-highlights {
        margin: 1rem 0 0;
        padding-left: 1.1rem;
        color: var(--dusk);
        display: grid;
        gap: 0.45rem;
      }

      .reservation-form {
        display: grid;
        gap: 0.65rem;
        padding: 1.25rem;
        background: #ffffff;
        border-radius: var(--radius-md);
        box-shadow: var(--card-shadow);
      }

      .reservation-form label {
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--dusk);
      }

      .reservation-form input {
        border: 1px solid var(--line);
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
  readonly highlights = ['Flexible check-in options', 'Transparent nightly rates', 'Concierge confirmation within 24 hours'];

  submitReservation(event: Event): void {
    event.preventDefault();
  }
}
