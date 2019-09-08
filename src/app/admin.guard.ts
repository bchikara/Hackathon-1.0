import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from './Service/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(private authService: AuthenticateService, private router: Router) { }

    canActivate(route, state: RouterStateSnapshot): boolean {
        if(this.authService.loggedin() && this.authService.currentUser().type==='admin'){
            return true;
          }else{
            this.authService.logout();
            this.router.navigate(['/admin/login'],{queryParams:{returnUrl:state.url}})
            return false
          }
    }
}
