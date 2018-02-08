import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {UserService} from './user.service';
import {MailService} from './mail.service';
import {AuthorizationService} from './authorization.service';

import {HttpClientModule} from '@angular/common/http';
import {MailboxService} from './mailbox.service';
import {InitialDataService} from './initial-data.service';
import { MailboxComponent } from './mailbox/mailbox.component';
import { MailComponent } from './mailbox/mail/mail.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LogHttp} from './log-http.service';


@NgModule({
  declarations: [
    AppComponent,
    MailboxComponent,
    MailComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [UserService, MailService, AuthorizationService, MailboxService, InitialDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogHttp,
      multi: true

    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
