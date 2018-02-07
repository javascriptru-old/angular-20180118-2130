import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../_model/user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LetterModel } from '../_model/letter.model';
import { LoggerService } from './logger.service';

@Injectable()
export class LetterService {

constructor(
    private http: HttpClient,
    private _logger: LoggerService
) { }

getAll(): Observable<LetterModel[]> {
    this._logger.log(this, 'getAll');

    return this.http.get('https://my-json-server.typicode.com/Burich/test-repo/letters')
    .map((res) => <LetterModel[]>res );
}

getLettersTo(user: UserModel): Observable<LetterModel[]> {
    this._logger.log(this, 'getLettersTo');

    return this.getAll()
    .map((res) => res.filter((letter) => {
        return user && letter.to === user.email;
    }));
}

getLettersFrom(user: UserModel): Observable<LetterModel[]> {
    this._logger.log(this, 'getLettersFrom');

    return this.getAll()
    .map((res) => res.filter((letter) => {
        return user && letter.from === user.email;
    }));
}

}
