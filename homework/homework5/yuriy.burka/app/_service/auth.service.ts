import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

userName = '';

constructor() { }

login(userName: string) {
    if (userName.length < 1) {
        return false;
    }


    this.userName = userName;

    return true;
}

logout() {
    this.userName = '';
}

isAuthorized(): boolean {
    return this.userName.length > 0;
}

}
