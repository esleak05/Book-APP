import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  private categoryId = new BehaviorSubject<number>(0);
  private numPages = new BehaviorSubject<number>(0);
  constructor() {}
  categoryId$ = this.categoryId.asObservable();
  numPages$ = this.numPages.asObservable();

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
}
