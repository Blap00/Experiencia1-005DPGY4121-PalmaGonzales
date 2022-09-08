import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrproPageRoutingModule } from './registrpro-routing.module';

import { RegistrproPage } from './registrpro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrproPageRoutingModule
  ],
  declarations: [RegistrproPage]
})
export class RegistrproPageModule {}
