import { Book } from './../../model/book-interface';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  private categoryId = new BehaviorSubject<number>(0);
  private numPages = new BehaviorSubject<number>(0);
  private book = new Subject<Book>();

  constructor() {}
  categoryId$ = this.categoryId.asObservable();
  numPages$ = this.numPages.asObservable();
  book$ = this.book.asObservable();

  sendCategoryId(categoryId: number): void {
    if (categoryId) {
      console.log('emit value categoryId');
      this.categoryId.next(categoryId);
    }
  }

  sendNumPages(numPages: number): void {
    if (numPages) {
      console.log('emit value numPages');
      this.numPages.next(numPages);
    }
  }

  sendBook(book: Book): void {
    if (book) {
      console.log(`Emit book: ${book}`);
      this.book.next(book);
    }
  }
}
