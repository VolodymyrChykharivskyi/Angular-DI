import {Component, ContentChild, OnInit} from '@angular/core';
import {WIDGET} from 'src/app/tokens/widget.token';
import {Widget} from "../../interfaces/widget.interface";
import {WeatherWidgetComponent} from "../weather-widget/weather-widget.component";

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html'
})
export class WidgetWrapperComponent implements OnInit {
  @ContentChild(WIDGET, { static: true}) public widget!: Widget;
  @ContentChild(WeatherWidgetComponent, { static: true}) public weatherWidget!: WeatherWidgetComponent;

  constructor() { }

  ngOnInit(): void {
    this.widget.load();
  }

}
