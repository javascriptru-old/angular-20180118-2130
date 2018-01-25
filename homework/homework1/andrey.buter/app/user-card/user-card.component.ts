import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() public card;

  public colors = [
    'red',
    'green',
    'gray',
    'yellow',
    'blue',
    'pink',
    'purple'
  ];

  public cardColor: string;

  constructor() { }

  ngOnInit() {
  }

  public changeColor() {
    this.cardColor = this.getRandom();
  }


  protected getRandom() {
    return this.colors[ Math.floor( Math.random() * this.colors.length ) ];
  }

}
