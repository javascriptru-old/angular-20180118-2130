import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {
  public users = [
    {name: 'Arnold Schwarzenegger', birthday: '30.07.1947', photo: 'https://daddybot.ru/arni.jpg', model: 'T-800', background: 'white'},
    {name: 'Robert Patrick', birthday: '05.11.1958', photo: 'https://daddybot.ru/bobby.jpg', model: 'T-1000', background: 'white'},
    {name: 'Kristanna Loken', birthday: '08.10.1975', photo: 'https://daddybot.ru/kris.jpg', model: 'T-X', background: 'white'},
    {name: 'Samuel Worthington', birthday: '02.08.1976', photo: 'https://daddybot.ru/sam.jpg', model: 'cyborg', background: 'white'},
    {name: 'Lee Byung Hun', birthday: '12.07.1970', photo: 'https://daddybot.ru/lee.jpg', model: 'Т-1000', background: 'white'}
  ];

  constructor() { }

  ngOnInit() {
  }

  private hexRandom() {
    const hexDigits = '0123456789abcdef';
    const maxPosition = hexDigits.length - 1;
    let curPosition = 0;
    let result = '';

    for ( let i = 0; i < 6; ++i ) {
      curPosition = Math.floor ( Math.random() * maxPosition );
      result = result + hexDigits.substring(curPosition, curPosition + 1);
    }
    return result;
  }

  public changeBackground(curUser) {
    curUser.background = '#' + this.hexRandom();
  }

}
