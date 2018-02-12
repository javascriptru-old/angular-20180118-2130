import { Injectable } from '@angular/core';

export interface IContact {
  name: string;
  surname: string;
  sex: string;
  age: Date;
  email: string;
}

@Injectable()
export class ContactsService {
  private _contacts: IContact[] = [];

  public getAllContacts(): IContact[] {
    return this._contacts;
  }

  public addContact(contact: IContact): void {
    this._contacts.push(contact);
  }
}
