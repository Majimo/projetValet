import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the PleinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plein',
  templateUrl: 'plein.html',
})
export class PleinPage {

  qty: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.qty = 0;
  }

  doPlein() {
    let pleinConfirm = this.alertCtrl.create({
      title: 'Faire le plein',
      message: 'Vous souhaitez faire un plein de ' + this.qty + ' litres pour votre voiture ?',
      buttons: [
        {
          text: 'Non',
          handler: () => {
            console.log('Annulation');
          }
        },
        {
          text: 'Oui',
          handler: () => {
            console.log('Plein de ' + this.qty + ' litres demandé');
            let callLoader = this.loadingCtrl.create({
              content: 'Appel en cours...',
              duration: 1500
            });
            callLoader.present();
            setTimeout(() => {
              let alertConfirm = this.alertCtrl.create({
                message: 'Plein de ' + this.qty + ' litres confirmé',
                buttons: [
                  {
                    text: 'Ok',
                  }
                ]
              });
              alertConfirm.present();
            }, 1500);
          }
        }
      ]
    });

    pleinConfirm.present();
  }

}
