import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {JobserviceService} from "./jobservice.service";
import {HttpClient} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [JobserviceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
