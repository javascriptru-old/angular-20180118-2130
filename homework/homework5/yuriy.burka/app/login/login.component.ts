import { Component } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  login(userName: string) {
    if (this.auth.login(userName)) {
      this.router.navigateByUrl('box-list');
    }
  }

}
