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
  constructor() { }

  ngOnInit() {
  }

  AddItem(chkfrom:string):void{
    this.listItems.push({
      type : chkfrom,
      name : this.name,
      content : this.content
    });


      // if(chkfrom=="server"){
      //   this.listItems.push("Server : "+this.name+this.content);
      // }else{
      //   this.listItems.push("Print Server : "+this.name+this.content);
      // }
  }

}
