import { AngularFirestore } from '@angular/fire/firestore';
import { ObserverProvider } from './../../Providers/observer/observer';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { ProveedorService } from './../../services/proveedores';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { CommentsPage } from '../comments/comments';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { IProveedor, IDataRequest } from '../../services/Models';
import { ContractDetailsPage } from '../contract-details/contract-details';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  Provider: Observable<IProveedor>
  Numero: number = 0
  UserID: string
  uid: string
  isRating: boolean
  prove: any
  user: any
  DataRequest: IDataRequest

  constructor(public navCtrl: NavController, public subs: ObserverProvider, public afDB: AngularFirestore, public prov: ProveedorService,
    public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController) {
    this.uid = navParams.get("uid")
    this.DataRequest = navParams.get("DataRequest")
    //TODO: meter los datos del usuario en un servicio
    this.UserID = navParams.get("UserID")
    let subUser = afDB.doc("Users/" + this.UserID).valueChanges().subscribe(e => {
      this.user = e
    })
    const lprov = afDB.doc<IProveedor>("Providers/" + this.uid)
    this.Provider = lprov.valueChanges()
    let subProvider = this.Provider.subscribe((s) => {
      this.prove = s
    })
    let sub = lprov.snapshotChanges().subscribe(e => {
      this.isRating = e.payload.id == this.UserID
    })
  }

  getTotalComments(Comments: any) {
    return Comments != undefined ?
      Object.keys(Comments).length : 0;
  }
  OnClickComments() {
    this.navCtrl.push(CommentsPage, { uid: this.uid });
  }
  onContract(prov: IProveedor) {
    const profileModal = this.modalCtrl.create(ContractDetailsPage,
      {
        uid: this.uid,
        DataRequest: this.DataRequest
      });
    profileModal.present();
    this.afDB.collection("Users/" + this.UserID + "/Contracts/" + this.prove.uid)
      .add({
        state: "A",
        has_viewed: false,
        timestamp: Date.now()
      });
    const alert = this.alertCtrl.create({
      title: 'Contratar',
      subTitle: 'Se ha enviado un mensaje al proveedor',
      buttons: ['Aceptar']
    });

    alert.present();

    //TODO Send Mail
  }

  checkIfRating(prov: any) {
    return prov.Rating.indexOf(this.UserID) !== -1 ? true : false
  }

  createRating(rating: any) {
    if (rating == undefined) rating = [0]

    const total = Object.keys(rating).length
    const sum = Object.keys(rating)
      .reduce(function (sum, key) {
        return sum + parseFloat(rating[key].Value)
      }, 0)

    let avgRating = sum / total
    let items: string[] = []
    for (var i = 1; i <= 5; i++)
      items.push(i <= avgRating ? "md-star" : "md-star-outline")
    return items
  }
  RateProvider(item: number) {
    item++
    const lastRating = this.afDB.doc("Providers/" + this.uid + "/rating/" + this.UserID)
    if (lastRating != undefined || lastRating != null)
      lastRating.update({ Value: item, timestamp: new Date() })
    else {
      this.afDB.doc("Providers/" + this.uid + "/rating/").set({
        Value: item,
        timestamp: new Date()
      })
    }
    const alert = this.alertCtrl.create({
      title: 'Rating',
      subTitle: 'ha Calificado con ' + item + ' estrella' + (item == 1 ? '' : 's'),
      buttons: ['Aceptar']
    })
    alert.present()
  }
}
