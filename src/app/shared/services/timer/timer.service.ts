import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';
import {shareReplay, timer} from "rxjs";

export interface IntervalConfig {
  interval: number;
}

export const INTERVAL = new InjectionToken<IntervalConfig>('interval');

@Injectable()
export class TimerService {
  public timer$ = timer(0, this.intervalConfig?.interval || 1000).pipe(shareReplay());

  constructor(@Optional() @Inject(INTERVAL) public intervalConfig: IntervalConfig) {
    console.log('TimerService')
  }
}
