import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Book } from '../types';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  // stores books information from backend
  bookList: Array<Book> = [];
  // number of items present in the cart
  cartLength: number = 0;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.fetchBooks();
    this.cartLength = this.appService.getCart().length;
  }

  private async fetchBooks(): Promise<void> {
    this.appService.fetchBookList().subscribe((data: Array<Book>) => {
      this.bookList = data;
    });
  }

  addBookToCart(book: Book) {
    this.cartLength = this.appService.addToCart(book);
  }

  removeFromCart(book: Book) {
    this.cartLength = this.appService.removeFromCart(book);
  }

  checkout() {
    if (this.cartLength) {
      this.appService.showCheckout();
    }
  }

}
