import { FCM } from '@ionic-native/fcm';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { WelcomePage } from "../welcome/welcome";

@IonicPage({
  segment: 'main/:uid'
})
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  profileRoot = 'ProfilePage'
  homeRoot = 'HomePage'
  categoriesRoot = 'CategoriesPage'
  // configRoot = 'ConfigPage'
  requestRoot = 'ChatsPage'
  uid: string
  Contracts: Observable<any>

  constructor(public navCtrl: NavController,
    private toast: ToastController,
    public afDB: AngularFirestore,
    public afa: AngularFireAuth,
    public fcm: FCM,
    public plat: Platform,
    public navParams: NavParams) {

    this.uid = navParams.get("uid");
    this.Contracts = this.afDB.collection("Users").doc(this.uid.toString()).collection("Contracts").valueChanges()
  }

  ionViewDidEnter() {
    if (this.plat.is("cordova"))
      this.fcm.onTokenRefresh().subscribe(token => {
        this.afDB.collection("Users").doc(this.uid.toString()).update({
          token
        })
      });
  }

  public logout() {
    this.afa.auth.signOut().then(() => {
      this.navCtrl.setRoot(WelcomePage);
    });
  }

  public getContracts(contracts: any): number {
    if ((contracts != null || contracts != undefined))
      return contracts.filter(
        item => !item.has_viewed).length;
  }
}
