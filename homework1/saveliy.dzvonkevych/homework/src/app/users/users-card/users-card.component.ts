import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css']
})
export class UsersCardComponent implements OnInit {
  @Input() public user: any[];
  public titleColor: string = '#fff';

  public setTitleColor(color: string) {
    this.titleColor = color;
  }

  constructor() { }

  ngOnInit() {
  }

}
