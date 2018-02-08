import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { user } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  validateDate(control: FormControl) {
    
    let currentDate = new Date();
    let controlDate = new Date(control.value);
    
    let year = currentDate.getFullYear() - controlDate.getFullYear();
    let month = currentDate.getMonth() - controlDate.getMonth();
    
    if (year > 18)
      return null;

    if (year === 18 && month > 0)
      return null;

    return ['error'];
  }

  userGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    family: new FormControl('', [Validators.required, Validators.minLength(2)]),
    sex: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    date: new FormControl('', [Validators.required, this.validateDate])
  });

 

  saveUser(userForm) {
    
     if (this.userGroup.status === 'INVALID')
      return;

     let person = new user(
      userForm.controls.name.value, 
      userForm.controls.family.value, 
      userForm.controls.sex.value,
      userForm.controls.email.value, 
      userForm.controls.date.value);

      this._userService.addUser(person);

      this.userGroup.reset();
  }


}
