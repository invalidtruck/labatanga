import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage, initializeApp } from 'firebase';
import { firebaseConfig } from "../../../services/credentials";
import { filter } from 'rxjs/operator/filter';

/**
 * Generated class for the ProvSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prov-settings',
  templateUrl: 'prov-settings.html',
})
export class ProvSettingsPage {
  Provider: Observable<any>
  uid: String
  constructor(
    private afDB: AngularFireDatabase,
    private camera: Camera, private storage: AngularFireStorage, public navCtrl: NavController, public navParams: NavParams) {
    this.uid = navParams.data
    this.Provider = this.afDB.object("Providers/" + this.uid).valueChanges()
    
  }

  async takePhoto(images: any) {

    const options: CameraOptions = {
      quality: 50,
      targetHeight: 600,
      targetWidth: 800,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      //sourceType:this.camera.PictureSourceType.PHOTOLIBRARY
    }
    const result = await this.camera.getPicture(options)
    let totalimg = Object.keys(images);
    let name = "one";
    if (totalimg["one"] != undefined) name = "two"
    if (totalimg["two"] != undefined) name = "three"
    if (totalimg["three"] != undefined) name = "four"
    if (totalimg["four"] != undefined) name = "five"
    if (totalimg["five"] != undefined) name = "six"



    // const image = `data:image/jpeg;base64,${result}`;
    // const task = this.storage.ref("providers/" + this.uid + "/" + name).putString(image, 'data_url');
    // let filename = task.()
    // this.afDB.object("Providers/" + this.uid + "/" + "images").update({
    //   one: filename
    // })
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvSettingsPage');
  }

}

