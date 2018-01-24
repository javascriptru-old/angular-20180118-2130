import {Component, OnInit, Input} from '@angular/core';
import {User} from '../shared/models/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input('background-color') public myColor: string;

  @Input() public user: User;

  public changeColorRandomly() {
    const letters: string = '0123456789ABCDEF';
    let color: string = '#';

    for (let i: number = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    this.myColor = color;
  }

  ngOnInit() {
    this.myColor = 'grey';

  }

}
