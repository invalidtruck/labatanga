import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProvRequestPage } from './prov-request';

@NgModule({
  declarations: [
    ProvRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(ProvRequestPage),
  ],
})
export class ProvRequestPageModule {}
