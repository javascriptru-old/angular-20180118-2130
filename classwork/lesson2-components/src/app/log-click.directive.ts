import { Directive } from '@angular/core';
import { HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appLogClick]'
})
export class LogClickDirective {

  private counter: number;

  @HostBinding('style.color') mycolor: string;

  @HostListener('click', ['$event']) log(event) {
    this.counter++;
    console.log(this.counter);
    this.mycolor = 'red';
  }

  constructor() {
    this.counter = 0;
  }

}
