import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './../../model/category-interface';
import { tap } from 'rxjs/operators';
import {URL} from '../../../shared/mocks/url/mock-url';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(
    private httpServices: HttpClient
  ) { }

  getCategories(): Observable<Category[]>{
    const url = `${URL.path}?get_categories=all`;
    return this.httpServices.get<Category[]>(url, this.httpOptions).pipe(
      tap(categories =>  console.log(categories))
    );
  }

  getCategory(id: number): Observable<Category>{
    return of();
  }

  addCategory(category: Category): void{}

  updateCategory(): void{}

  deleteCategory(id: number): void{}

}
