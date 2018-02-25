import { Component, OnInit } from '@angular/core';
import { MailMessage } from '../mailmessage';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail-sent',
  templateUrl: './mail-sent.component.html',
  styleUrls: ['./mail-sent.component.css']
})
export class MailSentComponent implements OnInit {

  public mails:  MailMessage[];

  // Delete the element (message) with index i from the mailCache array
  public deleteMessage(i: number) {
    // Delete one element
    if (i > -1) {
      const id: string = this.mails[i]._id;
      console.log(id);
      this._mailService.deleteMessage(id);
      this.mails = this.mails.filter(mail => mail._id !== id);
    }
  }

  public addTestMessages() {
    this._mailService.addTestMessagesSent();
    this._mailService.getAllSent().subscribe(mails => this.mails = mails as MailMessage[]);
  }

  constructor(private _mailService: MailService) {

  }

  ngOnInit() {
    this._mailService.getAllSent().subscribe(mails => this.mails = mails as MailMessage[]);
  }

}
