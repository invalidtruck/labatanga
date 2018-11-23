import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-prov-main',
  templateUrl: 'prov-main.html'
})
export class ProvMainPage {
  Contracts: Observable<any>
  provProfileRoot = 'ProvProfilePage'
  provRequestRoot = 'ProvRequestPage'
  provHistoryRoot = 'ProvHistoryPage'
  provSettingsRoot = 'ProvSettingsPage'
  uid: String

  constructor(public navCtrl: NavController, private nparam: NavParams, private afDB: AngularFireDatabase) {
    this.uid = nparam.get("uid");
    this.Contracts = this.afDB.list("Providers/" + this.uid + "/Contracts",
      ref => ref.orderByChild("composeview").equalTo("A_false"))
      .valueChanges();

  }

  getContracts(Contracts: any) {
    if (Contracts != null)
    return Contracts.length
  }
  getUser() {

  }
}


