import { Component } from '@angular/core';
import { hero } from './hero';

@Component({
  selector: 'app-root',
  // template: `
  //   <h1>{{title}}</h1>
  //   <h2>My favorite hero is: {{myHero}}</h2>
  //   `

   templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title : string;
  //heros = ['Ghandhi','Nehru','Ajaad'];
  heroImageUrl:string = "../assets/images/nature1.jpg";
  heros = [
      new hero(1,'Ghandhi'),
      new hero(2,'Nehru'),
      new hero(3,'Ajaad'),
      new hero(3,'Sekhar')
  ];
   title = 'My Heros';
  myHero = this.heros[0];
  // constructor(){
  //     this.title = 'My Heros';
  //     this.myHero = this.heros[0];
  // }
}
