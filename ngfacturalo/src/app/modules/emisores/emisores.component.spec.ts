import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule} from 'primeng/panel';
import { TableModule } from 'primeng/table'
import { TabViewModule} from 'primeng/components/tabview/tabview';
import { MessageService} from 'primeng/api';
import { ConfirmationService} from 'primeng/api';
import {FileUploadModule} from 'primeng/fileupload';
import { EmisoresRoutingModule } from './emisores-routing.module';
import { EmisoresComponent } from './emisores.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule, CalendarModule, ConfirmDialogModule, ContextMenuModule, DialogModule, DropdownModule, InputTextareaModule, MultiSelectModule, ProgressBarModule, RadioButtonModule, RatingModule, SliderModule, ToolbarModule } from 'primeng/primeng';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { EmisoresService} from '../emisores/emisoresService';

import { ResolucionesComponent } from '../resoluciones/resoluciones.component';
import { ConfiguracionesComponent } from '../configuraciones/configuraciones.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmisoresComponent', () => {
  let component: EmisoresComponent;
  let fixture: ComponentFixture<EmisoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmisoresComponent,ConfiguracionesComponent,ResolucionesComponent ],
      imports: [
        CommonModule,
        EmisoresRoutingModule,
        InputTextModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
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
        
        
        
      ],
      providers:[
        MessageService,
        ConfirmationService,
        EmisoresService,
       
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmisoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se debe de crear el formulario de emisores', () => {
    expect(component.userform.contains('firstname')).toBeTruthy();
    expect(component.userform.contains('lastname')).toBeTruthy();
    expect(component.userform.contains('password')).toBeTruthy();
    expect(component.userform.contains('description')).toBeTruthy();

  });
});


