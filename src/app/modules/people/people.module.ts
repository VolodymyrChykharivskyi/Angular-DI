import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './components/people/people.component';
import {InfoService} from "./modules/info/services/info.service";

@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [InfoService],
  exports: [PeopleComponent]
})
export class PeopleModule { }
