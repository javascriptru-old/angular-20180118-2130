import { Component, OnInit } from '@angular/core';
import { IMail, MailService } from '../../services/mail.service';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss']
})
export class MailBoxComponent implements OnInit {
  public mails: IMail[];

  constructor(private _mailService: MailService) {
  }

  ngOnInit() {
    this.mails = this._mailService.allMails;
  }

}
