import { Component, OnInit } from '@angular/core';
import {NavPills} from './data';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
