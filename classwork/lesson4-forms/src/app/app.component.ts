import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  o = Observable.of(55555);
  somevar = 'somthing';

  // nameControl = new FormControl('John');
  nameGroup = new FormGroup({
    first: new FormControl('John', [Validators.required, Validators.maxLength(8)]),
    last: new FormControl('Brown', Validators.minLength(8))
  });

  constructor() {
    this.nameGroup.valueChanges.subscribe(value => {
      console.log(value);
    });

    this.nameGroup.statusChanges.subscribe(value => {
      console.log(value);
    });
  }

  // @HostListener
  // @HostBinding

  dosomething(formController) {
    debugger
     console.log(formController);
  }
}

/**
 *  Template Driven
 *  Reactive
 * 
 */