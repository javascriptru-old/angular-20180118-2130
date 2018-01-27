import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() public user;
  public bgColor: string;

  public setRandomColor(): void {
    this.bgColor = `#${Math.floor(Math.random() * Math.pow(16, 6)).toString(16)}`;
  }

  ngOnInit() {
    this.bgColor = '#fff';
  }

}
