import { Component, OnInit} from '@angular/core';
import {Validators,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService, ConfirmationService} from 'primeng/api';
import { EmisoresService} from '../emisores/emisoresService';
import { Router } from '@angular/router';
import { ServiceService } from '../resoluciones/service.service';
import { ActivatedRoute} from "@angular/router";
import { Emisor, Resolucion } from '../Modelos/Emisor';



@Component({
  selector: 'app-emisores',
  templateUrl: './emisores.component.html',
  styleUrls: ['./emisores.component.css']
})
export class EmisoresComponent implements OnInit {
  userform: FormGroup;
  submitted: boolean;
  uploadedFiles: any[] = [];
  UploadedFile:File;
  productDialog: boolean;

  resolu: any;
  resoluciones: Emisor[]; 
  resolucion: Emisor;
  selectedResoluciones: Emisor[];


  emisor: Emisor;

  id: number;

  


  constructor(private fb: FormBuilder,private emiService: EmisoresService  ,private messageService: MessageService,  private confirmationService: ConfirmationService,
             private router: Router,private route: ActivatedRoute, private resService: ServiceService) {

              this.id=Number(this.route.snapshot.paramMap.get("idE"));
              console.log(this.id);
              this.getEmisorById(this.id);

              }

 
  ngOnInit(): void {
  
  
    this.userform = this.fb.group({
      id: [''],
      v_name:['', Validators.required],
      i_nit: ['', Validators.required],
      v_address: ['', Validators.required],
      v_city: ['',Validators.required],
      v_telephone: ['',Validators.required],
      v_email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      v_industry_clasification: ['',Validators.required],
      v_tax_level_code: ['',Validators.required],
      v_tax_list: ['',Validators.required],
      file:[''],
      v_passsword: ['',Validators.required], 
      v_sw_id: ['',Validators.required],
      v_sw_pin: ['',Validators.required],
      v_sw_name: ['',Validators.required],
      i_level: [1], //por defecto uno(1)
      c_dv: ['7'], //por defecto '7'
      v_contact: [''], //por defecto cualquier cosa
      v_signature: ['firmafira'], // por defecto 'firmafira'
      v_sw_key: ['fc8eac422eba16e22ffd8c6f94b3f40a6e38162c'], //por defecto 'fc8eac422eba16e22ffd8c6f94b3f40a6e38162c'
      i_contract_available: [100], //por defecto 100
      i_file_server: [1], //por defecto 1
      i_entity_outbox: [2],//por defecto 2
      i_file_outbox: [3], //por defecto 3
      i_email_outbox: [5], //por defecto 5
      
    
      
    });


}


get nombreValida(){
  return this.userform.get('v_name').invalid && this.userform.get('v_name').touched
}

get nitValida(){
  return this.userform.get('i_nit').invalid && this.userform.get('i_nit').touched
}

get direccionValida(){
  return this.userform.get('v_address').invalid && this.userform.get('v_address').touched
}

get ciudadValida(){
  return this.userform.get('v_city').invalid && this.userform.get('v_city').touched
}

get telefonoValida(){
  return this.userform.get('v_telephone').invalid && this.userform.get('v_telephone').touched
}

get emailValida(){
  return this.userform.get('v_email').invalid && this.userform.get('v_email').touched
}

get actividad_ecoValida(){
  return this.userform.get('v_industry_clasification').invalid && this.userform.get('v_industry_clasification').touched
}

get detalles_tribuValida(){
  return this.userform.get('v_tax_level_code').invalid && this.userform.get('v_tax_level_code').touched
}

get responsabilidad_fiscalValida(){
  return this.userform.get('v_tax_list').invalid && this.userform.get('v_tax_list').touched
}

get contrasena_ceValida(){
  return this.userform.get('v_passsword').invalid && this.userform.get('v_passsword').touched
}

get id_softwareValida(){
  return this.userform.get('v_sw_id').invalid && this.userform.get('v_sw_id').touched
}

get pin_softwareValida(){
  return this.userform.get('v_sw_pin').invalid && this.userform.get('v_sw_pin').touched
}

get nombre_softwareValida(){
  return this.userform.get('v_sw_name').invalid && this.userform.get('v_sw_name').touched
}





deleteResolucion(resolucion:Resolucion){
  this.resService.deleteResolucion(resolucion)
  .subscribe(data=>{
   
    this.resolu = this.resolu.filter(r=>r!==this.resolucion);
    alert("Resolucion eliminada");
  })
}


onBasicUpload(event) {
  console.log("arhivo");
  for(let file of event.files) {
      this.uploadedFiles.push(file);
      console.log(file.name);
    
  }

  this.userform.value.certificado=this.uploadedFiles[0];
  console.log(this.userform.value.certificado);
}

onSubmit() {
    
   if(this.userform.valid){

    if(this.id){
      console.log("Voy a actualizar");
      this.emiService.updateEmisor(this.userform.value)
      .subscribe(data =>{
        console.log(data);
        alert("Se actualizo con exito");
      })
    }else{
      console.log("voy a crear emisor")
      console.log(this.userform.value.certificado)
      console.log(this.userform.value)  
      this.emiService.createEmisor(this.userform.value)
      .subscribe(data=>{
        console.log(data);
        this.emiService.cargarCertificado(this.userform.value.i_nit,this.userform.value.file).subscribe(
          dataa=>{
            console.log(dataa);
          }
        )
        alert("Se agrego con exito");
        this.userform.reset();
        this.router.navigate(["/admin/configuraciones"]);

      })

    }

   }else{
    return Object.values(this.userform.controls).forEach(control =>{
      control.markAsTouched();
    });
   }

  
    
}

cargarCertficadito(){
  this.emiService.cargarCertificado(this.userform.value.i_nit).subscribe(
    data=>{
        console.log(data);
    }
  )
}

getEmisorById(id:number){
  this.emiService.getEmisorId(id)
  .subscribe(data=>{
    console.log(data);
    this.emisor=data[0];
    console.log(this.emisor);
    console.log(this.emisor.resolucionesLista);
    this.resolu = this.emisor.resolucionesLista;
    console.log(this.resolu);
    this.userform.patchValue({
      id:this.emisor.id,
      v_name:this.emisor.v_name,
      i_nit:this.emisor.i_nit,
      v_address:this.emisor.v_address,
      v_city:this.emisor.v_city,
      v_telephone:this.emisor.v_telephone,
      v_email: this.emisor.v_email,
      v_industry_clasification: this.emisor.v_industry_clasification,
      v_tax_level_code: this.emisor.v_tax_level_code,
      v_tax_list:this.emisor.v_tax_list,
      v_passsword: this.emisor.v_passsword, 
      v_sw_id: this.emisor.v_sw_id,
      v_sw_pin:this.emisor.v_sw_pin,
      v_sw_name: this.emisor.v_sw_name,



    });
  })
}









}
