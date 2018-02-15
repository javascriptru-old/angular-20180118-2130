import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailComponent } from './mail/mail.component';

import { AuthenticateService } from './services/authenticate.service'
import { UserService } from './services/user.service'
import { MailService } from './services/mail.service'
import { LoggerService } from "./services/logger.service";

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    MailBoxComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    AuthenticateService,
    UserService,
    MailService,
    { provide: HTTP_INTERCEPTORS, useClass: LoggerService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
