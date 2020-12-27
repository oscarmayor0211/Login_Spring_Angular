import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelMenuModule } from 'primeng/panelmenu';
import {InputTextModule} from 'primeng/inputtext';
import { PanelModule} from 'primeng/panel';
import { Panel } from 'primeng/panel';
import { PanelMenu } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table'
import { TabViewModule} from 'primeng/components/tabview/tabview';
import { MessageService} from 'primeng/api';
import { ConfirmationService} from 'primeng/api';
import {FileUploadModule} from 'primeng/fileupload';
import { EmisoresRoutingModule } from './emisores-routing.module';
import { EmisoresComponent } from './emisores.component';
import { ConfiguracionesComponent } from '../configuraciones/configuraciones.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule, CalendarModule, ConfirmDialogModule, ContextMenuModule, DialogModule, DropdownModule, InputTextareaModule, MultiSelectModule, ProgressBarModule, RadioButtonModule, RatingModule, SliderModule, ToolbarModule } from 'primeng/primeng';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { EmisoresService} from '../emisores/emisoresService';
import { ResolucionesComponent} from '../resoluciones/resoluciones.component';
import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [EmisoresComponent,ConfiguracionesComponent,ResolucionesComponent],
  imports: [
    CommonModule,
    EmisoresRoutingModule,
    InputTextModule,
    PanelMenu,
    Panel,
    PanelModule,
    TabViewModule,
    TableModule,
    PanelMenuModule,
    ReactiveFormsModule,
    FileUploadModule,
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    ProgressBarModule,
    HttpClientModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    ConfirmDialogModule,
    InputTextareaModule,
    RouterModule
    
    
  ],
  providers:[
    MessageService,
    ConfirmationService,
    EmisoresService
   
  ],

})
export class EmisoresModule { }
