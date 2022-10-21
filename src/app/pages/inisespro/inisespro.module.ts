import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InisesproPageRoutingModule } from './inisespro-routing.module';

import { InisesproPage } from './inisespro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InisesproPageRoutingModule
  ],
  declarations: [InisesproPage]
})
export class InisesproPageModule {}
