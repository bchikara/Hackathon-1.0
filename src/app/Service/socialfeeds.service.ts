import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocialfeedsService {

  constructor(private http:HttpClient) { }

  add(value){
    return this.http.post("https://qmk21872.pythonanywhere.com/event",value)
  }
  getAll(){
    return this.http.get("https://qmk21872.pythonanywhere.com/event")
  }
}
