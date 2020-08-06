import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './../../model/category-interface';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = 'https://www.etnassoft.com/api/v1/get/?get_categories=all';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(
    private httpServices: HttpClient
  ) { }

  getCategories(): Observable<Category[]>{
    return this.httpServices.get<Category[]>(this.url, this.httpOptions).pipe(
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
