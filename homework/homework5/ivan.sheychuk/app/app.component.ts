import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isAuth;

  constructor(
    private _authServise: AuthService,
    private _router: Router
  ) {
    this.isAuth = this._authServise.isAuth();
  }

  public logout() {
    this._authServise.logout();
    this._router.navigate(['login']);
  }
}
