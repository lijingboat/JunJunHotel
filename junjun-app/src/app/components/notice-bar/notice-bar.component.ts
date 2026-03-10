import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

export type NoticeBarLevel = 'navy' | 'red' | 'blue' | 'green';

export interface NoticeBarConfig {
  id: string;
  message: string;
  level: NoticeBarLevel;
  visible: boolean;
  beginDate?: string;
  expireDate?: string;
  faqTargetIndex?: number | null;
}

@Component({
  selector: 'app-notice-bar',
  standalone: true,
  imports: [NgClass],
  template: `
    @if (config.visible && !dismissed) {
      <div [attr.id]="'id_noticeBar_container_' + config.id" class="notice-bar" [ngClass]="'notice-bar--' + config.level" [style.color]="textColor">
        <button [attr.id]="'id_noticeBar_closeButton_' + config.id" class="notice-bar__close" type="button" (click)="closeNotice($event)" aria-label="Dismiss notice">
          ×
        </button>

        @if (hasFaqLink) {
          <a [attr.id]="'id_noticeBar_link_' + config.id" class="notice-bar__message" href="#" (click)="onNoticeClick($event)">{{ config.message }}</a>
        } @else {
          <p [attr.id]="'id_noticeBar_message_' + config.id" class="notice-bar__message">{{ config.message }}</p>
        }
      </div>
    }
  `,
  styles: [`
    .notice-bar {
      position: relative;
      padding: 1rem 1.5rem;
      border-radius: 0.75rem;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .notice-bar__message {
      display: block;
      margin: 0;
      font-weight: 700;
      font-size: clamp(0.95rem, 0.4vw + 0.88rem, 1.1rem);
      line-height: 1.5;
      color: inherit;
      text-decoration: none;
    }

    a.notice-bar__message:hover,
    a.notice-bar__message:focus-visible {
      text-decoration: underline;
    }

    .notice-bar__close {
      position: absolute;
      top: 0.4rem;
      right: 0.6rem;
      border: 0;
      background: transparent;
      color: inherit;
      font-size: 1.25rem;
      line-height: 1;
      cursor: pointer;
      padding: 0.25rem;
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
  @Input() textColor = '#f8f6ef';
  @Output() navigateToFaq = new EventEmitter<number>();

  dismissed = false;

  get hasFaqLink(): boolean {
    return this.config.faqTargetIndex !== undefined && this.config.faqTargetIndex !== null;
  }

  closeNotice(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.dismissed = true;
  }

  onNoticeClick(event: Event): void {
    event.preventDefault();
    if (this.config.faqTargetIndex !== undefined && this.config.faqTargetIndex !== null) {
      this.navigateToFaq.emit(this.config.faqTargetIndex);
    }
  }
}
