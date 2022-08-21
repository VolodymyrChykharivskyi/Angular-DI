import { Component, OnInit } from '@angular/core';
import {InfoService} from "../../modules/info/services/info.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    console.log('PeopleComponent', this.infoService.getInfo());
  }

}
