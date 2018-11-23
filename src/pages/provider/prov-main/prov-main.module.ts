import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProvMainPage } from './prov-main';

@NgModule({
  declarations: [
    ProvMainPage,
  ],
  imports: [
    IonicPageModule.forChild(ProvMainPage),
  ]
})
export class ProvMainPageModule {}
