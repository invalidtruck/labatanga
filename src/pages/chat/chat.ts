import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, TextInput } from 'ionic-angular';
import { IMessage, IUser, IChats } from '../../services/Models';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { FCM } from '@ionic-native/fcm';



@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: ElementRef;
  user: Observable<IUser>
  Provider: Observable<IUser>
  Chat: Observable<IChats>
  usr:IUser
  Msg:IMessage[]
  prv:IUser 
  editorMsg = ''
  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFirestore, private fcm: FCM) {
    this.user = this.afDB.collection<IUser>("Users").doc(navParams.get("uid")).snapshotChanges().pipe(map(m => {
      return { $key:navParams.get("uid"), ...m.payload.data() as IUser }
    }))
    this.Provider = this.afDB.collection<IUser>("Users").doc(navParams.get("puid")).snapshotChanges().pipe(map(m => {
      return { $key:navParams.get("puid"), ...m.payload.data() as IUser }
    }))
    this.Chat = this.afDB.collection("Chats").doc(navParams.get("chatid")).snapshotChanges()
      .pipe(map(z => {
        let $key = z.payload.id
        let data = z.payload.data() as IChats
        return { $key, ...data }
      }
      ))

      this.user.subscribe(s=>{this.usr= s})
      this.Provider.subscribe(s=>{
        this.prv=s})
      this.Chat.subscribe(s=>{this.Msg= s.Messages})
  }

  sendMsg() {
    if (this.usr && this.prv ) {
      if(this.Msg==undefined)this.Msg=[]
      this.Msg.push({
        Date: Date.now(),
        Message: this.messageInput.nativeElement.value,
        isProvider: this.usr.isProvider,
        uid: this.usr.$key
      })
      this.pushNewMsg(this.Msg, this.usr.isProvider) 
    }
  }

  /**
   * @name pushNewMsg
   * @param msg
   */
  pushNewMsg(msg: IMessage[], isProvider:Boolean) {
    this.afDB.collection("Chats").doc(this.navParams.get("chatid")).update({
      Messages: msg
    }).then(s=>{
       this.afDB.collection("NotPush").add({
         token: isProvider? this.prv.token : this.usr.token,
         Message: msg[msg.length-1].Message,
         Title:"Cotización",
         type:"CHAT",
         date: Date.now()
       })
    })
    this.scrollToBottom();
  }


  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }
 
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
