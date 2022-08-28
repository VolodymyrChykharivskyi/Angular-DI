import {Component, Host} from '@angular/core';
import { MessageService } from "../../services/message.service";

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html'
})
export class InspectorComponent {

  constructor(public messageService: MessageService) { }

}
