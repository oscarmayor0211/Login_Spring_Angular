import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { Login } from '../../models/login.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  public formSubmitted = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router , private loginService: LoginService ) {
    this.crearFormulario();
   }
crearFormulario(){
 this.loginForm = this.fb.group({
  user: ["ADM", [Validators.required, Validators.minLength(3)]],
  pwd: ["1123",[ Validators.required, Validators.minLength(6)]],
  
});
}
  get usuarioInvalid() {
    return (
      this.loginForm.get("user").invalid &&
      this.loginForm.get("user").touched
    );
  }
  get passwordInvalid() {
    return (
      this.loginForm.get("pwd").invalid &&
      this.loginForm.get("pwd").touched
    ); 
  }


  ingresar(){
    // console.log(this.loginForm.value);
    // this.loginService.inicioSesion(this.loginForm.value).subscribe(resp =>{
    //   console.log(resp);
    // });
    if (this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).forEach((control) => {
        this.router.navigate(['/login']);
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) => {
            control.markAllAsTouched();
            this.router.navigate(['/login']);
          });
        } else {
          control.markAllAsTouched();
          this.router.navigate(['/login']);
        }
      });
  }else{
    this.router.navigate(['admin/dashboard']);

    console.log(this.loginForm.value);
  }
}

}
