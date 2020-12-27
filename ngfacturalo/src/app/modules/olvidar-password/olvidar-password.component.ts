import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnviarCorreoService } from '../../service/enviar-correo.service';
@Component({
  selector: 'app-olvidar-password',
  templateUrl: './olvidar-password.component.html',
  styleUrls: ['./olvidar-password.component.css']
})
export class OlvidarPasswordComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private ecorreo: EnviarCorreoService) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      mail: ["", [Validators.required,  Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],
      
    
    });
  }

  get emailInvalid() {
    return (
      this.formulario.get("mail").invalid &&
      this.formulario.get("mail").touched
    );
  }


  ingresar(){
    console.log(this.formulario.value);
    this.ecorreo.enviarCorreo(this.formulario.value.mail).subscribe(
      resp=>{
        console.log(resp);
      });
    console.log(this.formulario.value.mail);

  }

}
