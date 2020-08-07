import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { FavouritesComponent } from './favourites/favourites.component';


const routes: Routes = [
  {
    path:'',
    component:BooksComponent,
  },
  {
    path:"book/:id",
    component:BookDetailComponent,
  },
  {
    path:'favourites',
    component:FavouritesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
