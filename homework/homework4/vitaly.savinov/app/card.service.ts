import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CardService {
  
  constructor(private _http: HttpClient) {}

  public getAll() {
    return this._http.get('http://test-api.javascript.ru/v1/vitsavinov/users');
  }

  public removeCard(_id) {
    return this._http.delete(`http://test-api.javascript.ru/v1/vitsavinov/users/${_id}`, 
          { responseType: 'text' });
  }

  public addCard( _name, _surname, _gender, _birthday, _email ) {
    return this._http.post(`http://test-api.javascript.ru/v1/vitsavinov/users`, 
                    { 'fullName': _name,
                      'address': _surname, 
                      'gender': _gender,
                      'birthdate': _birthday,
                      'email': _email
                    });
  }
}
