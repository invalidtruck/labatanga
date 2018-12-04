import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { ICategories, IEstados, ICiudades, ISubCategories } from '../../services/Models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CatalogosProvider {

  constructor(public afDB: AngularFirestore) {
  }

  getStates(): Observable<IEstados[]> {
    return this.afDB.collection<IEstados>("Estados", ref => ref.orderBy("name", "asc"))
      .snapshotChanges().pipe(map(m => m.map(z => {
        let $key = z.payload.doc.id
        let data = z.payload.doc.data() as IEstados
        return { $key, ...data }
      })))
  }
  getCities(stateid: string): Observable<ICiudades[]> {
    return this.afDB.collection<ICiudades>("Ciudades", ref =>
      ref.where("stateid", "==", parseInt(stateid)).limit(100).orderBy("name", "asc"))
      .snapshotChanges().pipe(map(m => m.map(z => {
        let $key = z.payload.doc.id
        let data = z.payload.doc.data() as ICiudades
        return { $key, ...data }
      })))
  }

  getThemes(): Observable<ICategories[]> {
    return this.afDB.collection<ICategories>("Categorias")
      .snapshotChanges().pipe(map(m => m.map(z => {
        let $key = z.payload.doc.id
        let data = z.payload.doc.data() as ICategories
        return { $key, ...data }
      })))
  }

  getCategories(item: string): Observable<ISubCategories[]> {
    return this.afDB.collection<ISubCategories>("Categorias").doc(item).collection("SubCategoria")
      .snapshotChanges().pipe(map(m => m.map(z => {
        let $key = z.payload.doc.id
        let data = z.payload.doc.data() as ISubCategories
        return { $key, ...data }
      })))
  }
  getSubCategories(cat: string, tema: string): Observable<ISubCategories[]> {
    return this.afDB.collection<ISubCategories>("Categorias").doc(tema).collection("SubCategoria").doc(cat).collection("SubCategoria")
      .snapshotChanges().pipe(map(m => m.map(z => {
        let $key = z.payload.doc.id
        let data = z.payload.doc.data() as ISubCategories
        return { $key, ...data }
      })))
  }
}
