import { MailService } from './../services/mail.service';
import { HttpClient } from '@angular/common/http';
import { MailItem } from './interfaces/mail-item.inteface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss']
})
export class MailBoxComponent implements OnInit {
  public letters: Array<MailItem>;

  constructor(
    private _mailService: MailService,
    private _authService: AuthService) { }

  public ngOnInit(): void {
    this._mailService.getLetters().subscribe(letters => this.letters = letters);
  }

  public login() {
    this._authService.login();
  }

  public logout() {
    this._authService.logout();
  }

  public isAuthorize(): boolean {
    return this._authService.isAuthorize();
  }

}
