import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']
})
export class ServerEditComponent implements OnInit {

  name:any;
  content:any;
  @Output()  serverAdded = new EventEmitter<{type: String, name:String, content:String}>();
  constructor() { }

  ngOnInit() {
  }

  addItem(type:String){
    this.serverAdded.emit({
      type: 'Server',
      name: this.name,
      content: this.content
    })
  }

}
