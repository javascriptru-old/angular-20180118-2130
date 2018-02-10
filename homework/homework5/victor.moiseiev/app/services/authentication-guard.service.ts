import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthenticationGuardService implements CanActivate {

  // URL для перенаправления после авторизации
  public redirectionUrl: string;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.authenticationService.isLoggedIn.do(isLoggedIn => {
      if (!isLoggedIn) {
        this.router.navigate(["/login"]);
        this.redirectionUrl = state.url;
      }
    });

  }

}
