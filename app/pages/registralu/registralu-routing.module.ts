import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistraluPage } from './registralu.page';

const routes: Routes = [
  {
    path: '',
    component: RegistraluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistraluPageRoutingModule {}
