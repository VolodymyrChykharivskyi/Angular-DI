import { Injectable } from '@angular/core';
import {Reporter} from "../../interfaces/reporter.interface";

@Injectable({
  providedIn: 'root'
})
export class EngagingReporterService implements Reporter {

  constructor() { }

  public report(): void {
    console.log(`Engaging report: User has been using app ... seconds`);
  }
}
