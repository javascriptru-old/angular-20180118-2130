import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {LettersService} from "../../letters.service";

interface ILetter {
  mailbox: string;
  subject: string;
  body: string;
  to: string;
}

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit, OnChanges{
  public letters: ILetter[] = [];

  @Input() account: string;

  constructor(private _lettersService: LettersService) {
  }

  ngOnInit() {
    this._getLetters();
  }

  ngOnChanges() {
    this._getLetters();
  }

  private _getLetters() {
    const lettersObserv = this._lettersService.getLetters();
    lettersObserv.subscribe(letters => {
      this.letters = letters.filter((letter) => letter.to === this.account);
      lettersObserv.unsubscribe();
    });
  }

  public deleteLetter(mailItem): void {
    this.letters.splice(this.letters.indexOf(mailItem), 1);
  }
}
