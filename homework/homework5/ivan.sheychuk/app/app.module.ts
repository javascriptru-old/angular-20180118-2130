import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { LoginComponent } from './login/login.component';
import { BoxListComponent } from './box-list/box-list.component';
import { LetterComponent } from './letter/letter.component';

import { AuthService } from './auth.service';
import { BoxListService } from './box-list.service';
import { AuthGuard } from './auth.guard';

const routers: Routes = [
  {
    path: '',
    redirectTo: 'box-list',
    pathMatch: 'full'
  },
  {
    path: 'box-list',
    component: BoxListComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':listId',
        component: MailboxComponent,
        children: [
          { path: ':letterId', component: LetterComponent }
        ]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MailboxComponent,
    LoginComponent,
    BoxListComponent,
    LetterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [
    AuthService,
    BoxListService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
