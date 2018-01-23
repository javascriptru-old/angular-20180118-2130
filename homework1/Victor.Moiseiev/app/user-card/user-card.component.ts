import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../Model/user';

@Component({
  moduleId: module.id,
  selector: 'app-user-card',
  templateUrl: 'user-card.component.html'
})
export class UserCardComponent implements OnInit {

  public allColors = ['white', 'yellow', 'green', 'blue', 'grey'];
  public color = 'red';

  @Input() public user: User;
  constructor() { }

  ngOnInit() {
  }

  changeColor() {
    this.color = this.allColors[Math.floor(Math.random() * 5)];
  }
}
