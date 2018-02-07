import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public users: User[] = [];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.userService.getUsers()
      .subscribe(result => {
        this.users = result;
    });
  }

  private addUser(user): void {
    this.users.push(user);
    console.log(this.users, user);
  }
}
