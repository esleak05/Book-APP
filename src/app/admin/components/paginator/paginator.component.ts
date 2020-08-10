import { ShareDataService } from './../../services/shareData/share-data.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  pageEvent: PageEvent;

  constructor(private shareDataServices: ShareDataService) {}

  ngOnInit(): void {}

  getBook(event?: PageEvent): PageEvent {
    console.log(event.pageSize);

    this.shareDataServices.sendNumPages(event.pageSize);

    return event;
  }
}
