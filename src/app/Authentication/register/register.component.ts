import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../Service/http.service';
import { AuthenticateService } from '../../Service/authentication.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, ActivatedRoute } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterContentInit {

  registerUserData: any = {};
  type = "beneficiary";
  message = "Sign Up";
  country = "India"
  disable = false;
  id;
  constructor(private httpService: HttpService, private authService: AuthenticateService,
    private router: Router, private progressService: NgProgress, private titleService: Title,private route:ActivatedRoute) { }

  ngOnInit() {
    this.titleService.setTitle('Beneficiary Login');
    this.id = this.route.snapshot.paramMap.get('id')
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

  loginb(){
    this.router.navigate(["user/"+this.id+"/register-beneficiary"])
  }
  
  logind(){
    this.router.navigate(["user/"+this.id+"/register-donor"])
  }

  response1: any;
  onSubmit(form: NgForm) {
    this.disable = true;
    this.progressService.start();

    this.progressService.set(0.1);
    this.progressService.inc(0.2);
    console.log(form.value);
   let value={form:form.value,module:this.id}
   console.log(value)
    this.authService.register(value,this.id).subscribe(
      response => {
        console.log(response)
        this.progressService.done();
        this.router.navigate(['/user/'+this.id+'/login']);
        this.disable = false;
      }, error => {
        this.disable = false;
        this.progressService.done();
      }
    )
  }
}
