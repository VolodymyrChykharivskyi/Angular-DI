import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WidgetComponent } from './components/widget/widget.component';
import { WidgetHeaderComponent } from './components/widget-header/widget-header.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    WidgetHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
