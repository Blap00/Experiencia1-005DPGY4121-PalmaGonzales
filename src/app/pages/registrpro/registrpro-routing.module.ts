import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrproPage } from './registrpro.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrproPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrproPageRoutingModule {}
