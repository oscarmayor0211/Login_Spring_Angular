import { Component, OnInit, ViewChild } from "@angular/core";
import { FacturaService } from "../../service/factura.service";
import { Mes } from '../../demo/domain/mes';

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
    data: any;
    dataDona: any;

    options1: any;
    options2: any;

    variableFactura: number;
    variableCredito: number;
    variableDebito: number;
    total: any;
    meses : any;
    mess: any;

 

    constructor(private facturaService: FacturaService) {}
    public value;

    ngOnInit() {
     
        this.getFacturasMedidor();
        this.hola();
    }

 
    hola() {
      this.facturaService.MesesTabla().subscribe((data: any) => {
          this.meses = data;
          this.meses = Array.of(this.meses);
          console.log(this.meses[0]['meses']);
          this.mess = this.meses[0]['meses'];
      },
      err => console.error(err), 
      () => console.log(' completed') )
      
    }

    getFacturasMedidor() {
        this.facturaService.getAllFacturaMedidor(3).subscribe((valor) => {
            this.value = valor;
            console.log(valor);
        });
    }

    getGraficaDona(mes : number) {
        console.log(mes);
        
        this.facturaService.graficaDona(mes).subscribe((data) => {
            console.log(data[0]);

            this.variableFactura = data[0].factura;
            this.variableCredito = data[0].nCredito;
            this.variableDebito = data[0].nDebito;
            this.total = data[0].total;

            this.dataDona = {
                labels: ["Nota debito", "Nota credito", "Factura"],
                datasets: [
                    {
                        data: [
                            this.variableDebito,
                            this.variableCredito,
                            this.variableFactura,
                        ],
                        backgroundColor: ["#5B2C6F", "#2874A6", "#117A65"],
                        hoverBackgroundColor: ["#5B2C6F", "#2874A6", "#117A65"],
                    },
                ],
            };

            this.options2 = {
                title: {
                    display: true,
                   // text: "Facturación Mensual",
                    fontSize: 16,
                },
                legend: {
                    position: "bottom",
                },
            };
        });
    }
}
