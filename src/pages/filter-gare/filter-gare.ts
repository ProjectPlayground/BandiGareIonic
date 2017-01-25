import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {DettagliGaraPage} from '../dettagli-gara/dettagli-gara'
import { Subject } from 'rxjs/Subject';


/*
  Generated class for the FilterGare page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-filter-gare',
  templateUrl: 'filter-gare.html'
})
export class FilterGarePage {

 gare: FirebaseListObservable<any[]>;
  sizeSubject: Subject<any>;
  constructor(af: AngularFire, public navCtrl: NavController) {
    this.sizeSubject = new Subject();
    this.gare = af.database.list('/gare' , {
      query: {
          orderByChild: 'provincia',
          equalTo: this.sizeSubject

      }
    });
    console.log(this.gare);
  }

  filterBy(size: string) {
    this.sizeSubject.next(size); 
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

  selezioneProvincia(provincia){
    console.log(provincia);
  }  
}
