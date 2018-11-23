import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProvSettingsPage } from './prov-settings';

@NgModule({
  declarations: [
    ProvSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProvSettingsPage),
  ],
})
export class ProvSettingsPageModule {}
