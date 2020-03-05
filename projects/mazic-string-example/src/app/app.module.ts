import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MazicStringModule } from 'mazic-string';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MazicStringModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
