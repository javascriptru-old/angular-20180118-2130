import {Component, OnInit} from '@angular/core';
import {intRange} from '../utils/ranges';

export interface IMail {
  name: string;
  surname: string;
}

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss']
})
export class MailBoxComponent implements OnInit {
  public mails: IMail[] = [];
  private senders = [
    {name: 'Jhon', surname: 'Cena'},
    {name: 'Steve', surname: 'Jobs'},
    {name: 'Ivan', surname: 'Pupkin'},
    {name: 'Gregory', surname: 'Leps'},
    {name: 'Petr', surname: 'The first'},
  ];

  public ngOnInit() {
    this.imitateReceiving();
  }

  private imitateReceiving(): void {
    this.forEachRandomInterval(
      () => this.createEmails().forEach(email => this.mails.push(email))
    );
  }

  private forEachRandomInterval(callback: Function): void {
    const randomMs = intRange(3, 5) * 1000;

    setTimeout(() => {
      callback();
      this.forEachRandomInterval(callback);
    }, randomMs);
  }


  private createEmails(): IMail[] {
    const amountOfRandomReceivedMessages = intRange(1, 2);
    const list = [];

    for (let i = 0; i < amountOfRandomReceivedMessages; ++i) {
      list.push(this.getRandomSender());
    }

    return list;
  }

  private getRandomSender(): IMail {
    return this.senders[intRange(0, this.senders.length - 1)];
  }

  public deleteMailItem(mailItem: IMail): void {
    this.mails.splice(this.mails.indexOf(mailItem), 1);
  }
}
