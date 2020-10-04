import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CartItem } from '../types';

@Component({
  selector: 'app-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: ['./checkout-detail.component.scss']
})
export class CheckoutDetailComponent implements OnInit {

  constructor(private appService: AppService) { }

  // hold cart details when user decides to checkout
  cart: Array<CartItem>;

  ngOnInit(): void {
    this.showCart();
  }

  private showCart() {
    this.cart = this.appService.getCart();
  }

  showHome() {
    this.appService.showBookList();
  }

}
