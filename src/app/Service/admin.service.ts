import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  
  module(value){
   return this.http.post("https://qmk21872.pythonanywhere.com/modules",value);
  }

  getModule(){
    return this.http.get("https://qmk21872.pythonanywhere.com/modules")
  }

  pending(){
    return this.http.get("https://qmk21872.pythonanywhere.com/admin/show_all_pending")
  }

}
