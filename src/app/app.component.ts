import {Component, inject, OnInit} from '@angular/core';
import {InformerService} from "./services/informer.service";
import {BaseClass} from "./classes/base.class";
import {HttpClient} from "@angular/common/http";

function getUser() {
  const http = inject(HttpClient);

  return http.get('some');
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends BaseClass implements OnInit {
  // public informer = inject(InformerService);

  constructor() {
    super();

    this.informer.info(); // 'InformerService'
  }

  public ngOnInit() {
    this.informer.info(); // 'InformerService'
  }
}
