import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Factura } from "../models/factura.model";
import { Mes } from "../demo/domain/mes";

@Injectable({
    providedIn: "root",
})
export class FacturaService {
    constructor(private http: HttpClient) {}

    getAllFacturaMedidor(id: number) {
        let Url = "http://34.66.110.49:59110/facturalo/Doc/listarr/" + id;
        return this.http.get(Url);
    }

    getFiltroFecha(
        fechaInicio?: string,
        fechaFinal?: string,
        cliente?: string,
        id?,
        nit?: number
    ) {
        //http://34.66.110.49:59110/facturalo/Doc/listar/20200910/20200910/null/900174087/3
        let Url =
            "http://34.66.110.49:59110/facturalo/Doc/listar" +
            "/" +
            fechaInicio +
            "/" +
            fechaFinal +
            "/" +
            cliente +
            "/" +
            id +
            "/" +
            nit;

        return this.http
            .get<any>(Url)
            .toPromise()
            .then((res) => res as Factura[])
            .then((data) => data);
    }

    downloadfile(filePath?: string) {
        let Url =
            "http://34.66.110.49:59110/facturalo/Doc/descargaFTP/900365660/202011/" +
            filePath;
        console.log(Url);
        return this.http.get(Url, { responseType: "blob" });
    }

    graficaDona(mes : number) {
      let Url = `http://34.66.110.49:59110/facturalo/Doc/calculograficacircular/3/${mes}`;
      console.log(Url);
      return this.http.get(Url);
      
    }

    MesesTabla(){

            return this.http.get('assets/demo/data/meses.json')
       
        }
    
}
