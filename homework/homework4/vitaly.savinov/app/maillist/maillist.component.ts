import { Component, OnInit, OnDestroy } from '@angular/core';

import { MailService } from '../mail.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-maillist',
  templateUrl: './maillist.component.html',
  styleUrls: ['./maillist.component.css']
})
export class MaillistComponent implements OnInit {
  
  public mails;
  public authFlag = false;
  private _id: string;

  constructor(private _mailService: MailService,
              private _authService: AuthService ) { }

  ngOnInit() {
    this._mailService.getAll().subscribe(mails => this.mails = mails);
  }

  onDelete(curMail) {
    this._id = curMail._id;
    this.mails.splice(this.mails.indexOf(curMail), 1);
    this._mailService.removeMail(this._id).subscribe(
                      mails => {
                        console.log("success" + mails);
                      },
                      error => {
                        console.log("error " + error);
                      });
  }

  doAuth( flag ) {
    this.authFlag = this._authService.authorize( flag );
  }
}
