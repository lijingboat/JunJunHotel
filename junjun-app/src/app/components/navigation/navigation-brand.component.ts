import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation-brand',
  standalone: true,
  template: `
    <div id="id_navigationBrand_container" class="brand">
      <button id="id_navigationBrand_homeButton" class="brand__home" type="button" (click)="navigateHome.emit()" [attr.aria-label]="brand + ' home'">
        <img id="id_navigationBrand_icon" class="brand__icon" [src]="safeIconUrl" [alt]="brand + ' logo'" [attr.title]="brand" />
        <span id="id_navigationBrand_text" class="brand__text">{{ brand }}</span>
      </button>
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBrandComponent implements OnInit {
  @Input({ required: true }) brand = '';
  @Input({ required: true }) brandIcon = '';
  @Output() navigateHome = new EventEmitter<void>();

  safeIconUrl: SafeUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeIconUrl = this.sanitizer.bypassSecurityTrustUrl(this.brandIcon);
  }
}
