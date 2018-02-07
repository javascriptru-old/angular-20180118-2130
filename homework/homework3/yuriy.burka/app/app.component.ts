import { Component, OnInit } from '@angular/core';
import { UserModel } from './_model/user.model';
import { AuthService } from './_service/auth.service';
import { UserService } from './_service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  users: UserModel[] = [];

  constructor(
    private auth: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getAll()
    .subscribe((result) => {
      this.users = result;
    });
  }

  currentUser(): UserModel {
    return this.auth.user;
  }

  logout() {
    this.auth.logout();
  }

  login(user: string) {
    const selected = this.users.find((value) => {
      return value.login === user;
    });
    if (selected) {
      this.auth.login(selected);
    }
  }
}
