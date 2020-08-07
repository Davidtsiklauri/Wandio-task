import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { InfinityScrollComponent } from './components/infinity-scroll/infinity-scroll.component';
import { LazyImageDirective } from './directives/lazy-image.directive';
import { RouterModule } from '@angular/router';
import { SearchInputComponent } from './components/search-input/search-input.component';

const SHARED = [
  HeaderComponent,
  LoaderComponent,
  InfinityScrollComponent,
  SearchInputComponent,
  LazyImageDirective,
]

@NgModule({
  declarations: [...SHARED],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[...SHARED],
})
export class SharedModule { }
