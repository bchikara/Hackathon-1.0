import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/Service/admin.service';
import { AuthenticateService } from 'src/app/Service/authentication.service';
import { Title } from '@angular/platform-browser';
import { NavigationStart, NavigationEnd, NavigationCancel, Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  constructor(private admin:AdminService,private auth:AuthenticateService,
    private titleService:Title,private router:Router,private progressService:NgProgress) { }

  ngOnInit() {
    this.titleService.setTitle('New Module')
  }
   
  onSubmit(value:NgForm){
    this.progressService.start();
    this.progressService.set(0.1);
    this.progressService.inc(0.2);
    this.admin.module(value).subscribe(res=>{console.log(res),console.log(this.auth.currentUser())
    this.router.navigate(['/admin/dashboard'])
    this.progressService.done();
    },error=>{
      this.progressService.done();
    })
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
