import {Component, OnInit} from '@angular/core';
import {LoggerService} from "../../services/logger/logger.service";

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html'
})
export class GalleryItemComponent implements OnInit {

  constructor(private loggerService: LoggerService) { }

  ngOnInit(): void {
    this.loggerService.log('GalleryItemComponent');
  }

}
