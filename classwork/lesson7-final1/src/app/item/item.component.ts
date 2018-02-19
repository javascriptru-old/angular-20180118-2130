import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query } from '@angular/animations';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  animations: [
    trigger('myanimation', [
      state('active', style( { color: 'red'} )),
      state('inactive', style( { color: 'blue'})),
      transition('active => inactive', 
        animate(1000, style( { color: 'grey'}) )
      ),
      transition('* => active', 
        [
          animate(1000, style( { color: 'yellow'}) ),
          animate(1000, style( { color: 'yellow'}) ),
          animate(1000, style( { color: 'yellow'}) )
        ]
      )
    ]),
    trigger('myanimation2', [
      state('active', style( { color: 'red'} )),
      state('inactive', style( { color: 'blue'})),
      transition('inactive => active', 
        [
          query('h1', animate(2000, style( { opacity: 0}) )),
          query('h1', animate(2000, style( { opacity: 1}) ))
        ]
      )
    ])
  ]
})
export class ItemComponent implements OnInit {

  state = null;

  constructor() { }

  ngOnInit() {
  }

}
