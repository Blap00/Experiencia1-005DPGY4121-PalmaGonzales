import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HdeClasesPage } from './hde-clases.page';

const routes: Routes = [
  {
    path: '',
    component: HdeClasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HdeClasesPageRoutingModule {}
