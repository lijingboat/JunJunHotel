import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-brand',
  standalone: true,
  template: `
    <div id="id_navigationBrand_container" class="brand">
      <button id="id_navigationBrand_homeButton" class="brand__home" type="button" (click)="navigateHome.emit()" [attr.aria-label]="brand + ' home'">
        <svg
          id="id_navigationBrand_icon"
          class="brand__icon"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          [attr.aria-label]="brand + ' hostel icon'"
        >
          <path d="M8 28L32 12l24 16" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 28h40v24H12z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
          <rect x="18" y="36" width="20" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="3"/>
          <line x1="20" y1="34" x2="20" y2="30" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
          <line x1="24" y1="34" x2="24" y2="30" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
          <circle cx="47" cy="38" r="3" fill="currentColor"/>
          <line x1="42" y1="47" x2="52" y2="47" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <span id="id_navigationBrand_text" class="brand__text">{{ brand }}</span>
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
