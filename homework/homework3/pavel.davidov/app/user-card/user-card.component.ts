import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;
  @Output() clearUserEve: EventEmitter<User> = new EventEmitter<User>();
  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  clearUser() {
    this.clearUserEve.emit(this.user);
  }

  randomColor(card) {
    card.style.backgroundColor = this.getRandomColor();
  }

}
