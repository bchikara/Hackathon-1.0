import { Component, OnInit } from '@angular/core';
import { NavigationStart, NavigationEnd, NavigationCancel, Router, ActivatedRoute } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';
import { NgForm } from '@angular/forms';
import { AuthenticateService } from 'src/app/Service/authentication.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin=false;
  constructor(private router:Router,private route:ActivatedRoute,
    private progressService:NgProgress,private titleService:Title,
    private auth:AuthenticateService) { }

  ngOnInit() {
    this.titleService.setTitle('Admin Login')
  }
  onSubmit(value: NgForm) {
    console.log(value);
    this.progressService.start();
    this.progressService.set(0.1);
    this.progressService.inc(0.2);
    this.auth.loginAdmin(value).subscribe(
      response => {
        console.log(response)
        this.progressService.inc(0.3);
        this.progressService.done();
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')
        if (response === null) {
          this.invalidLogin = true;
          return;
        } else  {
          sessionStorage.setItem('token', response.token)
          this.router.navigate([returnUrl || '/admin/dashboard'])
        }
      },
      error => {
        this.invalidLogin=true;
    this.progressService.inc(0.3);
        this.progressService.done();
        console.log(error)
      }
    )
  }
  change(){
    this.invalidLogin=false;
  }
  ngAfterContentInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.progressService.start();
          this.progressService.set(0.1);
          this.progressService.inc(0.2);
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.progressService.done();
        }
      });
  }

}
