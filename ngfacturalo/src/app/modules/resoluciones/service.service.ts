import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Resolucion } from '../Modelos/Emisor';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'https://5fbc2bb8c09c200016d41835.mockapi.io/resoluciones/resoluciones';
  Url2= 'http://34.66.110.49:59110/facturalo/Resolucion/add';
  Url3= 'http://34.66.110.49:59110/facturalo/Resolucion/buscar';
  Url4= 'http://34.66.110.49:59110/facturalo/Resolucion/edit';
  Url5= 'http://34.66.110.49:59110/facturalo/Resolucion/delete';
  


  getResoluciones(){
    return this.http.get<Resolucion[]>(this.Url);
  }

  createResolucion(resolucion:Resolucion){
    return this.http.post<Resolucion>(this.Url2,resolucion);
  }

  
  getResolucionId(id:number){
    return this.http.get<Resolucion>(this.Url3+"/"+id);
  }

  
  updateResolucion(resolucion:Resolucion){
    return this.http.put<Resolucion>(this.Url4+"/"+resolucion.s_id,resolucion);
   
  }
    deleteResolucion(resolucion:Resolucion){
      return this.http.delete<Resolucion>(this.Url5+"/"+resolucion.s_id);
  
    }
    

  }

