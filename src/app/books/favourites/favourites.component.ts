import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/favourite.interface';
import { BooksService } from '../books.service';
import { Observable, Subject } from 'rxjs';
import { zip, map, tap, debounceTime, takeUntil } from 'rxjs/operators';
import { Book } from 'src/app/models/book.interface';
import { RemoveAll } from 'src/app/store/actions/book.actions';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit , OnDestroy {

  ids$:Observable<string[]>;
  books$:Observable<Book>[];
  destroy$:Subject<any> = new Subject<any>();

  isLoading:boolean = true;

  constructor(
    private store:Store<AppState>,
    private bookService:BooksService
  ) { 
    this.ids$ = store.select(el => el.book.ids);
  }

  ngOnInit(): void {
    this.ids$
        .pipe(
          takeUntil(this.destroy$),
          zip(el => {
            return el.map(id => this.bookService.getBookByID(id))
          }),
          map(ids => this.books$ = ids) ,
          tap(() => this.isLoading = true), 
          debounceTime(250),   
        )
        .subscribe(
          () => { this.isLoading = false; },
          () => { this.isLoading = false; }
        );
  }

  removeAll() {
     this.store.dispatch(new RemoveAll());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
