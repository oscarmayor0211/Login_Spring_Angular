import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FacturasRoutingModule } from "./facturas-routing.module";
import { FacturasComponent } from "./facturas.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
    declarations: [FacturasComponent],
    providers:[DatePipe],
    imports: [RouterModule,CommonModule,FieldsetModule,
                FacturasRoutingModule,FormsModule,CalendarModule,TableModule,CheckboxModule,ReactiveFormsModule]
})
export class FacturasModule {} 
