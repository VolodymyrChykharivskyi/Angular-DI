import { Injectable } from '@angular/core';
import { Logger } from "../../interfaces/logger.interface";

@Injectable({
  providedIn: 'root',
})
export class LoggerService implements Logger{
  public prefix = 'root';

  constructor() {
    console.log('LoggerService');
  }

  public log(message: string): void {
    console.log(`${this.prefix}: message`);
  }
}
