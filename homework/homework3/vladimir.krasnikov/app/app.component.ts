import { Component } from '@angular/core';
import { LogService } from './log.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public showMailList = false;
  public showUserList = true;
  public bttnText = 'Show Mail List';

  // Switch Mail List/User List view
  public toggleView() {
    if (this.showMailList) {
      this.showMailList = false;
      this.showUserList = true;
      this. bttnText = 'Show Mail List';
    }  else {
      this.showMailList = true;
      this.showUserList = false;
      this. bttnText = 'Show User List';
    }
  }

  constructor(private logService: LogService, public loginService: LoginService) {}

}
