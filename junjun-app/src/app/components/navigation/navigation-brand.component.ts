import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-brand',
  standalone: true,
  template: `
    <div id="id_navigationBrand_brand" class="brand">
      <img id="id_navigationBrand_brandIcon" [src]="brandIcon" [alt]="brand + ' logo'" [attr.title]="brand" />
      <span id="id_navigationBrand_brandText">{{ brand }}</span>
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBrandComponent {
  @Input({ required: true }) brand = '';
  @Input({ required: true }) brandIcon = '';
}
