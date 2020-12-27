import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmarPasswordComponent} from '../confirmar-password/confirmar-password.component';

const routes: Routes = [
  {
    path:"",
    component:ConfirmarPasswordComponent,
  }
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmarPasswordRoutingModule { }
