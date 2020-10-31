import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { TextInputHighlightModule } from 'angular-text-input-highlight';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmService } from './htm.service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TextInputHighlightModule
  ],
  providers: [HtmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
