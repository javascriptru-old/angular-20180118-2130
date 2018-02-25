import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../user';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input() cardUser: User;
  @Output() deleteUser: EventEmitter<string> = new EventEmitter();

  public bkgColor: string;

  constructor() {
    this.bkgColor = '#FFF';
  }

  public setUser(user: User) {
    this.cardUser = user;
  }

  ngOnInit() {
  }

  deleteCurrentUser() {
    this.deleteUser.emit(this.cardUser._id);
  }


}
