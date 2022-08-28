import {Component, Injector, OnInit} from '@angular/core';
import { LoggerService } from './services/logger/logger.service';
import { APP_CONFIG } from "./config.token";
import { ExperimentalLoggerService } from './services/experimental-logger/experimental-logger.service';
import {LegacyLogger} from "./logger.legacy";

export function loggerFactory(injector: Injector): ExperimentalLoggerService | LoggerService {
  return injector.get(APP_CONFIG).experimentalEnabled ? injector.get(ExperimentalLoggerService) : injector.get(LoggerService);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    { provide: LoggerService, useFactory: loggerFactory, deps: [Injector] },
  ],
})
export class AppComponent implements OnInit {
  constructor(private loggerService: LoggerService) {
  }

  public ngOnInit(): void {
    console.log('logger is', this.loggerService);

    this.loggerService.prefix = 'AppComponent';
    this.loggerService.log('AppComponent init ...');
  }
}
