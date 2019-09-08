import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticateService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NgoVerificationService {

  constructor(private http: HttpClient, private auth: AuthenticateService) { }

  sendNgoData(value) {
    let type = this.auth.currentUser().module
    return this.http.post("https://qmk21872.pythonanywhere.com/" + type + "/verify", value)
  }

  sendData(product_id) {
    return this.http.get("https://qmk21872.pythonanywhere.com/admin/verify",
      { params: new HttpParams().set('beneficiary_id', product_id) }
    )
  }


  UpdateStatus(value) {
    return this.http.post("https://qmk21872.pythonanywhere.com/mark_verify", value)}

}
