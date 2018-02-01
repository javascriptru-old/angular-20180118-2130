import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './service/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailComponent } from './mail-box/mail/mail.component';
import { MailServiceService } from './service/mail-service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Log } from './service/log.service';
import { AuthorizeService } from './service/authorize.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MailBoxComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService, MailServiceService, AuthorizeService,
  {
    provide: HTTP_INTERCEPTORS, 
    useClass: Log,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
