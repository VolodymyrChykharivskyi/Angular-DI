import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewInfoService {
  public prefix = 'root';

  constructor() { }

  public getInfo(): void {
    console.log(`New InfoService - ${this.prefix}`);
  }
}
