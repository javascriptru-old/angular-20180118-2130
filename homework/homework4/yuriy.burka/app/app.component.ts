import { Component, OnInit } from '@angular/core';
import { UserModel } from './_model/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  users: UserModel[] = [];

  form: FormGroup;

  constructor() {}

  validateAge(ageInYears: number) {
    return (control: FormControl) => {
      const date = new Date(control.value);
      const currentDate = new Date(Date.now());

      if ((currentDate.valueOf() - date.valueOf()) > ageInYears * 1000 * 60 * 60 * 24 * 365.25) {
        return null;
      }
      return {validateAge: {message: 'Too young'}};
    };
  }

  ngOnInit(): void {
    this.form = new FormGroup({
     surname: new FormControl('', [Validators.required, Validators.minLength(2)]),
     name: new FormControl('', [Validators.required, Validators.minLength(2)]),
     sex: new FormControl(true, Validators.required),
     date: new FormControl('1970-01-01', this.validateAge(18)),
     email: new FormControl('', [Validators.required, Validators.email])
   });
  }

  addUser() {
    const user = new UserModel(
      this.form.value.surname + ' ' + this.form.value.name,
      this.form.value.sex,
      this.form.value.date,
      this.form.value.email
    );
    this.users.push(user);
    this.form.reset();
  }
}
