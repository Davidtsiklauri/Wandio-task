import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.interface';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book:Observable<Book>;
  bookID:string;

  constructor(
    private activeRoute:ActivatedRoute,
    private bookService:BooksService
  ) { }

  ngOnInit(): void {
      this.bookID = this.activeRoute.snapshot.params['id'];
      this.getBook();
  }

  getBook() {
      if(this.bookID) {
        if(this.bookID !== '') {
            this.book = this.bookService
                            .getBookByID(this.bookID);
        }
      }
  }

}
