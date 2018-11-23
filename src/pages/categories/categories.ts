import { query } from '@angular/core/src/animation/dsl';
import { ObserverProvider } from './../../Providers/observer/observer';
import { SubCategoriesPage } from './../sub-categories/sub-categories';
import { DetailsPage } from './../details/details';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ICategories } from '../../services/Models';
import { ListPage } from '../list/list';
import { OrderModule } from 'ngx-order-pipe';
import { TimeServicePage } from '../time-service/time-service';
import { Geolocation } from '@ionic-native/geolocation'; 
import * as algoliasearch from 'algoliasearch'

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  categories: Observable<any[]>;
  coords: any
  algoliaSearch: boolean
  algResult: any

  txtsearch: string

  //algolia
  client: any
  index: any
  ALGOLIA_APP_ID: string = "HD00BWMGMW"
  ALGOLIA_API_KEY: string = "42293ab5c8f0c8019b68f3c24d7d4643"

  constructor(public navCtrl: NavController,
    public subs: ObserverProvider,
    private geolocation: Geolocation,
    public navParams: NavParams,
    public afDB: AngularFireDatabase,
    public loadingCtrl: LoadingController) {
    this.client = algoliasearch(this.ALGOLIA_APP_ID, this.ALGOLIA_API_KEY, { protocol: 'https' })
    this.index = this.client.initIndex("Providers")

    let loader = this.loadingCtrl.create({
      content: "Cargando...",
      spinner: "dots"
    });
    loader.present();

    this.categories = this.afDB.list("CategoriesNew").snapshotChanges();
    let subcat = this.categories.subscribe(s => {
      loader.dismiss();

    })
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coords = { lat: resp.coords.latitude, lon: resp.coords.longitude }
      console.log(' getting location', resp);
    }).catch((error) => {
      console.log('Error getting location in categories', error);
    });
    let watch = this.geolocation.watchPosition();
    let subwatch = watch.subscribe((data) => {
      let x = data.coords
      console.log('Error getting location in categories', data);
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.longitude
    });

    this.subs.addMany(subcat, subwatch)

  }
  getSubCats(Cat: any) {
    if (Cat != null && Cat.SubCategories != null) {
      const subcats = Object.keys(Cat.SubCategories).length
      return subcats + " Subcategoria" + (subcats > 1 ? "s" : "")
    }
  }
  getFromAlgolia($event) {
    this.algoliaSearch = this.txtsearch.length > 0
    console.log({ search: $event.data })
    if (this.txtsearch == null) return
    this.index.search(this.txtsearch, {
      "hitsPerPage": 50
    }).then(d => {
      this.algResult = d.hits
      console.log(d.hits)
    })
  }
  itemTapped(event: any, item: any, payload: any, key: any) {
    this.navCtrl.push(DetailsPage, {
      uid: item.uid,
      // UserID: this.userID,
      // DataRequest: this.DataRequest
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }
  getProviders(cat: any) {
    this.navCtrl.push(SubCategoriesPage, { CategoryID: cat.payload.val().Value, CategoryName: cat.key })
  }



}
