import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() public user;

  constructor() { }

  public backgroundColor : string = '#141414';

  private colors : string[] = ['#141414', '#492c27', '#c2c0c5', '#655c59', '#2e5c7b'];

  private getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  public changeColor() {
    this.backgroundColor = this.getRandomColor();
  }

  ngOnInit() {
  }

}
