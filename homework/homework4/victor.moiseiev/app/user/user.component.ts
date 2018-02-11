import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { User } from "../models/user";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Sex } from "../models/sex.enum";
import { AppValidators } from "../app-validators";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Output() public submitToAddUser: EventEmitter<User> = new EventEmitter<User>();
  public form: FormGroup;
  public get name(): FormControl {
    return this.control("name");
  }
  public get surname(): FormControl {
    return this.control("surname");
  }
  public get sex(): FormControl {
    return this.control("sex");
  }
  public get birthdate(): FormControl {
    return this.control("birthdate");
  }
  public get email(): FormControl {
    return this.control("email");
  }


  constructor(private readonly _formBuilder: FormBuilder) {

  }

  public ngOnInit() {
    this.form = this._formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      surname: ["", [Validators.required, Validators.minLength(2)]],
      sex: ["", Validators.required],
      birthdate: ["", [Validators.required, AppValidators.olderThan18]],
      email: ["", [Validators.required, AppValidators.email]]
    });
  }
  public control(name: string): FormControl {
    return this.form.controls[name] as FormControl;
  }

  public emitAddingUser() {

    const user = new User({
      name: this.name.value,
      surname: this.surname.value,
      sex: +this.sex.value,
      birthdate: new Date(this.birthdate.value),
      email: this.email.value
    });

    this.submitToAddUser.emit(user);

  }
}
