import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailComponent } from './mail-list/mail/mail.component';

import { UsersService } from './users.service';
import { MailsService } from './mails.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NewLetterComponent } from './new-letter/new-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    MailListComponent,
    MailComponent,
    SignUpComponent,
    NewLetterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      UsersService,
      MailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
