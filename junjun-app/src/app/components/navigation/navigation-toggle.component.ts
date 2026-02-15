import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-toggle',
  standalone: true,
  template: `
    <button
      id="id_navigationToggle_button"
      class="menu-toggle"
      type="button"
      aria-label="Toggle navigation"
      [attr.aria-expanded]="isOpen"
      [attr.aria-controls]="controlsId"
      (click)="toggle.emit()"
    >
      <span id="id_navigationToggle_bar_1" aria-hidden="true"></span>
      <span id="id_navigationToggle_bar_2" aria-hidden="true"></span>
      <span id="id_navigationToggle_bar_3" aria-hidden="true"></span>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationToggleComponent {
  @Input({ required: true }) isOpen = false;
  @Input({ required: true }) controlsId = '';
  @Output() toggle = new EventEmitter<void>();
}
