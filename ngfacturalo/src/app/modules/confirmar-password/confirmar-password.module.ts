import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmarPasswordRoutingModule } from './confirmar-password-routing.module';
import { ConfirmarPasswordComponent } from './confirmar-password.component';

@NgModule({
  declarations: [ConfirmarPasswordComponent],
  imports: [
    CommonModule,
    ConfirmarPasswordRoutingModule
  ]
})
export class ConfirmarPasswordModule { }
