import { CatalogosProvider } from './../../../Providers/catalogos/catalogos';
import { AlertController } from 'ionic-angular/components/alert/alert-controller'
import { Auth } from './../../../services/auth'
import { Observable } from 'rxjs'
import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'
import { LoginPage } from "../../login/login"
import { FCM } from '@ionic-native/fcm'
import { AngularFirestore } from 'angularfire2/firestore';
import { ICategories, ISubCategories, ICiudades, IEstados } from '../../../services/Models';

@Component({
  selector: 'page-register-prov',
  templateUrl: 'register-prov.html',
}
)
export class RegisterProvPage {
  hideSubcat2: boolean
  formgroup: FormGroup
  FirstName: AbstractControl
  CompanyName: AbstractControl
  Description: AbstractControl
  Phone: AbstractControl
  Address: AbstractControl
  NoExt: AbstractControl
  NoInt: AbstractControl
  CP: AbstractControl
  State: AbstractControl
  City: AbstractControl
  facebook: AbstractControl
  whatsapp: AbstractControl
  Name: AbstractControl
  LastName: AbstractControl
  LastName2: AbstractControl
  Email: AbstractControl
  Password: AbstractControl
  PasswordConfirm: AbstractControl
  Theme: AbstractControl
  Category: AbstractControl
  Subcategory: AbstractControl

  States: Observable<IEstados[]>
  Cities: Observable<ICiudades[]>
  Themes: Observable<ICategories[]>
  Categories: Observable<ISubCategories[]>
  SubCategories: Observable<ISubCategories[]>
  PASSWORD_REGEX = `.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).*`
  CP_REGEX = "[0-9]{5}"

  constructor(public navCtrl: NavController, public afDB: AngularFirestore, private fcm: FCM,
    public cat: CatalogosProvider,
    public alertCtrl: AlertController,
    public navParams: NavParams, public fbuild: FormBuilder, public auth: Auth) {
    this.Themes = this.cat.getThemes()
    this.formgroup = fbuild.group({
      FirstName: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[\u00F1A-Za-z _]*[\u00F1A-Za-z][\u00F1A-Za-z _]*'), Validators.required])],
      CompanyName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      Description: ['', Validators.compose([Validators.required, Validators.minLength(15)])],
      Phone: ['', Validators.compose([Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9 ]*'), Validators.required])],
      Address: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      State: ['', Validators.compose([Validators.required])],
      NoExt: ['', Validators.compose([Validators.maxLength(8), Validators.pattern('[0-9 ]*'), Validators.required])],
      CP: ['', Validators.compose([Validators.minLength(5), Validators.pattern(this.CP_REGEX), Validators.required])],
      City: ['', Validators.compose([Validators.required])],
      Name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      LastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      LastName2: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      Email: ['', Validators.compose([Validators.maxLength(30), Validators.email])],
      EmailConfirm: ['', Validators.compose([Validators.maxLength(30), Validators.email])],
      Theme: ['', Validators.required],
      Category: ['', Validators.required],
      SubCategory: [''],
      Password: ['', Validators.compose([Validators.minLength(8),
      Validators.maxLength(12), Validators.required, Validators.pattern(this.PASSWORD_REGEX)])],
      PasswordConfirm: ['', Validators.compose([Validators.required])],
    })


    this.FirstName = this.formgroup.controls['FirstName']
    this.CompanyName = this.formgroup.controls['CompanyName']
    this.Description = this.formgroup.controls['Description']
    this.Phone = this.formgroup.controls['Phone']
    this.Address = this.formgroup.controls['Address']
    this.NoExt = this.formgroup.controls['NoExt']
    this.NoInt = this.formgroup.controls['NoInt']
    this.CP = this.formgroup.controls['CP']
    this.State = this.formgroup.controls['State']
    this.City = this.formgroup.controls['City']
    this.facebook = this.formgroup.controls['facebook']
    this.whatsapp = this.formgroup.controls['whatsapp']
    this.Name = this.formgroup.controls['Name']
    this.LastName = this.formgroup.controls['LastName']
    this.LastName2 = this.formgroup.controls['LastName2']
    this.Email = this.formgroup.controls['Email']
    this.Password = this.formgroup.controls['Password']
    this.Theme = this.formgroup.controls['Theme']
    this.Category = this.formgroup.controls['Category']
    this.Subcategory = this.formgroup.controls['SubCategory']

    this.Categories = this.cat.getThemes()
    this.States = this.cat.getStates()
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let password = group.controls[passwordKey]
      let confirmPassword = group.controls[confirmPasswordKey]
      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        }
      }
    }
  }
  registerEvent() {
    if (this.formgroup.valid) {

      var self = this
      this.auth.registerEvent({ Email: this.Email.value, Password: this.Password.value }, (data) => {

        let prov = {
          FirstName: self.FirstName.value,
          CompanyName: self.CompanyName.value,
          Description: self.Description.value,
          Phone: self.Phone.value,
          Address: self.Address.value,
          NoExt: self.NoExt.value,
          NoInt: self.NoInt == undefined ? null : self.NoInt.value,
          CP: self.CP.value,
          City: self.City.value,
          facebook: self.facebook == undefined ? null : self.facebook.value,
          whatsapp: self.whatsapp == undefined ? null : self.whatsapp.value,
          Name: self.Name.value,
          LastName: self.LastName.value,
          LastName2: self.LastName2.value,
          Email: self.Email.value,
          uid: data.uid,
          Theme: self.Theme.value,
          Category: self.Category.value,
          SubCategory: self.Subcategory.value,
          lastPayment: Date.now(),
          // ComposeQuery: `${self.City.value}_${self.Category.value}_${self.Subcategory.value}_${self.Subcategory2.value}`,
          isProvider: true
        }
        this.fcm.getToken().then(token=>{
          this.afDB.collection("Providers").doc(data.uid).set(prov)
          this.CreateUser(data.uid, {
            Email: self.Email.value,
            FirstName: self.Name.value,
            LastName: self.LastName.value,
            LastName2: self.LastName2.value,
            Phone: self.Phone.value,
            isProvider: true,
            uidProvider: data.uid,
            token
          })
          const alert = this.alertCtrl.create({
            title: 'Registro Proveedor',
            subTitle: 'Se registro correctamente',
            buttons: ['Aceptar']
          })
          alert.present() 
          this.navCtrl.push(LoginPage)
        })
        
      }).catch((er) => {
        console.log(er)
      })
    }
    else {
      const alert = this.alertCtrl.create({
        title: 'Registro Proveedor',
        subTitle: 'Favor de revisar los campos',
        buttons: ['Aceptar']
      })
      alert.present()
    }
  }
  CreateUser(uid: string, data: any) {
    this.afDB.collection("Users").doc(uid).set(data)
      .catch(error =>
        console.log(error)
      )
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterProvPage')
  }

  getCities(stateid: string) {
    this.Cities = this.cat.getCities(stateid)
  }

  getCategories(theme: string) {
    this.Categories = this.cat.getCategories(theme)
  }
  getSubCategories(Cat: string) {
    this.SubCategories = this.cat.getSubCategories(Cat, this.Theme.value) 
  }
 
}
