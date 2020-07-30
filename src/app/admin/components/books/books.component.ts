import { Book } from './../../model/book-interface';
import { Component, OnInit } from '@angular/core';
import { BookService } from './../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(
    private bookServices: BookService
  ) { }

  ngOnInit(): void {
    this.bookServices.getBooks().subscribe((books: Book[]) => this.books = books);
  }
}
