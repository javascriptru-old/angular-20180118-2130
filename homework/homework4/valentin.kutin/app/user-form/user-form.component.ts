import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AgeValidator } from '../validators';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Output() public addUser: EventEmitter<User> = new EventEmitter<User>();
  public userForm: FormGroup;
  public gender: string[] = ['M', 'F'];
  public errors: boolean;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {

    this.userForm = new FormGroup({
      firstName: new FormControl('', [ Validators.minLength(2), Validators.required ]),
      lastName: new FormControl('', [ Validators.minLength(2), Validators.required ]),
      gender: new FormControl('M', Validators.required),
      birthdate: new FormControl('', AgeValidator),
      email: new FormControl('', Validators.email)
    });

    this.userForm.valueChanges.subscribe(result => {
      this.errors = false;
    });
  }

  public onSubmit() {
    const data = {
      fullName: `${this.userForm.value.firstName} ${this.userForm.value.lastName}`,
      birthdate: this.userForm.value.birthdate,
      email: this.userForm.value.email,
      gender: this.userForm.value.gender
    };

    if (this.userForm.status === 'VALID') {
      this.userService.addUser(data).subscribe(result => {
        this.addUser.emit(data);
      });
    }

    if (this.userForm.status === 'INVALID') {
      this.errors = true;
    }
  }



}
