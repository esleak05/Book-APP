import { Subscription } from 'rxjs';
import { Book } from './../../model/book-interface';
import { ShareDataService } from './../../services/shareData/share-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit, OnDestroy {

  private  subscription: Subscription;
  book: Book = null;
  constructor(
    private shareDataServices: ShareDataService
  ) { }

  ngOnInit(): void {
    this.shareDataServices.book$.subscribe((book: Book) => {

      this.book = book[0];
    });
  }

  ngOnDestroy(): void{

    console.log(`destroy component....`);
  }

}
