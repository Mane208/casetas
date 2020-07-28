import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinAccesoSalidasPageRoutingModule } from './sin-acceso-salidas-routing.module';

import { SinAccesoSalidasPage } from './sin-acceso-salidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinAccesoSalidasPageRoutingModule
  ],
  declarations: [SinAccesoSalidasPage]
})
export class SinAccesoSalidasPageModule {}
