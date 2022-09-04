import { Component, OnInit } from '@angular/core';
import {TimerService} from "../../../../shared/services/timer/timer.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  constructor(public timerService: TimerService) { }

  ngOnInit(): void {
  }

}
