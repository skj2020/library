import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { Location } from "@angular/common";
import { BookListComponent } from './book-list.component';
import { CheckoutDetailComponent } from '../checkout-detail/checkout-detail.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AppService } from '../app.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { routes } from '../app-routing.module';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let httpMock: HttpTestingController;
  let element: HTMLElement;
  let appService: AppService;
  let loader: HarnessLoader;
  let books: Array<any>;
  let location: Location;
  let router: Router;

  sessionStorage.clear();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
        MatToolbarModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatListModule,
        MatIconModule
      ],
      declarations: [BookListComponent, CheckoutDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
    element = fixture.nativeElement;
    appService = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    books = [{
      "title": "Unlocking Android",
      "isbn": "1933988673",
      "pageCount": 416,
      "publishedDate": "2009-04-01T00:00:00.000-0700",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
      "shortDescription": "Unlocking Android: A Developer's Guide provides concise.",
      "longDescription": "Android is an open source mobile phone platform",
      "available": true,
      "price": 100,
      "authors": [
        "W. Frank Ableson",
        "Charlie Collins",
        "Robi Sen"
      ],
      "categories": [
        "Open Source",
        "Mobile"
      ]
    }];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show list of books, add to cart, remove from cart, add again and navigate to checkout page', fakeAsync(() => {
    const booksReq = httpMock.expectOne('/getBookList');
    booksReq.flush(books);
    tick();
    fixture.detectChanges();
    expect(element.querySelector('.mat-card-title').textContent).toContain('Unlocking Android');

    // add to cart
    const addToCartBtn: HTMLButtonElement = element.querySelector('button.add-to-cart');
    addToCartBtn.click();
    tick(); // button click contains asynchronous event handling
    fixture.detectChanges();
    expect(element.querySelector('.mat-badge-content').textContent).toContain('1');

    // remove from cart
    const removeToCartBtn: HTMLButtonElement = element.querySelector('button.remove-from-cart');
    removeToCartBtn.click();
    tick(); // button click contains asynchronous event handling
    fixture.detectChanges();
    expect(element.querySelector('.mat-badge-content').textContent).toContain('0');

    // add to cart again
    addToCartBtn.click();
    tick(); // button click contains asynchronous event handling
    fixture.detectChanges();
    expect(element.querySelector('.mat-badge-content').textContent).toContain('1');

    // test checkout
    const checkoutBtn: HTMLButtonElement = element.querySelector('button.checkout-btn');
    checkoutBtn.click();
    tick(); // button click contains asynchronous event handling
    fixture.detectChanges();
    expect(location.path()).toBe('/checkout');
  }));

});
