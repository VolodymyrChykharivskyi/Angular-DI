import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  public prefix = 'root';

  constructor() {
    console.log('InfoService');
  }

  public getInfo(): void {
    console.log(`InfoService - ${this.prefix}`);
  }
}
