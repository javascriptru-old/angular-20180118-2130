import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';

import { UserService } from '../user.service';
import UserValidators from '../user-validators';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  public userForm: FormGroup;

  constructor(
    private _userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.minLength(2)],
      lastName: ['', Validators.minLength(2)],
      gender: [null, Validators.required],
      birthdate: [null, UserValidators.ageLimitValidator(18)],
      email: ['', Validators.email]
    });
  }

  handleSubmit() {
    const { status, value } = this.userForm;

    if (status === 'VALID') {
      this._userService.addUserList(value);
    }
  }
}
