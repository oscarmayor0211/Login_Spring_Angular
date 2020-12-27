import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { log } from "console";
import { Emisor } from '../Modelos/Emisor';
import { EmisoresRoutingModule } from './emisores-routing.module';

@Injectable({
  providedIn: 'root'
})
export class EmisoresService{
 
  headers: HttpHeaders;

  constructor(private http: HttpClient) {

  }

  Url2= 'http://34.66.110.49:59110/facturalo/Emisores/buscar';
  Url3= 'http://34.66.110.49:59110/facturalo/Emisores/edit';
  Url4= 'http://34.66.110.49:59110/facturalo/Emisores/delete';
  Url5= 'http://34.66.110.49:59110/facturalo/Emisores/add';
  Url6= 'http://34.66.110.49:59110/facturalo/Doc/uploadFile';



  createEmisor(emisor:Emisor){
    return this.http.post<Emisor>(this.Url5,emisor);
  }

  
  getEmisorId(id:number){
    let headers = this.headers;
    return this.http.get<Emisor>(this.Url2+"/"+id+"/"+"3");
  }

  
  updateEmisor(emisor:Emisor){
    return this.http.put<Emisor>(this.Url3+"/"+emisor.id,emisor );
   
  }

  deleteEmisor(emisor:Emisor){
    return this.http.delete<Emisor>(this.Url4+"/"+emisor.id);
  }

  cargarCertificado(nit:string, file?:File){
    console.log(nit + "-----"+ file);
    return this.http.post(this.Url6+"/"+nit, file);
  }


}