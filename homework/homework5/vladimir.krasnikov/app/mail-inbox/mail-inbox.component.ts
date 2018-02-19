import { Component, OnInit } from '@angular/core';
import { MailMessage } from '../mailmessage';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail-inbox',
  templateUrl: './mail-inbox.component.html',
  styleUrls: ['./mail-inbox.component.css']
})
export class MailInboxComponent implements OnInit {

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
    this._mailService.addTestMessagesInbox();
    this._mailService.getAllInbox().subscribe(mails => this.mails = mails as MailMessage[]);
  }

  constructor(private _mailService: MailService) {

  }

  ngOnInit() {
    this._mailService.getAllInbox().subscribe(mails => this.mails = mails as MailMessage[]);
  }


}
