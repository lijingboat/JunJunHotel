import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-link',
  standalone: true,
  template: `
    <a [attr.id]="id" href="" (click)="onClick($event)">{{ label }}</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationLinkComponent {
  @Input({ required: true }) id = '';
  @Input({ required: true }) label = '';
  @Output() navigate = new EventEmitter<Event>();

  onClick(event: Event): void {
    this.navigate.emit(event);
  }
}
