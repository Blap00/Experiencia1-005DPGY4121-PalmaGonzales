import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistraluPageRoutingModule } from './registralu-routing.module';

import { RegistraluPage } from './registralu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistraluPageRoutingModule
  ],
  declarations: [RegistraluPage]
})
export class RegistraluPageModule {}
