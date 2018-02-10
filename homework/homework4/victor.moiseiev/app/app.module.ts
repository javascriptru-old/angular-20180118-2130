import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { SexPipe } from "./pipes/sex.pipe";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    SexPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
