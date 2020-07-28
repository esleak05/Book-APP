import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import {FILTERS} from '../../../shared/mocks/filters/mock-filters';
import {Filters} from '../../../shared/interfaces/filters/filter-interfaces';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  getFilters(): Observable<Filters[]>{
    console.log(`Filters Services`);
    return of(FILTERS);
  }
}
