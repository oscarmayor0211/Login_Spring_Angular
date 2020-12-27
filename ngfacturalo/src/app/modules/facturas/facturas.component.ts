import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Factura } from "../../models/factura.model";
import { FacturaService } from "../../service/factura.service";
import { DatePipe } from "@angular/common";
import * as JSZip from "jszip";
import { saveAs } from "file-saver";
import Swal from 'sweetalert2'

@Component({
    selector: "app-facturas",
    templateUrl: "./facturas.component.html",
    styleUrls: ["./facturas.component.css"],
})
export class FacturasComponent implements OnInit {
    formu: NgForm;
    fechainicial: Date = new Date();
    fechafinal: Date = new Date();
    zip = new JSZip();
    fe: Factura[];
    facturas: Factura[];
    selectedFactura: Factura[];
    selectedValues: true;
    cols: any[];
    columns: any[];
    exportColumns: any[];

    selectedMembers: any;
    es: any;
    constructor(
        private facturaService: FacturaService,
        private datepipe: DatePipe
    ) {}

    ngOnInit() {
        this.cols = [
            { field: "cliente", header: "Cliente" },
            { field: "n_value", header: "Valor" },
            { field: "documento", header: "Documento" },
            { field: "d_date", header: "Fecha" },
            { field: "i_status", header: "Estado" },
        ];

        this.exportColumns = this.cols.map((col) => ({
            title: col.header,
            dataKey: col.field,
        }));
        this.calendarEspañol();
    }

    calendarEspañol() {
        this.es = {
            firstDayOfWeek: 0,
            dayNames: [
                "Domingo",
                "Lunes",
                "Martes",
                "Miercoles",
                "Jueves",
                "Viernes",
                "Sabado",
            ],
            dayNamesShort: ["Dom", "Lun", "Mart", "Mie", "Jue", "Vie", "Sab"],
            dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
            monthNames: [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre",
            ],
            monthNamesShort: [
                "Ene",
                "Feb",
                "Mar",
                "Abr",
                "May",
                "Jun",
                "Jul",
                "Ago",
                "Sep",
                "Oct",
                "Nov",
                "Dic",
            ],
            today: "Today",
            clear: "Clear",
            dateFormat: "yy-mm-dd",
            weekHeader: "Wk",
        };
    }

    getFacturaByFiltro() {
        let dateinicio = this.datepipe.transform(this.fechainicial, "yyyyMMdd");
        let datefinal = this.datepipe.transform(this.fechafinal, "yyyyMMdd");
        this.facturaService
            .getFiltroFecha(dateinicio, datefinal, null, null, 3)
            .then((data) => {
                // this.selectedMembers = this.facturas.filter((m) => {
                //     if (m.d_date > dateinicio && m.d_date < datefinal) return m;
                // });
                this.fe = this.selectedMembers;
                this.fe = data;
            });
    }

    descargaZip(nombre: string) {
        this.facturaService.downloadfile(nombre).subscribe((data: any) => {
            const blob = new Blob([data], {
                type: "application/zip",
            });
            saveAs(blob, `${nombre}.zip`);
        },  (error) => 
        Swal.fire('Esta factura no tiene documentos para descargar'),
        () => console.log("Complete")
);
        console.log(nombre);
    }
}
