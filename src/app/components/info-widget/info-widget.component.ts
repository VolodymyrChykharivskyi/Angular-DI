import {Component, forwardRef} from '@angular/core';
import {WIDGET} from "../../tokens/widget.token";
import {Widget} from "../../interfaces/widget.interface";

const widgetProvider = {
  provide: WIDGET, useExisting: forwardRef(() =>InfoWidgetComponent )
}

@Component({
  selector: 'app-info-widget',
  templateUrl: './info-widget.component.html',
  providers: [widgetProvider]
})
export class InfoWidgetComponent implements Widget {

  constructor() { }

  load(): void {
    console.log('load InfoWidgetComponent');
  }
}
