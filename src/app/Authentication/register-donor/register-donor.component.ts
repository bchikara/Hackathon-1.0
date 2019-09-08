import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AuthenticateService } from 'src/app/Service/authentication.service';
import { NgForm } from '@angular/forms';
import { Router, NavigationEnd, NavigationCancel, NavigationStart, ActivatedRoute } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register-donor',
  templateUrl: './register-donor.component.html',
  styleUrls: ['./register-donor.component.css']
})
export class RegisterDonorComponent implements OnInit, AfterContentInit {
  disable=false;
  type = "donor";
  country = "India";
  id
  constructor(private authService: AuthenticateService, private router: Router,private route: ActivatedRoute,
     private progressService: NgProgress,private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle('Donor Register');
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

  onSubmit(form: NgForm) {
    this.disable=true;
    console.log(form.value);
    let value={form:form.value,module:this.id}
    console.log(value)
    this.progressService.start();
    this.progressService.set(0.1);
    this.progressService.inc(0.2);
    this.authService.registerdonor(value,this.id).subscribe(
      response => {
        console.log(response)
        this.progressService.done();
        this.router.navigate(['/user/'+this.id+'/login-donor']);
        this.disable=false;
      },
      error => {
        this.disable=false;
        console.log(error);
        this.progressService.done();
      }
    )
  }

}
