import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/layouts/admin/admin.component';
import { LoginComponent } from './login.component';
import {OlvidarPasswordComponent} from '../olvidar-password/olvidar-password.component';
 
const routes: Routes = [
  {
  path:"",
  component: LoginComponent,

},
{
  path:"admin/dashboard",
  component: AdminComponent

},
{
  path:"forgotPassword",
  component: OlvidarPasswordComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
