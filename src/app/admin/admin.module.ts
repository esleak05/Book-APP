import { AdminComponent } from './pages/admin/admin.component';
import { AdminRoutingModule } from './routes/admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NavComponent } from './components/nav/nav.component';
import {IndexComponent} from './pages/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';
import { BooksComponent } from './components/books/books.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { StringAlteratePipe } from '../shared/pipes/string-alterate.pipe';
import { ContentComponent } from './components/content/content.component';
import { ImageComponent } from './components/image/image.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    IndexComponent,
    FilterComponent,
    BooksComponent,
    AdminComponent,
    PaginatorComponent,
    AdminComponent,
    ContentComponent,
    ImageComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    FilterComponent,
    IndexComponent,
    BooksComponent,
    AdminComponent,
    ContentComponent
   ]
})
export class AdminModule {

}
