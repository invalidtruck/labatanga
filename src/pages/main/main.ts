import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';  
import { Observable } from 'rxjs/Observable'; 
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';  
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
  configRoot = 'ConfigPage'
  requestRoot = 'RequestPage'
  uid: String
  Contracts: Observable<any>

  constructor(public navCtrl: NavController, 
              private toast: ToastController,  
              public afDB: AngularFirestore,
              public afa: AngularFireAuth, 
              public navParams: NavParams) {

    this.uid = navParams.get("uid");
    this.Contracts = this.afDB.collection("Users/" + this.uid + "/Contracts/"
      // ref => ref.orderByChild("status").equalTo("A")
    ).valueChanges(); 
  }

  ionViewDidEnter(){
   
  } 

  public logout()
  { 
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
