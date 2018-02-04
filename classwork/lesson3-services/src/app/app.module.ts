import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { LogService } from './log.service';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ UserService, LogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
