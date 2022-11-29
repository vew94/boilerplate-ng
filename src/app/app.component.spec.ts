import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

/**
 * Create `AppComponent` instance in `TestBed`.
 *
 * @returns {AppComponent} `AppComponent` instance.
 */
async function setupApp() {
  await TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [
      RouterTestingModule.withRoutes([{ path: '', component: AppComponent }]),
    ],
  }).compileComponents();

  return TestBed.createComponent(AppComponent).componentInstance;
}

describe('AppComponent', () => {
  it('should create the app', async () => {
    expect.hasAssertions();
    const app = await setupApp();
    expect(app).toBeTruthy();
  });
  it('should have as title boilerplate-ng', async () => {
    expect.hasAssertions();
    const app = await setupApp();
    expect(app.title).toBe('boilerplate-ng');
  });
});
