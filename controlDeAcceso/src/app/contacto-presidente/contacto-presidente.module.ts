import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactoPresidentePageRoutingModule } from './contacto-presidente-routing.module';

import { ContactoPresidentePage } from './contacto-presidente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactoPresidentePageRoutingModule
  ],
  declarations: [ContactoPresidentePage]
})
export class ContactoPresidentePageModule {}
