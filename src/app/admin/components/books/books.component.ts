import { ShareDataService } from './../../services/shareData/share-data.service';
import { Book } from './../../model/book-interface';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BookService } from './../../services/book/book.service';
import { take } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  books: Book[];

  constructor(
    private bookServices: BookService,
    private shareDataServices: ShareDataService
  ) {
    this.subscription = this.shareDataServices.information$.subscribe((data) =>
      this.bookServices
        .getBooksByCategory(data)
        .subscribe((books) => (this.books = books))
    );
  }

  ngOnInit(): void {
    this.bookServices
      .getBooks()
      .subscribe((books: Book[]) => (this.books = books));
  }


  ngOnDestroy(): void {
    console.log('se está destruyendo el componente');
    this.subscription.unsubscribe();
  }

  private IsEmpty(books: Book[]): boolean {
    console.log(books);
    return false;
  }


}
