import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeriadosAluPage } from './feriados-alu.page';

const routes: Routes = [
  {
    path: '',
    component: FeriadosAluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeriadosAluPageRoutingModule {}
