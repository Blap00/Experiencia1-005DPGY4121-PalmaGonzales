import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NecAyuPageRoutingModule } from './nec-ayu-routing.module';

import { NecAyuPage } from './nec-ayu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NecAyuPageRoutingModule
  ],
  declarations: [NecAyuPage]
})
export class NecAyuPageModule {}
