import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import { LoginPage } from '../login/login'

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, public user:User, public auth:Auth) {
        console.log('qui');
        if(!this.auth.isAuthenticated()) {
          console.log('quo');
          this.navCtrl.setRoot(LoginPage)
        }
  	
    console.log(user);
    
  }



  logout() {
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);
  }

}
