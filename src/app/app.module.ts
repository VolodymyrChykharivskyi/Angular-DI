import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildDirective } from './directives/child/child.directive';
import { ParentDirective } from './directives/parent/parent.directive';
import { ChildComponent } from './components/child/child.component';
import { InspectorComponent } from './components/inspector/inspector.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildDirective,
    ParentDirective,
    ChildComponent,
    InspectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
