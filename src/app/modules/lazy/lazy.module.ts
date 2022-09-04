import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import {LazyComponent} from "./components/lazy/lazy.component";
import {LazyRoutingModule} from "./lazy.routing.module";



@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    SharedModule,
  ]
})
export class LazyModule { }
