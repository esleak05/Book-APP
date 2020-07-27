import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './pages/form/form.component';



@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, SharedModule],
  exports: [FormComponent],
})
export class LoginModule {}
