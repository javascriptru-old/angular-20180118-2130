import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'gc-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  public cardBackground: string = '#141414';

  @Input() public user: UserModel;

  constructor() { }

  ngOnInit() {
  }

  changeCardBackground() {
    this.cardBackground = '#555555';
  }

}
