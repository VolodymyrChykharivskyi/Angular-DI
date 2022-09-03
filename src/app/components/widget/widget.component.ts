import {Component, ContentChild, Inject, OnInit} from '@angular/core';
import {HeaderToken, WidgetHeaderComponent} from "../widget-header/widget-header.component";
import {HEADER_TOKEN} from "../../tokens/header.token";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
})
export class WidgetComponent implements OnInit {
  @ContentChild(HeaderToken) public header: HeaderToken | null = null;
  @ContentChild(HEADER_TOKEN) public header2: WidgetHeaderComponent | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}

