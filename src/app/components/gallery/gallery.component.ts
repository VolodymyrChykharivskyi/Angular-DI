import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';
import {LoggerService} from "../../services/logger/logger.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  // providers: [LoggerService],
  viewProviders: [LoggerService],
})
export class GalleryComponent implements OnInit {
  @ContentChild('item') public item!: TemplateRef<null>;

  constructor(private loggerService: LoggerService) {
    this.loggerService.prefix = 'app-gallery';
  }

  ngOnInit(): void {
    this.loggerService.log('GalleryComponent');
  }

}
