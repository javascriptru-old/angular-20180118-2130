import { Component } from '@angular/core';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Hello,';
  public user = {
    name: 'John'
  };
  public myClass = 'red';
  public myColor = 'red';

  constructor() {
    setTimeout(_ => {
      this.title = 'Hi, ';
      this.myClass = 'green';
    }, 2000);
  }

  random() {
    return Math.random();
  }

  changeColor(color: string) {
     this.myColor = color;
  }

}
