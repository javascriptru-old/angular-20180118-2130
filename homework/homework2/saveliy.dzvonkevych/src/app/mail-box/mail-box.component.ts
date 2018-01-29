import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss']
})
export class MailBoxComponent implements OnInit {
  private _letters: any[] = [];
  get letters(): any[] {
      return this._letters;
  }
  set letters(value: any[]) {
      this._letters = value;
  }
  private getReceivedTime() {
      const now = new Date();
      const seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
      const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
      const hours   = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
      return `${hours}:${minutes}:${seconds}`;
  }
  public initLetter(data: { title: string }) {
      const now = new Date();
      return {
          received: this.getReceivedTime(),
          title: data.title,
          initedTime: +now
      };
  }
  public deleteLetter(id) {
      const now = new Date();
      console.log('Письмо прожило не так уж и долго, всего', +now - this.letters[id].initedTime, 'ms');
      this.letters.splice(id, 1);
  }
  constructor() {
      // Here we set a mails we have received before.
      this.letters = [
          this.initLetter({
              title: 'New Year sales'
          }),
          this.initLetter({
              title: 'Do not miss such chanse, buy it today!'
          })
    ];
  }

  ngOnInit() {
    setInterval(() => {
      this.letters.unshift(this.initLetter({
          title: 'Sales 50% off only today! [Annoing spam from Abibas]'
      }));
    }, 3750);
  }
}
