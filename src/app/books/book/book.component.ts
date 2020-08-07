import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Book } from 'src/app/models/book.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/favourite.interface';
import { AddToFavourite, RemoveFromFavourite } from '../../store/actions/book.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @HostBinding('class') classAttribute: string = "col sm12 m6";

  @Input() data: Book;
  @Input() isDetailed: boolean = false;

  ids$: Observable<string[]>;
  hasFavourited: boolean = false;

  constructor(
    private store: Store<AppState>
  ) {
    this.ids$ = store.select(el => el.book.ids)
  }

  ngOnInit(): void {
    this.checkIfHasFavourite();
  }

  checkIfHasFavourite() {
    if (this.ids$) {
      this.ids$
        .subscribe(ids => {
          if (ids) {
            if (ids.length > 0) {
              this.hasFavourited = ids.includes(this.data.id);
            }
            else {
              this.hasFavourited = false;
            }
          }
        })
    }
  }

  addToFavourite(id: string): void {
    this.store.dispatch(new AddToFavourite(id));
  }

  removeFromFavourite(id: string): void {
    this.store.dispatch(new RemoveFromFavourite(id));
  }

}
