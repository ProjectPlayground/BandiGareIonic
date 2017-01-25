import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { GarePage } from '../pages/gare/gare';
import { LoginPage } from '../pages/login/login';
import { Auth } from '@ionic/cloud-angular';
import { FilterGarePage } from '../pages/filter-gare/filter-gare';
import { RicercaGarePage } from '../pages/ricerca-gare/ricerca-gare';
import { IntroPage } from '../pages/intro/intro';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;
  loader: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public auth:Auth, public loadingCtrl: LoadingController, public storage: Storage) {
    this.initializeApp();

    this.presentLoading();

    // used for an example of ngFor and navigation
    this.pages = [      

      { title: 'Home', component: Page1 },
      { title: 'Page Two', component: Page2 },
      { title: 'Gare', component: GarePage },
      { title: 'Filtra Gare', component: FilterGarePage },
      { title: 'Ricerca Gare', component: RicercaGarePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {


      this.storage.get('introShown').then((result) => {
      StatusBar.styleDefault();
      Splashscreen.hide();
      console.log("Inizo");
      //result = false;
      //this.storage.set('introShown', false);
      if(result){
        if(this.auth.isAuthenticated()) {
          this.rootPage = Page1;
        } else {
          this.rootPage = LoginPage;
        }
      } else {
        this.rootPage = IntroPage;
        this.storage.set('introShown', true);
      }
      this.loader.dismiss();
      });





    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });
 
    this.loader.present();
 
  }
}
