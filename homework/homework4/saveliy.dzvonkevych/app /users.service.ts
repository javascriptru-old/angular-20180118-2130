import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
    constructor(private _http: HttpClient) {}
    getAll() {
        return this._http.get('https://angular-practice-524e6.firebaseio.com/users.json');
    }
    get(userId: string) {
        return this._http.get(`https://angular-practice-524e6.firebaseio.com/users/${userId}.json`);
    }
    delete(userId: string) {
        return this._http.delete(`https://angular-practice-524e6.firebaseio.com/users/${userId}.json`);
    }
    removeLetter(userId: string, letterId: string) {
        return this._http.delete(`https://angular-practice-524e6.firebaseio.com/users/${userId}/mails/${letterId}.json`);
    }
    add(data: any) {
        return this._http.post(`https://angular-practice-524e6.firebaseio.com/users.json`, data);
    }
    addLetter(userId: string, data: any) {
        return this._http.post(`https://angular-practice-524e6.firebaseio.com/users/${userId}/mails.json`, data);
    }
}
