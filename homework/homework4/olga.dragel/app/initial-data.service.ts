import { Injectable } from '@angular/core';
import {User} from './shared/user';

@Injectable()
export class InitialDataService {
  private users = [
    {
      firstName: 'Hans',
      lastName: 'Down',
      dateOfBirth: new Date('01-02-1985'),
      sex: 1,
      email: 'hans.down@mail.ru',

    },
    {
      firstName: 'Desmond',
      lastName: 'Mary',
      dateOfBirth: new Date('01-02-1992'),
      sex: 0,
      email: 'desmond.mary@gmail.com',
    }];

  constructor() { }

  public getInitialUsers(): User[] {
    return this.users;
  }


}
