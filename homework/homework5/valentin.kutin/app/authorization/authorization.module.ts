import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthorizationComponent,
    SignInComponent
  ]
})
export class AuthorizationModule { }
