import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  fullNameControl: FormGroup;

  public userList: Array<TUser> = [];

  constructor() { }

  ngOnInit() {
    this.fullNameControl = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      sex : new FormControl('1', [Validators.required]),
      dateOfBirth: new FormControl('', ageValidator()),
      email: new FormControl('', [Validators.required, emailValidator()])
    });

    this.fullNameControl.valueChanges.subscribe((value) => console.log(value));
    this.fullNameControl.statusChanges.subscribe((status) => console.log(status));
  }

  addUser() {
    const currentUser = {
      firstName: this.fullNameControl.controls.firstName.value,
      lastName: this.fullNameControl.controls.lastName.value,
      sex: this.fullNameControl.controls.sex.value,
      dateOfBirth: this.fullNameControl.controls.dateOfBirth.value,
      email: this.fullNameControl.controls.email.value
    };

    let equivalentUser: boolean = false;
    this.userList.forEach((userItem) => {
      if(userItem.email === currentUser.email) {
        return equivalentUser = true;
      }
    });

    if(equivalentUser) {
      alert('Пользователь с таким e-mail уже зарегистрирован!');
      return;
    }
    this.userList.push(currentUser);
  }
}

function emailValidator() {
  return function (formControl: FormControl) {
    const adrPattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
    if(adrPattern.test(formControl.value) === false) {
      return { emailValidator: { message: 'Should provide a valid email'} };
    }
    return null;
  };
}

function ageValidator() {
  return function (formControl: FormControl) {
    const dateOfBirth = new Date(formControl.value.toString());
    const dateToday = new Date();
    if(dateToday.getFullYear() - dateOfBirth.getFullYear() < 18) {
      return { ageValidator: { message: 'Should be elder than 18'} };
    } else if(dateToday.getFullYear() - dateOfBirth.getFullYear() === 18) {
      if(dateToday.getMonth() < dateOfBirth.getMonth()) {
        return { ageValidator: { message: 'Should be elder than 18'} };
      } else if( (dateToday.getMonth() === dateOfBirth.getMonth()) && ( dateToday.getDate() < dateOfBirth.getDate() ) ) {
        return { ageValidator: { message: 'Should be elder than 18'} };
      }
      return null;
    }
    return null;
  };
}

type TUser = {
  firstName: string,
  lastName: string,
  sex: string,
  dateOfBirth: string,
  email: string
}
