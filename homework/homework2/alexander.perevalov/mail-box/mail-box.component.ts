import { MailItem } from './interfaces/mail-item.inteface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss']
})
export class MailBoxComponent implements OnInit {
  public mailStorage: Array<MailItem> = [];

  constructor() { }

  public getMessage() {
    let limit = 5;
    let counter = 0;

    let loop = setInterval(() => {
      counter++;

      this.mailStorage.push({
        id: counter,
        createdAt: '',
      })

      if (counter >= limit) {
        clearInterval(loop);
      }

    }, 2000)
  }

  public remove(item) {
    let index = this.mailStorage.indexOf(item);
    this.mailStorage.splice(index, 1);
  }

  ngOnInit() {
    this.getMessage();
  }

}
