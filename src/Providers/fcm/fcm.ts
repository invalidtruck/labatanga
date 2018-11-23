import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular'; 


@Injectable()
export class FcmProvider {

  constructor(public firebaseNative: Firebase,    public afDB: AngularFireDatabase,    private platform: Platform ) {

  }

  // Get permission from the user
  async getToken(userid:string) { 
    let token;

    if (this.platform.is('android')) {
      token = await this.firebaseNative.getToken()
    } 
  
    if (this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
      await this.firebaseNative.grantPermission();
    } 
    
    return this.saveTokenToFirestore(token)
  }

  // Save the token to firestore
  private saveTokenToFirestore(token:any) {
    if(!token)return;
    
    const user = this.afDB.object("Usersa/").update({
      tokenid: token
    }); 
  }

  // Listen to incoming FCM messages
  listenToNotifications() {
    return this.firebaseNative.onNotificationOpen()
  }

}