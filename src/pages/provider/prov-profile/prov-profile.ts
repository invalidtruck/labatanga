import { UserSCV } from './../../../Providers/User';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-prov-profile',
  templateUrl: 'prov-profile.html',
})
export class ProvProfilePage {
  uid: string
  provider: Observable<any>
  Loses: Observable<any>
  Request: Observable<any>
  Dones: Observable<any>

  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, public navParams: NavParams, public user: UserSCV) {
    this.uid = navParams.data
    this.user.getUser().subscribe(s => { 
      this.provider = this.afDB.object("Providers/" + s.uidProvider).valueChanges()
      this.Loses = this.afDB.list("Providers/" + s.uidProvider + "/Contracts/",
        ref => ref.orderByChild("status").equalTo("C")).valueChanges()
      this.Request = this.afDB.list("Providers/" + s.uidProvider + "/Contracts/",
        ref => ref.orderByChild("status").equalTo("A")).valueChanges()
      this.Dones = this.afDB.list("Providers/" + s.uidProvider + "/Contracted/").valueChanges()
    })
  }


  getImg(provider: any) {
    if (provider == undefined) return
    if (provider.backImg != undefined)
      return provider.backImg

    let img = "assets/imgs/defaults/profiles/"
    switch (provider.Subcategory) {
      case "musicaeiluminacion":
        img = img + "musicback"
        break;
      default:
        break;
    }

    return img + ".jpg"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvProfilePage');
  }
  getDones(Dones: any) {
    if (Dones != null)
      return Dones.length
  }
  getRequest(Request: any) {
    if (Request != null)
      return Request.length
  }
  getLoses(Loses: any) {
    if (Loses != null) return Loses.length
  }
}
