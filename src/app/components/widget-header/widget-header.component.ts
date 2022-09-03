import { Component, OnInit } from '@angular/core';
import {HEADER_TOKEN} from "../../tokens/header.token";

export abstract class HeaderToken {
  abstract refresh(): void;
}

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  providers: [{ provide: HEADER_TOKEN, useExisting: WidgetHeaderComponent }, { provide: HeaderToken, useExisting: WidgetHeaderComponent }]
})
export class WidgetHeaderComponent extends HeaderToken implements OnInit {

  ngOnInit(): void {
  }

  refresh(): void {
    console.log('WidgetHeaderComponent')
  }

}
