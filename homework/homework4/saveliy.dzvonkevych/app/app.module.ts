import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewLetterComponent } from './new-letter/new-letter.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { MailComponent } from './mail-list/mail/mail.component';
import { HttpClientModule } from '@angular/common/http';
import {UsersService} from './users.service';
import {MailsService} from './mails.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NewLetterComponent,
    SignUpComponent,
    MailListComponent,
    UsersComponent,
    UserComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
      UsersService,
      MailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
