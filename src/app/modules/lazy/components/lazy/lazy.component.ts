import { Component, OnInit } from '@angular/core';
import { TimerService } from "../../../../shared/services/timer/timer.service";

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
})
export class LazyComponent implements OnInit {

  constructor(public timerService: TimerService) { }

  ngOnInit(): void {
  }

}
