import { Md5 } from 'md5-typescript';
import { Platform } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from 'ionic-angular';
import { Component } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth'; 
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'
import { FCM } from '@ionic-native/fcm'

@Component({
    templateUrl: "register.html",
    selector: "page-register"
})
export class Register {
    formgroup: FormGroup
    PASSWORD_REGEX = `.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).*`
    Email: AbstractControl;
    Password: AbstractControl;
    PasswordConfirm: AbstractControl;
    Name: AbstractControl;
    LastName: AbstractControl;
    LastName2: AbstractControl;
    Gender: AbstractControl;
    Phone: AbstractControl;
    BirthDate: AbstractControl;
    profilePicture: String;
   

    constructor(
        private fire: AngularFireAuth,
        public fbuild: FormBuilder,
        public db: AngularFirestore,
        public navCtrl: NavController,
        private fcm: FCM,
        public plat: Platform
    ) {

        this.formgroup = fbuild.group({
            Email: ['', Validators.compose([Validators.required, Validators.email])],
            Name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            Gender: ['', Validators.compose([Validators.required])],
            Phone: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])],
            BirthDate: ['', Validators.compose([Validators.required])],
            LastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            LastName2: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            Password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(12), Validators.required,
            Validators.pattern(this.PASSWORD_REGEX)])],
            PasswordConfirm: ['', Validators.compose([Validators.required])],
        })

        this.Name = this.formgroup.controls['Name']
        this.Phone = this.formgroup.controls['Phone']
        this.Name = this.formgroup.controls['Name']
        this.LastName = this.formgroup.controls['LastName']
        this.LastName2 = this.formgroup.controls['LastName2']
        this.Email = this.formgroup.controls['Email']
        this.Password = this.formgroup.controls['Password']
        this.BirthDate = this.formgroup.controls['BirthDate']
        this.Gender = this.formgroup.controls['Gender']
    }

    async registerEvent() {
        if (this.getAge() >= 18) {
            try {
                let data = await this.fire.auth.createUserWithEmailAndPassword(this.Email.value, this.Password.value)
                let token = this.plat.is("cordova") ? (await this.fcm.getToken()) : null
                let dUser = await this.CreateUser(data, token)
                await this.fire.auth.currentUser.sendEmailVerification()
                alert("Se ha registrado correctamente, por favor confirme su cuenta con el correo que se le envio")
                this.navCtrl.push(LoginPage)
            }
            catch (err) {
                switch (err.code) {
                    case "auth/invalid-email":
                        alert("No es un correo valido")
                        break;
                    case "auth/email-already-in-use":
                        alert("El correo se encuentra en uso")
                        break;
                    default:
                        alert("Ha ocurrido un error, contacte al administrador de la aplicación" + err)
                        break;
                }
            }
        }

    }
    async CreateUser(data: any, token: string) {
        var user = {
            Email: this.Email.value,
            FirstName: this.Name.value,
            LastName: this.LastName.value,
            LastName2: this.LastName2.value,
            Phone: this.Phone.value,
            Gender: this.Gender.value,
            Ages: this.getAge(), 
            imgUrl:"https://www.gravatar.com/avatar/" + Md5.init(this.Email.value)
        }
        if( token) user[token]= token
        return await this.db.collection("Users").add(user)

    }
    getAge() {
        var today = new Date()
        var bd = this.BirthDate.value.split("-")
        var birthDate = new Date(bd[0], bd[1], bd[2])
        var age = today.getFullYear() - birthDate.getFullYear()
        var m = today.getMonth() - birthDate.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }
        return age
    }
}
