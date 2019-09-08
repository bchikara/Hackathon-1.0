import { Component, OnInit } from '@angular/core';
import { SocialfeedsService } from '../Service/socialfeeds.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-socialfeeds',
  templateUrl: './socialfeeds.component.html',
  styleUrls: ['./socialfeeds.component.css']
})
export class SocialfeedsComponent implements OnInit {

  constructor(private social:SocialfeedsService,private titleService:Title) { }
  feeds;
  ngOnInit() {
    this.titleService.setTitle('Social Feed')
    this.social.getAll().subscribe(res=>{
      console.log(res);

      this.feeds=res['events']
    })
  }

}
