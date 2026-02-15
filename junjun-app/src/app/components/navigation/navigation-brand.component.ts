import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-brand',
  standalone: true,
  template: `
    <div class="brand">
      <img class="brand__icon" [src]="brandIcon" [alt]="brand + ' logo'" [attr.title]="brand" />
      <span class="brand__text">{{ brand }}</span>
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBrandComponent {
  @Input({ required: true }) brand = '';
  @Input({ required: true }) brandIcon = '';
}
