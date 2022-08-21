import { Component, OnInit } from '@angular/core';
import { InfoService } from "../../../people/modules/info/services/info.service";

@Component({
  selector: 'app-lazy-aomponent',
  templateUrl: './lazy-aomponent.component.html',
  styleUrls: ['./lazy-aomponent.component.scss']
})
export class LazyAomponentComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    console.log('LazyAomponentComponent', this.infoService.getInfo());
  }
}
