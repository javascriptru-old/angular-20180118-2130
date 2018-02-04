import { Component } from '@angular/core';
import { Letter } from './Model/letter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public mailBoxLetters: Letter[];

  constructor() {
    this.mailBoxLetters = [
      new Letter({subject: 'Spam 1', body: 'qweqweqweqwe', receivingTime: new Date(2018, 1, 1)}),
      new Letter({subject: 'Spam 2', body: 'wwwww', receivingTime: new Date(2018, 1, 2)}),
      new Letter({subject: 'Spam 3', body: 'gggggggg', receivingTime: new Date(2018, 1, 3)})
    ];
  }
}

