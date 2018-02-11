import { Component, OnInit, Input } from '@angular/core';
import { Letter } from '../letter';
import { LettersService } from '../letters.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail-box',
  template: `
  <style>.current {border: solid 1px orange;font-weight:bold;}</style>
    <p>
      <input type="text" #mailbox /> <button (click)=newBox(mailbox.value)>New mailbox</button>
      <button (click)="newLetter()">New letter</button>
    </p>
    <p>
      <button *ngFor="let box of mailboxes | async" 
      (click)="show(box)" 
      [ngClass]="{current: this.currentBox===box._id}">{{ box.title }}</button>&nbsp;
    </p>
    <app-mail *ngFor="let letter of letters | async"
    [mail]="letter"
    (clearMail)="clearMail($event)"></app-mail>`
})
export class MailBoxComponent implements OnInit {
  mailboxes: Observable<any>;
  letters: Observable<Letter[]>;
  currentBox;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private letterService: LettersService
  ) {}

  ngOnInit() {
    this._getBox();

    this.route.params.subscribe(p => {
      this.currentBox = p.boxid;
      this._getLetters();
    });
  }

  newLetter() {
    if (this.currentBox) {
      this.letterService
        .save(
          new Letter({
            mailbox: this.currentBox,
            subject: `test ${this.currentBox}`,
            to: 'test@test.ru',
            body: `test ${this.currentBox} body letter`
          })
        )
        .subscribe(l => this._getLetters());
    }
  }

  newBox(name) {
    this.letterService.setMailbox(name).subscribe(box => this._getBox());
  }

  show(box) {
    this.currentBox = box;
    this.router.navigate(['mailbox', box._id, {title: box.title}]);
    // this.currentBox = box;
    // this._getLetters();
  }

  clearMail(letter: Letter) {
    this.letterService.clear(letter).subscribe(_ => this._getLetters());
  }

  private _getBox() {
    this.mailboxes = this.letterService.getMailboxes();
  }

  private _getLetters() {
    this.letters = this.letterService
      .fetch()
      .map(data => data.filter(a => a.mailbox === this.currentBox));
  }
}
