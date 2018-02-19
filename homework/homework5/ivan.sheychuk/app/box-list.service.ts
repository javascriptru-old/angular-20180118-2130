import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BoxListService {

  constructor(
    private _http: HttpClient
  ) { }

  public getList() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  public getMailbox(id: number) {
    return this._http.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }

  public getLetter(id: number) {
    return this._http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
