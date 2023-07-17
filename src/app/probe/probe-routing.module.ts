import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProbePage } from './probe.page';

const routes: Routes = [
  {
    path: '',
    component: ProbePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProbePageRoutingModule {}
