import { IUser } from './../services/Models';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

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
    setUser(uid) { 
        this.User = this.afDB.doc<IUser>("Users/" + uid).valueChanges()
        return this.User
    }
}