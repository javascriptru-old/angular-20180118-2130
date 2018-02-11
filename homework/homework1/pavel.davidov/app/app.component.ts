import { Component } from '@angular/core';
import { User } from './user';

const USER_STORE = [
  new User('Лев', 'Николаевич', 'Толстой', 'писатель'),
  new User('Александр', 'Сергеевич', 'Пушкин', 'поэт'),
  new User('Илья', 'Сергеевич', 'Глазунов', 'художник')
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public users: User[];

  constructor() {
    this.users = USER_STORE;
  }

}
