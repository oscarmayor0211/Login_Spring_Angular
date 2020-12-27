import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolucionesComponent } from './resoluciones.component';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {  PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table'
import { CommonModule } from '@angular/common';
import { ResolucionesRoutingModule } from './resoluciones-routing.module';
import { MessageService, ConfirmationService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('ResolucionesComponent', () => {
  let component: ResolucionesComponent;
  let fixture: ComponentFixture<ResolucionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolucionesComponent ],
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
        BrowserAnimationsModule
      ],
      providers:[MessageService,ConfirmationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Crear formulario resolucion', () => {
    expect(component.userform.contains('firstname')).toBeTruthy();
    expect(component.userform.contains('lastname')).toBeTruthy();
    expect(component.userform.contains('password')).toBeTruthy();
    expect(component.userform.contains('description')).toBeTruthy();

  });
});
