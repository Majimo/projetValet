import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber,
              private emailCpser: EmailComposer) {
  }

  callDropbird() {
    console.log('on est dedans');
    this.callNumber.callNumber("0950013250", true)
      .then(() => console.log('Appel possible'))
      .catch(() => console.log('Erreur numérotation'));
  }

  mailDropbird() {
    let email = {
      to: 'pierre.fervel@dropbird.fr',
      cc: 'pierre.fervel@gmail.com',
      subject: 'Contact CityValet',
      isHtml: true,
    }

    console.log('appli mail en ouverture');
    
    this.emailCpser.open(email);
  }

}
