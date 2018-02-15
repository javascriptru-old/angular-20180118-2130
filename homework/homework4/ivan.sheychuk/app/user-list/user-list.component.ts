import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../types';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: IUser[];

  constructor(
    private _userServise: UserService
  ) { }

  ngOnInit() {
    this.users = this._userServise.getUserList();
  }

}
