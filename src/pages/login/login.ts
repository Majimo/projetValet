import { Component } from '@angular/core';
import { IonicPage, ViewController, Events} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginData = { username: '', password: '' };
  data: any;

  constructor(public viewCtrl: ViewController, public evt: Events) { }

  doLogin() {
    console.log(this.loginData.username);
    let dataUser = this.loginData;
    this.evt.publish("user", dataUser);
    this.viewCtrl.dismiss();
  }

}
