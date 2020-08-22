import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VersinaccessalidaPageRoutingModule } from './versinaccessalida-routing.module';

import { VersinaccessalidaPage } from './versinaccessalida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VersinaccessalidaPageRoutingModule
  ],
  declarations: [VersinaccessalidaPage]
})
export class VersinaccessalidaPageModule {}
