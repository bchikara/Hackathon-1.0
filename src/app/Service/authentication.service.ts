import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private _registerUrl = "https://qmk21872.pythonanywhere.com/beneficiary"
  private _register2Url = "https://qmk21872.pythonanywhere.com/donor"
  private _loginUrl = "https://qmk21872.pythonanywhere.com/login"
  constructor(private http: HttpClient, private router: Router) { }

  register(user,id) {
    return this.http.post<any>("https://qmk21872.pythonanywhere.com/"+id+"/beneficiary", user)
  }

  registerdonor(user,id) {
    return this.http.post<any>("https://qmk21872.pythonanywhere.com/"+id+"/donor", user)
  }

  loginAdmin(user) {
    return this.http.post<any>("https://qmk21872.pythonanywhere.com/admin/login", user)
  }

  login(user,id) {
    return this.http.post<any>("https://qmk21872.pythonanywhere.com/"+id+"/login", user)
  }

  loggedin() {
    return !!sessionStorage.getItem('token')
  }

  getToken() {
    return sessionStorage.getItem('token')
  }

  logout() {
    sessionStorage.removeItem('token')
    this.router.navigate(['/'])
  }
  
  currentUser() {
    let token = sessionStorage.getItem('token')
    let jwthelper = new JwtHelperService();
    return jwthelper.decodeToken(token)
  }

}
