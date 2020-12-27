import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolucionesComponent } from './resoluciones.component';

const routes: Routes = [
  {
    path: "",
    component: ResolucionesComponent,
  },
  {
    path: "emisores/resoluciones",
    component: ResolucionesComponent,
  },
  {
    path: "resoluciones/:id",
    component: ResolucionesComponent,
 
}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResolucionesRoutingModule { }
