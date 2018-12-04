import { AngularFirestore } from 'angularfire2/firestore';
import { UserSCV } from './../../Providers/User'; 

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { IProveedor, IUser } from '../../services/Models';
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: Observable<IUser>;
  providers: Observable<IProveedor[]>;
  uid: string

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public usersvc: UserSCV,
    public afDB: AngularFirestore, public lCtrl: LoadingController) {
    this.uid = navParams.data
    let spinload = this.lCtrl.create({
      content: "Cargando, por favor espere...",
      spinner: "dots"
    })
    spinload.present()
    // this.user = this.usersvc.getUser()
    this.user = this.afDB.collection("Users").doc<IUser>(this.uid).valueChanges()
    this.user.subscribe(s => {
      console.log(s)
      spinload.dismissAll()
    })
    
  }

  getCountContracted(con: any) {
    return con == null ? 0 : Object.keys(con).length
  };

  getComments(com: any) {
    return com == null ? 0 : Object.keys(com).length
  };

  goToDetails(user: any) {
    // this.navCtrl.pop(EditProfile,{user:user});
  }
  getProviders(last: any): Observable<IProveedor> {
    let self = this.afDB;
    if (last != null) {
      return self.doc<IProveedor>("/Providers/" + Object.keys(last))
        .valueChanges();
    }
  }
  saveProfile(user: IUser) {
    this.afDB.doc<IUser>(`/Users/${this.uid}`).update({
      Phone: user.Phone,
      imgUrl: user.imgUrl
    }).catch(c => {
      alert("No se a podido guardar la información")
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
