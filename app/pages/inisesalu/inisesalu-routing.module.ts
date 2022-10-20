import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InisesaluPage } from './inisesalu.page';

const routes: Routes = [
  {
    path: '',
    component: InisesaluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InisesaluPageRoutingModule {}
