import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './../../model/book-interface';
import {URL} from '../../../shared/mocks/url/mock-url';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private httpOptions = {
      headers: new HttpHeaders( {'Content-type': 'application/json'})
  };
  constructor(
    private httpClientServices: HttpClient
  ) {}

  getBooks(numItems = 12): Observable<Book[]>{
    const url = `${URL.path}?num_items=${numItems}`;
    return this.httpClientServices.get<Book[]>(url, this.httpOptions);
  }
  getBooksByCategory(categoryId?: number, numItems = 12): Observable<Book[]>{
    numItems === 0 ? numItems = 12 : numItems;
    const url = `${URL.path}?category_id=${categoryId}&num_items=${numItems}`;
    return this.httpClientServices.get<Book[]>(url, this.httpOptions).pipe(
      tap(books => console.log(books))
    );
  }

  getBook(id: string | number): Observable<Book[]>{
   return of();
  }

  addBook(): void{}

  updateBook(): void{}

  deleteBook(): void{}
}
