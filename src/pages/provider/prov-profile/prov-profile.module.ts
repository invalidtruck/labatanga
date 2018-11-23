import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProvProfilePage } from './prov-profile';

@NgModule({
  declarations: [
    ProvProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProvProfilePage),
  ],
})
export class ProvProfilePageModule {}
