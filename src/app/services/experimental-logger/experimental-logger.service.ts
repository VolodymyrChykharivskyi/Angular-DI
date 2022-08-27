import { Inject, Injectable } from '@angular/core';
import { Logger } from "../../interfaces/logger.interface";

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements Logger{
  public prefix = 'root';

  constructor() {}

  public log(message: string): void {
    console.log(`${this.prefix} (experimental): message`);
  }
}
