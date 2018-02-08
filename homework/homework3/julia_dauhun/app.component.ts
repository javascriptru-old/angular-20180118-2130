import { Component } from '@angular/core';
import { UserService } from './user.service';
import { AutorizationService } from './autorization.service';

interface User {
  fullName: string;
  email: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public users: User[];

  constructor(private _userService: UserService, public autorizationService: AutorizationService) {
    this._userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
