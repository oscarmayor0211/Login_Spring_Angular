import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Emisor} from '../Modelos/Emisor';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
 
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
  } 

  Url = 'http://34.66.110.49:59110/facturalo/Emisores/listar/3';


  getEmisores(){
    return this.http.get(this.Url);
  }
}