import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasComponent } from './facturas.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import { RouterModule } from '@angular/router';
import { CarService } from '../../demo/service/carservice';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('FacturasComponent', () => {
  let component: FacturasComponent;
  let fixture: ComponentFixture<FacturasComponent>;
  let calendar : HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [TableModule,RouterModule,FormsModule,CalendarModule,CheckboxModule,ReactiveFormsModule
                  ,HttpClientTestingModule],
      declarations: [ FacturasComponent ],
      providers: [CarService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasComponent);
    component = fixture.componentInstance;
    calendar = fixture.nativeElement.querySelector('p-calendar');
    fixture.detectChanges();
  });

  it('Debe de tener dos campos de fecha para filtrar', () => {
    fixture.detectChanges(); // run change detection
;

    // the validation error should be found:
    // expect(component.fechainicial).toBeTruthy();
    // expect(component.fechafinal).toBeTruthy();
    expect(calendar.textContent).toBeTruthy('fechainicial');
    expect(calendar.textContent).toBeTruthy('fechafinal');


  });
});
