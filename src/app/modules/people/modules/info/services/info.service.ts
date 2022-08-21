import { Injectable } from '@angular/core';

@Injectable()
export class InfoService {

  constructor() {
    console.log('constructor InfoService');
  }

  public getInfo(): string[] {
    return ['First name', 'Last name', 'email'];
  }
}
