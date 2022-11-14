import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeriadosProPage } from './feriados-pro.page';

const routes: Routes = [
  {
    path: '',
    component: FeriadosProPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeriadosProPageRoutingModule {}
