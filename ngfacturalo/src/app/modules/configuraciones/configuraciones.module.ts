import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import { MessageService} from 'primeng/api';
import { ConfirmationService} from 'primeng/api';
import {SliderModule} from 'primeng/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelMenuModule } from 'primeng/panelmenu';
import {InputTextModule} from 'primeng/inputtext';
import { PanelModule} from 'primeng/panel';
import {FileUploadModule} from 'primeng/fileupload';
import { ConfiguracionesRoutingModule } from './configuraciones-routing.module';
import { ConfiguracionesComponent } from './configuraciones.component';
import { ConfiguracionService} from './configuracionesService';
import { RouterModule} from '@angular/router'
import { EmisoresComponent} from '../emisores/emisores.component'
import { HttpClientModule } from '@angular/common/http'
import { ResolucionesComponent} from '../resoluciones/resoluciones.component';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown'
import { MessageModule} from 'primeng/primeng';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    ConfiguracionesComponent,
    EmisoresComponent,
    ResolucionesComponent
  
  ],
  imports: [
  
    CommonModule,
    ConfiguracionesRoutingModule,
    FormsModule,
    TableModule,
    ToastModule,
    ButtonModule,
    ToolbarModule,
    SliderModule,
    RouterModule,
    PanelMenuModule,
    ReactiveFormsModule,
    InputTextModule,
    PanelModule,
    PanelModule,
    FileUploadModule,
    HttpClientModule,
    CalendarModule,
    DropdownModule,
    MessageModule
   
 
  
  ],
  bootstrap:    [ConfiguracionesComponent],
  providers:[
    MessageService,
    ConfirmationService,
    ConfiguracionService,
    DatePipe
  ]

})
export class ConfiguracionesModule { }
