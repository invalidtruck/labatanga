import { IUser } from './../services/Models';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs'; 
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class UserSCV {

    private User: Observable<IUser>
    
    constructor(private afDB: AngularFirestore) {
    }
      getUser() :Observable<IUser>{ 
        return  this.User
    }
    Dispose() {
        this.User = null
    }
    setUser(uid: string) { 
        this.User = this.afDB.collection("Users").doc<IUser>(uid).valueChanges()
        return this.User
    }
}