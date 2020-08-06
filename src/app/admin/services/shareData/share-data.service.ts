import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  private information = new BehaviorSubject<number | string>(0);
  constructor() {}
  information$ = this.information.asObservable();

  sendCategoryId(categoryId: number | string): void{
    console.log(`from shred componenet`);
    this.information.next(categoryId);
  }


}
