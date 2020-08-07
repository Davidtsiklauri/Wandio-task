import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';
import { SharedModule } from '../shared/shared.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { FavouritesComponent } from './favourites/favourites.component';

@NgModule({
  declarations: [BooksComponent, BookComponent, BookDetailComponent, FavouritesComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ]
})
export class BooksModule { }
