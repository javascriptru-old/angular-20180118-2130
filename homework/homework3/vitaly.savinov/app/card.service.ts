import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CardService {
  
  constructor(private _http: HttpClient) {}

  public getAll() {
    return this._http.get('http://test-api.javascript.ru/v1/vitsavinov/users');
  }

  public removeCard(_id) {
    this._http.delete(`http://test-api.javascript.ru/v1/vitsavinov/users/${_id}`, 
          { responseType: 'text' }).subscribe(
          users => {
            console.log("success" + users);
          },
          error => {
            console.log("error " + error);
          });
  }

  public addCard( _name, _birthday, _photo, _model ) {
    this._http.post(`http://test-api.javascript.ru/v1/vitsavinov/users`, 
                    { 'fullName': _name,
                      'avatarUrl': _photo, 
                      'birthdate': _birthday,
                      'address': _model,
                      'email': 'some@mail.to'
                    }).subscribe(
                      users => {
                        console.log("success" + users);
                      },
                      error => {
                        console.log("error " + error);
                      });
  }
}
