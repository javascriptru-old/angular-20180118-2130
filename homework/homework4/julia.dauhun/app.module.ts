import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { LettersService } from './letters.service';
import { AutorizationService } from './autorization.service';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { LetterComponent } from './mail-box/letter/letter.component';
import { UserCardComponent } from './user-card/user-card.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    LetterComponent,
    UserCardComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    LettersService,
    AutorizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
