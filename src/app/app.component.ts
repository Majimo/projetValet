import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CoursesPage } from '../pages/courses/courses';
import { EntretienPage } from '../pages/entretien/entretien';
import { PleinPage } from '../pages/plein/plein';
import { PressingPage } from '../pages/pressing/pressing';
import { RevisionPage } from '../pages/revision/revision';
import { VoiturierPage } from '../pages/voiturier/voiturier';
import { AccountPage } from '../pages/account/account';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { FaqPage } from '../pages/faq/faq';
import { CgvPage } from '../pages/cgv/cgv';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: HomePage },
      { title: 'Voiturier', component: VoiturierPage },
      { title: 'Révision voiture', component: RevisionPage },
      { title: 'Entretien', component: EntretienPage },
      { title: 'Plein d\'essence', component: PleinPage },
      { title: 'Courses', component: CoursesPage },
      { title: 'Pressing', component: PressingPage },
      { title: 'Mon Compte', component: AccountPage },
      { title: 'FAQ', component: FaqPage },
      { title: 'CGV', component: CgvPage },
      { title: 'Mentions Légales', component: CgvPage },
      { title: 'Nous contacter', component: ContactUsPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
