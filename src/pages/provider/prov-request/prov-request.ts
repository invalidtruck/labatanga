import { RequestDetailPage } from '../request-detail/request-detail';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProvRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prov-request',
  templateUrl: 'prov-request.html',
})
export class ProvRequestPage {
  Contracts: Observable<any>
  uid: String
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private afDB: AngularFireDatabase) {
    this.uid = navParams.data;
    this.Contracts = this.afDB.list("Providers/" + this.uid + "/Contracts",
      ref => ref.orderByChild("status").equalTo("A"))
      .snapshotChanges()
      .map(items => {
        return items.map(com => {
          return {
            key: com.key,
            user: this.afDB.object("Users/" + com.payload.val().UserID).valueChanges(),
            Description: com.payload.val().Description,
            timestamp: com.payload.val().timestamp,
            time: com.payload.val().time
          }
        });
      })
  }

  onAccept(key: string) {
    var contract = this.afDB.object("Providers/" + this.uid + "/Contracts/" + key)
    contract.update({
      status: "D",
      composeview: "D_true",
      viewed: true
    })
  }
  onReview(key: String) {  
    var contract = this.afDB.object("Providers/" + this.uid + "/Contracts/" + key)
    contract.update({ 
      composeview: "A_true",
      viewed: true
    })
      let profileModal = this.modalCtrl.create(RequestDetailPage, { uid: this.uid, key:key });
      profileModal.present(); 
  }
  onCancel(key: string) {
    var contract = this.afDB.object("Providers/" + this.uid + "/Contracts/" + key)
    contract.update({
      status: "C",
      composeview: "C_true",
      viewed: true
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvRequestPage');
  }

}


