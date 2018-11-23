import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProviderProfilePage } from './provider-profile';

@NgModule({
  declarations: [
    ProviderProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProviderProfilePage),
  ],
})
export class ProviderProfilePageModule {}
