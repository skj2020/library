import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';

import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

// import { MatButtonHarness } from '@angular/material/button/testing';
import { AppService } from './app.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let httpMock: HttpTestingController;
  let element: HTMLElement;
  let appService: AppService;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatToolbarModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    element = fixture.nativeElement;
    fixture.detectChanges();
    appService = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
  });

  // it('should work', async () => {
  //   const buttons = await loader.getAllHarnesses(MatButtonHarness); // length: 3
  //   const firstButton = await loader.getHarness(MatButtonHarness); // === buttons[0]
  // });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'book-store'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(component.title).toEqual('book-store');
  });

  it('should render title', () => {
    expect(element.querySelector('mat-toolbar span').textContent).toContain('Welcome to Book Store');
  });
});
