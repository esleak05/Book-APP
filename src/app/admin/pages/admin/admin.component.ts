import { Book } from './../../model/book-interface';
import { BookService } from './../../services/book/book.service';
import { ShareDataService } from './../../services/shareData/share-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private bookServices: BookService,
    private shareDataService: ShareDataService
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void{
    const id = this.route.snapshot.paramMap.get('id');
    console.log(`id: ${id}`);
    this.bookServices.getBook(id).subscribe((book) => {
        console.log(JSON.stringify( book));
        this.shareDataService.sendBook(book);
    });
  }

}
