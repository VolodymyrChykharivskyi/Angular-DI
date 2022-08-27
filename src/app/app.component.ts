import {Component, OnInit} from '@angular/core';
import {LoggerService} from "./services/logger/logger.service";
import {ExperimentalLoggerService} from "./services/experimental-logger/experimental-logger.service";
import {LegacyLogger} from "./logger.legacy";
import {APP_CONFIG, AppConfig} from "./config.token";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [{ provide: LoggerService, useFactory: (config: AppConfig) => { return config.experimentalEnabled ? new ExperimentalLoggerService() : new LoggerService() }, deps: [APP_CONFIG] }]
})
export class AppComponent implements OnInit {
  constructor(private loggerService: LoggerService, private experimentalLoggerService: ExperimentalLoggerService) {
  }

  public ngOnInit(): void {
    this.loggerService.prefix = 'App Component';
    this.loggerService.log('App Component init...')

    console.log('is instance', this.loggerService === this.experimentalLoggerService)
  }
}
