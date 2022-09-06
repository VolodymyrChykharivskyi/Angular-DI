import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WidgetWrapperComponent } from './components/widget-wrapper/widget-wrapper.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { InfoWidgetComponent } from './components/info-widget/info-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetWrapperComponent,
    WeatherWidgetComponent,
    InfoWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
