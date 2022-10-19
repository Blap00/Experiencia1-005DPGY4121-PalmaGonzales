import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HdeClasesPageRoutingModule } from './hde-clases-routing.module';

import { HdeClasesPage } from './hde-clases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HdeClasesPageRoutingModule,
  ],
  declarations: [HdeClasesPage]
})
export class HdeClasesPageModule {}
