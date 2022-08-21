import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyAomponentComponent } from "./components/lazy-aomponent/lazy-aomponent.component";

const routes: Routes = [
  {
    path: '',
    component: LazyAomponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyFeatureRoutingModule { }
