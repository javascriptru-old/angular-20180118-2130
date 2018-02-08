import { Injectable } from '@angular/core';

import { Letter } from './letter';
import { User } from './user';

import { LogService } from './log.service';

const letterBody: string[] = [
  'Praesent imperdiet, nibh nec pretium rhoncus, nibh odio elementum risus, nec euismod felis nulla at justo.',
  'Aliquam cursus consectetur dui, non sollicitudin nibh. Nam quis rutrum tortor. Proin blandit pellentesque iaculis.',
  'Vivamus felis lectus, pharetra at facilisis eget, eleifend eu risus. Donec pulvinar erat id nisi bibendum, sit ' +
  'amet efficitur tortor scelerisque.',
  'Ut congue enim lobortis dolor congue mollis. Cras faucibus quam a eros mollis facilisis.',
  'Praesent consequat purus sit amet nunc elementum, non pulvinar elit tincidunt. Ut iaculis posuere malesuada.',
  'Vestibulum ullamcorper elit id ante accumsan, a consequat mauris vulputate. Vivamus gravida elit eget sollicitudin euismod.',
];

const letterSubject: string[] = [
  'Praesent ultricies',
  'Aliquam condimentum ante massa',
  'Praesent scelerisque viverra',
  'Mauris',
  'Sed rhoncus lobortis',
  'Duis dapibus'
];

const firstNames: string[] = [
  'John',
  'Joe',
  'Bridget',
  'Aaron',
  'Jessica'
];

const lastNames: string[] = [
  'Smith',
  'Johnson',
  'Jefferson',
  'Brown',
  'Green'
];

const avatars: string[] = [
  'https://cdn.shopify.com/s/files/1/1061/1924/files/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.png',
  'https://cdn.shopify.com/s/files/1/1061/1924/products/Upside-Down_Face_Emoji_4dbbbd80-eb60-4c91-9642-83368692e361_large.png',
  'https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Devil_Emoji_large.png',
  'https://cdn.shopify.com/s/files/1/1061/1924/products/Women_With_Bunny_Emoji_large.png',
  'https://cdn.shopify.com/s/files/1/1061/1924/products/Alien_Emoji_f0027b91-51fa-4232-a392-44e6cd8dd10f_large.png',
  'https://cdn.shopify.com/s/files/1/1061/1924/products/Ghost_Emoji_large.png',
  'https://cdn.shopify.com/s/files/1/1061/1924/products/See_No_Evil_Monkey_Emoji_large.png',
];

const emails: string[] = [
  '@gmail.com',
  '@mail.ru',
  '@yahoo.com',
  '@yandex.ru'
];

@Injectable()
export class StubService {

  constructor(
    private logService: LogService
  ) {}

  public getLetter(mailbox: string, to: string): Letter {
    this.logService.add(`StubService: getLetter > mailbox: ${mailbox}, to: ${to}`);
    return {
      mailbox: mailbox,
      to: to,
      subject: this.getRandomElement(letterSubject),
      body: this.getRandomElement(letterBody)
    };
  }

  public getUser(): User {
    this.logService.add(`StubService: getUser`);
    const firstName = this.getRandomElement(firstNames);

    return {
      fullName: firstName + ' ' + this.getRandomElement(lastNames),
      avatarUrl: this.getRandomElement(avatars),
      email: firstName + this.getRandomElement(emails)
    };
  }

  private getRandomElement(arr: any[]): any {
    if (arr.length === 0) {
      return;
    }

    const index = Math.floor(arr.length * Math.random());

    return arr[index];
  }
}
