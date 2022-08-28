import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {REPORTERS} from "./reporter.token";
import {BrowserReporterService} from "./services/browser-reporter/browser-reporter.service";
import {EngagingReporterService} from "./services/engaging-reporter/engaging-reporter.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: REPORTERS, useExisting: BrowserReporterService, multi: true },
    { provide: REPORTERS, useExisting: EngagingReporterService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
