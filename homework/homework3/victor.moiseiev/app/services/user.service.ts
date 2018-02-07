import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private readonly httpclient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpclient.get<User[]>(`http://test-api.javascript.ru/v1/victorm/users`);
  }
}
