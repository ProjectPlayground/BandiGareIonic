import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {DettagliGaraPage} from '../dettagli-gara/dettagli-gara'

/*
  Generated class for the Gare page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gare',
  templateUrl: 'gare.html'
})
export class GarePage {

  gare: FirebaseListObservable<any[]>;
    constructor(af: AngularFire, public navCtrl: NavController, public loadingCtrl:LoadingController) {
    let loader = this.loadingCtrl.create({
      content: "Sto caricando..."
    });
    loader.present();
    this.gare = af.database.list('/gare');
    this.gare.subscribe(() => loader.dismissAll());
  }

  visible = false;
  toggle(garaID) {
   this.visible = !this.visible;
   this.gare.update(garaID, {
            preferito: this.visible
          });
  }

  apriDettaglio(gara){
  	this.navCtrl.push( DettagliGaraPage, {
  		gara:gara
  	});
  }


  
}
