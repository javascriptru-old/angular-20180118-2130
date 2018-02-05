import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isAuthenticated: boolean;
  public userName: string;

  constructor(private loginService: LoginService) { }

  public signIn() {
    this.loginService.signIn();
    this.isAuthenticated = this.loginService.isAuthenticated;
    this.userName = this.loginService.userName;
  }

  public signOut() {
    this.loginService.signOut();
    this.isAuthenticated = this.loginService.isAuthenticated;
    this.userName = this.loginService.userName;
  }

  ngOnInit() {
  }

}
