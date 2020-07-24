import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarvisitasPageRoutingModule } from './buscarvisitas-routing.module';

import { BuscarvisitasPage } from './buscarvisitas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarvisitasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BuscarvisitasPage]
})
export class BuscarvisitasPageModule {}
