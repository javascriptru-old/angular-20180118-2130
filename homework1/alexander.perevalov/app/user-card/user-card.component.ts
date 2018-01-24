import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() public user: any;

  constructor() { }

  public ngOnInit(): void {

  }

  public changeBgCard(cardRef): void {
    let colors: Array<string> = [
      '#ecdb54',
      '#e34132',
      '#6ca0dc',
      '#944743',
      '#dbb2d1'
    ];

    let randomColorIndex = Math.floor(Math.random()*colors.length);
    let newColor = colors[randomColorIndex];

    cardRef.style.backgroundColor = newColor;
  }

}
