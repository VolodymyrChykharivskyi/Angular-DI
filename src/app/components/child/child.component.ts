import {Component, ContentChild, Host, Optional, Self, SkipSelf, TemplateRef} from '@angular/core';
import { MessageService } from "../../services/message.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  // providers: [{ provide: MessageService, useValue: { message: 'app-child' }}],
  // viewProviders: [{ provide: MessageService, useValue: { message: 'viewProviders app-child' }}]
})
export class ChildComponent {
  @ContentChild('content') public contentRef?: TemplateRef<void>;

  constructor(@Host() public messageService: MessageService) {}
}
