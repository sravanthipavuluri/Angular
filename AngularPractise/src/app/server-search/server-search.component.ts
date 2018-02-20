import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-server-search',
  templateUrl: './server-search.component.html',
  styleUrls: ['./server-search.component.css']
})
export class ServerSearchComponent implements OnInit {

  @Input() element: any;
  constructor() { }

  ngOnInit() {
  }

}
