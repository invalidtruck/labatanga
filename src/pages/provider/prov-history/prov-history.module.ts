import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProvHistoryPage } from './prov-history';

@NgModule({
  declarations: [
    ProvHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ProvHistoryPage),
  ],
})
export class ProvHistoryPageModule {}
