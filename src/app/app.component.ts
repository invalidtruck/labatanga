 
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'; 
import { WelcomePage } from './../pages/welcome/welcome';
import { firebaseConfig } from '../services/credentials';
import * as firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  constructor(public platform: Platform, private toastCtrl: ToastController, 
    public statusBar: StatusBar,   public splashScreen: SplashScreen) {

    firebase.initializeApp(firebaseConfig);

    platform.ready().then(() => {

      var lastTimeBackPress = 0;
      var timePeriodToExit = 2000;

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      platform.registerBackButtonAction(() => {
        // get current active page
        let view = this.nav.getActive();
        if (view.component.name == "ProvMainPage") {
          let toast = this.toastCtrl.create({
            message: 'Quiere cerrar sesión?',
            duration: 2000,
            position: 'bottom'
          });
          if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
            this.nav.popToRoot()
            toast.dismissAll()
          } else {

            toast.present();
            lastTimeBackPress = new Date().getTime();
          }
        } else {
          // go to previous page
          this.nav.pop({});
        }
      }); 
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
