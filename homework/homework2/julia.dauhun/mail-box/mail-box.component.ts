import { Component, OnInit } from '@angular/core';



interface ILetter {
  id: number;
  theme: string;
  time: object;
}

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {
  public letters: ILetter[] = [];

  private idCounter: number = 0;

  private themes: string[] = ['hello', 'work', 'files', 'meeting', 'conference'];

  constructor() { }

  private addNewLetter() {
    const id = this.idCounter++;
    const newLetter: ILetter = {
      id: id,
      theme: this.themes[Math.floor(Math.random() * this.themes.length)],
      time: new Date()
    };
    this.letters[id] = newLetter;
  }

  ngOnInit() {
    this.addNewLetter();
    this.addNewLetter();
    setInterval(() => {
      this.addNewLetter();
    }, 5000);
  }

  public deleteLetter(id) {
    delete this.letters[id];
  }
}
