import { Component } from '@angular/core';
import {MessageService} from "./services/message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  viewProviders: [{ provide: MessageService, useValue: { message: 'viewProviders app-root' }}],
  // providers: [{ provide: MessageService, useValue: { message: 'app-root' }}],
})
export class AppComponent {
  constructor() {}
}
