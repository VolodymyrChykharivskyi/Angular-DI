import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  public prefix = 'root';

  constructor() { }

  public log(message: string) {
    console.log(`${this.prefix} - ${message}`);
  }
}
