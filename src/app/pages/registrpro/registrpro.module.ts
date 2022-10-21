import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrproPageRoutingModule } from './registrpro-routing.module';

import { RegistrproPage } from './registrpro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrproPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrproPage]
})
export class RegistrproPageModule {}
