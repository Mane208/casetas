import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactoTesoreroPageRoutingModule } from './contacto-tesorero-routing.module';

import { ContactoTesoreroPage } from './contacto-tesorero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactoTesoreroPageRoutingModule
  ],
  declarations: [ContactoTesoreroPage]
})
export class ContactoTesoreroPageModule {}
