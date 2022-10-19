import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ERRPage } from './err.page';

const routes: Routes = [
  {
    path: '',
    component: ERRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ERRPageRoutingModule {}
