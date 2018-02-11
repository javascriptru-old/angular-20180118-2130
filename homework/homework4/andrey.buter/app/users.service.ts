import { Injectable } from '@angular/core';

interface IUser {
  firstName: string;
  lastName: string;
  sex: string;
  birthDate: string;
  emails: string;
}

@Injectable()
export class UsersService {
  public users: IUser[] = [];
  constructor() { }

  public getUsers(): IUser[] {
    return this.users;
  }

  public addUser( user: IUser ): void {
    this.users.push( user );
  }
}
