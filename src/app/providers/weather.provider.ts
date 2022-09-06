import {WIDGET} from "../tokens/widget.token";
import {WeatherWidgetComponent} from "../components/weather-widget/weather-widget.component";
import {forwardRef} from "@angular/core";

export const weatherProvider: any = {
  provide: WIDGET, useExisting: forwardRef(() => WeatherWidgetComponent)
}
