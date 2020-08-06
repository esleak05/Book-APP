import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NavComponent } from './components/nav/nav.component';
import {IndexComponent} from './pages/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';
import { BooksComponent } from './components/books/books.component';
import { CreateComponent } from './pages/create/create.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { StringAlteratePipe } from '../shared/pipes/string-alterate.pipe';


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    IndexComponent,
    FilterComponent,
    BooksComponent,
    CreateComponent,
    PaginatorComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavComponent,
    FooterComponent,
    FilterComponent,
    IndexComponent,
    BooksComponent,
   ]
})
export class AdminModule {

}
