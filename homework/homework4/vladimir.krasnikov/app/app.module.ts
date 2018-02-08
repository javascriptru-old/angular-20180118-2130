import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';

import { UserService } from './user.service';
import { UserProfileComponent } from './user-list/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAddComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
