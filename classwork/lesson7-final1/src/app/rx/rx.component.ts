import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AsyncSubject } from 'rxjs/AsyncSubject';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.css']
})
export class RxComponent implements OnInit {

  // public subject = new Subject();
  // public subject = new BehaviorSubject<number>(333);
  // public subject = new ReplaySubject<number>(Number.POSITIVE_INFINITY, 1000);
  public subject = new AsyncSubject<number>();

  public subscribersValues = [];
  public counter = 0;

  constructor() { }

  ngOnInit() {
  }

  emitValue() {
    this.counter++;
    this.subject.next(this.counter);
  }

  complete() {
    this.subject.complete();
  }

  subscribe() {
    const subscriberValues = [];
    this.subscribersValues.push(subscriberValues)
    this.subject.subscribe(value => subscriberValues.push(value));
  }

}
