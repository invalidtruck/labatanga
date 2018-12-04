
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { IContracted, IUser } from '../../../services/Models';
import { UserSCV } from '../../../Providers/User';
import { map } from 'rxjs/operators';

// @IonicPage()
@Component({
  selector: 'page-request-detail',
  templateUrl: 'request-detail.html',
})
export class RequestDetailPage {
  public uid: string
  public request: any
  public user: IUser
  constructor(public navCtrl: NavController, public afDB: AngularFirestore, public usrsvc: UserSCV,
    public navParams: NavParams) {
    this.uid = navParams.get("uid")
    usrsvc.getUser().toPromise().then(e => { 
      // let key = navParams.get("key")
    this.afDB.doc<IContracted>("Providers/" + this.uid + "/Contracts/" + e.$key)
        .snapshotChanges().subscribe(s => {
          this.request = s.payload.data()
          this.getUser(s.payload.data().UserID)
        })
    }) 
  }
  private getUser(UserID: string) {
    let subuser = this.afDB.collection<IUser>("Users").doc(UserID).snapshotChanges()
      .subscribe(s => {
        this.user = s.payload.data() as IUser
      })
  }

  getUserName(user: IUser) { return user ? user.FirstName + " " + user.LastName + " " + user.LastName2 : "" }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestDetailPage');
  }

}
