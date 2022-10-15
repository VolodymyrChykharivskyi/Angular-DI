import { Component, OnInit } from '@angular/core';
import {InfoService} from "../../../../services/info.service";

@Component({
  selector: 'app-lazy-aomponent',
  templateUrl: './lazy-aomponent.component.html',
  styleUrls: ['./lazy-aomponent.component.scss']
})
export class LazyAomponentComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getInfo();
  }
}
