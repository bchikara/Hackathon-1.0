import { Component, OnInit } from '@angular/core';
import { ActivationEnd, ActivatedRoute, Router } from '@angular/router';
import { NgoVerificationService } from 'src/app/Service/ngo-verification.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css']
})
export class NgoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
    private ngo: NgoVerificationService, private titleService: Title) { }

  id;
  title;
  ngOnInit() {
    this.titleService.setTitle('Verification')
    this.id = this.route.snapshot.paramMap.get('id');
    this.ngo.sendData(this.id).subscribe(res => {
      console.log(res);
      this.title = res['user']
    })
  }

  accept() {
    let value = {
      status: 'approved',
      beneficiary_id: this.id
    }
    this.ngo.UpdateStatus(value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/admin/dashboard'])
    })
  }

  reject() {
    let value = {
      status: 'rejected',
      beneficiary_id: this.id
    }
    this.ngo.UpdateStatus(value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/admin/dashboard'])
    })
  }

  onSubmit() {

  }

}
