import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { User } from "../models/user";

@Component({
  moduleId: module.id,
  selector: "app-user-list",
  templateUrl: "user-list.component.html",
  styleUrls: ["user-list.component.css"]
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  constructor(private readonly userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => this.users = users);

  }

}
