import { Component, OnInit } from '@angular/core';
import { LetterModel } from '../models/letter.model';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {
  letters: LetterModel[] = [];

  letterId = 1;
  template = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
qui officia deserunt mollit anim id est laborum.`;

  constructor( ) { }

  ngOnInit() {
    this.addNewLetter();
    setInterval(() => {
      this.addNewLetter();
    }, 4000);
  }

  addNewLetter() {
    this.add(new LetterModel(`Letter (${this.letterId++})`, `${this.generateBody()}`));
  }

  generateBody(): string {
    const from: number = Math.floor(Math.random() * this.template.length - 100);
    return this.template.slice(from, from + 100);
  }

  add(letter: LetterModel) {
    this.letters.push(letter);
  }

  remove(letter: LetterModel) {
      this.letters = this.letters.filter((value) => {
          return letter !== value;
      });
  }
}
