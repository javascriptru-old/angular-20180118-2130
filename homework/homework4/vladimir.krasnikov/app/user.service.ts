import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, NewUser } from './user';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  public getAll() {
      return this._http.get('http://test-api.javascript.ru/v1/vkrasnikov/users/');
   }

    // Add User
    public addUser(user: NewUser) {
      return this._http.post('http://test-api.javascript.ru/v1/vkrasnikov/users/', user);
      // .subscribe(
      //  msg => {console.log(msg); },
      //  error => {console.log('error: ' + error.value); }
     // );
    }

    public deleteUser(id: string) {
       return this._http.delete('http://test-api.javascript.ru/v1/vkrasnikov/users/' + id, { responseType: 'text' });
       // .subscribe(
       // () => {console.log('success'); },
       // error => {console.log('error: ' + error.value); }
    // );
    }
}
