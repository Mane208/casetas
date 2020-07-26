import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactoCondominosPageRoutingModule } from './contacto-condominos-routing.module';

import { ContactoCondominosPage } from './contacto-condominos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactoCondominosPageRoutingModule
  ],
  declarations: [ContactoCondominosPage]
})
export class ContactoCondominosPageModule {}
