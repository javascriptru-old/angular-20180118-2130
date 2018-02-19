import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginService } from './login.service';
import {MailService } from './mail.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { MailSentComponent } from './mail-sent/mail-sent.component';
import { MailViewComponent } from './mail-view/mail-view.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MailInboxComponent,
    MailSentComponent,
    MailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ LoginService, MailService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
