import { AbstractControl } from '@angular/forms';
 
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular'; 
import { Observable } from 'rxjs';
import { IEstados, ICiudades, ISearchOptions } from '../../services/Models';
import { AngularFirestore } from 'angularfire2/firestore';
import { CatalogosProvider } from '../../Providers/catalogos/catalogos';
import { Content } from 'ionic-angular/components/content/content';
  
@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {
  States : Observable<IEstados[]>
  Cities: Observable<ICiudades[]>
  @ViewChild("City") City
  @ViewChild("State") State 
  constructor(private navCtrl: NavController,public cat:CatalogosProvider, 
    public afDB:AngularFirestore,public viewCtrl: ViewController) { 
    this.States= this.cat.getStates()
    
  }
  
  dismiss() {
    let data = { city: this.City.value, state:this.State.value } as ISearchOptions;
    this.viewCtrl.dismiss(data);
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
  getCities(stateid:string)
  {
    this.Cities = this.cat.getCities(stateid)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

}
