import { AngularFirestore } from '@angular/fire/firestore';
import { ObserverProvider } from './../../Providers/observer/observer';
import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController } from 'ionic-angular'; 
import { Observable } from 'rxjs'; 
import { IProviderComments } from '../../services/Models';


// @IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {
  Comments: Observable<IProviderComments[]>;


  constructor(public navCtrl: NavController, public afDB: AngularFirestore,
    public lCtrl: LoadingController, public subs: ObserverProvider,
    public navParams: NavParams) {
    const uid = navParams.get("uid");
    const sload = lCtrl.create({
      content: "Cargando Comentarios\n por favor espere...",
      spinner: "dots"
    });
    sload.present();
    this.init(uid).then(res => {
      let subComment = this.Comments.subscribe(a => {
        sload.dismissAll();
      });

   
    }
    )


    // .(items => {
    //   return items.map(com => { 
    //     return {
    //       user: this.afDB.doc("Users/" + com.key).valueChanges(),
    //       comment: com.payload.val(),
    //       time: com.payload.val()
    //     }
    //   })
    // })

  }
  async init(uid: String) {
    this.Comments= await this.afDB.collection<IProviderComments>("Providers/" + uid + "/Comments").valueChanges()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }

}
