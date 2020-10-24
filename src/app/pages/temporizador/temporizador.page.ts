import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { BehaviorSubject } from 'rxjs';


const circleR= 80;
const circleDasharray = 2 * Math.PI * circleR;

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.page.html',
  styleUrls: ['./temporizador.page.scss'],
})
export class TemporizadorPage implements OnInit {

  
  


  constructor(public NavCtrl: NavController,
    private accsPrvds: AccessProviders
    
    
    ) { }

  ngOnInit() {
  }

  ValorBoton;
  ValorBoton2;
  time: BehaviorSubject<string> = new BehaviorSubject('00:00');
  percent: BehaviorSubject<number> = new BehaviorSubject(100);
  timer: number;
  interval;
  startDuration;

  circleR = circleR;
  circleDasharray = circleDasharray;

 
  state: 'start' | 'stop' = 'stop';

  disablePin: boolean = false;
  disableIns: boolean = false

 


  
 
  //Envios a la BD

  

  startTimer(duration: number){
    this.ValorBoton = true;
    this.state = 'start';
    clearInterval(this.interval);
    this.timer = duration * 60;
    this.updateTimeValue();
    this.interval = setInterval( () =>{
      this.updateTimeValue()
    }, 1000);

    return new Promise (resolve => {
      let body = {
          ctrl: 'start',
          ValorBoton: 0
      }
      this.accsPrvds.postData(body, 'api.php').subscribe((res:any)=>{
        console.log('Envio manual correcto');
      });
  
    });

    
  }

  stopTimer(){
    clearInterval(this.interval);
    this.time.next('00:00');
    this.state = 'stop';
  }

  percentageOffset(percent) {
    const percentFloat = percent / 100;
    return circleDasharray * (1 - percentFloat);
}

  updateTimeValue(){
    let minutes: any =this.timer /60;
    let seconds: any = this.timer % 60;
    minutes = String('0' + Math.floor(minutes)). slice(-2);
    seconds = String('0' + Math.floor(seconds)). slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);
    
    const totalTime = this.startDuration * 60;
        const percentage = ((totalTime - this.timer) / totalTime) * 100;
        this.percent.next(percentage);
    
    --this.timer;

    if (this.timer < 0){
      this.stopTimer();
      return new Promise (resolve => {
        let body = {
            ctrl: 'stop',
            ValorBoton2: 1
        }
        this.accsPrvds.postData(body, 'api.php').subscribe((res:any)=>{
          console.log('Envio manual correcto');
        });
    
      });
    }
  }

 




}
