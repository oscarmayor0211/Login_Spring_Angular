import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService, ConfirmationService} from 'primeng/api';
import {SelectItem} from 'primeng/api';
import { ServiceService} from '../resoluciones/service.service';
//import { Resolucion } from '../Modelos/Resolucion';
import { Router } from '@angular/router';
import { ActivatedRoute} from "@angular/router";
import { DatePipe } from '@angular/common'
import { Emisor , Resolucion} from '../Modelos/Emisor';




@Component({
  selector: 'app-resoluciones',
  templateUrl: './resoluciones.component.html',
  styleUrls: ['./resoluciones.component.css']
})




export class ResolucionesComponent implements OnInit {
  userform: FormGroup;
  tipos: SelectItem[];
  clases: SelectItem[];
  submitted: boolean;
  //resolucion: Resolucion=new Resolucion();
  //resoluciones: Resolucion[];
  id: number;
  id2: number;
  resolu: Resolucion;
  dateInicial: Date;
  dateFinal: Date;
  es: any;
  

  constructor(private fb: FormBuilder ,private messageService: MessageService,  private confirmationService: ConfirmationService,
              private service: ServiceService, private route: ActivatedRoute, private datepipe: DatePipe,private router: Router) {

                this.id=Number(this.route.snapshot.paramMap.get("idE"));
                this.id2=Number(this.route.snapshot.paramMap.get("id"));
                console.log(this.id);
                console.log(this.id2);
                this.getResolucionById(this.id2);


               }
  ngOnInit() {
      
  
    this.userform = this.fb.group({
      s_id: [''],
      v_resoluction: ['', Validators.required],
      i_type: ['', Validators.required],
      i_class: ['', Validators.required],
      v_prefix: ['', Validators.required],
      i_num_begin: ['', Validators.required],
      i_num_end: ['', Validators.required],
      d_date: ['',Validators.required],
      d_expiry: ['',Validators.required],
      v_tec_key: ['', Validators.required],
      i_supplier: [this.id]
  });
  this.tipos = [];
        this.tipos.push({label:'Seleccione un tipo', value:''});
        this.tipos.push({label:'Producción', value:1});
        this.tipos.push({label:'Habilitación', value:2});

  this.clases=[];
        this.clases.push({label:'Seleccione una clase',value:''});
        this.clases.push({label: 'Factura',value:1});
        this.clases.push({label: 'Nota Crédito',value:5});
        this.clases.push({label: 'Nota Débito',value:8});


        this.calendarEspañol();
 
  
  }
  
  get resolucionValida(){
    return this.userform.get('v_resoluction').invalid && this.userform.get('v_resoluction').touched
  }

  get tipoValida(){
    return this.userform.get('i_type').invalid && this.userform.get('i_type').touched
  }

  get claseValida(){
    return this.userform.get('i_class').invalid && this.userform.get('i_class').touched
  }
  
  get prefijoValida(){
    return this.userform.get('v_prefix').invalid && this.userform.get('v_prefix').touched
  }
   
  get numInicialValida(){
    return this.userform.get('i_num_begin').invalid && this.userform.get('i_num_begin').touched
  }

  
  get numFinalValida(){
    return this.userform.get('i_num_end').invalid && this.userform.get('i_num_end').touched
  }

  get fechaIniValida(){
    return this.userform.get('d_date').invalid && this.userform.get('d_date').touched
  }

  
  get fechaFinalValida(){
    return this.userform.get('d_expiry').invalid && this.userform.get('d_expiry').touched
  }

  
  get llaveTecValida(){
    return this.userform.get('v_tec_key').invalid && this.userform.get('v_tec_key').touched
  }



  onSubmit() {

    if(this.userform.valid){
      console.log(this.userform.value);
      if(this.id2){
        console.log("Voy a actualizar");  
        let ini_date =this.datepipe.transform(this.userform.value.d_date, 'yyyy-MM-dd');
        let final_date =this.datepipe.transform(this.userform.value.d_expiry, 'yyyy-MM-dd');
        this.userform.value.d_date=ini_date;
        this.userform.value.d_expiry=final_date;
        this.userform.value.s_id=this.id2;
        this.service.updateResolucion(this.userform.value)
        .subscribe(data=>{
                
          console.log(data);
          alert("Se actualizo con exito");
        })

      }else{
  
      let ini_date =this.datepipe.transform(this.userform.value.d_date, 'yyyy-MM-dd');
      let final_date =this.datepipe.transform(this.userform.value.d_expiry, 'yyyy-MM-dd');
      this.userform.value.d_date=ini_date;
      this.userform.value.d_expiry=final_date;
      
        this.service.createResolucion(this.userform.value)
        .subscribe(data=>{
        
          console.log(data);
          alert("Se agrego con exito");
          this.userform.reset();
          
        })
      

      }

    }else{

      return Object.values(this.userform.controls).forEach(control =>{
        control.markAsTouched();
      });

    }

}



  // Listar(){
  //   this.service.getResoluciones()
  //     .subscribe(data=>{
  //       this.resoluciones=data;
  //       console.log(this.resoluciones);

  //     })
    
  // }

  getResolucionById(id:number){
    this.service.getResolucionId(id)
    .subscribe(data=>{
      console.log(data);
      this.resolu=data[0];
      console.log(this.resolu);
      this.userform.patchValue({
        s_id:this.resolu.s_id,
        v_resoluction:this.resolu.v_resoluction,
        i_type:this.resolu.i_type,
        i_class: this.resolu.i_class,
        v_prefix:this.resolu.v_prefix,
        i_num_begin:this.resolu.i_num_begin,
        i_num_end:this.resolu.i_num_end,
        d_date:this.resolu.d_date,
        d_expiry:this.resolu.d_expiry,
        v_tec_key:this.resolu.v_tec_key


      });
    })
  }

  calendarEspañol(){
    this.es = {
        firstDayOfWeek: 0,
        dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
        dayNamesShort: ["Dom", "Lun", "Mart", "Mie", "Jue", "Vie", "Sab"],
        dayNamesMin: ["Do","Lu","Ma","Mi","Ju","Vi","Sa"],
        monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
        monthNamesShort: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun","Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ],
        today: 'Today',
        clear: 'Clear',
        dateFormat: 'yy-mm-dd',
        weekHeader: 'Wk'
    };
}

 




}
