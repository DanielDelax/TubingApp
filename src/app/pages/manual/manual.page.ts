import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.page.html',
  styleUrls: ['./manual.page.scss'],
})
export class ManualPage implements OnInit {

  constructor(public NavCtrl: NavController,
    private accsPrvds: AccessProviders) { }

  ngOnInit() {
  }



  toggleValue: boolean = false;
  toggleValue2: boolean = false;
  
  estado: number;
 



  disablePin: boolean = false;
  disableIns: boolean = false

  

  

  //Envios a la BD

  async send_data(){
    return new Promise (resolve => {
      if (this.toggleValue == false){
        this.estado = 0;
      }
      else{
        this.estado = 1;
      }
      let body = {
          ctrl: 'envio',
          estado: this.estado
      }
      this.accsPrvds.postData(body, 'api.php').subscribe((res:any)=>{
        console.log('Envio manual correcto');
      });
  
    });

  }


  

 

  
 

  

  toggle(type): void {

    if (type === 'A') {
      this.disablePin = true;

      setTimeout(() => {
        this.disablePin = false;
      }, 5000);
    }
    if (type === 'M') {
      this.disableIns = true;
      setTimeout(() => {
        this.disableIns = false;
      }, 5000);
    }
  }

  




  


}
