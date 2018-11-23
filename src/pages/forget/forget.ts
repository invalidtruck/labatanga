
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the ForgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage {

  public resetPasswordForm: FormGroup;

  constructor(public authData: AngularFireAuth, public formBuilder: FormBuilder,
    public nav: NavController, public alertCtrl: AlertController) {

    this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
    })
  }

  resetPassword() {
    if (!this.resetPasswordForm.valid) {
      console.log(this.resetPasswordForm.value);
    } else {
      this.presetPassword(this.resetPasswordForm.value.email)
        .then((user) => {
          let alert = this.alertCtrl.create({
            message: "Hemos enviado un link a su correo para cambiar la contraseña",
            buttons: [
              {
                text: "Ok",
                role: 'cancel',
                handler: () => {
                  this.nav.pop();
                }
              }
            ]
          });
          alert.present();
        }, (error) => {
          var errorMessage: string = error.message;
          let errorAlert = this.alertCtrl.create({
            message: errorMessage,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          errorAlert.present();
        });
    }
  }

  presetPassword(email: string): Promise<void> {
    return this.authData.auth.sendPasswordResetEmail(email);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
  }

}
