import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { AuthenticateService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db:AngularFireDatabase,private http:HttpClient,private auth:AuthenticateService) { }

  storeOrder(order){
  let type=this.auth.currentUser().module;
  return this.http.post('https://qmk21872.pythonanywhere.com/'+type+'/order',order);
  }
  showbeneficiaryOrder(){
    let type=this.auth.currentUser().module;
    return this.http.get('https://qmk21872.pythonanywhere.com/'+type+'/beneficiary/orders');
  }
  notification(){
    let type=this.auth.currentUser().module;
    return this.http.get('https://qmk21872.pythonanywhere.com/'+type+'/donor/orders');
  }
  //donor/orders
  
}


