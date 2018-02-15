import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  static userData = { connected: 0, username: '', password: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public evt: Events) {
    evt.subscribe('user', (dataUser) => {
      if (dataUser.username != '') {
        AccountPage.userData.connected = 1;
        AccountPage.userData.username = dataUser.username;
        AccountPage.userData.password = dataUser.password;
      }
    });
  }

  get userInfo() {
    return AccountPage.userData;
  }

}
