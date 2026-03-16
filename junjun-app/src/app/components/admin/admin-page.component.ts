import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

type FieldType = 'text' | 'number' | 'boolean' | 'color' | 'date';
type StatusKind = 'success' | 'danger' | 'info';

interface AdminField {
  id: string;
  root: 'layout' | 'settings';
  path: string;
  section: string;
  label: string;
  type: FieldType;
  unit?: string;
  value: string | number | boolean;
  originalValue: string | number | boolean;
  isDirty: boolean;
}

interface AdminSectionGroup {
  key: string;
  title: string;
  fields: AdminField[];
}

interface DeploymentStep {
  title: string;
  detail: string;
  image: string;
}

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="admin-shell" id="id_admin_shell">
      <h1 id="id_admin_title">Jun Jun Hotel Admin</h1>

      @if (!isUnlocked) {
        <form class="admin-login" id="id_admin_loginForm" (submit)="unlock($event)">
          <label id="id_admin_passwordLabel" for="id_admin_password">Admin password</label>
          <input id="id_admin_password" type="password" [(ngModel)]="passwordInput" name="passwordInput" autocomplete="current-password" />
          <button id="id_admin_unlockBtn" type="submit">Unlock</button>
          <p id="id_admin_adminUrlHint" class="admin-url-hint">Current URL: {{ currentUrl }}</p>

          @if (statusMessage) {
            <div id="id_admin_loginStatus" class="alert admin-alert" [ngClass]="statusClass" role="status" aria-live="polite">
              <div id="id_admin_loginStatusMessage">{{ statusMessage }}</div>
            </div>
          }
        </form>
      } @else {
        <div class="admin-toolbar" id="id_admin_toolbar">
          <label id="id_admin_themeLabel" for="id_admin_theme" class="theme-label">Theme</label>
          <select id="id_admin_theme" [(ngModel)]="selectedTheme" name="selectedTheme">
            <option id="id_admin_themeOption_sand" value="sand">sand</option>
          </select>
          <button id="id_admin_saveBtn" type="button" (click)="applyChanges()">Save</button>
          <button id="id_admin_reloadBtn" type="button" class="secondary" (click)="reloadFromCurrent()">Reload</button>
          <button id="id_admin_resetBtn" type="button" class="secondary" (click)="clearOverrides()">Reset</button>
          <button id="id_admin_backHomeBtn" type="button" class="secondary" (click)="openHomeInNewTab()">Back To Home</button>
          <button id="id_admin_openDeployHelperBtn" type="button" class="secondary" (click)="openDeploymentHelperPage()">Deployment Helper</button>
          <button
            id="id_admin_openMainConfigBtn"
            type="button"
            class="secondary"
            [disabled]="!isDeploymentGuideView"
            (click)="openAdminConfigPage()"
          >
            Main Admin
          </button>
          <button id="id_admin_exportBtn" type="button" class="secondary" (click)="exportJson()">Export JSON</button>
          <button id="id_admin_importBtn" type="button" class="secondary" (click)="triggerImport()">Import JSON</button>
          <input id="id_admin_importFile" type="file" accept=".json,application/json" style="display:none" (change)="importJson($event)" />
        </div>

        @if (!isDeploymentGuideView) {
          <p id="id_admin_deployHelperLinkHint" class="admin-url-hint">
            Deployment helper URL: /admin?view=deploy
          </p>
        }

        @if (statusMessage) {
          <div id="id_admin_status" class="alert admin-alert" [ngClass]="statusClass" role="status" aria-live="polite">
            <div id="id_admin_statusMessage">{{ statusMessage }}</div>
            @if (statusItems.length > 0) {
              <ul id="id_admin_statusItems" class="admin-status-items">
                @for (item of statusItems; track item; let itemIndex = $index) {
                  <li [attr.id]="'id_admin_statusItem_' + itemIndex">{{ item }}</li>
                }
              </ul>
            }
          </div>
        }

        @if (isDeploymentGuideView) {
          <section id="id_admin_deployGuide" class="deploy-guide">
            <h2 id="id_admin_deployGuideTitle" class="admin-section-title">GoDaddy Deployment Helper</h2>
            <p id="id_admin_deployGuideSummary" class="deploy-guide__summary">
              Follow these steps in order to deploy the current build safely. This page is admin-only and does not change the public site.
            </p>
            <ol id="id_admin_deployGuideSteps" class="deploy-guide__steps">
              @for (step of deploymentSteps; track step.title; let stepIndex = $index) {
                <li [attr.id]="'id_admin_deployStep_' + stepIndex" class="deploy-step">
                  <h3 [attr.id]="'id_admin_deployStepTitle_' + stepIndex">Step {{ stepIndex + 1 }}: {{ step.title }}</h3>
                  <p [attr.id]="'id_admin_deployStepDetail_' + stepIndex">{{ step.detail }}</p>
                  <img [attr.id]="'id_admin_deployStepImage_' + stepIndex" [src]="step.image" [alt]="step.title + ' illustration'" loading="lazy" />
                </li>
              }
            </ol>
          </section>
        } @else {
          @for (group of groupedSections; track group.key) {
            <section class="admin-section" [attr.id]="'id_admin_section_' + group.key">
              <h2 class="admin-section-title" [attr.id]="'id_admin_sectionTitle_' + group.key">{{ group.title }}</h2>
              <table class="admin-table" [attr.id]="'id_admin_table_' + group.key">
                <thead [attr.id]="'id_admin_thead_' + group.key">
                  <tr [attr.id]="'id_admin_theadRow_' + group.key">
                    <th [attr.id]="'id_admin_th_field_' + group.key">Field</th>
                    <th [attr.id]="'id_admin_th_value_' + group.key">Value</th>
                    <th [attr.id]="'id_admin_th_unit_' + group.key">Unit</th>
                  </tr>
                </thead>
                <tbody [attr.id]="'id_admin_tbody_' + group.key">
                  @for (field of group.fields; track field.id) {
                    <tr [attr.id]="'id_admin_row_' + field.id" [class.row-dirty]="field.isDirty">
                      <td [attr.id]="'id_admin_label_' + field.id">{{ field.label }}</td>
                      <td [attr.id]="'id_admin_value_' + field.id">
                        @if (field.type === 'boolean') {
                          <input [attr.id]="'id_admin_input_' + field.id" type="checkbox" [(ngModel)]="field.value" [name]="field.id" (ngModelChange)="onFieldValueChange(field, $event)" />
                        } @else if (field.type === 'color') {
                          <input [attr.id]="'id_admin_input_' + field.id" type="color" [(ngModel)]="field.value" [name]="field.id" (ngModelChange)="onFieldValueChange(field, $event)" />
                        } @else if (field.type === 'date') {
                          <input [attr.id]="'id_admin_input_' + field.id" type="date" [(ngModel)]="field.value" [name]="field.id" (ngModelChange)="onFieldValueChange(field, $event)" />
                        } @else if (field.type === 'number') {
                          <input [attr.id]="'id_admin_input_' + field.id" type="number" [(ngModel)]="field.value" [name]="field.id" (ngModelChange)="onFieldValueChange(field, $event)" />
                        } @else {
                          <input [attr.id]="'id_admin_input_' + field.id" type="text" [(ngModel)]="field.value" [name]="field.id" (ngModelChange)="onFieldValueChange(field, $event)" />
                        }
                      </td>
                      <td [attr.id]="'id_admin_unit_' + field.id">{{ field.unit ?? '' }}</td>
                    </tr>
                  }
                </tbody>
              </table>
            </section>
          }
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

      .admin-login {
        display: grid;
        gap: 0.75rem;
        max-width: 24rem;
      }

      .admin-url-hint {
        margin: 0;
        color: #4d4035;
        font-size: 0.9rem;
      }

      .admin-toolbar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
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
        margin-bottom: 1.5rem;
      }

      .admin-section-title {
        font-size: 1rem;
        font-weight: 700;
        margin: 0 0 0.5rem;
        padding: 0.4rem 0.6rem;
        background: #f8eee4;
        border-radius: 0.5rem;
        color: #4d4035;
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
        width: 34%;
        font: 0.78rem/1.3 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        color: #4d4035;
        overflow-wrap: anywhere;
        word-break: break-word;
        white-space: normal;
      }

      .admin-table td:nth-child(2) {
        width: 58%;
      }

      .admin-table td:nth-child(3) {
        width: 8%;
      }

      .row-dirty td {
        background: #fff3e8;
      }

      input[type='text'],
      input[type='number'],
      input[type='date'] {
        width: 100%;
        border: 1px solid rgba(31, 26, 23, 0.2);
        border-radius: 0.6rem;
        padding: 0.6rem 0.75rem;
        font: inherit;
        box-sizing: border-box;
      }

      input[type='color'] {
        border: 1px solid rgba(31, 26, 23, 0.2);
        border-radius: 0.6rem;
        padding: 0.2rem;
      }

      input[type='checkbox'] {
        width: 1.1rem;
        height: 1.1rem;
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

      .admin-alert {
        margin: 0 0 1rem;
        border-radius: 0.5rem;
      }

      .admin-status-items {
        margin: 0.5rem 0 0;
        padding-left: 1.25rem;
      }

      .deploy-guide {
        border: 1px solid rgba(31, 26, 23, 0.12);
        border-radius: 0.75rem;
        background: #fff;
        padding: 1rem;
      }

      .deploy-guide__summary {
        margin: 0 0 0.75rem;
      }

      .deploy-guide__steps {
        margin: 0;
        padding-left: 1.25rem;
        display: grid;
        gap: 0.85rem;
      }

      .deploy-step {
        background: #fdf8f1;
        border: 1px solid rgba(31, 26, 23, 0.1);
        border-radius: 0.6rem;
        padding: 0.75rem;
      }

      .deploy-step h3 {
        margin: 0 0 0.35rem;
      }

      .deploy-step p {
        margin: 0 0 0.6rem;
      }

      .deploy-step img {
        width: 100%;
        max-width: 36rem;
        border-radius: 0.5rem;
        border: 1px solid rgba(31, 26, 23, 0.12);
        display: block;
        background: #fff;
      }

      .bg-success,
      .bg-danger,
      .bg-secondary {
        color: #fff9f5 !important;
      }
    `,
  ],
})
export class AdminPageComponent implements OnInit {
  @Input() initialConfig: { layout: unknown; settings: unknown } | null = null;
  @Output() saveOverrides = new EventEmitter<{ layout: unknown; settings: unknown }>();
  @Output() resetOverrides = new EventEmitter<void>();

  isUnlocked = false;
  isDeploymentGuideView = false;
  selectedTheme = 'sand';
  passwordInput = '';
  currentUrl = '/admin';

  statusMessage = '';
  statusItems: string[] = [];
  statusKind: StatusKind = 'info';

  fields: AdminField[] = [];
  groupedSections: AdminSectionGroup[] = [];
  deploymentSteps: DeploymentStep[] = [];
  private layoutBase: Record<string, unknown> = {};
  private settingsBase: Record<string, unknown> = {};

  readonly defaultPassword = 'lijingboat';

  get statusClass(): string {
    if (this.statusKind === 'success') {
      return 'bg-success';
    }
    if (this.statusKind === 'danger') {
      return 'bg-danger';
    }
    return 'bg-secondary';
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.currentUrl = `${window.location.pathname}${window.location.search}`;
      this.isDeploymentGuideView = new URLSearchParams(window.location.search).get('view') === 'deploy';
      this.deploymentSteps = this.buildDeploymentSteps();
    }
    this.refreshFromInput(false);
  }

  openDeploymentHelperPage(): void {
    if (typeof window === 'undefined') {
      return;
    }
    window.location.href = '/admin?view=deploy';
  }

  openAdminConfigPage(): void {
    if (typeof window === 'undefined') {
      return;
    }
    window.location.href = '/admin';
  }

  refreshFromInput(clearStatus: boolean = true): void {
    this.layoutBase = this.deepClone((this.initialConfig?.layout ?? {}) as Record<string, unknown>);
    this.settingsBase = this.deepClone((this.initialConfig?.settings ?? {}) as Record<string, unknown>);
    this.fields = this.buildFields();
    this.groupedSections = this.groupBySection(this.fields);
    if (clearStatus) {
      this.resetStatus();
    }
  }

  reloadFromCurrent(): void {
    this.refreshFromInput(false);
    this.statusKind = 'success';
    this.statusMessage = 'Reload completed successfully.';
    this.statusItems = ['Unsaved edits were discarded and current runtime values were loaded.'];
  }

  clearOverrides(): void {
    this.resetOverrides.emit();
    this.refreshFromInput(false);
    this.statusKind = 'success';
    this.statusMessage = 'Reset completed successfully.';
    this.statusItems = ['All overrides were removed. Runtime values are now back to defaults.'];
  }

  openHomeInNewTab(): void {
    if (typeof window !== 'undefined') {
      window.open('/', '_blank', 'noopener');
    }
    this.statusKind = 'info';
    this.statusMessage = 'Home page opened in a new tab.';
    this.statusItems = [];
  }

  exportJson(): void {
    if (typeof window === 'undefined') {
      return;
    }

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

      const payload = { layout, settings };
      const json = JSON.stringify(payload, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'junjun-hotel-config.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      this.statusKind = 'success';
      this.statusMessage = 'Config exported successfully.';
      this.statusItems = [
        'Downloaded: junjun-hotel-config.json',
        'Use "Import JSON" to restore this config on any device.',
      ];
    } catch {
      this.statusKind = 'danger';
      this.statusMessage = 'Export failed.';
      this.statusItems = [];
    }
  }

  triggerImport(): void {
    if (typeof document === 'undefined') {
      return;
    }
    const input = document.getElementById('id_admin_importFile') as HTMLInputElement | null;
    input?.click();
  }

  importJson(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const raw = e.target?.result as string;
        const parsed = JSON.parse(raw) as { layout?: unknown; settings?: unknown };

        if (!parsed.layout && !parsed.settings) {
          this.statusKind = 'danger';
          this.statusMessage = 'Import failed: JSON must contain "layout" or "settings" keys.';
          this.statusItems = [];
          return;
        }

        const payload = {
          layout: parsed.layout ?? {},
          settings: parsed.settings ?? {},
        } as { layout: unknown; settings: unknown };

        this.saveOverrides.emit(payload);

        this.layoutBase = this.deepClone((parsed.layout ?? {}) as Record<string, unknown>);
        this.settingsBase = this.deepClone((parsed.settings ?? {}) as Record<string, unknown>);
        this.fields = this.buildFields();
        this.groupedSections = this.groupBySection(this.fields);

        this.statusKind = 'success';
        this.statusMessage = 'Config imported and saved to localStorage.';
        this.statusItems = [
          `Loaded from: ${file.name}`,
          'All fields refreshed. Reload the home page to see live changes.',
        ];
      } catch {
        this.statusKind = 'danger';
        this.statusMessage = 'Import failed: invalid or unreadable JSON file.';
        this.statusItems = [];
      }
      input.value = '';
    };
    reader.readAsText(file);
  }

  unlock(event: Event): void {
    event.preventDefault();
    if (this.passwordInput === this.defaultPassword) {
      this.isUnlocked = true;
      this.resetStatus();
      return;
    }

    this.statusKind = 'danger';
    this.statusMessage = 'Invalid password.';
    this.statusItems = [];
  }

  onFieldValueChange(field: AdminField, value: string | number | boolean): void {
    field.value = value;
    field.isDirty = !this.areValuesEqual(field.value, field.originalValue);
  }

  applyChanges(): void {
    try {
      const changedFields = this.fields.filter((field) => field.isDirty);
      if (changedFields.length === 0) {
        this.statusKind = 'info';
        this.statusMessage = 'No changes detected. Nothing was saved.';
        this.statusItems = [];
        return;
      }

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

      this.layoutBase = this.deepClone(layout as Record<string, unknown>);
      this.settingsBase = this.deepClone(settings as Record<string, unknown>);
      this.fields.forEach((field) => {
        field.originalValue = this.deepClone(field.value);
        field.isDirty = false;
      });

      this.statusKind = 'success';
      this.statusMessage = `Save completed successfully. ${changedFields.length} field(s) changed.`;
      this.statusItems = [
        ...changedFields.map((field) => this.describeFieldChange(field)),
        'Runtime override data was updated. Source app.settings.ts remains the baseline source file.',
      ];
    } catch {
      this.statusKind = 'danger';
      this.statusMessage = 'Save failed. Please review field values.';
      this.statusItems = [];
    }
  }

  private describeFieldChange(field: AdminField): string {
    return `${field.root}.${field.path}: ${this.formatValue(field.originalValue)} -> ${this.formatValue(field.value)}`;
  }

  private formatValue(value: string | number | boolean): string {
    if (typeof value === 'string') {
      return `"${value}"`;
    }
    return `${value}`;
  }

  private areValuesEqual(a: unknown, b: unknown): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  private resetStatus(): void {
    this.statusKind = 'info';
    this.statusMessage = '';
    this.statusItems = [];
  }

  private groupBySection(fields: AdminField[]): AdminSectionGroup[] {
    const map = new Map<string, AdminSectionGroup>();
    for (const field of fields) {
      const key = this.toSectionKey(field.section);
      if (!map.has(key)) {
        map.set(key, { key, title: field.section, fields: [] });
      }
      map.get(key)!.fields.push(field);
    }
    return Array.from(map.values());
  }

  private toSectionKey(section: string): string {
    return section.toLowerCase().replace(/[^a-z0-9]+/g, '_');
  }

  private toFieldId(root: string, path: string): string {
    return `${root}_${path}`.replace(/[^a-zA-Z0-9]+/g, '_');
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
        id: this.toFieldId(root, path),
        root,
        section,
        path,
        label: path,
        type: detected.type,
        unit: detected.unit,
        value: detected.value,
        originalValue: this.deepClone(detected.value),
        isDirty: false,
      });
    };

    Object.keys(layout?.styling?.colors ?? {}).forEach((key) => {
      add('layout', 'Theme', `styling.colors.${key}`, layout.styling.colors[key]);
    });
    Object.keys(layout?.navLanguageConfig ?? {}).forEach((key) => {
      add('layout', 'Theme', `navLanguageConfig.${key}`, layout.navLanguageConfig[key]);
    });
    Object.keys(layout?.pricingDisplayConfig ?? {}).forEach((key) => {
      add('layout', 'Theme', `pricingDisplayConfig.${key}`, layout.pricingDisplayConfig[key]);
    });
    Object.keys(layout?.galleryDisplayConfig ?? {}).forEach((key) => {
      add('layout', 'Theme', `galleryDisplayConfig.${key}`, layout.galleryDisplayConfig[key]);
    });
    Object.keys(layout?.noticeBarConfig ?? {}).forEach((key) => {
      add('layout', 'Notice bar', `noticeBarConfig.${key}`, layout.noticeBarConfig[key]);
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
      add('settings', 'Gallery', `gallery.images.${idx}.rank`, img?.rank ?? idx + 1);
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

  private buildDeploymentSteps(): DeploymentStep[] {
    return [
      {
        title: 'Prepare server folder',
        detail: 'In GoDaddy cPanel, open File Manager, create an app folder, and ensure Node.js app support is enabled for your domain/subdomain.',
        image: this.buildStepImage('Prepare Folder', 'Create deployment directory and map domain', '#c18a5f'),
      },
      {
        title: 'Build production bundle',
        detail: 'Run npm install then npm run build in junjun-app. Confirm dist/junjun-app/browser and dist/junjun-app/server are generated.',
        image: this.buildStepImage('Build App', 'Generate browser and server outputs', '#8a5d37'),
      },
      {
        title: 'Upload dist files',
        detail: 'Upload the browser and server folders to the GoDaddy app directory. Keep folder names unchanged so server.mjs paths still match.',
        image: this.buildStepImage('Upload Artifacts', 'Upload dist/junjun-app/* to server', '#4d4035'),
      },
      {
        title: 'Install production dependencies',
        detail: 'On the server terminal, run npm ci --omit=dev in the app directory where package.json is uploaded.',
        image: this.buildStepImage('Install Dependencies', 'Run npm ci --omit=dev', '#1f1a17'),
      },
      {
        title: 'Set startup command',
        detail: 'In GoDaddy Node.js app settings, set startup file to dist/junjun-app/server/server.mjs and choose the Node version used by Angular 17.',
        image: this.buildStepImage('Configure Startup', 'Use dist/junjun-app/server/server.mjs', '#7b6048'),
      },
      {
        title: 'Restart and verify',
        detail: 'Restart the app from GoDaddy panel, open your domain, and verify language switching, pricing translation, gallery popup, and admin access.',
        image: this.buildStepImage('Verify Release', 'Restart app and smoke-test site', '#5c4633'),
      },
    ];
  }

  private buildStepImage(title: string, subtitle: string, accentColor: string): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="520" viewBox="0 0 1200 520"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fff9f2"/><stop offset="100%" stop-color="#f3e7da"/></linearGradient></defs><rect width="1200" height="520" fill="url(#g)"/><rect x="42" y="42" width="1116" height="436" rx="24" fill="#ffffff" stroke="${accentColor}" stroke-width="4"/><rect x="72" y="96" width="420" height="290" rx="18" fill="#f8eee4"/><rect x="96" y="130" width="372" height="34" rx="8" fill="#e7d7c6"/><rect x="96" y="188" width="298" height="26" rx="8" fill="#e7d7c6"/><rect x="96" y="230" width="338" height="26" rx="8" fill="#e7d7c6"/><rect x="96" y="272" width="260" height="26" rx="8" fill="#e7d7c6"/><circle cx="1000" cy="160" r="64" fill="${accentColor}" opacity="0.18"/><circle cx="1026" cy="250" r="44" fill="${accentColor}" opacity="0.3"/><text x="540" y="188" fill="#1f1a17" font-size="52" font-family="Segoe UI, Arial, sans-serif" font-weight="700">${title}</text><text x="540" y="248" fill="#4d4035" font-size="30" font-family="Segoe UI, Arial, sans-serif">${subtitle}</text><text x="540" y="326" fill="#8a5d37" font-size="24" font-family="Segoe UI, Arial, sans-serif">Jun Jun Hotel Admin Deployment Guide</text></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
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
