import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IMessage, IUser,IProveedor } from '../../services/Models';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

 

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  user: Observable<IUser>
  Provider:Observable<IProveedor>
  Messages : Observable<IMessage[]>
  constructor(public navCtrl: NavController, public navParams: NavParams ,private afDB: AngularFirestore) {
    this.Messages = this.afDB.collection("chats").doc(navParams.get("chatid"))
    .collection("Messages").snapshotChanges()
    .pipe(map(m=>m.map(z=>{
      let $key= z.payload.doc.id
      let data =z.payload.doc.data() as IMessage
      return { $key, ...data }
    }
    )))
  }

getUser(uid:string)
{ 
  
  return 0 
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
