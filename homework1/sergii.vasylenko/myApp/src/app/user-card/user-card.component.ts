import { Component, OnInit, Input  } from '@angular/core';
import {User} from './user'
import { AppComponent } from './../app.component'

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() public user: User;
  public myColor: string = 'black';
  constructor() { }

  ngOnInit() {
  }

  changeColor() {
     this.myColor = this.generateRandomColor();
  }

  generateRandomColor() : string
  {
    return "rgb(" + Math.floor(Math.random() * 255) + ","
                  + Math.floor(Math.random() * 255) + ","
                  + Math.floor(Math.random() * 255) + ")";
  } 
}
