import { ChatPage } from './../chat/chat';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IChats, IMessage } from '../../services/Models'
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {
  Chats: Observable<IChats[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFirestore) {
    let uid = navParams.data as string
    this.Chats = this.afDB.collection<IChats>("Chats",
      ref => ref
      .where("UserUid", "==", uid)
      .where("Status", "==", "N")
      ).snapshotChanges()
      .pipe(map(m => m.map(z => {
        let $key = z.payload.doc.id
        let data = z.payload.doc.data() as IChats 
        return { $key, ...data }
      }
      )))
      // this.Chats.subscribe(s=>{
      //   s.map(m=>{
      //     this.Provider = this.afDB.collection("Providers",r=>r.where("uid"))
      //   })
      // })
  }

  onPressChat(chatid: string, ProviderUid:string) {
    this.navCtrl.push(ChatPage, { chatid, uid: this.navParams.data , puid:ProviderUid })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }
  getLatestMessage(message: IMessage[]) {
    if(message ==undefined) return `Enviar mensaje a //TODO Nombre del proveedor`    
    return message[message.length - 1].Message
  }
}
