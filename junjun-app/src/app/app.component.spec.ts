import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should expose the app version from package.json', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.appVersion).toBe('2026.8.20');
  });

  it('should render the header phone chip and footer version', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#id_appComponent_headerPhone')?.textContent?.trim()).toBe('647-349-9220');
    expect(compiled.querySelector('#id_appComponent_footerVersion')?.textContent?.trim()).toBe('v2026.8.20');
  });
});
