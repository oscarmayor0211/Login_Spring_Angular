import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Mail } from '../models/correo.model'
@Injectable({
  providedIn: 'root'
})
export class EnviarCorreoService {
  headers:HttpHeaders;

  constructor(private http : HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers = this.headers.append('Content-Type', 'application/json');
   }

  enviarCorreo(mail:string){
    let headers = this.headers;
    let Url = "http://localhost:8080/email/sendMail";
    return this.http.post(Url,mail);
   }
}
