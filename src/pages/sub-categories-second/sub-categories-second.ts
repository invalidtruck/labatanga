import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { TimeServicePage } from '../time-service/time-service';

/**
 * Generated class for the SubCategoriesSecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-sub-categories-second',
  templateUrl: 'sub-categories-second.html',
})
export class SubCategoriesSecondPage {
  SubCategories: Observable<any>
  CatName: string
  SubCatName: string
  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase) {
    let CategoryID = this.navParams.get("subCategoryID")
    this.CatName = this.navParams.get("CategoryName")
    this.SubCatName = this.navParams.get("SubCategoryName")
    this.SubCategories = this.afDB.list("CategoriesNew/" + this.CatName + "/SubCategories/" + this.SubCatName + "/SubCategories").valueChanges()
  }

  onClickSubCat(cat: any) {
    if (cat != null)
      if (cat.subCategories == undefined)
        this.navCtrl.push(TimeServicePage, { CategoryName: this.CatName, SubCategoryName: this.SubCatName, SubCategorySecondName: cat.Name })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubCategoriesSecondPage');
  }

}
