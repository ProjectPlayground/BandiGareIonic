import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tipologia } from './tipologia';
import { Categoria } from './categoria';
import { Provincia } from './provincia';
import { MyDataService } from './mydataservice';

/*
  Generated class for the RicercaGare page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ricerca-gare',
  templateUrl: 'ricerca-gare.html',
  providers: [ MyDataService]
})
export class RicercaGarePage {

  selectedTipologia:Tipologia = new Tipologia(0, 'Lavori'); 

  tipologie: Tipologia[];
  categorie: Categoria[];
  provincie: Provincia[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private _mydataService: MyDataService) {
    this.tipologie = this._mydataService.getTipologia();
    this.provincie = this._mydataService.getProvincia();
    console.log(this.tipologie);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RicercaGarePage');
  }

  onSelectTipologia(tipologiaid) {
    console.log(tipologiaid)
    this.categorie = this._mydataService.getCategoria().filter((item)=> item.tipologiaid == tipologiaid);
  }
}
