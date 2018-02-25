import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UsersService } from './users.service';
import { LettersService } from './letters.service';
import { Letter, Mailbox } from './letter';
import { AuthoriseService } from './authorise.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public isAuthorise = false;
  public users: User[];
  public letters: Letter[];

  constructor(
    private authoService: AuthoriseService,
    private userService: UsersService,
    private letterService: LettersService
  ) { }

  ngOnInit() {

    this.isAuthorise = this.authoService.authorise;

    // get mailbox
    // this.letterService.setMailbox().subscribe((box: Mailbox) => {
    // this.letterService
    //   .save(new Letter({ mailbox: '5a71776bee8f7fa64a77fb7f', subject: 'test', to: 'test@test.ru', body: 'text' }))
    //   .subscribe();
    // });
    // this.userService.save(new User('Angela Merkel', 'a.merkel@mail.com')).subscribe();
  }

  getUsers() {
    this.userService.fetch().subscribe(users => this.users = users);
  }

  getLetters() {
    this.letterService.fetch().subscribe(letters => this.letters = letters);
  }

  clearUser(user) {
    this.userService.clear(user).subscribe(_ => this.users = this.users.filter(u => u !== user));
  }

  login() {
    this.isAuthorise = !this.isAuthorise;
    this.authoService.authorise = this.isAuthorise;
  }
}
