import { Injectable } from '@angular/core';
import {User} from './shared/models/User';
import {MailBox} from './shared/models/MailBox';
import {Letter} from './shared/models/letter';

@Injectable()
export class InitialDataService {
  private users = [
    {
      fullName: 'Hans Down',
      email: 'hans.down@mail.ru',
      avatarUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg'
    },
    {
      fullName: 'Wisteria Widget',
      email: 'wisteria.widget@mail.ru',
      avatarUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg'
    },
    {
      fullName: 'Desmond Eagle',
      email: 'desmond.eagle@mail.ru',
      avatarUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg'
    }];

  private mailBox: MailBox = {title: 'olga.dragel@mail.ru', _id: null};

  private letters: Letter[] = [
    {
      to: 'friend1@gmail.com',
      subject: 'Hello',
      body: 'How are you',
      mailbox: null
    },
    {
      to: 'friend2@gmail.com',
      subject: 'SPAM',
      body: 'Hello world',
      mailbox: null
    }

  ];


  constructor() { }

  public getInitialUsers(): User[] {
    return this.users;
  }

  public getMailBox(): MailBox {
    return this.mailBox;
  }

  public getInitialLetters(): Letter[] {
    return this.letters;
  }


}
