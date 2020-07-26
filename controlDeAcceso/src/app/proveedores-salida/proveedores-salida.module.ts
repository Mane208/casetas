import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProveedoresSalidaPageRoutingModule } from './proveedores-salida-routing.module';

import { ProveedoresSalidaPage } from './proveedores-salida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProveedoresSalidaPageRoutingModule
  ],
  declarations: [ProveedoresSalidaPage]
})
export class ProveedoresSalidaPageModule {}
