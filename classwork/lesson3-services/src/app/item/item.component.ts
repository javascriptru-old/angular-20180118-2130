import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from '../user.service';
import { HttpClient } from 'selenium-webdriver/http';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {

  users;

  constructor(private _userService: UserService) {
     // this._user = new User();
  }

  ngOnInit() {
    this._userService.dosomething();

    this._userService.getUsers().subscribe(users => {
       this.users = users;
    });
  }

}

