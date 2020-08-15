import { ContentComponent } from './../components/content/content.component';
import { AdminComponent } from './../pages/admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IndexComponent } from '../pages/index/index.component';
import { BooksComponent } from '../components/books/books.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  // {path: 'admin', component: AdminComponent },
  {path: 'book/:id', component: AdminComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
