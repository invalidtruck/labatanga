import { AngularFirestore } from '@angular/fire/firestore';
import { ObserverProvider } from './../../Providers/observer/observer';
import { IDataRequest, IProveedor } from './../../services/Models';
import { AngularFireDatabase } from 'angularfire2/database';
import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any
  icons: string[]
  items: Array<{ title: string, note: string, icon: string, id: number }>
  Name: String = ""
  Providers: Observable<any>
  CategoryName: string
  SubCategoryName: string
  SubCategorySecondName: string
  query: string = null
  userID: string
  DataRequest: IDataRequest


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public subs: ObserverProvider,
    public afdb: AngularFirestore,
    public loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({
      content: "Cargando...",
      spinner: "dots"
    });
    loader.present();
    this.CategoryName = navParams.get("CategoryName");
    this.SubCategoryName = navParams.get("SubCategoryName");
    this.SubCategorySecondName = navParams.get("SubCategorySecondName");
    this.userID = navParams.get("userID");

    //TODO: sacar la ciudad
    let city = "Monterrey"

    // let composequery = city + "_" + this.CategoryName + "_" + this.SubCategoryName + "_" + this.SubCategorySecondName
    this.Providers =
    afdb.collection<IProveedor>("Providers",
    q=>q.where("city", "==", city)
        .where("CategoryName", "==", this.CategoryName)
        .where("SubCategoryName", "==", this.SubCategoryName)
        .where("SubCategorySecondName", "==", this.SubCategorySecondName)
    ).snapshotChanges()
    //  afdb.list("Providers/",
    //   ref => ref
    //     .orderByChild("ComposeQuery")
    //     .equalTo(composequery)
    // ).snapshotChanges();
    let subProv = this.Providers.subscribe(a => {
      loader.dismiss();
    });
    this.subs.add(subProv)
  }
  TotalRating(rating: any) {
    return Object.keys(rating).length;
  }
  getRating(rating: any) {
    if (rating == undefined) rating = [0];
    let total = Object.keys(rating).length;
    let sum = Object.keys(rating)
      .reduce(function (sum, key) {
        return sum + parseFloat((rating[key]).Value);
      }, 0);

    return sum / total;
  }
  Cotizar()
  {
    
  }

  itemTapped(event: any, item: any, payload: any, key: any) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetailsPage, {
      uid: item.uid,
      UserID: this.userID,
      DataRequest: this.DataRequest
    });
  }
}
