import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AutorizationService } from '../autorization.service';
import { Router } from '@angular/router';

interface User {
  fullName: string;
  email: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges {
  public users: User[];
  public account: string;

  constructor(private _userService: UserService, public autorizationService: AutorizationService, private _router: Router) {
  }

  ngOnInit() {
    this._getUsers();
  }

  ngOnChanges() {
    this._getUsers();
  }

  private _getUsers() {
    const usersObserv = this._userService.getUsers();
    usersObserv.subscribe(data => {
      this.users = data;
      if (this.users[0]) {
        this.account = this.users[0].email;
      }
      usersObserv.unsubscribe();
    });
  }

  logOut() {
    this.autorizationService.isAutorized = false;
    this._router.navigate(['']);
  }

  showLetters(email) {
    this.account = email;
  }
}
