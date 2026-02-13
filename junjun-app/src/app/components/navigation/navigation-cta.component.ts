import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-cta',
  standalone: true,
  template: `
    <a id="id_navigationCta_anchor" class="book-button" href="" (click)="clicked.emit($event)">{{ label }}</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationCtaComponent {
  @Input({ required: true }) label = '';
  @Output() clicked = new EventEmitter<Event>();
}
