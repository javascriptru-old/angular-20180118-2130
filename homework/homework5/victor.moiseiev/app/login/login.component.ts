import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { Router } from "@angular/router";
import { AuthenticationGuardService } from "../services/authentication-guard.service";


@Component({
  moduleId: module.id,
  selector: "app-login",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
  public isLoggedIn: boolean;
  constructor(private readonly authenticationService: AuthenticationService,
    private readonly router: Router,
    private readonly authenticationGuardService: AuthenticationGuardService) { }

  public ngOnInit() {
    this.authenticationService.isLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

  public login(login: string, password: string) {
    this.authenticationService.login(login, password);
    if (this.authenticationGuardService.redirectionUrl) {
      this.router.navigate([this.authenticationGuardService.redirectionUrl]);
    }
  }

  public logout() {
    this.authenticationService.logout();
  }
}
