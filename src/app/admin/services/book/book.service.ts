import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './../../model/book-interface';


@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url =  'https://www.etnassoft.com/api/v1/get/?num_items=9';
  private urlCategory  = 'https://www.etnassoft.com/api/v1/get/';
  private httpOptions = {
      headers: new HttpHeaders( {'Content-type': 'application/json'})
  };
  constructor(
    private httpClientServices: HttpClient
  ) {}

  getBooks(): Observable<Book[]>{
    return this.httpClientServices.get<Book[]>(this.url, this.httpOptions);
  }
  getBooksByCategory(categoryId: number | string): Observable<Book[]>{
    const url = `${this.urlCategory}?category_id=${categoryId}`;
    console.log(url);
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
