import {InjectionToken} from "@angular/core";
import {WidgetHeaderComponent} from "../components/widget-header/widget-header.component";

export const HEADER_TOKEN = new InjectionToken<WidgetHeaderComponent>('widget_header');
