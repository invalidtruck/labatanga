import { Injectable } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class Auth {
    constructor(private fire: AngularFireAuth) {
    }
    public async registerEvent(data: any, fn: Function) {
        try {
            let user = await this.fire.auth.createUserWithEmailAndPassword(data.Email, data.Password)
            let smail = await user.user.sendEmailVerification()
            fn(smail)
        }
        // return this.fire.auth.createUserWithEmailAndPassword(data.Email, data.Password)
        //     .then(data => {
        //         data.sendEmailVerification().then(
        //             (success) => {
        //                 fn(data);
        //             });
        //         console.log('data:', data);
        //     })
        catch (err) {
            switch (err.code) {
                case "auth/invalid-email":
                    alert("No es un correo valido")
                    break;
                case "auth/email-already-in-use":
                    alert("El correo ya se encuentra en uso")
                    break;
                default:
                    alert("Hubo un error, intente mas tarde")
                    break;
            }
            console.log(err.message);
        }
    }
}