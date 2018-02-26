import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LetterClass } from '../../letter';
import { BodyComponent } from '../../body/body.component';

@Component({
  selector: 'app-singlemail',
  templateUrl: './singlemail.component.html',
  styleUrls: ['./singlemail.component.css']
})
export class SinglemailComponent implements OnInit {
  @Input() mail: LetterClass;
  private _curMail: LetterClass = new LetterClass('', '', '', '', '');

  constructor(private _router: Router,
              private _body: BodyComponent ) {}

  ngOnInit() {
    this._curMail._id = this.mail._id;
    this._curMail.to = this.mail.to;
    this._curMail.subject = this.mail.subject;
    this._curMail.body = this.mail.body;
    this._curMail.mailbox = this.mail.mailbox;
  }

  onClick() {
    this._body.setAttributes( this._curMail._id,
                              this._curMail.to,
                              this._curMail.subject,
                              this._curMail.body,
                              this._curMail.mailbox
                            ).subscribe(data => {
          console.log(`~~~ observable ~~~~~~~~~~~~~~~~~~~~~~~~~~~ ${data.to} = ${data.subject}`);
          this._router.navigate( ['/user', {outlets: {letters: ['body']}}] );
        });
  }

}
