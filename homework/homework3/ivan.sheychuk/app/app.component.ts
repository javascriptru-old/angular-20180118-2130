import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public showMails: boolean;

  constructor(
    private _authService: AuthorizationService
  ) {}

  ngOnInit() {
    this.showMails = this._authService.getStatus();
  }

  switchAuth() {
    this._authService.switchAuth();
    this.showMails = this._authService.getStatus();
    console.log('click', this._authService.getStatus());
  }
}
