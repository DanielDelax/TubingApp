import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.page.html',
  styleUrls: ['./monitoreo.page.scss'],
})
export class MonitoreoPage implements OnInit {
  
  toggleValue: boolean = false;
  toggleValue2: boolean = false;
  ValorBoton;
  ValorBoton2;
  estado: number;
 

  disablePin: boolean = false;
  disableIns: boolean = false

  constructor(public NavCtrl: NavController,
    private accsPrvds: AccessProviders
    
    
    ) { }

  ngOnInit() {
  }

  //Envios a la BD

 


  async send_data2(){
    return new Promise (resolve => {

      if (this.toggleValue2 == false){
        this.estado = 0;
      }
      else{
        this.estado = 1;
      }
      let body = {
          ctrl: 'envio2',
          estado: this.estado
      }
      this.accsPrvds.postData(body, 'api.php').subscribe((res:any)=>{
        console.log('Envio automático correcto');
      });
  
    });

  }

 

  
  }

 

  

  

  




  

