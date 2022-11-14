import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeriadosProPageRoutingModule } from './feriados-pro-routing.module';

import { FeriadosProPage } from './feriados-pro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeriadosProPageRoutingModule
  ],
  declarations: [FeriadosProPage]
})
export class FeriadosProPageModule {}
