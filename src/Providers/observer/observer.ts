import { Subscription } from 'rxjs/Subscription'; 
import { Injectable } from '@angular/core';

/*
  Generated class for the ObserverProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ObserverProvider {
  public subscriptions: Subscription[] =[]
  constructor() {
    
  }

  public add(sub: Subscription)
  {
    this.subscriptions.push(sub)
  }
  public addMany(... subs:Subscription[])
  {
    subs.forEach(element => {
      this.subscriptions.push(element)
    })
  }

  public UnSubscribe()
  {
    this.subscriptions.forEach(el=>{
      el.unsubscribe()
    })
  }

}
