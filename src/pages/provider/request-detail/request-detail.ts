import { ObserverProvider } from './../../../Providers/observer/observer';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RequestDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-request-detail',
  templateUrl: 'request-detail.html',
})
export class RequestDetailPage {
  public uid: string
  public request: any
  public user: any
  constructor(public navCtrl: NavController, public afDB: AngularFireDatabase, public subs: ObserverProvider,
    public navParams: NavParams) {
    this.uid = navParams.get("uid")
    let key = navParams.get("key")
    let subContracts = this.afDB.object("Providers/" + this.uid + "/Contracts/" + key)
      .snapshotChanges().subscribe(s => {
        this.request = s.payload.val()
        this.getUser(s.payload.val().UserID)
      })

    this.subs.add(subContracts)
  }
  private getUser(UserID: string) {
    let subuser = this.afDB.object("Users/" + UserID).snapshotChanges()
      .subscribe(s => {
        this.user = s.payload.val()
      })
    this.subs.add(subuser)
  }

  getUserName(user: any) {
    if (user != null)
      return user.FirstName + " " + user.LastName + " " + user.LastName2
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestDetailPage');
  }

}
