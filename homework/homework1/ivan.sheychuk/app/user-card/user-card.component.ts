import { Component, Input } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user: object;

  public bgColor = `rgb(0, 0, 0)`;

  public changeColor(): void {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    this.bgColor = `rgb(${r}, ${g}, ${b})`;
  }
}
