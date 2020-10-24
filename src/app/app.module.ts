import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {IonicStorageModule}  from '@ionic/storage';
import {HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
import { AccessProviders } from './providers/access-providers';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ 
    FormsModule, 
    ComponentsModule, 
    MbscModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(),HttpClientModule ],
  providers: [
    StatusBar,
    SplashScreen,
    AccessProviders,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
