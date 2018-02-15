import { Component, OnInit } from '@angular/core';
import { MailMessage } from '../mailmessage';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {
  public title = 'Mail List';

  // Array for the screen presentation
  // The length should be less than maxLength
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
    this._mailService.addTestMessages();
    // How to refresh it???
    this._mailService.getAll().subscribe(mails => this.mails = mails as MailMessage[]);
  }

  constructor(private _mailService: MailService) {

  }

  ngOnInit() {
    this._mailService.getAll().subscribe(mails => this.mails = mails as MailMessage[]);
  }

}
