import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

type FieldType = 'text' | 'number' | 'boolean';

interface ConfigField {
  path: string;
  label: string;
  type: FieldType;
  value: string | number | boolean;
}

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="admin-shell" id="id_admin_shell">
      <h1 id="id_admin_title">Jun Jun Hotel Admin</h1>
      <p class="admin-note">One field maps to one config line (one-to-one). Changes save to local browser storage.</p>

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
          <button type="button" [class.active]="activeTab === 'layout'" (click)="activeTab = 'layout'">Layout Config</button>
          <button type="button" [class.active]="activeTab === 'settings'" (click)="activeTab = 'settings'">Settings Config</button>
          <button type="button" class="secondary" (click)="refreshFromInput()">Reload From Current</button>
        </div>

        @if (activeTab === 'layout') {
          <section class="admin-section">
            <h2>Layout / Visual Config</h2>
            <p>Color options, dimensions, display and visibility.</p>
            <div class="field-grid">
              @for (field of layoutFields; track field.path) {
                <label class="field-row" [attr.for]="'id_admin_layout_' + $index">
                  <span>{{ field.label }}</span>
                  @if (field.type === 'boolean') {
                    <input [id]="'id_admin_layout_' + $index" type="checkbox" [(ngModel)]="field.value" [name]="'layout_' + $index" />
                  } @else {
                    <input
                      [id]="'id_admin_layout_' + $index"
                      [type]="field.type === 'number' ? 'number' : 'text'"
                      [(ngModel)]="field.value"
                      [name]="'layout_' + $index"
                    />
                  }
                </label>
              }
            </div>
          </section>
        }

        @if (activeTab === 'settings') {
          <section class="admin-section">
            <h2>Text / Content Config</h2>
            <p>All content strings and settings fields, one input per config line.</p>
            <div class="field-grid">
              @for (field of settingsFields; track field.path) {
                <label class="field-row" [attr.for]="'id_admin_settings_' + $index">
                  <span>{{ field.label }}</span>
                  @if (field.type === 'boolean') {
                    <input [id]="'id_admin_settings_' + $index" type="checkbox" [(ngModel)]="field.value" [name]="'settings_' + $index" />
                  } @else {
                    <input
                      [id]="'id_admin_settings_' + $index"
                      [type]="field.type === 'number' ? 'number' : 'text'"
                      [(ngModel)]="field.value"
                      [name]="'settings_' + $index"
                    />
                  }
                </label>
              }
            </div>
          </section>
        }

        <div class="admin-actions">
          <button type="button" (click)="applyChanges()">Save & Apply</button>
          <button type="button" class="secondary" (click)="clearOverrides()">Clear Overrides</button>
        </div>

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
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }

      .admin-section {
        display: grid;
        gap: 0.5rem;
      }

      .field-grid {
        display: grid;
        gap: 0.5rem;
        max-height: 62vh;
        overflow: auto;
        padding-right: 0.25rem;
      }

      .field-row {
        display: grid;
        grid-template-columns: minmax(18rem, 1fr) minmax(14rem, 1fr);
        align-items: center;
        gap: 0.75rem;
        border: 1px solid rgba(31, 26, 23, 0.08);
        border-radius: 0.6rem;
        background: #fff;
        padding: 0.55rem 0.65rem;
      }

      .field-row span {
        font: 0.78rem/1.35 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        color: #4d4035;
        word-break: break-word;
      }

      input {
        width: 100%;
        border: 1px solid rgba(31, 26, 23, 0.2);
        border-radius: 0.6rem;
        padding: 0.6rem 0.75rem;
        font: inherit;
      }

      .admin-actions {
        margin-top: 0.75rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
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
  activeTab: 'layout' | 'settings' = 'layout';
  passwordInput = '';
  statusMessage = '';
  layoutFields: ConfigField[] = [];
  settingsFields: ConfigField[] = [];
  private layoutBase: unknown = {};
  private settingsBase: unknown = {};

  readonly defaultPassword = 'lijingboat';

  ngOnInit(): void {
    this.refreshFromInput();
  }

  refreshFromInput(): void {
    this.layoutBase = this.deepClone(this.initialConfig?.layout ?? {});
    this.settingsBase = this.deepClone(this.initialConfig?.settings ?? {});
    this.layoutFields = this.flattenFields(this.layoutBase);
    this.settingsFields = this.flattenFields(this.settingsBase);
    this.statusMessage = 'Editors loaded from current runtime config.';
  }

  unlock(event: Event): void {
    event.preventDefault();
    if (this.passwordInput === this.defaultPassword) {
      this.isUnlocked = true;
      this.statusMessage = 'Unlocked.';
      return;
    }

    this.statusMessage = 'Invalid password.';
  }

  applyChanges(): void {
    try {
      const layout = this.applyFieldValues(this.layoutBase, this.layoutFields);
      const settings = this.applyFieldValues(this.settingsBase, this.settingsFields);
      this.saveOverrides.emit({ layout, settings });
      this.statusMessage = 'Saved. Open / to verify changes.';
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

  private flattenFields(source: unknown, pathPrefix = ''): ConfigField[] {
    if (source === null || source === undefined) {
      return [{ path: pathPrefix, label: pathPrefix, type: 'text', value: '' }];
    }

    if (typeof source === 'string') {
      return [{ path: pathPrefix, label: pathPrefix, type: 'text', value: source }];
    }

    if (typeof source === 'number') {
      return [{ path: pathPrefix, label: pathPrefix, type: 'number', value: source }];
    }

    if (typeof source === 'boolean') {
      return [{ path: pathPrefix, label: pathPrefix, type: 'boolean', value: source }];
    }

    if (Array.isArray(source)) {
      const fields: ConfigField[] = [];
      source.forEach((item, index) => {
        const nextPath = pathPrefix ? `${pathPrefix}.${index}` : `${index}`;
        fields.push(...this.flattenFields(item, nextPath));
      });
      return fields;
    }

    const obj = source as Record<string, unknown>;
    const fields: ConfigField[] = [];
    Object.keys(obj).forEach((key) => {
      const nextPath = pathPrefix ? `${pathPrefix}.${key}` : key;
      fields.push(...this.flattenFields(obj[key], nextPath));
    });
    return fields;
  }

  private applyFieldValues(base: unknown, fields: ConfigField[]): unknown {
    const result = this.deepClone(base as object);
    for (const field of fields) {
      this.setByPath(result as Record<string, unknown>, field.path, field.value);
    }
    return result;
  }

  private setByPath(root: Record<string, unknown> | unknown[], path: string, value: string | number | boolean): void {
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
        current[idx] = value;
      }
      return;
    }

    current[last] = value;
  }
}
