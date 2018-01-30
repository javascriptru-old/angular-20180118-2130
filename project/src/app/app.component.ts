import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UsersService } from './users.service';
import { LettersService } from './letters.service';
import { Letter } from './letter';

const USER_STORE = [
  new User('Лев Николаевич Толстой', 'tolstoy@gmail.com'),
  new User('Александр Сергеевич Пушкин', 'pushkin@gmail.com'),
  new User('Илья Сергеевич Глазунов', 'glasunov@gmail.com')
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public users: User[];
  public letters: Letter[];

  constructor(
    private userService: UsersService,
    private letterService: LettersService
  ) {

  }

  ngOnInit() {
    // get mailbox
    this.letterService.save(new Letter({ ObjectId: 88, subject: 'test', to: 'test@test.ru', body: 'text' })).subscribe();
  }

  getUsers() {
    this.userService.fetch().subscribe(users => this.users = users);
  }

  getLetters() {
    this.letterService.fetch().subscribe(letters => this.letters = letters);
  }

}
