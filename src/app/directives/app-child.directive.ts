import { Directive } from '@angular/core';
import {LoggerService} from "../services/logger/logger.service";

@Directive({
  selector: '[appAppChild]'
})
export class AppChildDirective {

  constructor(private loggerService: LoggerService) {
    this.loggerService.prefix = 'appAppChild';
  }

}
