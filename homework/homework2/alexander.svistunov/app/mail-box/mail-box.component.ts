import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html'
})
export class MailBoxComponent implements OnInit {

  emails = [];
  private interval = () => {return Math.random() * 2 + 3};
  private amountNewMessages = () => {return Math.round(Math.random() + 1)};
  private indexMessage = 1;

  removeMessage(index: number) {
    this.emails.splice(index, 1);
  }

  ngOnInit() {
    setInterval(() => {
      for(let i = 0; i < this.amountNewMessages(); i++) {
        this.emails.push(`new message ${this.indexMessage++}`);
      }
    }, this.interval() * 1000);
  }
}
