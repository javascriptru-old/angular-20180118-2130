import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

// tslint:disable-next-line:max-line-length
const pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  info = '';

  userFormGroup: FormGroup = new FormGroup({
    fname: new FormControl('', Validators.minLength(2)),
    lname: new FormControl('', Validators.minLength(2)),
    gender: new FormControl('', Validators.required),
    bdate: new FormControl('', this._validateDate(18)),
    email: new FormControl('', Validators.pattern(pattern))
  });

  constructor() { }

  ngOnInit() {
  }

  private _validateDate(date: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
debugger
      const flag = new Date().getFullYear() - new Date(control.value).getFullYear() <= date;
      return flag ? { 'bdate': { value: `${control.value} < 18 лет` } } : null;
    };
  }

  add() {
    // send http post -> result ok:
    this.userFormGroup.reset();
    this.info = 'Пользователь добавлен!';
  }

}
