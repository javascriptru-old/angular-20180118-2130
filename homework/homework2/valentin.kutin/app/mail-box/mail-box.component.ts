import { Component, OnInit } from '@angular/core';

import { EmailMessage } from './mail-box';

const fakeMessagesBodies: string[] = [
  'Mauris egestas est augue. Ut sit amet scelerisque massa. Cras suscipit metus consequat, posuere ante nec.',
  'In nisl leo, volutpat vitae rhoncus at, hendrerit ut risus.',
  'Maecenas ut tortor id dui blandit viverra vitae et ipsum. Pellentesque molestie malesuada nulla, vel iaculis orci' +
  'ornare vitae. Vestibulum at felis pellentesque ante viverra lobortis sed a ligula.',
  'Morbi libero lacus, consectetur eget egestas id, egestas ac turpis.',
  'Phasellus auctor risus mollis ligula elementum elementum. In condimentum dolor et urna dapibus varius.'
];

const fakeMessagesAuthors: string[] = [
  'Nikola Tesla',
  'Albert Enstain',
  'William Shakespeare',
  'Kim Chen In',
  'Quan Chi',
  'Azino 777',
  'Mom'
];

const fakeMessagesTitles: string[] = [
  'Hey, how are you?',
  'Your credit card was hacked',
  'Free funny videos here!',
  'Test message',
  'Re[18]: Hi!',
  'I have got some very sad news',
  'Black friday, domain sales!'
];

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss']
})
export class MailBoxComponent implements OnInit {

  public messages: EmailMessage[] = [];

  private user: string;
  private database: EmailMessage[];

  constructor() {
  }

  ngOnInit() {
    this.user = 'John Smith';
    this.onMessagesGenerator();
  }

  public removeMessage(id: number): void {
    this.messages.some((item, index) => {
      if (item.id === id) {
        this.messages.splice(index, 1);
        return true;
      }

      return false;
    });
  }

  private onMessagesGenerator(): void {
    const delay = +(Math.random() * 2000).toFixed(0);
    const timeout = setTimeout(_ => {
      this.messages.unshift(
        this.getRandomMessage(this.messages.length)
      );

      if (Math.random() > 0.5) {
        this.messages.unshift(
          this.getRandomMessage(this.messages.length)
        );
      }

      this.onMessagesGenerator();
      clearTimeout(timeout);
    }, 3000 + delay);
  }

  private getRandomMessage(id): EmailMessage {
    return {
      id: id,
      title: this.getRandomElement(fakeMessagesTitles),
      body: this.getRandomElement(fakeMessagesBodies),
      from: this.getRandomElement(fakeMessagesAuthors),
      to: this.user,
      time: Date.now()
    };
  }

  private getRandomElement(arr: string[]): string {
    const index = +(Math.random() * (arr.length - 1)).toFixed(0);
    return arr[index];
  }
}
