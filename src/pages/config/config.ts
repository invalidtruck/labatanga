// import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 import { storage, initializeApp } from 'firebase';
import { firebaseConfig } from "../../services/credentials";
/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(private navCtrl: NavController,
    //  public camera: Camera,
      public navParams: NavParams) {
    // initializeApp(firebaseConfig);

  }
  // async takePhoto() {

  //   const options: CameraOptions = {
  //     quality: 50,
  //     targetHeight: 600,
  //     targetWidth: 600,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }

  //   const result = await this.camera.getPicture(options)

  //   const image = `data:image/jpegbase64,${result}`;

  //   const pictures = storage().ref('pictures');
  //   pictures.putString(image, 'data_url');
  // }





  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

}
