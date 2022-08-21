import { Component, OnInit } from '@angular/core';
import {InfoService} from "../../../people/modules/info/services/info.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    console.log('PersonComponent', this.infoService.getInfo());
  }

}
