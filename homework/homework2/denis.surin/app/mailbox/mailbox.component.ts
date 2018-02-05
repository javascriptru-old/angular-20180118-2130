import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  private _letters: any[] = [];
  
  get letters(): any[] {
      return this._letters;
  }
  
  set letters(letter: any[]) {
      this._letters = letter;
  }

  public getCurrentTime() {
    let now = new Date(),
    seconds = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds(),
    minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes(),
    hours   = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    
    return `${hours}:${minutes}:${seconds}`;
  }

  public createLetter(theme: string) {
    return {
      received: this.getCurrentTime(),
      theme: theme ? theme : "New Letter",
      initTime: new Date()
    };
  }

  public removeLetter(id) {
    this.letters.splice(id, 1);
}

  constructor() { 
    this.letters.unshift(this.createLetter("The first Email"));
    this.letters.unshift(this.createLetter("Keep it real"));
  }

  ngOnInit() {
    setInterval(() => {
      if(this.letters.length < 5) {
        this.letters.unshift(this.createLetter(""));
      }
    }, 5000);
  }

}
