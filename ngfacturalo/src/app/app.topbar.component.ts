import { Component, OnInit} from '@angular/core';
import { AppComponent} from './app.component';
import { ConfiguracionService} from './modules/configuraciones/configuracionesService';
import {Emisor} from './modules/Modelos/Emisor';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  styleUrls: ['./app.topbar.component.css']
})
export class AppTopBarComponent implements OnInit {

    emisores: Emisor[];
    
    constructor(public app: AppComponent,private configService: ConfiguracionService ) {}

    ngOnInit(){   

      this.configService.getEmisores()
      .subscribe((data:any)=>{
          this.emisores=data;
          console.log(this.emisores);
      })
  
    }
}
