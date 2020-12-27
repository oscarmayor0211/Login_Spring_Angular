import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, ReactiveFormsModule],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }