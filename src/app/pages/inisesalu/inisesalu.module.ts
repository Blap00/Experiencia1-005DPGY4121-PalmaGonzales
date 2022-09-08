import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InisesaluPageRoutingModule } from './inisesalu-routing.module';

import { InisesaluPage } from './inisesalu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InisesaluPageRoutingModule
  ],
  declarations: [InisesaluPage]
})
export class InisesaluPageModule {}
