import {Directive, Host, Optional, SkipSelf} from '@angular/core';
import {MessageService} from "../../services/message.service";

@Directive({
  selector: '[appChild]',
})
export class ChildDirective {

  constructor(@Optional() @Host() private messageService: MessageService) {
    if (messageService) {
      console.log(this.messageService.message)
    }
  }
}
