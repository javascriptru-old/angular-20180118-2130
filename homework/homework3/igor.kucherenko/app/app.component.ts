import { Component } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _authorizationService: AuthorizationService) {
  }

  get isAuthorized() {
    return this._authorizationService.isAuthorized();
  }

}
