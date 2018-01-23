import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { GlassComponent } from './car/glass/glass.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    GlassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
