import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { GarePage } from '../pages/gare/gare';
import {DettagliGaraPage} from '../pages/dettagli-gara/dettagli-gara'
import { AngularFireModule } from 'angularfire2';
import { LOCALE_ID } from '@angular/core';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { Storage } from '@ionic/storage';


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'e4895f7a'
  }
};

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyAecCiVjizFOWgZM4KuSpdzDcyyEw1MBl0",
    authDomain: "bandigare-8096d.firebaseapp.com",
    databaseURL: "https://bandigare-8096d.firebaseio.com",
    storageBucket: "bandigare-8096d.appspot.com",
    messagingSenderId: "1009811970424"
};

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    GarePage,
    DettagliGaraPage,
    LoginPage,
    HomePage,
    IntroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    GarePage,
    DettagliGaraPage,
    LoginPage,
    HomePage,
    IntroPage
  ],
  providers: [
              {provide: ErrorHandler, useClass: IonicErrorHandler},
              { provide: LOCALE_ID, useValue: "it-IT" },
              Storage
            ]
})
export class AppModule {}
