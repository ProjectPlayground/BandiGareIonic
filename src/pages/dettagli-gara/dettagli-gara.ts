import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DettagliGara page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dettagli-gara',
  templateUrl: 'dettagli-gara.html'
})
export class DettagliGaraPage {

  gara:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.gara = navParams.get('gara');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DettagliGaraPage');
  }



}
