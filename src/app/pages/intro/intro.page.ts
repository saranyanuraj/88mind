import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router: Router,private backlocation:Location) { }

  ngOnInit() {
  }
  next(){
    this.router.navigateByUrl('/login');
  }
  back(){
     this.backlocation.back();
  }

}
