import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';

import { LogService } from './log.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-list/user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { LoginService } from './login.service';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailService } from './mail.service';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    UserListComponent,
    UserProfileComponent,
    LoginComponent,
    MailListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ LogService, UserService, LoginService, MailService,
  { provide: API_BASE_URL, useValue: 'Test'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
