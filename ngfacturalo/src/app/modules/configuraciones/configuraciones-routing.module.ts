import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Component } from '@fullcalendar/core';
import { EmisoresComponent } from '../emisores/emisores.component';
import { ResolucionesComponent } from '../resoluciones/resoluciones.component';
import { ConfiguracionesComponent } from "./configuraciones.component";


const routes: Routes = [
    {
        path: "",
        component: ConfiguracionesComponent,
    },
    {
        path: "emisores",
        component: EmisoresComponent,
    },
    {
        path: "emisores/resoluciones",
        component: ResolucionesComponent,
    },
    {
        path: "emisores/:idE",
        component: EmisoresComponent,
    },
    {
        path: "emisores/:idE/resoluciones",
        component: ResolucionesComponent,
    },
    {
        path: "emisores/resoluciones/:id",
        component: ResolucionesComponent,
    },
    {
        path: "emisores/:idE/resoluciones/:id",
        component: ResolucionesComponent,
    }

   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConfiguracionesRoutingModule {}
