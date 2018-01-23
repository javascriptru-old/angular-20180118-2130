import { Component } from '@angular/core';

interface IUser {
  name: string;
  surname: string;
  position: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: IUser[] = [
    {
      name: 'Ivan',
      surname: 'Petrov',
      position: 'FE developer',
    },
    {
      name: 'Sergey',
      surname: 'Ivanov',
      position: 'BE developer',
    },
    {
      name: 'Maria',
      surname: 'Sidorova',
      position: 'QA Engineer',
    },
  ];
}
