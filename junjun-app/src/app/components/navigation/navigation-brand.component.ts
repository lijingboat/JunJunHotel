import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-brand',
  standalone: true,
  template: `
    <div class="brand">
      <button class="brand__home" type="button" (click)="navigateHome.emit()" [attr.aria-label]="brand + ' home'">
        <img class="brand__icon" [src]="brandIcon" [alt]="brand + ' logo'" [attr.title]="brand" />
        <span class="brand__text">{{ brand }}</span>
      </button>
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBrandComponent {
  @Input({ required: true }) brand = '';
  @Input({ required: true }) brandIcon = '';
  @Output() navigateHome = new EventEmitter<void>();
}
