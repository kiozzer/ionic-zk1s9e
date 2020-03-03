import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigINPage } from './sig-in.page';

const routes: Routes = [
  {
    path: '',
    component: SigINPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigINPageRoutingModule {}
