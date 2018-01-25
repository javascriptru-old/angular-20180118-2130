import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() id: number;
  @Output() xxx: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.id = Math.random();
  }

  dosomethingforme() {
    this.xxx.emit(this.id);
    // console.log('SELECTED!');
  }

}
