import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { SexPipe } from './sex.pipe';
import {InitialDataService} from './initial-data.service';


@NgModule({
  declarations: [
    AppComponent,
    SexPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InitialDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
