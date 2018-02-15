import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { VoiturierPage } from '../voiturier/voiturier';
import { RevisionPage } from '../revision/revision';
import { EntretienPage } from '../entretien/entretien';
import { PleinPage } from '../plein/plein';
import { PressingPage } from '../pressing/pressing';
import { CoursesPage } from '../courses/courses';
import { LoginPage } from '../../pages/login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuery: string = '';
  items: string[];
  goTo: string[];
  username: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, 
    private modalCtrl: ModalController, public evt: Events) {
    evt.subscribe('user', (dataUser) => {
      if (dataUser.username != '') {
        console.log('L\'utilisateur est : ', dataUser.username);
        document.getElementById('user').innerHTML = 'Bienvenue ' + dataUser.username;
      }
    });
  }

  showLogin() {
    let loginModal = this.modalCtrl.create(LoginPage);
    loginModal.present();
  }

  initializeItems() {
    this.items = [
      'Courses',
      'Entretien',
      'Plein',
      'Pressing',
      'Révision',
      'Voiturier',
    ];
    this.goTo = [
      'goToVoiturier()',
      'goToEntretien()',
      'goToPlein()',
      'goToPressing()',
      'goToRevision()',
      'goToVoiturier()',
    ];
  }

  getItems(ev: any) {
    this.initializeItems();

    let val = ev.target.value;

    if (val && val.length > 4) {
      this.items = this.items.filter((item) => {
        console.log(item.toLowerCase().indexOf(val.toLowerCase()));
        if (item.toLowerCase().indexOf(val.toLowerCase()) == 0) {
          console.log('Trouvé !');
          this.essaiFunction(item);
        } else {
          console.log('Pas de correspondance');
        }
      });
    }
  }

  essaiFunction(item){
    let toast = this.toastCtrl.create({
      message: item,
      duration: 3000,
      position: 'middle',
    });
    toast.present();
  }

  goToVoiturier() {
    this.navCtrl.push(VoiturierPage);
  }

  goToRevision() {
    this.navCtrl.push(RevisionPage);
  }

  goToEntretien() {
    this.navCtrl.push(EntretienPage);
  }

  goToPlein() {
    this.navCtrl.push(PleinPage);
  }

  goToPressing() {
    this.navCtrl.push(PressingPage);
  }

  goToCourses() {
    this.navCtrl.push(CoursesPage);
  }

}
