import { Component, Input } from '@angular/core';
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  @Input() user: UserModel;
  @Input() color = this.randomColor();

  constructor() { }

  randomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  lvlUp() {
    if (this.user) {
      this.user.level++;
    }
    this.color = this.randomColor();
  }
}
