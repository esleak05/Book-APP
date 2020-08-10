import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  // categoryId: number;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  // sendCategoryId(categoryId: number): void{
  //   console.log(`from index component ${categoryId}`);
  //   this.categoryId = categoryId;
  // }
}
