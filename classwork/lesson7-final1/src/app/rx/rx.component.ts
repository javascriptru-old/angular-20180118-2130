import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.css']
})
export class RxComponent implements OnInit {

  public subject = new Subject();
  public subscribersValues = [];
  public counter = 0;

  constructor() { }

  ngOnInit() {
  }

  emitValue() {
    this.counter++;
    this.subject.next(this.counter);
  }

  subscribe() {
    const subscriberValues = [];
    this.subscribersValues.push(subscriberValues)
    this.subject.subscribe(value => subscriberValues.push(value));
  }

}
