import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminModule } from './../admin.module';
import { IndexComponent } from '../pages/index/index.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  // {path: 'administracion', component: rea}
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
