import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-toggle',
  standalone: true,
  template: `
    <button
      class="menu-toggle"
      type="button"
      aria-label="Toggle navigation"
      [attr.aria-expanded]="isOpen"
      [attr.aria-controls]="controlsId"
      (click)="toggle.emit()"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationToggleComponent {
  @Input({ required: true }) isOpen = false;
  @Input({ required: true }) controlsId = '';
  @Output() toggle = new EventEmitter<void>();
}
