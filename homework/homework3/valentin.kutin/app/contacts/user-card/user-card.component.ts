import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() public data: User;

  public color: string;

  constructor() {
    this.color = this.getRandomColor();
  }

  ngOnInit() {
  }

  public getRandomColor(): string {
    const R = (Math.random() * 255).toFixed(0);
    const G = (Math.random() * 255).toFixed(0);
    const B = (Math.random() * 255).toFixed(0);
    return `rgb(${R}, ${G}, ${B})`;
  }
}
