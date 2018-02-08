import { Component, OnInit } from '@angular/core';
import { MailModel } from '../models/mail.model';

@Component({
  selector: 'gc-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss']
})
export class MailBoxComponent implements OnInit {
  public mailsList: MailModel[] = [
    {
      received: 1517768685159,
      author: 'Jane',
      subject: 'January 30th meeting follow-up',
    },
    {
      received: 1517768723525,
      author: 'Jane',
      subject: 'January 31th meeting follow-up',
    },
  ];

  private randomIndex = 1;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.addMail();
    }, 3000)
  }

  addMail() {
    const mail = {
      received: Date.now(),
      author: this.randomIndex + 'Kate',
      subject: 'February ' + this.randomIndex + ' meeting follow-up',
    };


    this.randomIndex++;

    this.mailsList.push(mail);
  }

  deleteMail(index: number) {
    const mailLifeTime = Math.round( (Date.now() - this.mailsList[index].received) / 1000 );
    console.log('mail from ' + this.mailsList[index].author + ' was in box for ' + mailLifeTime + ' seconds')
    this.mailsList.splice(index, 1);
  }

}
