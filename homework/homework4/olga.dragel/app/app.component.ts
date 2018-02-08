import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {FormBuilder} from '@angular/forms';
import {InitialDataService} from './initial-data.service';
import {User} from './shared/user';
import {CustomValidators} from './shared/customValidators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  firstName: FormControl;
  lastName: FormControl;
  sex: FormControl;
  dateOfBirth: FormControl;
  email: FormControl;

  newUserControl: FormGroup;

  isValidated: boolean;
  errors: any;

  users: User[];

  constructor(private formBulder: FormBuilder, private _initialDataService: InitialDataService) {
  }

  ngOnInit() {
    this.isValidated = false;
    this.users = this._initialDataService.getInitialUsers();
    this.newUserControl = new FormGroup({
      firstName: new FormControl('', [Validators.minLength(2), Validators.required]),
      lastName: new FormControl('', [Validators.minLength(2), Validators.required]),
      sex: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', [Validators.required, CustomValidators.validatorElder18]),
      email: new FormControl('', Validators.required),
    });

  }

  addUser() {

    if (this.newUserControl.invalid) {

      this.errors = this.newUserControl.errors;
      this.isValidated = true;
      return null;
    } else {


      this.users.push(
        {
          firstName: (this.newUserControl.controls.firstName.value) as string,
          lastName: (this.newUserControl.controls.lastName.value) as string,
          sex: Number(this.newUserControl.controls.sex.value),
          dateOfBirth: new Date(this.newUserControl.controls.dateOfBirth.value),
          email: (this.newUserControl.controls.email.value) as string
        });

      this.newUserControl.reset();


      return null;
    }

  }
}




