import { Component, OnInit } from '@angular/core';
import {Filters} from '../../../shared/interfaces/filters/filter-interfaces';
import { FilterService } from './../../../shared/services/filters/filter.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filters: Filters[];

  constructor(
    private filterService: FilterService,
  ) { }

  ngOnInit(): void {
   this.filterService.
        getFilters().
        subscribe(filters => this.filters = filters);
  }

}
