import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeValidator } from '../validators/age.validator';

@Component({
  selector: 'user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  public form: FormGroup;
  private _users: Array<any>;

  constructor(private _fb: FormBuilder) {
    this._users = [
      {
        firstName: 'Bob',
        lastName: 'Green',
        gender: 'male',
        birth: '10-12-1990',
        email: 'bob@mail.ru'
      }
    ];

    this.createForm();
  }

  public createForm() {
    this.form = this._fb.group({
      firstName: ['', Validators.minLength(2)],
      lastName: ['', Validators.minLength(2)],
      gender: ['', Validators.required],
      birth: ['', AgeValidator],
      email: ['', Validators.email]
    })
  }

  ngOnInit() {
    
  }

  public onSubmit() {
    if (this.form.valid) {
      this._users.push({
        firstName: this.form.get('firstName').value,
        lastName: this.form.get('lastName').value,
        gender: this.form.get('gender').value,
        birth: this.form.get('birth').value,
        email: this.form.get('email').value
      })

      console.log(this._users);
    }
  }

}
