import {Directive, Optional, Self} from '@angular/core';
import {MessageService} from "../../services/message.service";

@Directive({
  selector: '[appParent]', providers: [{ provide: MessageService, useValue: { message: 'appParent' }}],
})
export class ParentDirective {

  constructor(private messageService: MessageService) { }

}
