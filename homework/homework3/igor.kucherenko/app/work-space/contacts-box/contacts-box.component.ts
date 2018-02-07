import { Component, OnInit } from '@angular/core';
import { IUser, UserService } from '../../services/user.service';

@Component({
  selector: 'app-contacts-box',
  templateUrl: './contacts-box.component.html',
  styleUrls: ['./contacts-box.component.scss']
})
export class ContactsBoxComponent implements OnInit {
  public users: IUser[];

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.users = this._userService.getAllUsers();
  }
}
