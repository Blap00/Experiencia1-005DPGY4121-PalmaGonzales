import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InisesaluPageRoutingModule } from './inisesalu-routing.module';

import { InisesaluPage } from './inisesalu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InisesaluPageRoutingModule
  ],
  declarations: [InisesaluPage]
})
export class InisesaluPageModule {}
