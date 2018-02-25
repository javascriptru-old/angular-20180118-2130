import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @Output() private onLogIn: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  logIn() {
    this.onLogIn.emit(true);
  }

}
