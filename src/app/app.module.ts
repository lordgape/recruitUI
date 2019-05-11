import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {JobserviceService} from "./jobservice.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [JobserviceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
