import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public title = 'User Profiles';

  public users: User[];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getAll().subscribe(users => this.users = users as User[]);
  }

}
