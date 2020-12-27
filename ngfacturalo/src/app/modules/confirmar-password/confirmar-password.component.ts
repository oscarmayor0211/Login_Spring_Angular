import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-password',
  templateUrl: './confirmar-password.component.html',
  styleUrls: ['./confirmar-password.component.css']
})
export class ConfirmarPasswordComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      contraseña: ["",Validators.required],
      confirmarContraseña: ["", Validators.required]
      
    
    });
  }

}
