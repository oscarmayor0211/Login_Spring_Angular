import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se debe crear el formulario login con los campos email & password', () => {
    expect(component.formulario.contains('email')).toBeTruthy();
    expect(component.formulario.contains('password')).toBeTruthy();

  });

  it('El email debe de ser obligatorio', () => {
    const control  = component.formulario.get('email')
    control.setValue('');
    expect( control.valid).toBeFalsy();
  });

   it('El email debe de ser valido', () => {
    const control  = component.formulario.get('email')
    control.setValue('oscar@gmail.com');
    expect( control.valid).toBeTruthy();
  });

  
});
