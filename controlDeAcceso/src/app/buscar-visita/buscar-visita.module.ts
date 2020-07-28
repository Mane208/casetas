import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarVisitaPageRoutingModule } from './buscar-visita-routing.module';

import { BuscarVisitaPage } from './buscar-visita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarVisitaPageRoutingModule
  ],
  declarations: [BuscarVisitaPage]
})
export class BuscarVisitaPageModule {}
