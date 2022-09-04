import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {INTERVAL, IntervalConfig, TimerService} from "./services/timer/timer.service";
import { SharedComponent } from './components/shared/shared.component';

@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule
  ],
  // providers: [TimerService],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [TimerService],
    }
  }

  static forChild(config: IntervalConfig): ModuleWithProviders<SharedModule> {
    if (!config) {
      throw new Error('Please provide config');
    }

    return {
      ngModule: SharedModule,
      providers: [TimerService, { provide: INTERVAL, useValue: config }],
    }
  }
}
