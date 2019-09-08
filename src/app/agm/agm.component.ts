import { Component, OnInit } from '@angular/core';
import { Marker } from '@agm/core/services/google-maps-types';
import { ProductsService } from 'src/app/Service/products.service';
import { SocialfeedsService } from '../Service/socialfeeds.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.css']
})
export class AgmComponent implements OnInit {

  constructor(private product:ProductsService,private social:SocialfeedsService,private titleservice:Title) { }
  zoom: number = 11;
  
  // initial center position for the map
  lat: number = 30.3165;
  lng: number = 78.0322;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
 
  
  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  labelOptions = {
    color: 'green',
    fontFamily: '',
    fontSize: '14px',
    fontWeight: 'bold',
    text: 'Some Text',
    backgroundcolor:'green'
    }

  markers ;
  markers2;

  ngOnInit() {
   this.titleservice.setTitle('Map')
   console.log()
   this.product.getAll().subscribe(res=>{
     this.markers=res['listing']
     console.log((this.markers))
   })
   this.social.getAll().subscribe(res=>{
     this.markers2=res['events'];
     console.log(this.markers2)
   })
  }

}
