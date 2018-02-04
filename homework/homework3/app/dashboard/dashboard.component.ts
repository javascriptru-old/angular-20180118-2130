import { User } from './../user-card/interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public users: Array<User>;

    constructor(
        private _userService: UserService,
        private _authService: AuthService) {

    }

    public ngOnInit(): void {
        this._userService.getUsers().subscribe(users => {
            this.users = users;
        });
    }
}