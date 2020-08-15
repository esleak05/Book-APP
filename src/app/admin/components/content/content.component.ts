import { take } from 'rxjs/operators';
import { Book } from './../../model/book-interface';
import { Subscription } from 'rxjs';
import { ShareDataService } from './../../services/shareData/share-data.service';
import { Icon } from 'src/app/shared/interfaces/incons/icon-interface';
import { IconsService } from './../../../shared/services/icons/icons.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {

  book: Book = null;
  private subscription: Subscription;

  constructor(
    private iconService: IconsService,
    private shareDataService: ShareDataService
  ) {

   }

  ngOnInit(): void {
    this.subscription = this.shareDataService.book$.subscribe((book: Book) => {
      console.log(`This book is: ${JSON.stringify(book)}`);

      this.book = book[0];
     });
  }

  ngOnDestroy(): void{
    console.log(`Destroy comnpoenente`);

  }

}
