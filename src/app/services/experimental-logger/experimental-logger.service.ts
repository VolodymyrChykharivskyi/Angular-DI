import { Inject, Injectable } from '@angular/core';
import { REPORTERS } from 'src/app/reporter.token';
import { Logger } from "../../interfaces/logger.interface";
import {Reporter} from "../../interfaces/reporter.interface";

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements Logger{
  public prefix = 'root';

  constructor(@Inject(REPORTERS) private reporters: ReadonlyArray<Reporter>) {}

  public log(message: string): void {
    this.reporters.map(r => r.report());
    console.log(`${this.prefix} (experimental): message`);
  }
}
