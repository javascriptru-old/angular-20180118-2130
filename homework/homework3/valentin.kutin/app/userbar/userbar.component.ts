import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-userbar',
  templateUrl: './userbar.component.html',
  styleUrls: ['./userbar.component.scss']
})
export class UserbarComponent implements OnInit {
  public authorizationStatus: boolean;

  constructor(
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit() {
    this.authorizationService.getStatus().subscribe(result => {
      this.authorizationStatus = result;
    });
  }

  public logIn(): void {
    this.authorizationService.logIn();
  }

  public logOut(): void {
    this.authorizationService.logOut();
  }
}
