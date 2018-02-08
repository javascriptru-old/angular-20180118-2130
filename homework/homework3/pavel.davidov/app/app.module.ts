import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailComponent } from './mail-box/mail.component';
import { UsersService } from './users.service';
import { LettersService } from './letters.service';
import { LoggingService } from './logging.service';
import { AuthoriseService } from './authorise.service';



@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    MailBoxComponent,
    MailComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    HttpClientModule
  ],
  providers: [
    UsersService,
    LettersService,
    LoggingService,
    AuthoriseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
