///<reference path="../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {MailService} from './mail.service';
import {User} from './shared/models/User';
import {AuthorizationService} from './authorization.service';
import {MailBox} from './shared/models/MailBox';
import {MailboxService} from './mailbox.service';
import {Letter} from './shared/models/letter';
import {mergeMap} from 'rxjs/operators';
import {InitialDataService} from './initial-data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[] = [];
  letters: Letter[] = [];
  mailbox: MailBox;
  @Input() public titleMailBox: string;
  @Input() public isAuth: boolean;

  constructor(private _userService: UserService,
              private _mailBoxService: MailboxService,
              private _mailService: MailService,
              private _authorizationService: AuthorizationService,
              private _initialDataService: InitialDataService) {}


   ngOnInit() {
     this.isAuth = false;

     // add initial data
     this.addInitialUsers();
     this.addLetters();
    }


  private addInitialUsers() {
    const users = this._initialDataService.getInitialUsers();

    this._userService.deleteAllUsers().pipe(
      mergeMap(resultDelUsers => this._userService.addAllUsers(users).pipe(
        mergeMap((resultAdding) => this._userService.getAll())))).subscribe(
      receivedUsers => {
        console.log('success' + receivedUsers);
       this.users = receivedUsers;

      },
      error => {
        console.log('error ' + error);
      });

  }

  private addLetters() {
   const letters = this._initialDataService.getInitialLetters();
   this.mailbox = this._initialDataService.getMailBox();


    this._mailService.deleteAllLetters().pipe(
      mergeMap(result => this._mailBoxService.deletAllMailBoxes().pipe(
        mergeMap(deleted => this._mailBoxService.addMailBox(this.mailbox).pipe(
          mergeMap (addedMailBox => this._mailService.addLetters(letters, <MailBox>addedMailBox).pipe(
            mergeMap ( (addedLetters) => this._mailService.getAllLetters())))))))).subscribe(
      receivedLetters => {
        console.log('success for Letters' + receivedLetters);
        this.letters = receivedLetters;

      },
      error => {
        console.log('error ' + error);
      });
  }

  public logIn() {
    this.isAuth = this._authorizationService.logIn();
 }

  public logOut() {
    this.isAuth = this._authorizationService.logOut();
  }


}
