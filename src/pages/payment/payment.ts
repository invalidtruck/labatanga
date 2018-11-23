import { AngularFirestore } from '@angular/fire/firestore';
import { ObserverProvider } from './../../Providers/observer/observer';
import { ProvMainPage } from './../provider/prov-main/prov-main';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { IProveedor } from '../../services/Models';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  uid: string
  uidp: string
  payment: PayPalPayment = new PayPalPayment('200', 'MXN', 'PAGO SERVICIO LABATANGA', 'Servicio');
  currencies = ['MXN', 'USD'];
  payPalEnvironment: string = 'payPalEnvironmentSandbox';
  constructor(public navCtrl: NavController, public subs: ObserverProvider,
    public navParams: NavParams, public payPal: PayPal, public afDB: AngularFirestore) {
    this.uidp = navParams.get("uidp")
    this.uid = navParams.get("uid")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  async makePayment() {
    let self = this
    this.payPal.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'ATQcR10-N6PbL_1qf8Z3Z158iMdkrPu9gleNBKGIfYd7iXZqIrE8BAOe-T2Th4Mhwt9hkCj2NVhHqav9'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        // let payment = new PayPalPayment('3.33', 'USD', 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(this.payment).then((response) => {
          // Successfully paid
          let state = response.response.state
          debugger
          alert(`Pago realizado. Status = ${state}`)
          if (state == "approved") {
            let ref = this.afDB.doc<IProveedor>("Providers/" + self.uidp).snapshotChanges()
            let subref = ref.subscribe(s => {
              let lastp = new Date(s.payload.data().lastPayment)
              lastp.setMonth(lastp.getMonth() + 6)

              this.afDB.doc("Providers/" + self.uidp).update({
                lastPayment: lastp
              })
              let currentIndex = this.navCtrl.getActive().index;
              this.navCtrl.push(ProvMainPage, { uid: self.uid, uidp: self.uidp }).then(() => {
                // this.navCtrl.remove(currentIndex);
              });
            })  
          }
          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, () => {
          // Error or render dialog closed without being successful
        });
      }, () => {
        // Error in configuration
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }
}
