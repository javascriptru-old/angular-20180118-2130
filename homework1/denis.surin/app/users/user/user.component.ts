import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() public user: any[];

  public titleColor : string = "\fff";

  public changeTitleColor() {
    let red = Math.floor(Math.random() * 255),
    green = Math.floor(Math.random() * 255),
    blue = Math.floor(Math.random() * 255);

    this.titleColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  } 

  constructor() { }

  ngOnInit() {
  }

}
