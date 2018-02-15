import { Component } from "@angular/core";
import { User } from "./models/user";
import { Sex } from "./models/sex.enum";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {

  public userList: User[] = [];

  constructor() {
    this.userList.push(new User({
      name: "Vasya",
      surname: "Stepanov",
      sex: Sex.male,
      birthdate: new Date(),
      email: "vasyas@gmail.com"
    }));
  }

  public addUser(user: User) {
    this.userList.push(user);
  }

}
