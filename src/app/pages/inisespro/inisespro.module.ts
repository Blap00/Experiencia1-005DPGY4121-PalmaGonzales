import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InisesproPageRoutingModule } from './inisespro-routing.module';

import { InisesproPage } from './inisespro.page';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InisesproPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [InisesproPage]
})
export class InisesproPageModule {}
