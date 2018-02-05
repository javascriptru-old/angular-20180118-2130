import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-authorization-block',
  templateUrl: './authorization-block.component.html',
  styleUrls: ['./authorization-block.component.scss']
})
export class AuthorizationBlockComponent {

  constructor(private _authorizationService: AuthorizationService) {
  }

  get isAuthorized() {
    return this._authorizationService.isAuthorized();
  }

  public toggleAuth(): void {
    this._authorizationService.isAuthorized()
      ? this._authorizationService.logout()
      : this._authorizationService.login();
  }
}
