import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticateService } from 'src/app/Service/authentication.service';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-donor',
  templateUrl: './login-donor.component.html',
  styleUrls: ['./login-donor.component.css']
})
export class LoginDonorComponent implements OnInit, AfterContentInit {
  id;
  invalidLogin: boolean;
  message = "Login"
  type = "donor"
  constructor(private authService: AuthenticateService, private router: Router,
    private route: ActivatedRoute, private progressService: NgProgress
    , private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Donor Login')
    this.id = this.route.snapshot.paramMap.get('id')
  }

  loginb() {
    this.router.navigate(["user/" + this.id + "/login"])
  }

  logind() {
    this.router.navigate(["user/" + this.id + "/login-donor"])
  }

  registerd() {
    this.router.navigate(["user/" + this.id + "/register-donor"])
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

  change() {
    this.invalidLogin = false;
  }

  onSubmit(form: NgForm) {
    this.progressService.start();
    this.progressService.set(0.1);
    this.progressService.inc(0.2);
    console.log(form.value)
    this.authService.login(form.value, this.id).subscribe(
      response => {
        console.log(response)
        this.progressService.done();
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')
        if (response === null) {
          this.invalidLogin = true;
          return;
        } else {
          sessionStorage.setItem('token', response.token)//(key,value)
          this.router.navigate([returnUrl || '/donor/addProduct'])
        }
      },
      error => {
        this.progressService.done();
        console.log(error)
        this.invalidLogin = true;
      }
    )
  }




}
