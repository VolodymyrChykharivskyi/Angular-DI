import { Component } from '@angular/core';
import {Widget} from "../../interfaces/widget.interface";
import {weatherProvider} from "../../providers/weather.provider";
import {WidgetWrapperComponent} from "../widget-wrapper/widget-wrapper.component";

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  // providers: [weatherProvider]
})
export class WeatherWidgetComponent implements Widget {

  constructor(private wrapper: WidgetWrapperComponent) { }

  load(): void {
    console.log('load WeatherWidgetComponent');
  }
}
