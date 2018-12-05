import { ChatPage } from './../chat/chat';
import { ISearchOptions, IChats } from './../../services/Models';
import { ConfigPage } from './../config/config';
import { SubCategoriesPage } from './../sub-categories/sub-categories';
import { DetailsPage } from './../details/details';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { ICategories, ISubCategories, IProveedor } from '../../services/Models';
import { ListPage } from '../list/list';
import { OrderModule } from 'ngx-order-pipe';
import { TimeServicePage } from '../time-service/time-service';
import { Geolocation } from '@ionic-native/geolocation';
import * as algoliasearch from 'algoliasearch'
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  categories: Observable<ICategories[]>;
  coords: any
  algoliaSearch: boolean
  algResult: any

  txtsearch: string
  cp: string
  city: string
  state: string
  //algolia
  client: any
  index: any
  ALGOLIA_APP_ID: string = "HD00BWMGMW"
  ALGOLIA_API_KEY: string = "42293ab5c8f0c8019b68f3c24d7d4643"

  constructor(public navCtrl: NavController,
    private geolocation: Geolocation,
    private modalCtrl: ModalController,
    public navParams: NavParams,
    public afDB: AngularFirestore,
    public loadingCtrl: LoadingController) {
    this.client = algoliasearch(this.ALGOLIA_APP_ID, this.ALGOLIA_API_KEY, { protocol: 'https' })
    this.index = this.client.initIndex("Providers")


  }
  async init() {
    let loader = this.loadingCtrl.create({
      content: "Cargando...",
      spinner: "dots"
    });
    loader.present();

    this.categories = this.afDB.collection("Categorias").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ICategories;
        const $key = a.payload.doc.id;
        return { $key, ...data };
      }))
    )
    this.categories.subscribe(s => {
      loader.dismiss()
    })
  }

  getSubCats(cat: ICategories) {
    if (cat != null && cat.SubCategories != null) {
      const subcats = Object.keys(cat.SubCategories).length
      return subcats + " Subcategoria" + (subcats > 1 ? "s" : "")
    }
  }
  getFromAlgolia($event) {
    this.algoliaSearch = this.txtsearch.trim().length > 0
    console.log({ search: $event.data })
    if (this.txtsearch.trim() == null && this.txtsearch.trim() == "") return
    // this.index.search(this.txtsearch, {
    //   "hitsPerPage": 50
    // })
    let cp = this.cp != null ? `CP:${this.cp}" AND ` : ""
    let cd = this.city != null ? `City:${this.city}` : ""
    let options = {
      "hitsPerPage": 50
    }
    if (cd != "")
      options["filters"] = `${cd} ${cp}`
    this.index.search(this.txtsearch, options).then(d => {
      this.algResult = d.hits
      console.log(d.hits)
    })
  }

  async Cotizar(prov: IProveedor) { 
    let dchat = await this.afDB.collection<IChats>("Chats", ref => ref
      .where("UserUid", "==", this.navParams.data)
      .where("ProviderUid", "==", prov.uid)
    ).valueChanges().toPromise()
    if (dchat.length == 0) {
      let chat = {
        UserUid: this.navParams.data,
        ProviderUid: prov.uid,
        Status: "N",
        Date: Date.now()
      } as IChats
      this.afDB.collection("Chats").add(chat)
      this.navCtrl.push(ChatPage, { userID: this.navParams.data, provID: prov })
    }
  }

  getRating(rating: any) {
    if (rating == undefined) rating = [0];
    let total = Object.keys(rating).length;
    let sum = Object.keys(rating)
      .reduce(function (sum, key) {

        return rating[key] == 0 ? rating[key] : sum + parseFloat((rating[key]).Value);
      }, 0);

    return sum / total;
  }
  TotalRating(rating: any) {
    return Object.keys(rating).length;
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
    this.navCtrl.push(SubCategoriesPage, { CategoryID: cat.Value, CategoryName: cat.$key })
  }

  OpenSettings() {
    const modal = this.modalCtrl.create(ConfigPage);
    modal.onDidDismiss((data: ISearchOptions) => {
      this.state = data.state
      this.city = data.city
    })
    modal.present();
  }
}
