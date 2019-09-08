import { Http } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { AuthenticateService } from "./authentication.service";
@Injectable()
export class HttpService {
    constructor(private http: HttpClient,private auth:AuthenticateService) { }
   
  
    changeProfile(value){
        let type= this.auth.currentUser().module
   return this.http.post('https://qmk21872.pythonanywhere.com/'+type+'/user/update',value)
    }
    getProfile(){
        let type= this.auth.currentUser().module
     return this.http.get('https://qmk21872.pythonanywhere.com/'+type+'/user')
    }
}