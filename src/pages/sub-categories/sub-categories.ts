import { SubCategoriesSecondPage } from './../sub-categories-second/sub-categories-second';
import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { TimeServicePage } from '../time-service/time-service';

/**
 * Generated class for the SubCategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-sub-categories',
  templateUrl: 'sub-categories.html',
})
export class SubCategoriesPage {
  SubCategories: Observable<any>
  CatName: string
  userID:string
  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase) {
    let CategoryID = this.navParams.get("CategoryID")
    this.CatName = this.navParams.get("CategoryName")
    this.userID = this.navParams.get("userID")
    this.SubCategories = this.afDB.list("CategoriesNew/" + this.CatName + "/SubCategories").snapshotChanges()
  }

  GetSubCategories(cat: any) {
    if (cat != null) {
      if (cat.payload.val().SubCategories == null) {
        this.navCtrl.push(TimeServicePage, { CategoryName: this.CatName, SubCategoryName: cat.key,userID:this.userID, SubCategorySecondName :"" })
      }
      else {
        this.navCtrl.push(SubCategoriesSecondPage, { CategoryName: this.CatName, SubCategoryName: cat.key,userID:this.userID })
      }
    }  
  }
  getSubCats(Cat: any) {
    if (Cat == null || Cat.SubCategories == null) return "Sin Subcategorias" 
      let subcats = Object.keys(Cat.SubCategories).length
      return subcats + " Subcategoria" + (subcats > 1 ? "s" : "")
    }
   

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubCategoriesPage');
  }

}
