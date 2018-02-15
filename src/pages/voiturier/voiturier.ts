import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-voiturier',
  templateUrl: 'voiturier.html',
})
export class VoiturierPage {

  static car;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
              public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    console.log(VoiturierPage.car);
  }
  
  callVoiturier(carState){
    let callConfirm = this.alertCtrl.create({
      title: 'Appel Voiturier',
      message: 'Vous souhaitez appeler un voiturier pour votre voiture ?',
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
            let callLoader = this.loadingCtrl.create({
              content: 'Appel en cours...',
              duration: 1500
            });
            callLoader.present();
            setTimeout(() => {
              let callToast = this.toastCtrl.create({
                message: 'Votre voiturier est en route',
                duration: 3000
              });
              VoiturierPage.car = carState;
              console.log(VoiturierPage.car);
              callToast.present();
            }, 1000);
          }
        }
      ]
    });
    callConfirm.present();
  }

  get staticCarState() {
    return VoiturierPage.car;
  }

}
