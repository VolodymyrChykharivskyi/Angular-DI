import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyAomponentComponent } from './components/lazy-aomponent/lazy-aomponent.component';
import {LazyFeatureRoutingModule} from "./lazy-feature-routing.module";
import {InfoService} from "../../services/info.service";

@NgModule({
  declarations: [
    LazyAomponentComponent
  ],
  imports: [
    LazyFeatureRoutingModule,
    CommonModule
  ],
  providers: [InfoService],
  bootstrap:[ LazyAomponentComponent ]
})
export class LazyFeatureModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public resolveLazyloadedComponent(): ComponentFactory<LazyAomponentComponent> {
    return this.componentFactoryResolver.resolveComponentFactory( LazyAomponentComponent );
  }
}
