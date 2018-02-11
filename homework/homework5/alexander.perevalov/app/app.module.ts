import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { MailBodyComponent } from './mail-box/mail-body/mail-body.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
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

const routes: Routes = [
  
  {
    path: 'login', //когда неавторизован
    component: LoginComponent,
  },
  {
    path: 'messages',
    component: MailBoxComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'messages/:id',
    component: MailBodyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/messages',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    MailItemComponent,
    MailBodyComponent,
    UserRegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    MailService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

