import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesMedicosPageRoutingModule } from './mensajes-medicos-routing.module';

import { MensajesMedicosPage } from './mensajes-medicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesMedicosPageRoutingModule
  ],
  declarations: [MensajesMedicosPage]
})
export class MensajesMedicosPageModule {}
