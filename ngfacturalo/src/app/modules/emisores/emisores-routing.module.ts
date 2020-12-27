import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmisoresComponent } from "./emisores.component";
import { ResolucionesComponent } from '../resoluciones/resoluciones.component';
import { ConfiguracionesComponent} from '../configuraciones/configuraciones.component' ;

const routes: Routes = [
    {
        path: "",
        component: EmisoresComponent,
      
    },
    {
        path: "resoluciones/:id",
        component: ResolucionesComponent,
    },
    {
        path: "configuraciones",
        component: ConfiguracionesComponent,
    }

   


  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmisoresRoutingModule {}
