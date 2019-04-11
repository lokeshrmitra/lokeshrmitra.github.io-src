import { Component } from '@angular/core';

import { SwPush } from '@angular/service-worker'
import { RegisterService } from './services/register.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email:string;
  serverPublicKey:string = "BB-vYEM6B3wVD1JX4hYuuGoFJsLeRGMt7G8to6ZAyQyHHTwzUAk3AekCU7r_yRSL3xDEX2T1m9KJsraElv5icfk";

  constructor(
    private push: SwPush, 
    private register: RegisterService
  ){}
  
  doSubscribe(){
    this.push.subscription.subscribe(subscriptionObject=>{
      if(subscriptionObject === null){
        this.push.requestSubscription({
          serverPublicKey: this.serverPublicKey
        })
        .then(newSubscriptionObject=>{
          this.register.registerSubscription(newSubscriptionObject, this.email).subscribe(res=>{
            console.log(res);
          })
        })
        .catch(error=>{
          console.log(error);
        })
      }else{
        this.register.registerSubscription(subscriptionObject, this.email).subscribe(res=>{
          console.log(res);
        })
      }
    })
  }

}
