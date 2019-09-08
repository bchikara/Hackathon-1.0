import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';
import { AuthenticateService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  
  constructor(private http:HttpClient,private auth:AuthenticateService) { }
  boolean=true;
  
  deleteProduct(product_id) {
    let type= this.auth.currentUser().module
    return this.http.post('https://qmk21872.pythonanywhere.com/'+type+'/deletelisting',"hi",{params:new HttpParams().set('listing_id',product_id)})
  }

  updateProduct(value,product_id) {
    let type= this.auth.currentUser().module
    return this.http.post<any>('https://qmk21872.pythonanywhere.com/'+type+'/updatelisting',value,{params:new HttpParams().set('listing_id',product_id)})
  }

  getUserProduct(){
    let type= this.auth.currentUser().module
    return this.http.get<any>('https://qmk21872.pythonanywhere.com/'+type+'/donorlistings');
  }

  getAll(){
    let type= this.auth.currentUser().module
    return this.http.get<any>('https://qmk21872.pythonanywhere.com/'+type+'/listing',{params:new HttpParams().set('send_all',"0")});
  }

  getAllWithZero(){
    let type= this.auth.currentUser().module
    return this.http.get('https://qmk21872.pythonanywhere.com/'+type+'/listing',{params:new HttpParams().set('send_all',"1")});
  }

  addProduct(value){
   let type= this.auth.currentUser().module
    return this.http.post<any>('https://qmk21872.pythonanywhere.com/'+type+'/listing',value);
  }

  getSingleProduct(product_id){
    let type= this.auth.currentUser().module
    return this.http.get('https://qmk21872.pythonanywhere.com/'+type+'/singlelisting',{params:new HttpParams().set('listing_id',product_id),responseType:'text'});
  }
}
