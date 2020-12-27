import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Emisor} from '../Modelos/Emisor'
import { ConfiguracionService } from '../configuraciones/configuracionesService';
import { Router } from '@angular/router';
import { EmisoresService} from '../emisores/emisoresService';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css']

})
export class ConfiguracionesComponent implements OnInit {
  productDialog: boolean;

  emisores: Emisor[];

  emisor: Emisor;

  selectedEmisores: Emisor[];

  @Output()Editar_resolucion =new EventEmitter<Emisor>();


   constructor(private router:Router, private configService: ConfiguracionService, private messageService:MessageService, private confirmationService: ConfirmationService,
              private service: EmisoresService) { }

   ngOnInit(): void{
    this.configService.getEmisores()
    .subscribe((data:any)=>{
        this.emisores=data;
    })

  }

  deleteEmisor(emisor:Emisor){ 
    this.service.deleteEmisor(emisor)
    .subscribe(data=>{
      this.emisores = this.emisores.filter(r=>r!=emisor);
      alert("Emisor eliminado");
    })
  }



}
