import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() userCard;

  public userBackgroundColor = 'rgb(220, 220, 200)';

  private randomNumber = () => {
    return Math.round(Math.random() * 255 * 255 * 255);
  };

  constructor() { }

  changeColor() {
    this.userBackgroundColor = `#${this.randomNumber().toString(16)}`;
  }

  ngOnInit() {
  }

}
