import { Component, OnInit } from '@angular/core';

import { AuthenticateService } from './services/authenticate.service';
import { UserService } from './services/user.service';
import { MailService } from './services/mail.service';

import { MailModel } from './models/mail.model';
import { UserModel } from './models/user.model';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public isLoggedIn: boolean;

  public users;
  public inbox; //Как правильно указать тип Observable<MailModel[]>

  constructor(
    private authenticateService: AuthenticateService,
    private userService: UserService,
    private mailService: MailService,
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authenticateService.isAuthenticated();
    this.userService.getAll().subscribe(users => this.users = users);
    this.mailService.getAll().subscribe(inbox => this.inbox = inbox);
  }

  logIn() {
    this.isLoggedIn = this.authenticateService.logIn();
  }

  logOut() {
    this.isLoggedIn = this.authenticateService.logOut();
  }
}
