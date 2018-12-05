import { ChatPage } from './../chat/chat';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IChats, IMessage } from '../../services/Models'

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {
  Chats: Observable<IChats[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFirestore) {
    let uid = navParams.data as string
    this.afDB.collection("chats").doc(uid)
  }

  onPressChat(chatid: string) {
    this.navCtrl.push(ChatPage, { chatid, uid: this.navParams.data })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }
  getLatestMessage(message: IMessage[]) {
    return message[message.length - 1]
  }
}
