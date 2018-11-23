// import { AngularFireDatabase } from 'angularfire2/database';
import { UbicacionSVC } from './../../Providers/ubicacion';

import { RegisterProvPage } from './../provider/register-prov/register-prov';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Register } from '../register/register';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  location: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
     private _ubicacion: UbicacionSVC
    ) {
    this._ubicacion.iniciar_localizacion(); 
    
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }
  goToRegister() {
    this.navCtrl.push(Register);
  }
  goToRegPro() {
    this.navCtrl.push(RegisterProvPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
 
  
}