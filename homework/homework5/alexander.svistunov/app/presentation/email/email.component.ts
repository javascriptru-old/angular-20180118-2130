import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  private _userEmail = this._authService.userEmail;

  ngOnInit() {
  }

  logOut() {
    const confirmationLogOut = confirm('Вы точно хотите выйти?');
    if(confirmationLogOut) {
      this._authService.logOut();
      this._router.navigateByUrl('/');
    }
  }
}
