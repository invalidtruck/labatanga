import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { IQuery } from '../../services/Models';
import { ListPage } from '../list/list';
import { FormGroup } from '@angular/forms/src/model';
import { DateTime } from 'ionic-angular/components/datetime/datetime';

/**
 * Generated class for the TimeServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-time-service',
  templateUrl: 'time-service.html',
})
export class TimeServicePage {
  timeSelOther: any
  Times: Array<TimesEntity>
  SearchQuery: IQuery
  timeSel: string
  min: string
  CategoryName: string
  SubCategoryName: string
  SubCategorySecondName: string
  hackPicker: boolean = true

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public afDB: AngularFireDatabase) {
    this.CategoryName = this.navParams.get("CategoryName")
    this.SubCategoryName = this.navParams.get("SubCategoryName")
    this.SubCategorySecondName = this.navParams.get("SubCategorySecondName")
  }

  onTimeSelect() {
    this.navCtrl.push(ListPage, {
      searchQuery: this.SearchQuery
    })
  }
  ngOnInit(): void {
    let d = new Date()
    this.min = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2)
 
    this.Times = new Array<TimesEntity>()

    this.Times.push(new TimesEntity("24 horas", "hours"))
    this.Times.push(new TimesEntity("3 dias", "three"))
    this.Times.push(new TimesEntity("1 semana", "week"))
    this.Times.push(new TimesEntity("15 dias", "quin"))
    this.Times.push(new TimesEntity("1 mes", "month"))
    this.Times.push(new TimesEntity("Otro...", "other"))
  }
  sendAlert() {
    if (this.hackPicker) {

      let alert = this.alertCtrl.create({
        title: 'Tiempo Seleccionado',
        message: '¿la fecha seleccionada se enviara al proveedor esta usted de acuerdo?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              this.timeSelOther = null
            }
          },
          {
            text: 'Buscar',
            handler: () => {
              this.navCtrl.push(ListPage, {
                CategoryName: this.CategoryName,
                SubCategoryName: this.SubCategoryName,
                SubCategorySecondName: this.SubCategorySecondName
              })
            }
          }
        ]
      });
      alert.present();
      this.hackPicker = false
    }
    else {
      this.hackPicker = true
    }
  }

  CheckIfOther(t: string) {
    if(t!="other" )
    this.navCtrl.push(ListPage, {
      CategoryName: this.CategoryName,
      SubCategoryName: this.SubCategoryName,
      SubCategorySecondName: this.SubCategorySecondName
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeServicePage')
  }

}

export class TimesEntity {
  public Name: String
  public Value: string
  constructor(Name: string, Value: string) {
    this.Name = Name
    this.Value = Value
  }
}
