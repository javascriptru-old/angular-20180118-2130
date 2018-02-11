import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public currentUser = {};
    public loggedIn = false;
    private users: any[] = [];
    constructor(private usersService: UsersService) {
        this.updateUsers();
    }
    logInUser(user: any) {
        this.currentUser = user;
        this.loggedIn = true;
    }
    deleteUser(id: string) {
        this.usersService.delete(id).subscribe(response => console.dir(response));
        this.users = this.users.filter(item => item.id !== id);
    }
    updateUsers() {
        this.usersService.getAll().subscribe(users => {
            this.users = [];
            Object.keys(users).forEach(i => {
                users[i]['id'] = i;
                this.users.push(users[i]);
            });
        });
    }
}
