import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthService } from './_service/auth.service';
import { LetterService } from './_service/letter.service';
import { LoggerService } from './_service/logger.service';
import { UserService } from './_service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserPageComponent } from './user-page/user-page.component';
import { ReceivedComponent } from './received/received.component';
import { SentComponent } from './sent/sent.component';
import { LetterComponent } from './letter/letter.component';


@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    ReceivedComponent,
    SentComponent,
    LetterComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    LetterService,
    LoggerService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
