import { Injectable } from '@angular/core';
import { ServiceConfig } from './service.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MailServiceService {

  constructor(private _http: HttpClient) { }

  setTestMailBoxes() {
    this._http.post(ServiceConfig.mailBoxApi, {title: 'first - mail box'} ).subscribe(
      users => { console.log("mail box added -> success")},
      error => { console.log("mail box not added -> error -> " + error);
    });   
    }

    getMailBoxes() {    
      return this._http.get(ServiceConfig.mailBoxApi);
    }

  setTestMailBoxLetters() {
      this._http.post(ServiceConfig.mailBoxLettersApi, 
        {mailbox: '5a72fe647f0d1fac2ba87e28', subject: 'test', body: 'dfggd', to: 'ddfgdfgdfgfg@gail.com'} ).subscribe(
        users => { console.log("mail box added -> success")},
        error => { console.log("mail box not added -> error -> " + error);
      });   
      }

    getTestMailBoxLetters() {
      return this._http.get(ServiceConfig.mailBoxLettersApi);   
    }
  }


