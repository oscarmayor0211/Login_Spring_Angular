import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarPasswordComponent } from './confirmar-password.component';

describe('ConfirmarPasswordComponent', () => {
  let component: ConfirmarPasswordComponent;
  let fixture: ComponentFixture<ConfirmarPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
