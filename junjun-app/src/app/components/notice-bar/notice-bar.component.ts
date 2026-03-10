import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

export type NoticeBarLevel = 'navy' | 'red' | 'blue' | 'green';

export interface NoticeBarConfig {
  message: string;
  level: NoticeBarLevel;
  visible: boolean;
}

@Component({
  selector: 'app-notice-bar',
  standalone: true,
  imports: [NgClass],
  template: `
    @if (config.visible) {
      <div 
        id="id_noticeBar_container" 
        class="notice-bar"
        [ngClass]="'notice-bar--' + config.level">
        <p id="id_noticeBar_message">{{ config.message }}</p>
      </div>
    }
  `,
  styles: [`
    .notice-bar {
      padding: 1rem 1.5rem;
      border-radius: 0.75rem;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .notice-bar p {
      margin: 0;
      font-weight: 700;
      font-size: clamp(0.95rem, 0.4vw + 0.88rem, 1.1rem);
      line-height: 1.5;
    }

    /* Navy Banner - using Bootstrap primary-bg-subtle */
    .notice-bar--navy {
      background-color: var(--bs-primary-bg-subtle, #cfe2ff);
      color: var(--bs-emphasis-color, #052c65);
    }

    /* Red Banner - using Bootstrap danger */
    .notice-bar--red {
      background-color: var(--bs-danger, #dc3545);
      color: var(--bs-emphasis-color, #ffffff);
    }

    /* Blue Banner - using Bootstrap primary */
    .notice-bar--blue {
      background-color: var(--bs-primary, #0d6efd);
      color: var(--bs-emphasis-color, #ffffff);
    }

    /* Green Banner - using Bootstrap success */
    .notice-bar--green {
      background-color: var(--bs-success, #198754);
      color: var(--bs-emphasis-color, #ffffff);
    }

    @media (max-width: 48rem) {
      .notice-bar {
        padding: 0.875rem 1.25rem;
        border-radius: 0.625rem;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticeBarComponent {
  @Input({ required: true }) config!: NoticeBarConfig;
}
