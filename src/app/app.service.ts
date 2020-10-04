import { Injectable } from '@angular/core';
import { CartItem, Book } from './types';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private router: Router) {
    // cart should remain active until user clears session
    this.cartItems = this.getCartFromStorage();
  }

  // holds the list of items added to the cart while browsing the library
  cartItems: Array<CartItem> = [];

  reloadApp() {
    sessionStorage.clear();
    location.href = '/';
  }

  showBookList(): void {
    this.router.navigate(['home']);
  }

  showCheckout(): void {
    this.router.navigate(['checkout']);
  }

  addToCart(book: Book): number {
    const idx = this.cartItems.findIndex((item) => {
      return item.isbn === book.isbn;
    });

    // avoid duplicate entries
    if (idx < 0) {
      const cItem: CartItem = {
        title: book.title,
        isbn: book.isbn,
        price: book.price
      };
      this.cartItems.push(cItem);
      this.setCartToStorage();
    }
    return this.cartItems.length;
  }

  removeFromCart(book: Book): number {
    // const cartArr = this.getCart();
    const idx = this.cartItems.findIndex((item) => {
      return item.isbn === book.isbn;
    });

    if (idx >= 0) {
      // cart has this book
      this.cartItems.splice(idx, 1);
      this.setCartToStorage();
    }
    return this.cartItems.length;
  }

  getCart(): Array<CartItem> {
    return this.cartItems.length ? this.cartItems : this.getCartFromStorage();
  }

  private setCartToStorage() {
    sessionStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  private getCartFromStorage(): Array<CartItem> {
    let cartArr: Array<CartItem> = [];

    const sessionCart = sessionStorage.getItem('cart');
    if (sessionCart) {
      cartArr = JSON.parse(sessionCart) as Array<CartItem>;
    }
    return cartArr;
  }

  // deals with backend API
  // in real world example, this should be moved to a separate API service
  public fetchBookList() {
    return this.http.get('/getBookList');
  }
}
