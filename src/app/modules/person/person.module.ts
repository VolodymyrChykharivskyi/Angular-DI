import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonComponent } from './components/person/person.component';
import {InfoService} from "../people/modules/info/services/info.service";

@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [InfoService],
  exports: [PersonComponent]
})
export class PersonModule { }
