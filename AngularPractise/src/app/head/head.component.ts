import { Component, OnInit } from '@angular/core';
import {NavPills} from './data';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  navPills : any;
  pageName: String = "home";
  constructor() { 
    this.navPills = NavPills;
    console.log(this.navPills);
  }

  ngOnInit() {
  }
  loadPage(pageName:any){
    this.pageName = pageName.toLowerCase();
  }

}
