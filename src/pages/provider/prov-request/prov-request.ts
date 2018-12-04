import { IContracted } from './../../../services/Models';
import { Observable } from 'rxjs';
import { RequestDetailPage } from '../request-detail/request-detail';
import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';

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
    private afDB: AngularFirestore) {
    this.uid = navParams.data;
    this.Contracts = this.afDB.collection<IContracted>("Providers/" + this.uid + "/Contracts",
      ref => ref.where("status", "==", "A"))
      .snapshotChanges().pipe(
        map(items => {
          return items.map(com => {
            let con = com.payload.doc.data()
            return {
              key: con.$key,
              // user: this.afDB.doc("Users/" + con..UserID).valueChanges(),
              // Description: com.payload,
              // timestamp: com.payload.val().timestamp,
              time: con.contracted_date
            }
          })
        })
      )
  }

  onAccept(key: string) {
    var contract = this.afDB.doc("Providers/" + this.uid + "/Contracts/" + key)
    contract.update({
      status: "D",
      composeview: "D_true",
      viewed: true
    })
  }
  onReview(key: String) {
    var contract = this.afDB.doc("Providers/" + this.uid + "/Contracts/" + key)
    contract.update({
      composeview: "A_true",
      viewed: true
    })
    let profileModal = this.modalCtrl.create(RequestDetailPage, { uid: this.uid, key: key });
    profileModal.present();
  }
  onCancel(key: string) {
    var contract = this.afDB.doc("Providers/" + this.uid + "/Contracts/" + key)
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


