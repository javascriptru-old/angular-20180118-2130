import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { LogService } from './services/log.service';
import { MailService } from './services/mail.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailItemComponent } from './mail-box/mail-item/mail-item.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserRegisterComponent } from './user-register/user-register.component';


@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    MailItemComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    MailService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

