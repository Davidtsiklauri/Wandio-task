import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/favourite.interface';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Output() searchValue:EventEmitter<string> = new EventEmitter<string>();

  keyword:string;

  constructor(
    private store:Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  search(e:KeyboardEvent) {
    e.preventDefault();

    if(e.which >= 65 && e.which <= 90 || e.which === 8){
      let value = (<HTMLInputElement>e.target).value;
      this.searchValue.next(value);
    }
    
  }

}
