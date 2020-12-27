import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login.model';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  headers:HttpHeaders;

  constructor(private http : HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers = this.headers.append('Content-Type', 'application/json');
   }

  Url= 'http://localhost:8080/sesion/users';

  inicioSesion(login:Login){
   // console.log(this.Url);
    let headers = this.headers;
    return this.http.post<Login>(this.Url,login,{headers:headers})
    .pipe(
      tap((resp:any) =>{
        localStorage.setItem('token',resp.token)
      })
    );
  }
}
