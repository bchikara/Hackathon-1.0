import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"
import { AdminService } from 'src/app/Service/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {
  modules;

  constructor(private admin:AdminService,private router:Router) { }

  ngOnInit() {
   this.admin.getModule().subscribe(res=>{
     console.log(res),
     this.modules=res['modules'],console.log(this.modules)
   })
  }

  feed(value){
    console.log(value)
    this.router.navigate(["/user/"+value.name+"/login"])
  }

  social(){
    this.router.navigate(["/social/feeds"])
  }
  

 
   
}
