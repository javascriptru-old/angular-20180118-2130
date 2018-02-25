import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MailService {

  constructor(
    private http: HttpClient,
  ) { }

  public getAll() {
    return this.http.get('http://test-api.javascript.ru/v1/nnekazakova/letters');
  }
}


// private inbox: MailModel[] = [
//   {
//     received: 1517768685159,
//     author: 'Jane',
//     subject: 'January 30th meeting follow-up',
//   },
//   {
//     received: 1517768723525,
//     author: 'Jane',
//     subject: 'January 31th meeting follow-up',
//   },
//   {
//     mailbox: '5a81c83b7f0d1fac2ba888fc',
//     subject: 'January 30th meeting follow-up',
//     to: 'jane@test.com',
//     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel aliquam purus. In odio dolor, vestibulum ut sodales at, condimentum et urna. Fusce tristique mi ipsum, quis laoreet nulla viverra quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tristique orci porta tortor mollis, sed sodales dui ornare. Vestibulum nec lectus mi. Morbi magna felis, pharetra quis euismod in, viverra facilisis libero. Nam sed turpis velit. Cras blandit efficitur odio, eu gravida ante.',
//   }
// ];
