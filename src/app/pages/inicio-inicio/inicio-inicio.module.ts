import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioInicioPageRoutingModule } from './inicio-inicio-routing.module';

import { InicioInicioPage } from './inicio-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioInicioPageRoutingModule
  ],
  declarations: [InicioInicioPage]
})
export class InicioInicioPageModule {}
