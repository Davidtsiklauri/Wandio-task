import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { Books } from '../models/book.interface';
import { switchMap, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  booksData:Observable<Books>;
  amount$:BehaviorSubject<number> = new BehaviorSubject<number>(10);
  searchTitle$:BehaviorSubject<string> = new BehaviorSubject<string>('harry');
  isLoading:boolean = false;

  constructor(
    private bookService:BooksService
  ) { }

  ngOnInit(): void {
    this.booksData = this.getBooks();
  }

  getBooks() : Observable<Books> {
    return  combineLatest(this.amount$ , this.searchTitle$)
              .pipe(
                distinctUntilChanged(),
                debounceTime(200),
                switchMap(([amount , title]) => this.bookService.getBooks(title , amount) )
              )
  }

  search(value:string) {
    if(value !== "") {
       value = value.trim();
       this.searchTitle$
           .next(value)
    }
    
  }

  onScroll(e:boolean) {
    if(e) {
      let currentAmount = this.amount$.getValue();
      this.amount$.next(currentAmount + 10);
    } 
  }

}
