import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardService } from './card.service';
import { MailService } from './mail.service';
import { AuthService } from './auth.service';
import { InterceptService } from './intercept.service';
import { CardlistComponent } from './cardlist/cardlist.component';
import { UsercardComponent } from './cardlist/usercard/usercard.component';
import { MaillistComponent } from './maillist/maillist.component';
import { SinglemailComponent } from './maillist/singlemail/singlemail.component';
import { AddcardComponent } from './cardlist/addcard/addcard.component';
import { AddmailComponent } from './maillist/addmail/addmail.component';

@NgModule({
  declarations: [
    AppComponent,
    CardlistComponent,
    UsercardComponent,
    MaillistComponent,
    SinglemailComponent,
    AddcardComponent,
    AddmailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CardService, 
    MailService,
    AuthService,
    { provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true 
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
