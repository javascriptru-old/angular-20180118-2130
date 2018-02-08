import { Component, OnInit } from '@angular/core';
import { MailService } from '../../mail.service';
import { MaillistComponent } from '../maillist.component';

@Component({
  selector: 'app-addmail',
  templateUrl: './addmail.component.html',
  styleUrls: ['./addmail.component.css']
})
export class AddmailComponent implements OnInit {

  constructor(private _mailService: MailService,
              private _mailListComponent: MaillistComponent) {
              }

  ngOnInit() {
  }

  addMail(to: string, subject: string, body: string) {
      // add mail to the online repository via service
      this._mailService.addMail( to, subject, body );

      // add mail to the local array
      this._mailListComponent.mails.push({mailbox: '5a75f32a7f0d1fac2ba883e9',
          subject: subject,
          body: body, 
          to: to});
  }
}
