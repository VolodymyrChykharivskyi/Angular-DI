import { Injectable } from '@angular/core';

@Injectable()
export class InformerService {

  constructor() { }

  public info(): void {
    console.log('InformerService');
  }
}
