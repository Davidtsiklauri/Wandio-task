import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/favourite.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count$:Observable<number>;

  constructor(
    private store:Store<AppState>
  ) { 
    this.count$ = store.select(el => el.book.count);
  }

  ngOnInit(): void {
  }

}
