import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

/*
  Generated class for the CatalogosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CatalogosProvider {

  constructor(public afDB: AngularFireDatabase) {
  }

  getStates() {
    return this.afDB.list("Estados").snapshotChanges()
  }
  getCities(stateid: string) {
    return this.afDB.list("/Municipios", ref =>
      ref.orderByChild("stateid").equalTo(parseInt(stateid))
        .limitToFirst(100)).snapshotChanges()
  }

  getCategories() {
    return this.afDB.list("CategoriesNew/").snapshotChanges()
  }

  getSubCategories(item: string) {
    return this.afDB.list("CategoriesNew/" + item + "/SubCategories/").snapshotChanges()
  }
  getSubCategories2(cat: string, tema: string) {
    return this.afDB.list("CategoriesNew/" + tema + "/SubCategories/" + cat + "/SubCategories/")
      .snapshotChanges()

  }
}
