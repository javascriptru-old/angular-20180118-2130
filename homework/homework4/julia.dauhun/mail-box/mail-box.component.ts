import { Component } from '@angular/core';
import {LettersService} from "../letters.service";



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
export class MailBoxComponent {
  public letters: ILetter[] = [];

  private _idCounter: number = 0;

  constructor(private _lettersService: LettersService) {
    this._lettersService.getLetters().subscribe(letters => {
      this.letters = letters;
    });
  }

  public deleteLetter(mailItem): void {
    this.letters.splice(this.letters.indexOf(mailItem), 1);
  }
}
