import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfoService} from "./services/info.service";
import {NewInfoService} from "./services/new-info.service";

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./modules/lazy-feature/lazy-feature.module').then((m) => m.LazyFeatureModule),
    providers: [{ provide: InfoService, useExisting: NewInfoService }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
