import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';
import { AppChildDirective } from './directives/app-child.directive';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryItemComponent,
    AppChildDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
