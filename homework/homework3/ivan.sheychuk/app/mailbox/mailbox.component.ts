import { Component, OnInit } from '@angular/core';
import { MailboxService } from '../mailbox.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  public mailbox;

  constructor(private _mailboxService: MailboxService) { }

  ngOnInit() {
    this._mailboxService.getAll().subscribe(mailbox => {
      this.mailbox = mailbox;
    });
  }

}
