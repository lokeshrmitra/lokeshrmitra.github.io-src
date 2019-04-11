import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {

  }

  registerSubscription(subscription: Object, email: string): Observable<any>{
    return this.http.post('https://lokeshrmitra-devhosts.herokuapp.com/products/subs', {subscription, email});
  }
}
