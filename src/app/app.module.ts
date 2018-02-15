import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Components
import { MyApp } from './app.component';
import { TitlePartialComponent } from '../components/title-partial/title-partial';

// Pages
import { HomePage } from '../pages/home/home';
import { CoursesPage } from '../pages/courses/courses';
import { EntretienPage } from '../pages/entretien/entretien';
import { PleinPage } from '../pages/plein/plein';
import { PressingPage } from '../pages/pressing/pressing';
import { RevisionPage } from '../pages/revision/revision';
import { VoiturierPage } from '../pages/voiturier/voiturier';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { FaqPage } from '../pages/faq/faq';
import { CgvPage } from '../pages/cgv/cgv';

// Providers
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CoursesPage,
    EntretienPage,
    PleinPage,
    PressingPage,
    RevisionPage,
    VoiturierPage,
    LoginPage,
    TitlePartialComponent,
    AccountPage,
    ContactUsPage,
    FaqPage,
    CgvPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CoursesPage,
    EntretienPage,
    PleinPage,
    PressingPage,
    RevisionPage,
    VoiturierPage,
    LoginPage,
    AccountPage,
    ContactUsPage,
    FaqPage,
    CgvPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallNumber,
    EmailComposer,
  ]
})
export class AppModule {}
