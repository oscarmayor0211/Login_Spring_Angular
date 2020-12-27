import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResolucionesRoutingModule } from './resoluciones-routing.module';
import { ResolucionesComponent } from './resoluciones.component';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {  PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table'
import {HttpClientModule}from '@angular/common/http';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [ResolucionesComponent],
  imports: [
    TableModule,
    CommonModule,

    PanelModule,
    ResolucionesRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    HttpClientModule,
    
  ],
  providers: [
    DatePipe,
    
  ]
})
export class ResolucionesModule { }
