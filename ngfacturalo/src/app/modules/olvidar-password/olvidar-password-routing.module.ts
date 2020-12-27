import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OlvidarPasswordComponent} from '../olvidar-password/olvidar-password.component';

const routes: Routes = [
  {
    path:"",
    component: OlvidarPasswordComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OlvidarPasswordRoutingModule { }
