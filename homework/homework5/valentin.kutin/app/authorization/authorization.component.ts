import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
  }

  public logIn(): void {
    this.userService.logIn();
  }

}
