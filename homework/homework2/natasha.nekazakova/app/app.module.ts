import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailComponent } from './mail/mail.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    MailBoxComponent,
    MailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
