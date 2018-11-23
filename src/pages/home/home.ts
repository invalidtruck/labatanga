import { AngularFirestore } from '@angular/fire/firestore';
import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { IContracted } from '../../services/Models';
import { map } from 'rxjs/operators';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  latestProviders: Observable<any>;
  userID: string
  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFirestore, ) {
    this.userID = this.navParams.data

  let x=  this.afDB.collection<IContracted>("Users/" + this.userID + "/Contracted",ref => ref.limit(10)).snapshotChanges()
      .pipe(map(ks =>  ks.map(k => {
          const pl = k.payload.doc.data() as IContracted
          return {
            uid: pl.$key,
            Created_on: pl.contracted_date
          }
        })
      ) )
  }
  OnClickProv(prov: any) {
    this.navCtrl.push(DetailsPage, {
      uid: prov.uid,
      UserID: this.userID
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage')
  }
}
