import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioInicioPage } from './inicio-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioInicioPageRoutingModule {}
