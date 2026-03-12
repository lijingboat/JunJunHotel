import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

type FieldType = 'text' | 'number' | 'boolean' | 'color' | 'date';

interface AdminField {
  root: 'layout' | 'settings';
  path: string;
  section: string;
  label: string;
  type: FieldType;
  unit?: string;
  value: string | number | boolean;
}

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="admin-shell" id="id_admin_shell">
      <h1 id="id_admin_title">Jun Jun Hotel Admin</h1>

      @if (!isUnlocked) {
        <form class="admin-login" (submit)="unlock($event)">
          <label for="id_admin_password">Admin password</label>
          <input id="id_admin_password" type="password" [(ngModel)]="passwordInput" name="passwordInput" autocomplete="current-password" />
          <button type="submit">Unlock</button>
          @if (statusMessage) {
            <p class="admin-status">{{ statusMessage }}</p>
          }
        </form>
      } @else {
        <div class="admin-toolbar">
          <label for="id_admin_theme" class="theme-label">Theme</label>
          <select id="id_admin_theme" [(ngModel)]="selectedTheme" name="selectedTheme">
            <option value="sand">sand</option>
          </select>
          <button type="button" (click)="applyChanges()">Save & Apply</button>
          <button type="button" class="secondary" (click)="refreshFromInput()">Reload From Current</button>
          <button type="button" class="secondary" (click)="clearOverrides()">Clear Overrides</button>
        </div>

        <section class="admin-section">
          <table class="admin-table" id="id_admin_configTable">
            <thead>
              <tr>
                <th>Section</th>
                <th>Field</th>
                <th>Value</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              @for (field of fields; track field.root + '.' + field.path) {
                <tr>
                  <td>{{ field.section }}</td>
                  <td>{{ field.label }}</td>
                  <td>
                    @if (field.type === 'boolean') {
                      <input type="checkbox" [(ngModel)]="field.value" [name]="'f_' + $index" />
                    } @else if (field.type === 'color') {
                      <input type="color" [(ngModel)]="field.value" [name]="'f_' + $index" />
                    } @else if (field.type === 'date') {
                      <input type="date" [(ngModel)]="field.value" [name]="'f_' + $index" />
                    } @else if (field.type === 'number') {
                      <input type="number" [(ngModel)]="field.value" [name]="'f_' + $index" />
                    } @else {
                      <input type="text" [(ngModel)]="field.value" [name]="'f_' + $index" />
                    }
                  </td>
                  <td>{{ field.unit ?? '' }}</td>
                </tr>
              }
            </tbody>
          </table>
        </section>

        @if (statusMessage) {
          <p class="admin-status">{{ statusMessage }}</p>
        }
      }
    </div>
  `,
  styles: [
    `
      .admin-shell {
        max-width: 1100px;
        margin: 0 auto;
        padding: 1.25rem;
        font-family: Inter, 'Segoe UI', Arial, sans-serif;
        color: #1f1a17;
      }

      .admin-note {
        margin: 0.25rem 0 1rem;
        color: #4d4035;
      }

      .admin-login {
        display: grid;
        gap: 0.75rem;
        max-width: 24rem;
      }

      .admin-toolbar {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }

      .theme-label {
        font-weight: 600;
      }

      select {
        border: 1px solid rgba(31, 26, 23, 0.2);
        border-radius: 0.6rem;
        padding: 0.4rem 0.55rem;
        min-width: 8rem;
      }

      .admin-section {
        display: grid;
        gap: 0.5rem;
      }

      .admin-table {
        width: 100%;
        border-collapse: collapse;
        background: #fff;
        border: 1px solid rgba(31, 26, 23, 0.12);
      }

      .admin-table th,
      .admin-table td {
        border: 1px solid rgba(31, 26, 23, 0.08);
        padding: 0.5rem 0.6rem;
        vertical-align: middle;
      }

      .admin-table th {
        background: #f8eee4;
        text-align: left;
      }

      .admin-table td:nth-child(1) {
        width: 14%;
      }

      .admin-table td:nth-child(2) {
        width: 46%;
        font: 0.78rem/1.3 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        color: #4d4035;
      }

      .admin-table td:nth-child(3) {
        width: 34%;
      }

      .admin-table td:nth-child(4) {
        width: 6%;
      }

      input {
        width: 100%;
        border: 1px solid rgba(31, 26, 23, 0.2);
        border-radius: 0.6rem;
        padding: 0.6rem 0.75rem;
        font: inherit;
      }

      button {
        border: 0;
        border-radius: 999px;
        padding: 0.55rem 1rem;
        background: #1f1a17;
        color: #fff9f5;
        cursor: pointer;
      }

      button.secondary {
        background: #f2e4d7;
        color: #1f1a17;
      }

      button.active {
        background: #8a5d37;
        color: #fff;
      }

      .admin-status {
        margin-top: 0.75rem;
        color: #8a5d37;
        font-weight: 600;
      }
    `,
  ],
})
export class AdminPageComponent {
  @Input() initialConfig: { layout: unknown; settings: unknown } | null = null;
  @Output() saveOverrides = new EventEmitter<{ layout: unknown; settings: unknown }>();
  @Output() resetOverrides = new EventEmitter<void>();

  isUnlocked = false;
  selectedTheme = 'sand';
  passwordInput = '';
  statusMessage = '';
  fields: AdminField[] = [];
  private layoutBase: Record<string, unknown> = {};
  private settingsBase: Record<string, unknown> = {};

  readonly defaultPassword = 'lijingboat';

  ngOnInit(): void {
    this.refreshFromInput();
  }

  refreshFromInput(): void {
    this.layoutBase = this.deepClone((this.initialConfig?.layout ?? {}) as Record<string, unknown>);
    this.settingsBase = this.deepClone((this.initialConfig?.settings ?? {}) as Record<string, unknown>);
    this.fields = this.buildFields();
    this.statusMessage = 'Loaded.';
  }

  unlock(event: Event): void {
    event.preventDefault();
    if (this.passwordInput === this.defaultPassword) {
      this.isUnlocked = true;
      this.statusMessage = '';
      return;
    }

    this.statusMessage = 'Invalid password.';
  }

  applyChanges(): void {
    try {
      const layout = this.deepClone(this.layoutBase);
      const settings = this.deepClone(this.settingsBase);

      for (const field of this.fields) {
        if (field.root === 'layout') {
          this.setByPath(layout, field.path, field.value, field.unit);
        } else {
          this.setByPath(settings, field.path, field.value, field.unit);
        }
      }

      this.saveOverrides.emit({ layout, settings });
      this.statusMessage = 'Saved.';
    } catch {
      this.statusMessage = 'Save failed. Please review field values.';
    }
  }

  clearOverrides(): void {
    this.resetOverrides.emit();
    this.refreshFromInput();
    this.statusMessage = 'Overrides cleared. Defaults restored.';
  }

  private deepClone<T>(value: T): T {
    return JSON.parse(JSON.stringify(value)) as T;
  }

  private buildFields(): AdminField[] {
    const fields: AdminField[] = [];
    const layout = this.layoutBase as any;
    const settings = this.settingsBase as any;
    const en = settings?.strings?.en ?? {};

    const add = (root: 'layout' | 'settings', section: string, path: string, value: unknown): void => {
      if (value === undefined) {
        return;
      }

      const detected = this.detectFieldType(path, value);
      fields.push({
        root,
        section,
        path,
        label: path,
        type: detected.type,
        unit: detected.unit,
        value: detected.value,
      });
    };

    Object.keys(layout?.styling?.colors ?? {}).forEach((key) => {
      add('layout', 'Theme Colors', `styling.colors.${key}`, layout.styling.colors[key]);
    });

    (settings?.navLinks ?? []).forEach((item: any, idx: number) => {
      add('settings', 'Nav Link', `navLinks.${idx}.label`, item.label);
      add('settings', 'Nav Link', `navLinks.${idx}.target`, item.target);
    });

    (settings?.noticeBars ?? []).forEach((item: any, idx: number) => {
      Object.keys(item).forEach((k) => add('settings', 'Notice bar', `noticeBars.${idx}.${k}`, item[k]));
    });

    add('settings', 'About section', 'strings.en.about.title', en?.about?.title);
    (en?.about?.paragraphs ?? []).forEach((p: string, idx: number) => add('settings', 'About section', `strings.en.about.paragraphs.${idx}`, p));

    add('settings', 'Pricing', 'strings.en.pricing.label', en?.pricing?.label);
    (en?.pricing?.columns ?? []).forEach((col: any, idx: number) => {
      add('settings', 'Pricing', `strings.en.pricing.columns.${idx}.title.xs`, col?.title?.xs);
      add('settings', 'Pricing', `strings.en.pricing.columns.${idx}.title.s`, col?.title?.s);
      add('settings', 'Pricing', `strings.en.pricing.columns.${idx}.title.m`, col?.title?.m);
      add('settings', 'Pricing', `strings.en.pricing.columns.${idx}.title.l`, col?.title?.l);
    });
    (en?.pricing?.rooms ?? []).forEach((room: any, idx: number) => {
      Object.keys(room).forEach((k) => add('settings', 'Pricing', `strings.en.pricing.rooms.${idx}.${k}`, room[k]));
    });

    add('settings', 'Gallery', 'strings.en.gallery.label', en?.gallery?.label);
    add('settings', 'Gallery', 'strings.en.gallery.description', en?.gallery?.description);
    (en?.gallery?.images ?? []).forEach((img: any, idx: number) => add('settings', 'Gallery', `strings.en.gallery.images.${idx}.label`, img?.label));
    (settings?.gallery?.images ?? []).forEach((img: any, idx: number) => {
      add('settings', 'Gallery', `gallery.images.${idx}.src`, img?.src);
      add('settings', 'Gallery', `gallery.images.${idx}.alt`, img?.alt);
      add('settings', 'Gallery', `gallery.images.${idx}.label`, img?.label);
    });

    add('settings', 'FAQ', 'strings.en.faq.label', en?.faq?.label);
    add('settings', 'FAQ', 'strings.en.faq.prefix.question', en?.faq?.prefix?.question);
    add('settings', 'FAQ', 'strings.en.faq.prefix.answer', en?.faq?.prefix?.answer);
    add('settings', 'FAQ', 'strings.en.faq.prefix.index', en?.faq?.prefix?.index);
    (en?.faq?.items ?? []).forEach((item: any, idx: number) => {
      add('settings', 'FAQ', `strings.en.faq.items.${idx}.title`, item?.title);
      add('settings', 'FAQ', `strings.en.faq.items.${idx}.body`, item?.body);
    });
    (settings?.faqs ?? []).forEach((item: any, idx: number) => add('settings', 'FAQ', `faqs.${idx}.highlightColor`, item?.highlightColor));
    Object.keys(settings?.faqConfig ?? {}).forEach((k) => add('settings', 'FAQ', `faqConfig.${k}`, settings.faqConfig[k]));

    Object.keys(settings?.contact ?? {}).forEach((k) => add('settings', 'Contact', `contact.${k}`, settings.contact[k]));
    Object.keys(en?.contact ?? {}).forEach((k) => add('settings', 'Contact', `strings.en.contact.${k}`, en.contact[k]));

    Object.keys(layout?.roomReservationConfig ?? {}).forEach((k) => add('layout', 'Room reservation', `roomReservationConfig.${k}`, layout.roomReservationConfig[k]));
    add('settings', 'Room reservation', 'strings.en.roomReservation.label', en?.roomReservation?.label);
    add('settings', 'Room reservation', 'strings.en.roomReservation.title', en?.roomReservation?.title);
    add('settings', 'Room reservation', 'strings.en.roomReservation.description', en?.roomReservation?.description);
    (en?.roomReservation?.highlights ?? []).forEach((item: string, idx: number) => add('settings', 'Room reservation', `strings.en.roomReservation.highlights.${idx}`, item));
    Object.keys(en?.roomReservation?.form ?? {}).forEach((k) => add('settings', 'Room reservation', `strings.en.roomReservation.form.${k}`, en.roomReservation.form[k]));

    return fields;
  }

  private detectFieldType(path: string, value: unknown): { type: FieldType; unit?: string; value: string | number | boolean } {
    if (typeof value === 'boolean') {
      return { type: 'boolean', value };
    }

    if (typeof value === 'number') {
      return { type: 'number', value };
    }

    const raw = String(value ?? '');
    const unitMatch = raw.match(/^(-?\d+(?:\.\d+)?)(px|rem|em|%)$/i);
    if (unitMatch) {
      return { type: 'number', value: Number(unitMatch[1]), unit: unitMatch[2] };
    }

    const isHexColor = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(raw);
    if (isHexColor || /color/i.test(path)) {
      return { type: 'color', value: isHexColor ? raw : '#000000' };
    }

    if (/date/i.test(path) && /^\d{4}-\d{2}-\d{2}$/.test(raw)) {
      return { type: 'date', value: raw };
    }

    return { type: 'text', value: raw };
  }

  private setByPath(root: Record<string, unknown> | unknown[], path: string, value: string | number | boolean, unit?: string): void {
    const parts = path.split('.');
    let current: any = root;

    for (let i = 0; i < parts.length - 1; i++) {
      const token = parts[i];
      const nextToken = parts[i + 1];
      const isIndex = /^\d+$/.test(token);
      const nextIsIndex = /^\d+$/.test(nextToken);

      if (isIndex) {
        const idx = Number(token);
        if (!Array.isArray(current)) {
          return;
        }
        if (current[idx] === undefined || current[idx] === null) {
          current[idx] = nextIsIndex ? [] : {};
        }
        current = current[idx];
      } else {
        if (current[token] === undefined || current[token] === null) {
          current[token] = nextIsIndex ? [] : {};
        }
        current = current[token];
      }
    }

    const last = parts[parts.length - 1];
    if (/^\d+$/.test(last)) {
      const idx = Number(last);
      if (Array.isArray(current)) {
        current[idx] = typeof value === 'number' && unit ? `${value}${unit}` : value;
      }
      return;
    }

    current[last] = typeof value === 'number' && unit ? `${value}${unit}` : value;
  }
}
