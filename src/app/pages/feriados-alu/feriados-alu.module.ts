import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeriadosAluPageRoutingModule } from './feriados-alu-routing.module';

import { FeriadosAluPage } from './feriados-alu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeriadosAluPageRoutingModule
  ],
  declarations: [FeriadosAluPage]
})
export class FeriadosAluPageModule {}
