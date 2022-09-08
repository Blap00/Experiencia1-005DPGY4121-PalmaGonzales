import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ERRPageRoutingModule } from './err-routing.module';

import { ERRPage } from './err.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ERRPageRoutingModule
  ],
  declarations: [ERRPage]
})
export class ERRPageModule {}
