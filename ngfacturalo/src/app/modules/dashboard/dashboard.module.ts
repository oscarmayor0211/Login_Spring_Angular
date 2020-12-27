import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'primeng/chart';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartModule,
    GaugesModule,
    TableModule
  ]
})
export class DashboardModule { }
