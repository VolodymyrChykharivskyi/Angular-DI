import {Component, Host, Optional, Self, SkipSelf} from '@angular/core';
import { MessageService } from "../../services/message.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  // providers: [{ provide: MessageService, useValue: { message: 'app-child' }}],
  // viewProviders: [{ provide: MessageService, useValue: { message: 'viewProviders app-child' }}]
})
export class ChildComponent {

  constructor(@Host() public messageService: MessageService) {}
}
