import { AngularFirestore } from '@angular/fire/firestore';
import { IUser, IProveedor } from './../../services/Models';
import { Observable } from 'rxjs/Observable';
import { UserSCV } from './../../Providers/User';
import { PaymentPage } from './../payment/payment';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { ForgetPage } from './../forget/forget';
import { ProvMainPage } from './../provider/prov-main/prov-main';
import { AngularFireAuth } from 'angularfire2/auth';
import { MainPage } from './../main/main';
import { Register } from './../register/register';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  usr: Observable<IUser>
  formgroup: FormGroup;
  Email: AbstractControl;
  Password: AbstractControl;
  PASSWORD_REGEX = `.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).*`;

  constructor(private alertCtrl: AlertController, private fbuild: FormBuilder, private fire: AngularFireAuth, public usersvc: UserSCV,
    private afDB: AngularFirestore,
    public navCtrl: NavController, public loadingCtrl: LoadingController) {
    this.formgroup = fbuild.group({
      Email: ['', Validators.compose([Validators.maxLength(30), Validators.email])],
      Password: ['', Validators.compose([Validators.required, Validators.pattern(this.PASSWORD_REGEX)])]
    });
    this.Email = this.formgroup.controls['Email'];
    this.Password = this.formgroup.controls['Password'];
  }

  private presentAlert(mensaje: string = 'Tu cuenta esta inactiva!\nPor favor revisa tu correo par activar la cuenta') {
    let alert = this.alertCtrl.create({
      title: 'Iniciar Sesión',
      subTitle: mensaje,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  GoToLoginDebug() {
    this.Email.setValue("invalidtruck@gmail.com")
    this.Password.setValue("Neptunia$3")
    this.GoToLogin()
  }

  async GoToLogin() {
    let self = this

    if (this.formgroup.valid) {
      var spinloader = this.loadingCtrl.create({
        content: "Iniciando Sesión...",
        spinner: "dots"
      });
      await spinloader.present()
      let data = await this.fire.auth.signInWithEmailAndPassword(self.Email.value, self.Password.value)
      try {
        if (data && data.user.emailVerified) {
         let subs= this.usersvc.setUser(data.user.uid).subscribe(async s => {
            if (s && s.isProvider) {
              let provinfo = await self.afDB.doc<IProveedor>("Providers/" + s.uidProvider).valueChanges()
              provinfo.subscribe(
                ss => {
                  self.clearForm(); 
                  subs.unsubscribe();
                  ss.lastPayment.getTime() <= Date.now()?
                    self.navCtrl.push(PaymentPage, { uid: data.user.uid, uidp: s.uidProvider }):
                    self.navCtrl.push(ProvMainPage, { uid: data.user.uid, uidp: s.uidProvider })
                }
              )
            }
            else self.navCtrl.push(MainPage, { uid: data.user.uid })
          }
          )
        }
        else {
          this.presentAlert();
        }
      }
      catch (err) {
        switch (err.code) {
          case "auth/too-many-requests":
            this.presentAlert("por seguridad, su cuenta se ha bloqueado! \nfavor espere un momento para acceder")
            break;
          case "auth/wrong-password":
            this.presentAlert("La contraseña y/o el usuario es incorrecto");
            break;
          case "auth/invalid-email":
            this.presentAlert("Favor de poner un correo valido");
            break;
          case "auth/network-request-failed":
            this.presentAlert("Red no disponible en estos momentos");
            break;
          case "auth/user-not-found":
            this.presentAlert("Usuario no encontrado");
            break;
          default:
            console.error(err);
            break;
        }
      }
      spinloader.dismissAll();
    }

  }
  clearForm(): any {
    this.Email.setValue("");
    this.Password.setValue("");
  }
  GoToRegister() {
    this.navCtrl.push(Register);
  }

  GoToForget() {
    this.navCtrl.push(ForgetPage);
  }

  ionViewWillLeave() {

  }

  // CreateFacebookUser(data: User) {
  //   this.afDB.object("Users/" + data.uid).set({
  //     FirstName: data.first_name,
  //     LastName: data.last_name,
  //     LastName2: data.last_name2 != undefined ? data.last_name2 : "",
  //     Gender: data.gender,
  //     Ages: data.Age,
  //     img: data.img
  //   }).catch(error => console.log(error));
  // }


  // signInWithFacebook(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     if (this.platform.is('cordova')) {
  //       this.facebook.login(['email', 'public_profile', 'user_friends'])
  //         .then((facebookData: FacebookLoginResponse) => {
  //           const loading = this.loadingCtrl.create({
  //             content: 'Por favor, aguarde...'
  //           });
  //           this.facebook.api('/me', ['email', 'public_profile', 'user_friends']).then((res) => {
  //             console.log(res);

  //           });

  //           loading.present();
  //           const credential = firebase.auth.FacebookAuthProvider
  //             .credential(facebookData.authResponse.accessToken);
  //           firebase.auth().signInWithCredential(credential).then((res) => {
  //             setTimeout(() => {

  //               let profile = res.additionalUserInfo.profile;

  //               if (res.additionalUserInfo.isNewUser) {
  //                 var user = <User>{
  //                   email: profile.email,
  //                   first_name: profile.first_name,
  //                   gender: profile.gender == "male" ? "M" : "F",
  //                   Age: profile.age_range.min,
  //                   last_name: profile.last_name,
  //                   img: profile.picture.data.url,
  //                   uid: res.user.uid
  //                 };
  //                 this.CreateFacebookUser(user);
  //               }
  //               this.navCtrl.push(MainPage)
  //             }, 800);
  //           });
  //         }, (error) => {
  //           resolve(error);
  //         });
  //     }
  //   });
  // }



  // signInWithFacebookWeb() {
  //   this.fire.auth
  //     .signInWithPopup(new firebase.auth.FacebookAuthProvider())
  //     .then(res => {
  //       debugger;
  //       let profile = res.additionalUserInfo.profile;

  //       if (res.additionalUserInfo.isNewUser) {
  //         var user = <User>{
  //           email: profile.email,
  //           first_name: profile.first_name,
  //           gender: profile.gender == "male" ? "M" : "F",
  //           Age: profile.age_range.min,
  //           last_name: profile.last_name,
  //           img: profile.picture.data.url,
  //           uid: res.user.uid
  //         };
  //         this.CreateFacebookUser(user);
  //       }

  //       this.navCtrl.push(MainPage)
  //     }
  //     );
  // }


}
