import { ShareDataService } from './../../services/shareData/share-data.service';
import { Book } from './../../model/book-interface';
import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { BookService } from './../../services/book/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit, OnDestroy {
  private subscriptionCategory: Subscription;
  private subscriptionNumPages: Subscription;
  private categoryId: number;
  private numPages: number;
  books: Book[] = [];

  constructor(
    private bookServices: BookService,
    private shareDataServices: ShareDataService
  ) {
    this.subscriptionCategory = this.shareDataServices.categoryId$.subscribe(
      (categoryId: number) => {
        this.categoryId = categoryId;
        this.getBooks();
      }
    );
    this.subscriptionNumPages = this.shareDataServices.numPages$.subscribe(
      (numPages: number) => {
        this.numPages = numPages;
        this.getBooks();
      }
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('se está destruyendo el componente');
    // this.subscriptionCategory.unsubscribe();
    // this.subscriptionNumPages.unsubscribe();
  }

  private getBooks(): void {
    if (this.books.length > 0) {
      this.bookServices
        .getBooksByCategory(this.categoryId, this.numPages)
        .subscribe((books: Book[]) => (this.books = books));
    } else {
      this.bookServices
        .getBooks()
        .subscribe((books: Book[]) => (this.books = books));
    }
  }
}
