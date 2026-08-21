import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-brand',
  standalone: true,
  template: `
    <div id="id_navigationBrand_container" class="brand">
      <button id="id_navigationBrand_homeButton" class="brand__home" type="button" (click)="navigateHome.emit()" [attr.aria-label]="brand + ' home'">
        <img
          id="id_navigationBrand_icon"
          class="brand__icon"
          [src]="brandIcon"
          [alt]="brand + ' icon'"
        />
        <span id="id_navigationBrand_text" class="brand__text">{{ brand }}</span>
        @if (phone) {
          <span id="id_appComponent_headerPhone" class="site-header__phone">{{ phone }}</span>
        }
      </button>
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBrandComponent {
  @Input({ required: true }) brand = '';
  @Input({ required: true }) brandIcon = '';
  @Input() phone = '';
  @Output() navigateHome = new EventEmitter<void>();
}
