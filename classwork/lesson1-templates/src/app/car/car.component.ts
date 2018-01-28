import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html'
})
export class CarComponent implements OnInit {

  @Input() public color: string;

  constructor() { }

  ngOnInit() {
  }

}
