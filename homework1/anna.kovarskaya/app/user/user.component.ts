import { Component, OnInit, Input } from '@angular/core';
import {userType} from "./usertype.type"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() public user: userType;
  constructor() { }

  ngOnInit() {
  }
  public backColor: string = '#141414';
  public changeColor(color: string):void {
    this.backColor = color;
  }
  public randomColor():string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

}
