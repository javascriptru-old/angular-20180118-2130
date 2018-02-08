import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { user } from './model/user';
import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  users: Array<user> = new Array<user>();

  constructor(private _userService: UserService) {
    _userService.getUsers().subscribe(data => {
      this.users = data as Array<user>;
    },
  error => {
    console.log(error);
  });
  
  }
}
