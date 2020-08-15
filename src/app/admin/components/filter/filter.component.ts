import { ShareDataService } from './../../services/shareData/share-data.service';
import { filter } from 'rxjs/operators';
import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { stringify } from 'querystring';
import { MatSelect } from '@angular/material/select';
import { CategoryService } from './../../services/category/category.service';
import { Category } from './../../model/category-interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  // @Output() selection = new EventEmitter<number>();
  option: number;
  @ViewChild('form1') filterForm: NgForm;
  categories: Category[];

  constructor(
    private categoryServices: CategoryService,
    private shareDataService: ShareDataService
  ) {}

  ngOnInit(): void {
    this.categoryServices
      .getCategories()
      .subscribe((categories: Category[]) => (this.categories = categories));
  }

  displayValue(data?: any): void {
    console.log('Desplegando valor desde filter componeent');
  }



  onSubmit(form: NgForm): void {
    this.shareDataService.sendCategoryId(form.value.filter);
    // this.bookService.getBooks().subscribe(this.bookService);
  }
}
