import { Component, OnInit } from '@angular/core';
import { NavigationStart, NavigationEnd, NavigationCancel, Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  constructor(private router:Router,private progressService:NgProgress) { }

  ngOnInit() {
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
