import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { CheckoutDetailComponent } from './checkout-detail.component';
import { AppService } from '../app.service';


describe('CheckoutDetailComponent', () => {
  let component: CheckoutDetailComponent;
  let fixture: ComponentFixture<CheckoutDetailComponent>;
  let httpMock: HttpTestingController;
  let element: HTMLElement;
  let appService: AppService;
  let loader: HarnessLoader;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatToolbarModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatListModule,
        MatIconModule
      ],
      declarations: [CheckoutDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    loader = TestbedHarnessEnvironment.loader(fixture);
    element = fixture.nativeElement;
    appService = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
