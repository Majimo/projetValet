import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoiturierPage } from './voiturier';

@NgModule({
  declarations: [
    VoiturierPage,
  ],
  imports: [
    IonicPageModule.forChild(VoiturierPage),
  ],
})
export class VoiturierPageModule {}
