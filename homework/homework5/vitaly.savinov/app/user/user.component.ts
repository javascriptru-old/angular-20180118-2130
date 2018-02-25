import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { BoxService } from '../box.service';
import { MailService } from '../mail.service';
import { LetterClass } from './letter';
import { MailboxesComponent } from './mailboxes/mailboxes.component';
import { MaillistComponent } from './maillist/maillist.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-user',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public mailboxes;
  public mails: Array<LetterClass>;
  public boxname = 'choose the mailbox';
  private _id: string;
  private _preBox: any;


  constructor(private _boxService: BoxService,
              private _mailService: MailService,
              private _router: Router ) {}

  ngOnInit() {
    this._boxService.getAll().subscribe( mailboxes => {
                      this.mailboxes = mailboxes;
                      this.mailboxes.class = '';
                    });

    this._router.navigate( ['/user', {outlets: {boxes: ['boxes'], letters: ['mails']}}] );
  }

  onDelete(curBox) {
    this._id = curBox._id;
    this.mailboxes.splice(this.mailboxes.indexOf(curBox), 1);

    this._boxService.removeBox( this._id ).subscribe(
                      users => {
                        console.log('success ' + users);
                      },
                      error => {
                        console.log('error ' + error);
                      });
  }

  onChoice( curBox ) {
    this._preBox = this._boxService.setSelection( curBox );
    this._preBox.class = { 'selected': false };
    this.boxname = curBox.title;

    this._mailService.getAll().subscribe( (mails: Array<LetterClass>) => {
      this.mails = mails.filter(mail => mail.to === this.boxname);
    });
  }
}
