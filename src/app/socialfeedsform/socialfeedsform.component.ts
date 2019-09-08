import { Component, OnInit } from '@angular/core';
import { SocialfeedsService } from '../Service/socialfeeds.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-socialfeedsform',
  templateUrl: './socialfeedsform.component.html',
  styleUrls: ['./socialfeedsform.component.css']
})
export class SocialfeedsformComponent implements OnInit {
  lat: number;
  lng: number;

  constructor(private social: SocialfeedsService,
     private router: Router,private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle('Add Social Feed')
  }

  onSave(values) {
    console.log(values)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude,
        this.lng = position.coords.longitude
        console.log(position.coords.latitude + " " + position.coords.longitude)

        let value = {
          product: values,
          lat: this.lat,
          lng: this.lng,
          time_stamp: new Date().getTime()
        }
        console.log(value)
        this.social.add(value).subscribe(res => {
          console.log(res)
          this.router.navigate(['/social/feeds'])
        })

      })
    }
  }

  cancel() {
    this.router.navigate(['/home'])
  }

}
