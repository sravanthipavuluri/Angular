import { Component, OnInit } from '@angular/core';
import { serverlist } from'./serverlist';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  listItems:any=[];
  name:string;
  content:string;
  constructor() { 
    this.listItems = [
      {
        type: "Server",
        name : "Dummy server",
        content : "http://localhost:4200"
      }
    ]
  }

  ngOnInit() {
  }

  addServer(event:any):void{
    console.log(event)
    this.listItems.push(event);
  }

}
