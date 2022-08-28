import { Injectable } from '@angular/core';
import {Reporter} from "../../interfaces/reporter.interface";

@Injectable({
  providedIn: 'root'
})
export class BrowserReporterService implements Reporter {

  constructor() { }

  public report(): void {
    console.log(`Browser report:
      Browser width: ${window.outerWidth},
      Browser height: ${window.outerHeight},
    `)
  }
}
