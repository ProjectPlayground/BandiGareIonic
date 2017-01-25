import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
  constructor(af: AngularFire, public navCtrl: NavController) {
    this.gare = af.database.list('/gare');
    console.log(this.gare);
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
